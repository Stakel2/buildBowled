import React from 'react'
import FormikControl from '../../../common/FormikControl'
import * as Yup from 'yup'
import {Formik, Form, validateYupSchema} from 'formik'
import { ModalCustom } from '../../../common'
import qr_code from '../../../../assets/images/qr_code.png'
import { Row, Col, Container } from 'react-bootstrap'
import paymentWithCard from '../../../../assets/images/payment_icon_card.svg'
import paymentWithpp from '../../../../assets/images/payment_icon_paypal.svg'

const ModalAddAssetWithCard = (props) => {

    const ChooseCurrencyList = [
        {key:'Currency/Crypto' , value:''},
        {key:'Option 1' , value:''},
        {key:'Option 2' , value:''},
    ]

    const paymentCurrencyCurrencyList = [
        {key:'Currency' , value:''},
        {key:'Option 1' , value:''},
        {key:'Option 2' , value:''},
    ]

    const initialValues = {
        chooseCurrency: "",
        youAmount: "",
        paymentCurrency: "",
      };
      const validationSchema = Yup.object({
        chooseCurrency: Yup.string().required('Required'),
        youAmount: Yup.string().required('Required'),
        paymentCurrency: Yup.string().required('Required')
      });
     
      function onSubmit(values) {
          console.log('Add Asset', values)
      }

    return (
        <ModalCustom 
            title={"Add Asset"}
            {...props}                             
        >
            <Col className='m-auto first_column_style' lg={6}>
           <Row>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                        
                        {(formik) => {
                            return (
                                <Form>
                                    <FormikControl 
                                        className="selectStyle"
                                        control="select"
                                        label="Please chose the currency/crypto you want to add"
                                        options={ChooseCurrencyList}
                                        name="chooseCurrency"
                                    />
                                    <FormikControl 
                                        className="east_form_input"
                                        control="input"
                                        label="Please Enter your Amount"
                                        type="text"
                                        name="youAmount"
                                    />
                                    <FormikControl 
                                        className="selectStyle"
                                        control="select"
                                        label="Please Enter your Payment Currency"
                                        options={paymentCurrencyCurrencyList}
                                        name="paymentCurrency"
                                    />
                                    <Col className='text-center paymentRequired_sectoin'>
                                        <p>Payment required in chosen current</p>
                                        <h3>1000.00 USD</h3>
                                    </Col>
                                </Form>
                            )}
                        }                        
                    </Formik>
           </Row>
           </Col>
           <Col lg={6} className="text-center m-auto paymentMethod_block">
               <Col className='text-center '>
                    <h2 className='paymentMethod_title'>Payment Method</h2>
                    <ul className='paymentMethod'>
                        <li>
                            <a href="javascript:void(0)">
                                <img src={paymentWithCard} />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src={paymentWithpp} />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Col>
                   
            
           
        </ModalCustom >
    )
}

export default ModalAddAssetWithCard
