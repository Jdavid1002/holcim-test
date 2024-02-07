import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { CardContent } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IAnimalData } from '../AnimalsForm/AnimalsForm';

const AnimalCard = (
  props: IAnimalData
    &
  {
    deleteAnimal: (id: string) => void,
    updateAnimal: (animal: IAnimalData) => void
  }
) => {

  return (
    <div>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.specie}
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.race}
        </Typography>
        <Typography variant="body2">
          Size : {props.size}
          <br />
          Weight : {props.weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => props.updateAnimal(props)}
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
        </Button>
        <Button
          size="small"
          onClick={() => props.deleteAnimal(props.id)}
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
          </svg>
        </Button>
      </CardActions>
    </div>
  )
}

function OutlinedCard(
  props: IAnimalData
    &
  {
    deleteAnimal: (id: string) => void,
    updateAnimal: (animal: IAnimalData) => void
  }
) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 275 }}>
      <Card variant="outlined" >
        <AnimalCard
          {...props}
        />
      </Card>
    </Box>
  );
}

export default OutlinedCard