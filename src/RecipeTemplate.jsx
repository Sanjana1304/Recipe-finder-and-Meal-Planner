import React, { useEffect } from 'react';
import api1 from './api/fetchSaved';
import { useNavigate } from 'react-router-dom';
import { MdFastfood } from "react-icons/md";
import getNutrition from './api/fetchNutrition';

import NutritionComponent from './NutritionComponent';

const RecipeTemplate = ({ ourDish, ingredientsArray, cookingInstructions, buttonVal, savedData, setSavedData, nutriData, setNutriData,searchVal }) => {
    const navig = useNavigate();

    const SaveTheRecipe = async () => {
        const newRecipe = {
            title: ourDish.title,
            ingredients: ourDish.ingredients,
            servings: ourDish.servings,
            instructions: ourDish.instructions,
            nutrition:nutriData
        };
        const response = await api1.post('/saved', newRecipe);
        const updated_savedData = [...savedData, newRecipe];
        setSavedData(updated_savedData);

        console.log("save hehe");
        navig("/saved");
        alert("Item successfully added :D")
    };

    const RemoveTheRecipe = async () => {
        const curr_id = ourDish.id;
        const response = await api1.delete(`/saved/${ourDish.id}`);
        const updated_savedData = savedData.filter((saved) => (saved.id !== curr_id));
        setSavedData(updated_savedData);
        console.log("removed hehe");
        navig("/saved");
        alert("Item successfully removed :D")
    };

    useEffect(() => {
        const fetNut = async () => {
            try {
                const recipe = `100g ${searchVal}`;
                const nut_data = await getNutrition(recipe);
                setNutriData(nut_data);
                console.log("2nd" + nut_data);
            } catch (error) {
                console.log(error.message);
            }
        };

        (async () => await fetNut())();
    }, []);

    const filterNutrients = (data) => {
        const desiredNutrients = ['ENERC_KCAL', 'FAT', 'CHOCDF', 'FIBTG', 'SUGAR', 'PROCNT', 'CHOLE'];
        const filteredData = {};

        if (data) {
            desiredNutrients.forEach(nutrient => {
                if (data[nutrient]) {
                    filteredData[nutrient] = data[nutrient];
                }
            });
        }

        return filteredData;
    };

    const filteredNutrients = nutriData && nutriData.totalNutrients ? filterNutrients(nutriData.totalNutrients) : null;

    //console.log(JSON.stringify(nutriData));

    return (
        <>
            <div className='recipe-det-head'>
                <h1 className='dish-title'>{ourDish.title}</h1>
                {buttonVal === "Save this Recipe" ?
                    <button id='add_rec' onClick={SaveTheRecipe}>{buttonVal}</button>
                    :
                    <button id='remove_rec' onClick={RemoveTheRecipe}>{buttonVal}</button>
                }
            </div>

            <div className='ing-nut'>
                <div className='ingr'>
                    <h2>Ingredients</h2>
                    <br />
                    <ul>
                        {ingredientsArray.map((ing, index) => (
                            <li key={index}><MdFastfood /> {ing}</li>
                        ))}
                    </ul>
                </div>

                {/* <div className='nutr'>
                   
                    <h2>Nutrition Facts</h2>
                    <br />

                    <h1>Calories : {nutriData ? nutriData.calories : 'Loading...'}</h1>
                    <br />

                    {
                        filteredNutrients ? (
                            <>
                                <h2>Nutrients:</h2>
                                <br />
                                <ul>
                                    {Object.keys(filteredNutrients).map(key => (
                                        <li key={key} className='nut-nut-li'>
                                            {filteredNutrients[key].label}: {filteredNutrients[key].quantity} {filteredNutrients[key].unit}
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : <p>Loading...</p>
                    }

                    <br />
                    <h3>Diet Labels:</h3>

                    <br />
                    <ul>
                        {nutriData && nutriData.dietLabels ? nutriData.dietLabels.map((dl, index) => (
                            <li className='nut-nut-li' key={index}>{dl}</li>
                        )) : <p>Loading...</p>
                        }
                    </ul>
                    <h3>Health Labels:</h3>
                    
                    <br />
                    <ul>
                        {nutriData && nutriData.healthLabels ? nutriData.healthLabels.slice(0, 5).map((hl, index) => (
                            <li className='nut-nut-li' key={index}>{hl}</li>
                        )) : <p>Loading...</p>
                        }
                    </ul>

                </div> */}

                <NutritionComponent
                nutriData={nutriData}
                filteredNutrients={filteredNutrients}
                 />
            </div>
            <div className='cook-container'>
                <div className='cook-deets'>
                    <h1>Cooking Instructions</h1>
                    <br />
                    <ul>
                        {cookingInstructions.map((inst, index) => (
                            inst ? <li key={index}><MdFastfood /> {inst}</li> : ''
                        ))}
                    </ul>
                    <hr />
                    <hr />
                </div>
            </div>

            <br />

        </>
    );
};

export default RecipeTemplate;
