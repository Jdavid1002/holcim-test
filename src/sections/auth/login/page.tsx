'use client';

import React from 'react'
import Image from 'next/image';
// import loginImage from '../../../public/login-poster.png'
import style from './page.module.css'
import CustomButton from '@/components/CustomButton/CustomButton';
import CustomInput from '@/components/CustomInput/CustomInput';
import Link from 'next/link';
import { useLogin } from './useLogin';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export interface IFormLoginInputs {
  email : string
  password : string
}

const LoginPage = () => {

  const {onLogin} = useLogin()

  return (
    <div className={`${style.loginContainer} bg-primary`} >
      <div className={style.loginContainerForm} >
        <div className={style.loginContainerFormText}>
          
          <div>
            <h1 className='text-primary' > Login </h1>
            <br />
            <p>Please enter your credentials to continue</p>
            <p>Dont have an account? <Link href="/register" className='text-secondary' >Register</Link></p>
          </div>

          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors : any = {};
              if (!values.email) {
                errors.email = 'Email required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid user mail.';
              }

              if(!values.password){
                errors.password = 'Password required.'
              }
              return errors;
            }}
            onSubmit={(values) => {
              onLogin(values)
            }}
          >
          {({ isSubmitting }) => (
            <Form className={style.loginContainerFormTextInputs} >
              <CustomInput placeholder='Correo electronico' type="email" name="email" />
              <CustomInput placeholder='***********' type="password" name="password" />
              <CustomButton type="submit" disabled={isSubmitting} text='Inicia Sesión' />
              <div className={style.lineBig} />
              <div className={style.lineLittle} />
            </Form>
          )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
 
export default LoginPage;