import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Row, Col, Button } from 'react-bootstrap';
import FormikControl from "../FormikControl";

const SearchBarFilter = () => {

    const initialValues = {
        searchFilter:'',
        startDate: null,
    }

    const validationSchema = Yup.object({

    })

    const onSubmit = (values) =>{
        console.log('You have searched', values)
        alert(`You have searched: ${values.searchFilter}`)

    }

  return (
    
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="filter_input_style ">
                    <Row>
                        <Col className='form-group mb-3 searchBar' >
                            <FormikControl
                                control="input"
                                inputClassName="inputSearch"
                                type="text"
                                name="searchFilter"
                                placeholder="Search NFT"
                            />
                        </Col>
                        <Col className='searchButton'>
                            <FormikControl
                                control="date"
                                type="text"
                                datePIckerStyle="inputDate"
                                name="startDate"
                                placeholder="Search NFT"
                            />
                        </Col>
                    </Row>
                </Form>
            )
          }}
          </Formik>  
  )
}

export default SearchBarFilter