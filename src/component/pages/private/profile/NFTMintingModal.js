import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import { ModalCustom } from '../../../common'
import { Formik, Form } from "formik";
import FormikControl from "../../../common/FormikControl";
import * as Yup from "yup";
import icon_fileupload from '../../../../assets/images/icon_fileupload.svg'

const NFTMintingModal = (props) => {
    const initialValues = {
        uploadFileInput: "",
        collectionNameInput: "",
        categoriesInput: "",
        collectionNameInput: "",
        priceInput: "",
        nftNameInput: "",
        descInput: "",
        settingTypeInput: "",
        offeredOption: "",
        currencyInput: "",       
      };

      const validationSchema = Yup.object({
        uploadFileInput: Yup.string().required('Required'),
        collectionNameInput: Yup.string().required('Required'),
        categoriesInput: Yup.string().required('Required'),
        collectionNameInput: Yup.string().required('Required'),
        priceInput: Yup.string().required('Required'),
        nftNameInput: Yup.string().required('Required'),
        descInput: Yup.string().required('Required'),
        settingTypeInput: Yup.string().required('Required'),
        offeredOption: Yup.string().required('Required'),
        currencyInput: Yup.string().required('Required')
      })

      const onSubmit = (values) => {
          alert('sdfsd')
        console.log("Form Values ====", values )
      }


      const collectionNameList = [
          {key:'Collection Name', value:''},
          {key:'Option 1', value:'Option 1'},
          {key:'Option 2', value:'Option 2'},
          {key:'Option 3', value:'Option 3'}
      ]
      const categoryList = [
          {key:'Categories', value:''},
          {key:'Option 1', value:'Option 1'},
          {key:'Option 2', value:'Option 2'},
          {key:'Option 3', value:'Option 3'}
      ]
      const currencyList = [
          {key:'Currency', value:''},
          {key:'Option 1', value:'Option 1'},
          {key:'Option 2', value:'Option 2'},
          {key:'Option 3', value:'Option 3'}
      ]

      const sellingType = [
        { key: 'On Sale', value: 'On Sale' },
        { key: 'Auction', value: 'Auction' }
      ]


    return (
        <ModalCustom 
            title={"NFT Minting"}
            {...props} 
            customClass="nft_minting_modal"                            
        >
           <Container className='nft_minting_form'>
               <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
               >
                   {
                       (formik) => (
                           <Form>
                               <Row>
                                   <Col xs={12} lg={6} className='nft_minting_form_left'>
                                    
                                        <div className='east_form_input custom_label_for_nft'>
                                            <label className='form-label'>Image/Video Upload</label>
                                        </div>
                                        <div className='upload_file_formint'>
                                            <FormikControl 
                                                className="uploadFile"
                                                control="input"
                                                type="file"                                    
                                                name="uploadFileInput"
                                            />
                                            <img src={icon_fileupload} />
                                        </div>
                                         <FormikControl 
                                            className="selectStyle"
                                            control="select"
                                            options={collectionNameList}
                                            name="collectionNameInput"
                                        />
                                        <FormikControl 
                                            className="selectStyle"
                                            control="select"
                                            options={categoryList}
                                            name="categoriesInput"
                                        />
                                        <FormikControl 
                                            className="east_form_input"
                                            control="input"                                           
                                            type="text"
                                            placeholder="Price"                                    
                                            name="priceInput"
                                        />
                                    </Col>
                                    <Col xs={12} lg={6} className='nft_minting_form_right'>
                                        <FormikControl 
                                            className="east_form_input"
                                            control="input"                                           
                                            type="text"
                                            label="NFT Name"                                    
                                            name="nftNameInput"
                                        />
                                        <FormikControl 
                                            className="east_form_textarea"
                                            control="textarea"                                           
                                            type="text"
                                            label="Description"                                    
                                            name="descInput"
                                        />
                                        <FormikControl 
                                            className="sellingType_radioDesign"
                                            redioCustomClass={"settingRadioStyle"}
                                            control="radio" 
                                            label="Selling Type"                                          
                                            type="radio"                                                                               
                                            name="settingTypeInput"
                                            options={sellingType}                                            
                                        />
                                         <FormikControl 
                                            className="east_form_input"
                                            control="input"                                           
                                            type="text"
                                            placeholder="Not Offered yet"                                    
                                            name="offeredOption"
                                        />
                                        <FormikControl 
                                            className="selectStyle"
                                            control="select"
                                            options={currencyList}
                                            name="currencyInput"
                                        />
                                    </Col>
                               </Row>
                               <Row>
                                   <Col className='m-auto button_mint_block' lg={5}>
                                        <Button  
                                            type='submit'
                                            disabled={!(formik.isValid)}
                                            className='large'>Mint</Button> 
                                   </Col>
                               </Row>
                           </Form>
                       )
                   }
               </Formik>
            </Container>

        </ModalCustom >
    )
}

export default NFTMintingModal
