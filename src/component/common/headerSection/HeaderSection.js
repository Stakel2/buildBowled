import React from 'react'
import { Link } from 'react-router-dom';
import './HeaderSectionStyle.scss'

const HeaderSection = (props) => {
  const {title, subtitle, link, buttonText } = props;
  return (
    <div className={`headerSectionStyle ${props.mtnew}`}>
        <div className='hs_left'>
            {title && <h2 className='titleStyle'>{title}</h2>}
            <h3 className='subtitleStyle'>{subtitle}</h3>
        </div>
        {buttonText &&
        (<div className='hs_right'>
            <Link className='buttontextStyle' to={link}>{buttonText}</Link>
        </div>
        )
        }
    </div>
  )
}
export {HeaderSection}