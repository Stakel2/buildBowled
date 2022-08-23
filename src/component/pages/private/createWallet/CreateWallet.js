import React, {useState} from 'react'
import { Layout, AddSocialLinks, HeadingEditPage } from '../../../common'
import './CreateWalletStyle.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormikControl from '../../../common/FormikControl'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'


const CreateWallet = () => {
   

    



    return (
        <Layout
            innerClass="editProfile_layout"
        >
           <HeadingEditPage 
            title={"CREATE RUBIX WALLET"}
           />
            <Container className="editContainerStyle">
                
                        
                   
            </Container>
        </Layout>
    );
}

export default CreateWallet
