'use client';
import React from 'react'
import style from './page.module.css'
import CustomButton from '@/components/CustomButton/CustomButton';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AnimalsForm from '@/components/AnimalsForm/AnimalsForm';
import { useDashboard } from './useDashboard';
import Alert from '@mui/material/Alert';
import OutlinedCard from '@/components/OutlineCard/OutlineCard';


const modal_style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DashboardPage = () => {

  const {
    ShowUpdateOrCreateAnimalModal,
    setShowUpdateOrCreateAnimalModal,
    deleteAnimal,
    AnimalsList,
    getAnimals,
    updateAnimal,
    AnimalSelected,
    setAnimalSelected
  } = useDashboard()


  return (
    <div className={style.DashboardContainer} >
      
      <div className={style.DashboardContainerForm} >
        <div className={style.DashboardContainerFormButton} >
          <CustomButton 
            text='Create animal'
            onClick={() => {
              setShowUpdateOrCreateAnimalModal(true)
              setAnimalSelected(null)
            }}
            className={style.DashboardContainerFormButton_Button}
          />
        </div>

        {AnimalsList && AnimalsList?.length ? 
          <div className={style.DashboardContainerCards} >
            {AnimalsList.map((animal, index) => (
              <OutlinedCard
                {...animal}
                key={index}
                deleteAnimal={() => deleteAnimal(animal.id)}
                updateAnimal={(animal) => updateAnimal(animal)}
              />
            ))}
          </div>
        :
          <Alert severity="info"> Currently, you don't have animals </Alert>
        }
      </div>

      <Modal
        open={ShowUpdateOrCreateAnimalModal}
        onClose={() => setShowUpdateOrCreateAnimalModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modal_style}>
          <AnimalsForm 
            is_edit={AnimalSelected ? true : false}
            getAnimals={getAnimals}
            animalData={AnimalSelected}
          />
        </Box>
      </Modal>

    </div>
  );
}

export default DashboardPage;