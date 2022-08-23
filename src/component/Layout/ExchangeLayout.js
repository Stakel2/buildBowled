
import React from 'react';
import {HeaderExchange} from '../common/'

const ExchangeLayout = ({ Component, ...props }) => {
  return (
    <React.Fragment>
          <div fluid className="main_box">
            <HeaderExchange />
            <Component {...props} /> 
        </div>
    </React.Fragment>
  )
}

export default ExchangeLayout