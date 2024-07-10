import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import RecipeTemplate from './RecipeTemplate';
import  './index.css';

const SavedRecNavig = ({savedData,setSavedData,setNutriData}) => {
    const {id} = useParams();
    const ourDish = savedData[id];
    const ingredientsArray = ourDish.ingredients.split('|');

    const cookingInstructions = ourDish.instructions.split('.');

    const buttonVal = "Remove from saved";
  return (
    <>
        <Header/>
        
        <RecipeTemplate
          ourDish={ourDish}
          savedData={savedData} 
          setSavedData={setSavedData}
          ingredientsArray={ingredientsArray} 
          cookingInstructions={cookingInstructions} 
          nutriData={ourDish.nutrition}
          setNutriData={setNutriData}
          buttonVal={buttonVal}  />
        
        
    </>
    
  )
}

export default SavedRecNavig