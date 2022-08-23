import React from 'react';
import { Footer, AdminHeader } from '../common'

const AdminLayout = ({ Component, ...props }) => {
  return (
    <React.Fragment>
        <div className='mainArea'>
            <AdminHeader />
            <Component {...props} /> 
        </div>      
        <Footer />        
    </React.Fragment>
  )
}

export default AdminLayout