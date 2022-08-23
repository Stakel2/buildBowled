import React, {useState} from 'react'
import { Layout, AddSocialLinks, HeadingEditPage } from '../../../common'
import './NftGuideStyle.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormikControl from '../../../common/FormikControl'
import * as Yup from 'yup'
import {Formik, Form} from 'formik'


const NftGuide = () => {

    return (
        <Layout
            innerClass="main_layout"
        >
           <HeadingEditPage 
            title={"NFT Guide"}
           />
             <Container className="mianLayout_inside">                
                    <h2>Coming Soon!</h2>
            </Container>
        </Layout>
    );
}

export default NftGuide
