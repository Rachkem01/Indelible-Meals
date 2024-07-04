import { AiFillStar } from "react-icons/ai"
import { useState } from "react"
function StarRating({noOfStars = 5}){
     const [rating, setRating] = useState(0)
  const [hover, setHover] =useState(0)
    
    return <div className="star-rating">
    {
        [...Array(noOfStars)].map((_, index)=>{
          const currentRating = index +1
        
            return <AiFillStar 
            key={index}
            className="star"
            style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#000"
                  
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            onClick ={()=>setRating(currentRating)}
           
            />
        })}
    
    
        </div>
  }

export default StarRating