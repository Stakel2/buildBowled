import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from 'react-bootstrap';
import FormikControl from "../FormikControl";

const PriceFilter = () => {

    const initialValues = {
        price: "",       
        minValue: "",       
        maxValue: "",       
      };

      
    const priceOption = [
        { key: "United State Dollar (USD)", value: "United State Dollar (USD)" },
        { key: "Australian Dollar (AUD)", value: "Australian Dollar (AUD)" },
        { key: "Indian Rupee (INR)", value: "Indian Rupee (INR)" },
    ];
      const validationSchema = Yup.object({

      })

      const onSubmit =(values)=> {
        console.log( 'values ===== >', values)
      }
  return (
        <Col>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="filter_input_style full-width">
                <Row>
                    <Col className='form-group mb-3' lg={12}>
                        <FormikControl
                            control="select"
                            name="price"
                            options={priceOption}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='form-group mb-3' lg={5}>
                        <FormikControl
                            control="input"
                            type="number"
                            name="minValue"
                            Placeholder="Min"                            
                        />
                    </Col>
                    <Col className='form-group text-center' lg={2}>to</Col>
                    <Col className='form-group mb-3' lg={5}>
                        <FormikControl
                            control="input"
                            type="number"
                            name="maxValue"
                            Placeholder="Man"                            
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className='text-end' lg={12}>
                        <Button type='submit'>
                            <span>Apply</span>
                        </Button>
                    </Col>
                </Row>
              </Form>                
              )}}         
        </Formik>     
        </Col>
  )
}

export default PriceFilter