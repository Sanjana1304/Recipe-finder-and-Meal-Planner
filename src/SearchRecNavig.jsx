import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import RecipeTemplate from './RecipeTemplate';
import getNutrition from './api/fetchNutrition';

const SearchRecNavig = ({recipeData,savedData,setSavedData,setNutriData,nutriData,searchVal}) => {
  const {id} = useParams();

  const ourDish = recipeData[id];
  const ingredientsArray = ourDish.ingredients.split('|');

  const cookingInstructions = ourDish.instructions.split('.');
  const buttonVal = "Save this Recipe";
  

  
  return (
    <>
        <Header/>
        <RecipeTemplate 
          ourDish={ourDish} 
          searchVal={searchVal}
          ingredientsArray={ingredientsArray} 
          cookingInstructions={cookingInstructions} 
          buttonVal={buttonVal} 
          setSavedData={setSavedData}
          savedData={savedData}
          setNutriData={setNutriData}
          nutriData={nutriData} />
    </>
  )
}

export default SearchRecNavig