import React, { useState } from 'react'
import NavBar from './../NavBar';


function Home(props) {


  const [title, setTitle] = useState('');
  
  const handleChange = (e) =>{
    setTitle(e.target.value)
  }
  
  
  return (
    <div classNameName="App">
      <div className="container">
        <h2 className="text-white">FILMS</h2>
      </div>
      <NavBar/>
      <div className="d-flex justify-content-end mr-2 mt-3 mb-3">   
        <input type="text"  className="form-control-lg" placeholder="search" onChange={handleChange}/>
      </div>
      <main className="container py-2" >
        <div className="row miabox-card">
          {props.films.filter((film) => film.title.toLowerCase().includes(title.toLocaleLowerCase()) ).map(film => (
              <Film film={film}/>
          ))}
           
        </div>
      </main>
    </div>
  )
}

export default Home

