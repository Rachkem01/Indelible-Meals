

import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Nav from './components/Nav';

import SeaFood from './components/SeaFood';
import Canadian from './components/Canadian';
import Chicken from './components/Chicken';
import Side from './Side';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import './App.css';


function App() {
 
  return (
   <>
   
   <Router>
<Side />
   <Nav/>

 <Routes>

  <Route path = '/' element={  <Meals />}>
    
    </Route> 
   
     <Route path = '/Favorites' element={ <Favourites />}>
    
     </Route>

<Route path='/SeaFood' element={   <SeaFood/>}>

   </Route>
   <Route path = '/Canadian' element={ <Canadian />}>
  
   </Route>
   <Route path ='/Chicken' element={<Chicken />}> 
   
   </Route>
   <Route path="*" element={<Navigate to='/' />} />
  </Routes>
   </Router>
   </>
  );
}

export default App;
