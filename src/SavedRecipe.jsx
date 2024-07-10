import React from 'react'
import './index.css';
import Itemm from './Itemm';
import { Link } from 'react-router-dom';
import Header from './Header';
const SavedRecipe = ({savedData,fetchError,who,head,searchVal}) => {
    return (
        <>
        <Header/>
        <div className='saved-recipes'>
            
            <div className='saved-head'>{head}</div>
            <div className='recipe-grid'>
            {   !fetchError?
                savedData.length!=0?
                savedData.map((saved,index) => (
                    <div className='saved-box' key={index}>
                        {who?
                        
                        <Link to={`/results/${index}`} className='link'><Itemm saved={saved} index={index}/></Link>
                        :
                        <Link to={`/saved/${index}`} className='link'><Itemm saved={saved} index={index}/></Link>
                        }
                    </div>
                )):who?<p className='msg'>Your results are loading for {searchVal}...</p>:<p className='msg'>Your saved list is empty</p>
                    :<p className='error-msg'>Oops! {fetchError} :( </p>
            }
            </div>
        </div>
        </>
    )
}

export default SavedRecipe