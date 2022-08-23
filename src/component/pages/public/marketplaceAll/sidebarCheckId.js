import React, { useState} from 'react'
import { Form } from 'react-bootstrap'

const SidebarCheckId = (props) => {
    const [kanika, setKanika] = useState(false)
    console.log("Kanika Here:", kanika);
  return (
    <ul className="cm_items">
        {props.filterList.map((item) => (
            <li className={`cm_item ${props.listClass}`} key={`${item.id}`}>
                {item.logo &&
                <span className='icon_image_flag'>
                    <img src={item.logo} alt={props.label} />
                </span>
                }
                <Form.Check 
                    // label={item.label}
                    label={item.country_name}
                    id={item.id}
                    onChange= {(e) => setKanika(!kanika)}
                    // label={`${item.label} ${item.totalPlayer ? item.totalPlayer : '' }`}
                />
                
            </li>
        ))}
    </ul>
  )
  
}

export default SidebarCheckId