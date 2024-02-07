'use client';

import React from 'react'
import Image from 'next/image';
import { useRegister } from './useRegister';
import style from './page.module.css';
import CustomButton from '@/components/CustomButton/CustomButton';
import CustomInput from '@/components/CustomInput/CustomInput';
import Link from 'next/link';
import { Formik, Form} from 'formik';

export interface IFormLoginInputs {
  name : string
  email : string
  confirm_email : string
  password : string
  slug_rol : string
}

const initialValues = {
  email: '',
  confirm_email: '',
  name: '',
  password: '',
  slug_rol: ''
};

const RegisterPage = () => {

  const { onRegister } = useRegister()

  return (
    <div className={`${style.loginContainer} bg-primary`} >
      <div className={style.loginContainerForm} >
        
        <div className={style.loginContainerFormText}>
          
          <div>
            <h1 className='text-primary' > Register </h1>
            <br />
            <p>Please enter your credentials to continue</p>
            <p>have an account? <Link href="/auth/login" className='text-secondary' > Sign In </Link></p>
          </div>

          <Formik
            initialValues={initialValues}
            validate={values => {
              const errors : any = {};
        
              if (!values.email) {
                errors.email = 'Email is required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
        
              if (!values.confirm_email) {
                errors.confirm_email = 'Confirm email is required';
              } else if (values.email !== values.confirm_email) {
                errors.confirm_email = 'Emails do not match';
              }
        
              if (!values.name) {
                errors.name = 'Name is required';
              }
        
              if (!values.password) {
                errors.password = 'Password is required';
              } else if (values.password.length < 8) {
                errors.password = 'Password must be at least 8 characters long';
              }
        
              // You can add more validations as needed for other fields
        
              return errors;
            }}
            onSubmit={(values) => {
              onRegister(values);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={style.loginContainerFormTextInputs}>
                <CustomInput 
                  placeholder='Personal email' 
                  type="email" 
                  name="email" 
                  label='Email *'
                />
                <CustomInput 
                  placeholder='Confirm personal email' 
                  type="email" 
                  name="confirm_email" 
                  label='Confirm your email *'
                />
                <CustomInput 
                  placeholder='Stan Smith' 
                  type="text" 
                  name="name" 
                  label='Full name*'
                />
                <CustomInput 
                  placeholder='*********' 
                  type="password" 
                  name="password" 
                  label='Password *'
                />
                <CustomButton type="submit" disabled={isSubmitting} text='Register Now' />  
              </Form>
            )}
          </Formik>
        </div>

        <Image 
          src='https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=800'
          className={style.imageResponsive}
          alt='Login Image'
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
 
export default RegisterPage;