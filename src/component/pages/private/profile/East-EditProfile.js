import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  AddSocialLinks,
  HeadingEditPage,
  LoaderAnimated,
} from "../../../common";
import "././EditProfileStyle.scss";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import {
  userApiCallGet,
  userApiCallPatch,
  userApiCallPost,
} from "../../../../Axios/User";
import { context } from "../../../../Context/MainContext";
import { ValidateImage } from "../../../../utils/utils";
import { toasts } from "../../../common/Toast/Toast";
import FileUpload from "../../../common/FileUpload/FileUpload";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [coverImagefile, setCoverImagefile] = useState(null);
  const [profileImagefile, setProfileImagefile] = useState(null);
  const { loginState, loginDispatch } = useContext(context);
  const [loading, setLoading] = useState(false);
  const [dyPro, setDyPro] = useState([]);
  const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];

  useEffect(() => {
    if (Object.keys(userDetails).length > 0) {
      setProfileImagefile(userDetails?.profileImage);
      setCoverImagefile(userDetails?.coverImage);
    }
  }, [userDetails]);

  useEffect(() => {
    setInitialValues();
  }, [JSON.stringify(profileData)]);

  const intValue = {};

  const setInitialValues = () => {
    let keyz = [];
    // profileData?.socialInfo && profileData?.socialInfo.map((ddt, indx) => {});
    // console.log("new added keys : ", keyz);
    setDyPro(keyz);
  };

  useEffect(() => {
    if (loginState) {
      getProfile();
    }
  }, [loginState]);

  const getProfile = () => {
    userApiCallGet("/profile").then((resp) => {
      if (Object.keys(resp).length > 0) {
        setProfileData(resp?.data);
        setUserDetails(resp?.data?.userDetails);
      }
    });
  };

  const handleChange = async (file, img_type, setFieldValue) => {
    let height;
    let width;
    let isImageValid = false;
    let ext = file.name.split(".")[1];
    ext = ext.toLowerCase();
    if (ext === "jpg" || ext === "jpeg" || ext === "png" || ext === "gif") {
      const blob = URL.createObjectURL(file);
      if (img_type === "profileImage") {
        height = 331;
        width = 331;
        isImageValid = await ValidateImage({
          event: blob,
          wid: height,
          hei: width,
        });

        // if (isImageValid) {
        let formData = new FormData();
        formData.append("profileImage", file);
        userApiCallPost("/image", formData).then((resp) => {
          if (resp) {
            let image_url = resp?.message?.location;
            if (img_type === "profileImage") {
              setProfileImagefile(image_url);
            } else if (img_type === "coverImage") {
              setCoverImagefile(image_url);
            }
          }
        });
        // }
      } else {
        height = 726;
        width = 1920;
        isImageValid = await ValidateImage({
          event: blob,
          wid: width,
          hei: height,
        });

        // if (isImageValid) {
        let formData = new FormData();
        formData.append("coverImage", file);
        userApiCallPost("/image", formData).then((resp) => {
          if (resp) {
            let image_url = resp?.message?.location;
            if (img_type === "profileImage") {
              setProfileImagefile(image_url);
            } else if (img_type === "coverImage") {
              setCoverImagefile(image_url);
            }
          }
        });
        // }
      }
      // if (!isImageValid) {
      //   if (img_type === "coverImage") {
      //     document.getElementById("coverImage").value = null;
      //     setFieldValue("coverPic", null);
      //   } else {
      //     document.getElementById("profileImage").value = null;
      //     setFieldValue("profilePic", null);
      //   }
      //   return toasts.error(
      //     `Please add a valid dimension image of width: ${
      //       +width === 331 ? "330" : width
      //     }px & Height: ${+height === 331 ? "330" : height}px`
      //   );
      // }
    } else {
      if (img_type === "coverImage") {
        document.getElementById("coverImage").value = null;
        setFieldValue("coverPic", null);
      } else {
        document.getElementById("profileImage").value = null;
        setFieldValue("profilePic", null);
      }
      return toasts.info(
        "Please upload a valid image format (.jpg, .jpeg, .png, .gif)"
      );
    }
  };

  const handleProfileImageChange = (profileImagefile) => {
    let formData = new FormData();
    formData.append("profileImage", coverImagefile);
    userApiCallPost("/image", formData).then((resp) => {
      if (resp) {
        let image_url = resp.data?.message?.location;
        setProfileImagefile(image_url);
      }
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    userName: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),

    // Website: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // Discord: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // Youtube: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // Facebook: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // Twitch: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // TikTok: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
    // Snapchat: Yup.string()
    //   .notRequired()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct web url!"
    //   ),
  });

  const onSubmit = (values) => {
    // setLoading(true);

    delete values["profilePic"];
    delete values["coverPic"];

    let userDetail = {
      fullname: values.name,
      notification_email: values.email,
      username: values.userName,
      bio: values.enterBio,
      profileImage: profileImagefile,
      coverImage: coverImagefile,
    };

    let social = [];
    profileData?.socialInfo.map((data, index) => {
      for (const property in values) {
        if (data.heading === property) {
          let ss = {
            socialId: data.socialId,
            icon: data.icon,
            heading: data.heading,
            subheading: data.subheading,
            serialNo: data.serialNo,
            usermetaId: data.usermetaId,
            value: values[property],
          };
          social.push(ss);
        }
      }
    });

    let finalData = {
      userDetails: userDetail,
      socialInfo: social,
    };
    userApiCallPatch("profile", finalData, {}, "toastOn")
      .then((ress) => {
        setLoading(false);
        if (ress) {
          navigate(`/user/profile`);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const chanageValues = (data, index) => {
    let arr = [...profileData.socialInfo];
    arr.forEach((element, i) => {
      if (i === index) {
        element.value = data;
      }
    });
    setProfileData({
      socialInfo: arr,
    });
  };
  return (
    <Layout innerClass="editProfile_layout">
      <LoaderAnimated isLoading={loading} />

      <Container className="editContainerStyle">
        {/* {Object.keys(userDetails).length > 0 && ( */}
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: userDetails ? userDetails?.fullname != "null"? userDetails?.fullname: "" : "",
            userName: userDetails ? userDetails?.username : "",
            email: userDetails ? userDetails?.notification_email : "",
            enterBio: userDetails ? userDetails?.bio : "",
            Website: userDetails ? userDetails?.Website : "",
            profile: dyPro,
            profilePic: "",
            coverPic: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values, setFieldValue, errors, isValid, dirty }) => {
            return (
              <Form>
                <Row>
                  <Col sm={12} lg={6}>
                    <p className="label_left_text_style">Enter your detail</p>
                  </Col>
                  <Col sm={12} lg={6}>
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="Name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={(e) => setFieldValue("name", e.target.value)}
                    />
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="User Name"
                      type="text"
                      name="userName"
                      value={values.userName}
                      onChange={(e) =>
                        setFieldValue("userName", e.target.value)
                      }
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <p className="label_left_text_style">
                      Receive Email Notification
                    </p>
                  </Col>
                  <Col sm={12} lg={6}>
                    <FormikControl
                      className="east_form_input"
                      control="input"
                      label="Email"
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={(e) => setFieldValue("email", e.target.value)}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <p className="label_left_text_style">Add a short bio</p>
                  </Col>
                  <Col sm={12} lg={6}>
                    <FormikControl
                      className="east_form_textarea"
                      control="textarea"
                      label="Enter a Bio"
                      type="text"
                      name="enterBio"
                      maxLength={500}
                      value={values.enterBio ? values.enterBio : ""}
                      onChange={(e) =>
                        setFieldValue("enterBio", e.target.value)
                      }
                    />
                  </Col>
                </Row>

                <Row style={{ marginBottom: "25px" }}>
                  <Col sm={12} lg={6}>
                    <p className="label_left_text_style">
                      Upload a Profile image
                    </p>
                  </Col>
                  <Col sm={12} lg={6}>
                    {profileImagefile ? (
                      <div className="uploadedImg">
                        <span
                          className="close_img"
                          onClick={() => {
                            setFieldValue("profilePic", null);
                            setProfileImagefile(null);
                          }}
                        >
                          X
                        </span>
                        <img id="profileImage" src={profileImagefile} alt="" />
                      </div>
                    ) : (
                      <>
                        <FileUpload
                          className="uploadBox"
                          id="profileImage"
                          onChange={(e) => {
                            setFieldValue("profilePic", e.target?.files[0]);
                            handleChange(
                              e.target?.files[0],
                              "profileImage",
                              setFieldValue
                            );
                          }}
                          accept="image/png, image/gif, image/jpeg , image/jpg"
                        >
                          <span> Browse image(Jpeg, Jpg, Png, Gif)</span>
                        </FileUpload>
                        {/* <p className="msg_style">
                            * Profile image specifications (width:330px, height:
                            330px){" "}
                          </p> */}
                        {/* <p>
                            {profileImagefile
                              ? `File name: ${profileImagefile.name}`
                              : "no files uploaded yet"}
                          </p> */}
                      </>
                    )}
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} lg={6}>
                    <p className="label_left_text_style">
                      Upload a cover image
                    </p>
                  </Col>
                  <Col sm={12} lg={6}>
                    {coverImagefile ? (
                      <div className="uploadedImg">
                        <span
                          className="close_img"
                          onClick={() => {
                            setFieldValue("coverPic", null);
                            setCoverImagefile(null);
                          }}
                        >
                          X
                        </span>
                        <img src={coverImagefile} alt="" />
                      </div>
                    ) : (
                      <>
                        <FileUpload
                          className="uploadBox"
                          id="coverImage"
                          onChange={(e) => {
                            setFieldValue("coverPic", e.target?.files[0]);
                            handleChange(
                              e.target?.files[0],
                              "coverImage",
                              setFieldValue
                            );
                          }}
                          accept="image/png, image/gif, image/jpeg , image/jpg"
                        >
                          <span> Browse image(Jpeg, Jpg, Png, Gif)</span>
                        </FileUpload>
                        {/* <p className="msg_style">
                            * Cover image specifications (width:1920px, height:
                            726px){" "}
                          </p> */}
                      </>
                    )}
                  </Col>
                </Row>
                {/* <Row>
                    <Col>
                      <p className="label_left_text_style">
                        Verify your profile
                      </p>
                    </Col>
                    <Col>
                      <Button
                        className="large"
                        style={{ marginBottom: "58px" }}
                      >
                        Connect Twitter
                      </Button>
                      <Button className="large">Connect Instagram</Button>
                    </Col>
                  </Row> */}

                <Row>
                  <Col sm={12} lg={6} className="addLinkHeading">
                    <p className="label_left_text_style">
                      Add links to your social media profiles
                    </p>
                  </Col>
                </Row>
                <Row>
                  {/* <FieldArray name="tickets"> */}
                  {profileData?.socialInfo &&
                    profileData?.socialInfo.map((data, index) => {
                      {
                        // console.log("datadatadata ", data);
                      }
                      return (
                        <Col lg={16} key={index}>
                          <AddSocialLinks
                            icon={data?.icon}
                            title={data?.heading}
                            // rightText={data?.subheading}
                          >
                            <FormikControl
                              className="social_link_input"
                              control="input"
                              type="text"
                              placeholder="Website URL"
                              name={data?.heading}
                              value={data?.value}
                              onChange={(e) => {
                                chanageValues(e.target.value, index);
                                setFieldValue(
                                  `${data.heading}`,
                                  e.target.value
                                );
                              }}
                            />
                          </AddSocialLinks>
                        </Col>
                      );
                    })}
                  {/* </FieldArray> */}

                  {/* <FieldArray
                      name="friends"
                      render={(arrayHelpers) => (
                        <div>
                          {values.profile &&
                            values.profile.length > 0 &&
                            values.profile.map((friend, index) => (
                              <div key={index}>
                                <Field name={friend} value={friend} />
                              </div>
                            ))}
                        </div>
                      )}
                    /> */}
                </Row>
                <Col lg={6} className="m-auto edit_profile_btnStyle">
                  <Button
                    disabled={!(isValid && dirty)}
                    type="submit"
                    className="large"
                  >
                    SAVE CHANGES
                  </Button>
                </Col>
              </Form>
            );
          }}
        </Formik>
        {/* )} */}
      </Container>
    </Layout>
  );
};

export default EditProfile;
