import { IAnimalData } from "@/components/AnimalsForm/AnimalsForm"
import { useAnimalsForm } from "@/components/AnimalsForm/useAnimalsForm"
import { useEffect, useState } from "react"


export interface IUseDashboard {

}

export const useDashboard = () => {

  const [AnimalsList, setAnimalsList] = useState <IAnimalData[]>([])
  const [ShowUpdateOrCreateAnimalModal, setShowUpdateOrCreateAnimalModal] = useState<boolean>(false)
  const [AnimalSelected, setAnimalSelected] = useState <IAnimalData | null>(null)

  const getAnimals = async () => {
    const animals = await readAnimals()
    setAnimalsList(animals)
    setShowUpdateOrCreateAnimalModal(false)
  }

  const  { deleteAnimal, readAnimals } = useAnimalsForm({
    getAnimals: getAnimals,
  })

  useEffect(() => {
    getAnimals()
  }, [])

  const updateAnimal = (animal : IAnimalData) => {
    setAnimalSelected(animal)
    setShowUpdateOrCreateAnimalModal(true)
  }

  return {
    ShowUpdateOrCreateAnimalModal,
    setShowUpdateOrCreateAnimalModal,
    deleteAnimal,
    AnimalsList,
    getAnimals,
    updateAnimal,
    AnimalSelected,
    setAnimalSelected
  }
}