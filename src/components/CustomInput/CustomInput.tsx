import React from 'react'
import style from './CustomInput.module.css'
import { Field, ErrorMessage } from 'formik';

export interface ICustomInput {
  type : 'password' | 'email' | 'text' | 'number'
  onChange ?: (e : React.ChangeEvent<HTMLInputElement>) => void
  value ?: string
  defaultValue ?: string
  name : string
  placeholder ?: string
  label ? : string
}

const CustomInput = (props : ICustomInput) => {
  return (
    <div className={style?.CustomInputContainer} >
      <label> {props?.label} </label>
      <Field 
        type={props?.type} 
        name={props?.name}
        value={props?.value}
        defaultValue={props?.defaultValue}
        className={style?.CustomInput}
        placeholder={props?.placeholder}
      />
      <ErrorMessage 
        name={props?.name}
        component="div"
        className={style.CustomInputErrors}
      />
    </div>
  );
}
 
export default CustomInput;