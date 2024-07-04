import { useGlobalContext } from '../context'
import StarRating from './Star'

const Favorites = () => {


const { favorites, selectMeal, removeFromFavorites,loading} = useGlobalContext()
  

if (loading) {
  return <section className="section-loading">
    <h4>Loading...</h4>
    <h5>Welcome to Favorites</h5>
  </section>
}
    return <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map((item) => {
            const { idMeal, strMealThumb: image } =item
            return <div key={idMeal} className="favorite-item" >
              <img src={image} className="favorites-img img" alt="favorites" onClick={() => selectMeal(idMeal, true)} />
              <StarRating/>
              <button className='remove-btn' onClick={() => removeFromFavorites(idMeal)}>remove</button>
            </div>
          })}
        </div>
      </div>
    </section>
  }

  



export default Favorites




 

