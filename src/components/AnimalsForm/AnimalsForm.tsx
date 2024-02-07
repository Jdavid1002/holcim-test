'use client';

import React from 'react';
import { Formik, Form} from 'formik';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { useAnimalsForm } from './useAnimalsForm';
import style from './AnimalsForm.module.css';


export interface IAnimalData {
  id : string
  specie : string
  name : string
  race : string 
  size : string 
  weight : string 
}

export interface IAnimalsForm {
  is_edit ? : boolean
  animalData ?: IAnimalData | null
  getAnimals ?: () => void
  setShowUpdateOrCreateAnimalModal ? : (show : boolean) => void
}

const AnimalsForm = (props: IAnimalsForm) => {

  const { createAnimal , updateAnimal } = useAnimalsForm(props)

  return (
    <div>
      <h4> {props?.is_edit ? 'Edit' : 'Create'}  an animal. </h4>
      <Formik
        initialValues={{
          specie: props?.animalData?.specie ||  '',
          name: props?.animalData?.name || '',
          race: props?.animalData?.race || '',
          size: props?.animalData?.size || '',
          weight: props?.animalData?.weight || '',
          id : props?.animalData?.id || ''
        }}
        
        validate={values => {
          const errors: any = {};

          if (!values.specie) {
            errors.specie = 'Specie is required';
          }
      
          if (!values.name) {
            errors.name = 'Name is required';
          }
      
          if (!values.race) {
            errors.race = 'Race is required';
          }
      
          if (!values.size) {
            errors.size = 'Size is required';
          }
      
          if (!values.weight) {
            errors.weight = 'Weight is required';
          } else if (isNaN(Number(values.weight))) {
            errors.weight = 'Weight must be a number';
          }

          return errors
        }}

        onSubmit={(values) => {
          if(props.is_edit && props?.animalData?.id) return updateAnimal(props?.animalData?.id , values)
          createAnimal(values)
        }}
      >
      {({ isSubmitting, values }) => (
        <Form className={style.AnimalsFormContainer} >
          <CustomInput value={values.specie} placeholder='Specie' type="text" name="specie" />
          <CustomInput value={values.name} placeholder='Name' type="text" name="name" />
          <CustomInput value={values.race} placeholder='Race' type="text" name="race" />
          <CustomInput value={values.size} placeholder='Size in cm' type="text" name="size" />
          <CustomInput value={values.weight} placeholder='Weight in grams' type="text" name="weight" />
          <CustomButton type="submit" disabled={isSubmitting} text={props?.is_edit ? "Update Animal" : "Create Animal"} />
        </Form>
      )}
      </Formik>
    </div>
  );
}

export default AnimalsForm;