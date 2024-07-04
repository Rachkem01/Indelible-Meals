import { useGlobalContext } from "../context"
import axios from "axios"
import { useState, useEffect } from "react"
import StarRating from "./Star"
const Chicken = ()=>{
    const {addToFavorites, loading, searchTerm} = useGlobalContext()
    const [canadianFood, setCanadianFood] = useState([])

    useEffect(()=>{
        axios.get(`${"https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"}${searchTerm}`)
.then(res=> {
    setCanadianFood(res.data.meals)
}).catch((err)=>{
    console.log(err)
})

    },[searchTerm])

    if (loading) {
        return <section className="section-loading">
          <h4>Loading...</h4>
        </section>
      }
    
      if ( canadianFood.length <1) {
        return <section className="section-search">
             <h4>Loading...</h4>
        </section>
      }
      
    return <section className="section-meal">
    {canadianFood.map((singleMeal) => {
      const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
      return <article key={idMeal} className="single-meal" >
        <img src={image}  className="img" alt="food" />
        <footer className="meal-content">
          <h5 className='meal-title'>{title}</h5>
      <div>
        <StarRating    /> 
      </div>
            <button className='like-btn' onClick={() => addToFavorites(idMeal)} >Add Me to Favourites</button>
        </footer>
      </article>
    })}
  </section>
    }


export default Chicken