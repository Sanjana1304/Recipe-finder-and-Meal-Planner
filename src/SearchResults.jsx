import React from 'react'
import Header from './Header';
import Main from './Main';
import Itemm from './Itemm';
import { Link } from 'react-router-dom'
import SavedRecipe from './SavedRecipe';
const SearchResults = ({recipeData,fetchError,searchVal}) => {
  return (
    <>

        <SavedRecipe savedData={recipeData} fetchError={fetchError} who={"search"} head={"Your Search Results"} searchVal={searchVal}/>
    </>
  )
}

export default SearchResults