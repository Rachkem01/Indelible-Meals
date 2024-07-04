
import { useState } from "react"
import { useGlobalContext } from "../context"
import Baker from './Baker.png'

const Nav = () => {
  const[text,setText] = useState('')
  const {setSearchTerm} = useGlobalContext()

  function handleSubmit (e){
e.preventDefault()
if(text){
  setSearchTerm(text)
}
  }
  return(
    <main className="Nav">
      <div className="input-search">
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Search your desired delicacy..." className="nav-input"></input>
        <button className="Search-btn" onClick={handleSubmit}>Search</button>
        
      </div>
      <div className="nav-text">
        <img src={Baker} alt="Baker" className="Baker"/>
      </div>

    </main>
  )
}

export default Nav
