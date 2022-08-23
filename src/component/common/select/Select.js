import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../textError/TextError'

function Select (props) {
  const { label,signUpOptions,placeholder, className, name, options, ...rest } = props
  return (
    <div className={className}>
      {label && <label className="form-label" htmlFor={name}>{label}</label> }
      <Field  className='form-control' as='select' id={name} name={name} {...rest}>
        {!signUpOptions?options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        }):<>
        <option style={{color:'red'}} value="" disabled hidden>{placeholder}</option>
       { options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.art_type}
            </option>
          )
        })}
 </>}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select