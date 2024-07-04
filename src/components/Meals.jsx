import { useGlobalContext } from '../context'

import StarRating from './Star';
const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites } = useGlobalContext();

  if (loading) {
    return <section className="section-loading">
      <h4>Loading...</h4>
    </section>
  }

  if (meals.length < 1) {
    return <section className="section-search">
      <h4>No meals matched your search term. Please try again.</h4>
    </section>
  }
  
  
  
  return <section className="section-meal">
  {meals.map((singleMeal) => {
    const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
    return <article key={idMeal} className="single-meal" >
      <img src={image}  className="img" alt="food" onClick={()=>selectMeal(idMeal)} />
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

export default Meals