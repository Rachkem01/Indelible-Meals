
import { Link } from "react-router-dom"

 const Side = () =>{
    return(
        
     <main className="sidebar-container">

        <div className="sidebar-title">Welcome to Indelible Meals
        <span className='meal'>
        <img src="https://images.pexels.com/photos/827516/pexels-photo-827516.jpeg?auto=compress&cs=tinysrgb&w=600" alt="icon" className='meal'></img>
        </span>
           </div>
        <ul >
    <li>
      <Link className="side-link" to='/'>Home</Link></li>
    {/* <li>
      <Link className="side-link" to ='/Favorites'>My Favourites</Link></li> */}
    <li>
      <Link className="side-link" to ='/SeaFood'>Sea Food</Link></li>
    <li>
      <Link className="side-link" to ='/Canadian'>Canadian Food</Link></li>
    <li>
      <Link className="side-link" to ='/Chicken'>Chicken Breast Meals</Link></li>
        </ul>
        </main>
    )
 }
 export default Side