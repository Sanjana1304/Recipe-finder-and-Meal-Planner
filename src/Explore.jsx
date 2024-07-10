import React, { useEffect, useState } from 'react'
import Header from './Header';
import getLowCarbRecipes from './api/fetchLowCarb';
import getWeightGainRecipes from './api/fetchWeightGain';
const Explore = () => {

  const [lowCarb,setLowCarb] = useState([]);
  const [wgtGain,setWgtGain] = useState([]);

  useEffect(() => {
    const fetchLowCarb = async() => {
      const data = await getLowCarbRecipes();
      setLowCarb(data);
    }

    

    (async () => await fetchLowCarb())()
    
  },[])

  useEffect(() => {
    const fetchWgtGain = async() => {
      const data = await getWeightGainRecipes();
      setWgtGain(data);
    }
    (async () => await fetchWgtGain())()
  },[])
 
  return (
    <div>
        <Header/>
        <br /><br />
        <div className='low-carb-recipes'>
          <h1>Low-Carb Recipes</h1>
          <br />
          <div className='low-carb-grid'>
              {lowCarb.map((item,index) => (
                <div className='carb-item' key={index}>
                  <img src={item.image} alt="Low-Carb Item" />
                  <h1>{item.title}</h1>
                  <br />
                  <h2>Calories: {item.calories}</h2>
                  <h2>Carbs: {item.carbs}</h2>
                </div>
              ))}
          </div>
        </div>
        <br /><br />
        <div className='low-carb-recipes'>
          <h1>Weight Gain Recipes</h1>
          <br />
          <div className='low-carb-grid'>
              {wgtGain.map((item,index) => (
                <div className='carb-item' key={index}>
                  <img src={item.image} alt="Low-Carb Item" />
                  <h1>{item.title}</h1>
                  <br />
                  <h2>Calories: {item.calories}</h2>
                  <h2>Carbs: {item.carbs}</h2>
                  <h2>Protein: {item.protein}</h2>
                </div>
              ))}
          </div>
        </div>
    </div>
  )
}

export default Explore