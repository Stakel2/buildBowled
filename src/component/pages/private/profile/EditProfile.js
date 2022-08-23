import React, { useState, useEffect, useContext, useRef } from "react";
import Loader from "../../../common/Loader/index";
import {
  CardGallery,
  ArtCollectionInfo,
  Layout,
  SubHeaderProfile,
  LoaderAnimated,
  ModalCustom,
} from "../../../common";
import { Formik, Form, Field } from "formik";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import { Container, Row, Col, Button, input } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  userApiCallGet,
  userApiCallPatch,
  userApiCallPost,
} from "../../../../Axios/User";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";
import profile_pic from "../../../../assets/images/dummyProfile.jpg";
import "./ProfileStyle.scss";
import moment from "moment";
import { ValidateImage } from "../../../../utils/utils";
import DatePickerTest from "./DatePickerTest";

const EditProfile = () => {
  const cog = <FontAwesomeIcon icon={faCog} />;
  const [loading, setLoading] = useState(false);
  const [myProfile, setMyProfile] = useState({});
  const [selectedDate, setSelectedDate] = useState();
  const [selectedDay, setSelectedDay] = useState();
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [gender, setGender] = useState("male");
  const [endDate, setEndDate] = useState();
  const imageRef = useRef();
  const [profileImageFile, setProfileImageFile] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  let navigate = useNavigate();
  useEffect(() => {
    myProfileData();
  }, []);

  useEffect(() => {
    formatDate();
  }, [selectedDay, selectedMonth, selectedYear]);
  const initialValues = {
    name: myProfile ? myProfile?.userDetails?.fullname : "",
    email: myProfile ? myProfile?.userDetails?.email : "",
    gender: myProfile
      ? myProfile?.userDetails?.gender != null
        ? myProfile?.userDetails?.gender.toLowerCase()
        : "male"
      : "male",
    dob: myProfile ? myProfile?.userDetails?.dob : "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .nullable()
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Name "),

    // email: Yup.string().required("Required").nullable(),
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for Name "),
    // .email()
    // .required("Required")
    // .max("60", "Max 60 characters are allowed"),
    // dob:
    // const today = moment();
    // const disableFutureDt = current => {
    //   return current.isBefore(today)
    // }
  });
 
  function onSubmit(values) {
    console.log("values ------", values);
    let dob_ = selectedDate ? moment(selectedDate).format("yyyy-MM-DD") : "";
    const userDetails = {
      fullname: values.name,
      dob: dob_,
      gender: values.gender,
      profileImage: profileImageFile?.replace("blob:", ""),
    };
    let data = {
      userDetails,
    };
    // debugger;

    setLoading(true);
    userApiCallPatch("/profile", data, {}, "toastOn")
      .then((data) => {
        setLoading(false);
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
      });
    console.log("userDetails", userDetails);
  }

  console.log("SYD5", selectedDate);

  const myProfileData = () => {
    setLoading(true);
    userApiCallGet("/profile")
      .then((data) => {
        setLoading(false);
        if (Object.keys(data).length > 0) {
          setMyProfile(data.data);
          let dob = data.data.userDetails.dob;
          setProfileImageFile(data?.data?.userDetails?.profileImage);
          //dob ? setSelectedDate(new Date(dob)) : setSelectedDate();
          if (dob) {
            setSelectedDate(new Date(dob));
            setSelectedDay(moment(dob).format("DD"));
            setSelectedMonth(moment(dob).format("MMMM"));
            setSelectedYear(moment(dob).format("yyyy"));
          }
          var date = new Date();
          date.setFullYear(date.getFullYear() - 13);
          setEndDate(moment(date).format("yyyy-MM-DD"));
        }
      })
      .catch((error) => {
        setLoading(false);
        // setSelectedDate("");
        var date = new Date();
        date.setFullYear(date.getFullYear() - 13);
        setEndDate(moment(date).format("yyyy-MM-DD"));
      });
  };
  const onClickEdit = () => {
    // navigate("/user/profile");
    const { current } = imageRef;
    (current || { click: () => {} }).click();
  };
  const formatDate = () => {
    if (selectedDay && selectedMonth && selectedYear) {
      var d = new Date(`${selectedYear}-${selectedMonth}-${selectedDay}`);
      setSelectedDate(d);
    }
  };

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

  const handleChange = async (file) => {
    let ext = file.name.split(".")[1];
    ext = ext.toLowerCase();
    const blob = URL.createObjectURL(file);
    let formData = new FormData();
    formData.append("profileImage", file);
    setIsEdit(true);
    setProfileImageFile(blob);
    setLoading(true);
    userApiCallPost("/image", formData).then((resp) => {
      if (resp) {
        setLoading(false);
        let image_url = resp?.message?.location;
        setProfileImageFile(image_url);
      }
    });
  };

  return (
    <>
      <LoaderAnimated isLoading={loading} />
      <SubHeaderProfile
        profileimg={
          isEdit
            ? profileImageFile
            : myProfile?.userDetails?.profileImage ?? profile_pic
        }
        subtitle={
          myProfile?.userDetails?.bio ? myProfile?.userDetails?.bio : ""
        }
        kycDetails={myProfile?.kyc}
        socialInfo={myProfile?.socialInfo}
        onClickEdit={() => onClickEdit("Working!")}
        // onUpdateEdit=""
      ></SubHeaderProfile>

      <div className="profile_detail">
        <Container>
          <Col lg={10} md={12} className="mx-auto profile_wrapper no_bg">
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ values, setFieldValue, errors, isValid, dirty }) => {
                return (
                  <Form>
                    <Row>
                      <Col lg={6} md={12}>
                        <FormikControl
                          className="east_form_input"
                          control="input"
                          type="text"
                          label="Name"
                          placeholder="Mr. Sanjeev Thakur"
                          name="name"
                          value={values.name}
                          id="name"
                        />
                      </Col>
                      <Col lg={6} md={12}>
                        <FormikControl
                          className="east_form_input"
                          control="input"
                          type="email"
                          label="Email"
                          disabled
                          placeholder="bowled.user@gmail.com"
                          name="email"
                          value={values?.email}
                        />
                      </Col>
                      <Col lg={6} md={12} className="east_form_input">
                        <div className="confirm_gender row">
                          <div className="confirm_gndr">
                            <FormikControl
                              inputClassName="checkbox-tools"
                              inputClassNameOut="col-md-6"
                              redioCustomClass={"settingRadioStyleProfile"}
                              control="radio"
                              label="Gender"
                              type="radio"
                              name="gender"
                              options={[
                                { key: "male", value: "male" },
                                { key: "female", value: "female" },
                              ]}
                            />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={12} className="east_form_input">
                        <label className="form-label">Date of Birth</label>
                        <div className="date_format">
                          {endDate && (
                            <DropdownDate
                              name="dob"
                              selectedDate=""
                              endDate={endDate}
                              onDateChange={(date) => {
                                console.log(date);
                                // setSelectedDate(date);
                              }}
                              onDayChange={(day) => {
                                setSelectedDay(day);
                              }}
                              onMonthChange={(month) => {
                                console.log(month);
                                setSelectedMonth(month);
                              }}
                              onYearChange={(year) => {
                                console.log(year);
                                setSelectedYear(year);
                              }}
                              ids={{
                                year: "select-year",
                                month: "select-month",
                                day: "select-day",
                              }}
                              names={{
                                day: "day",
                                month: "month",
                                year: "year",
                              }}
                              defaultValues={{
                                day: selectedDay ? selectedDay : "Day",
                                month: selectedMonth ? selectedMonth : "Month",
                                year: selectedYear ? selectedYear : "Year",
                              }}
                            />
                          )}

                          <input
                            hidden
                            ref={imageRef}
                            type="file"
                            name="profileImage"
                            accept=".jpg, .jpeg, .png"
                            onChange={(e) => {
                              handleChange(e.target?.files[0]);
                            }}
                          />
                        </div>
                      </Col>
                      <Col lg={12} className="text-center mt-3">
                        <div className="register_btn">
                          <Link
                            to="/user/profile"
                            className="btn btn-primary profileLink"
                          >
                            Back
                          </Link>
                          <Button
                            className="btn btn-primary profileLink"
                            //  disabled={!(formik.isValid && formik.dirty)}
                            type="submit"
                            //  onClick={myProfileDataEdit}
                          >
                            Update
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                );
              }}
            </Formik>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default EditProfile;
