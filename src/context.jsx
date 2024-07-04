
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios'
const AppContext = React.createContext()
 
const useGlobalContext = () =>{
  return useContext(AppContext)
}
 

 
 


const AppProvider = ({ children }) => {
 
  

  const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
  
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] =useState('')
  const [favorites, setFavorites] = useState([])
  

  // useEffect((id)=>{
  //   fetchMeals(`${AllUrl.map((url)=>url.id === id)}${searchTerm}`)
  //   },[searchTerm])


  useEffect(()=>{
    fetchMeals(`${allMealsUrl}${searchTerm}` )
    },[searchTerm])
    
  const fetchMeals = async(url) =>{
    setLoading(true)
    try{
      const {data} = await axios(url)
      if (data.meals){
        setMeals(data.meals)
     
      } else{
        setMeals([])
       
      }
    }
    catch(error) {
console.log(error.response)
  }
  setLoading(false)
}



// const fetchRandomMeal = ()=>{
//   fetchMeals(randomMealUrl)
// }



const [selectedMeal, setSelectedMeal]= useState([])

const selectMeal =(idMeal, favoriteMeal)=>{
  let meal;
 
  meal = meals.find((meal)=>meal.idMeal === idMeal)

  meal = meals.find((meal) => meal.idMeal === idMeal);

  setSelectedMeal(meal)
  
} 





const addToFavorites = (idMeal) =>{
 
  const meal = meals.find((meal)=> meal.idMeal = idMeal)
  const alreadyFavourite = favorites.find((meal)=> meal.idMeal === idMeal)
  if(alreadyFavourite) {
    return(favorites)
  }
  const updatedFavourites =[...favorites, meal]
  setFavorites(updatedFavourites)
}

const removeFromFavorites =(idMeal) =>{
  const updatedFavorites = meals.filter((meal)=> meal.idMeal !==idMeal)
  setFavorites(updatedFavorites)
}


  return (
    <AppContext.Provider
      value={{meals, loading, setSearchTerm, selectedMeal, selectMeal, favorites, addToFavorites, removeFromFavorites, searchTerm }}>
      {children}
    </AppContext.Provider>
  )

}

export { AppContext, AppProvider, useGlobalContext }