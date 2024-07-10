import React from 'react'


const Itemm = ({saved,index}) => {
  return (
    
    <div className='single-item'>
        <p className='recipe-num'>Recipe {index+1}</p>
        <br />
        <p className='recipe-title'>{saved.title}</p>
        <br />
        <p>Servings : {saved.servings.slice(0,1)}</p>
        <img src={saved.image} alt="" />
    </div>
    
  )
}

export default Itemm