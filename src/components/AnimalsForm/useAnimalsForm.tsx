import { endpoints, http } from "@/utils/http";
import { IAnimalData, IAnimalsForm } from "./AnimalsForm";
import { useAppSelector } from "@/redux/hooks";

export const useAnimalsForm = (props : IAnimalsForm | null) => {

  const user_id = useAppSelector((state) => state.userSlice.id)

  // Función para leer animales
  const readAnimals = async () => {
    try {
      const response = await http({
        url: endpoints.animals.list.url,
        method: endpoints.animals.list.method,
        data : null
      });
      return response;
    } catch (error) {
      console.error('Error al leer animales:', error);
      throw new Error('Error al leer animales');
    }
  };

  const createAnimal = async (animalData : IAnimalData | null) => {
    try {
      const response = await http({
        url: endpoints.animals.create.url,
        method: endpoints.animals.create.method,
        data: {
          ...animalData,
          id : new Date().toISOString() + Math.floor(Math.random() * 1000).toString(),
          user_id : user_id
        },
      });

      if(props?.getAnimals) props.getAnimals()
      
      return response;
    } catch (error) {
      console.error('Error al agregar un animal:', error);
      throw new Error('Error al agregar un animal');
    }
  };

  // Función para editar un animal
  const updateAnimal = async (id : string, animalData : IAnimalData) => {
    try {
      const response = await http({
        url: endpoints.animals.update.url + id,
        method: endpoints.animals.update.method,
        data: animalData,
      });
      if(props?.getAnimals) props.getAnimals()

      return response;
    } catch (error) {
      console.error('Error al editar un animal:', error);
      throw new Error('Error al editar un animal');
    }
  };

  // Función para eliminar un animal
  const deleteAnimal = async (id : string) => {
    try {
      const response = await http({
        url: endpoints.animals.delete.url + id,
        method: endpoints.animals.delete.method,
        data : null
      });
      if(props?.getAnimals) props.getAnimals()

      return response;
    } catch (error) {
      console.error('Error al eliminar un animal:', error);
      throw new Error('Error al eliminar un animal');
    }
  };

  return {
    createAnimal,
    updateAnimal,
    readAnimals,
    deleteAnimal
  }
}