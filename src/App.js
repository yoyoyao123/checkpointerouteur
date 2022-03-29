import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import FilmDetails from './components/Pages/FilmDetails';
import { useState } from 'react';

function App() {
  const [films, setFilms] = useState(
  {id : 1, title : "l'empire du mensonge", image :'download.jpg' , description : " feuilleton",  duration :  "2:45min" , videoLink :  "https://www.youtube.com/watch?v=4R_0mVVMWCE" },
  {id : 2, title : "L'usupatrice", image :"OIP.jpg", description : "Feuilleton",  duration :"2:45min" , videoLink : "https://www.youtube.com/watch?v=P7Z8vXL3CuQ" }, 
  {id : 3, title : "After", image : "OIP (5).jpg", description : " Romance",  duration : "2:45min" , videoLink : "https://www.youtube.com/watch?v=7hCDXr0S2aQ" },
  {id : 4, title : "Henriette Tubman", image : "OIP (2).jpg", description : "Lesclavage",  duration :"2:45min" , videoLink : "https://www.youtube.com/watch?v=16AbnfOlU3E" },
  {id : 5, title : "Tu ne tueras point", image : "OIP (1).jpg", description : "Histoir vrai",  duration :  "2:45min" , videoLink : "https://www.youtube.com/watch?v=h1Jv5WdOrz8" },
  {id : 6, title : "Attaque a mubai", image : "OIP (3).jpg", description : "Teroriste",  duration :  "2:45min" , videoLink : "https://www.youtube.com/watch?v=K1JDTHJgvRM" },
  {id : 7, title : "La chronique de Bridgerton", image : "yoyo1.jpg", description : "Romance",  duration :  "2:45min" , videoLink : "https://www.youtube.com/watch?v=txAp6X4ywRI" },
  {id : 8, title : "La passion du Christ", image : "OIP (1).jpg   ", description : "La mort du Christ",  duration :  "2:45min" , videoLink : "https://www.youtube.com/watch?v=zXegbNW2OXU" },

    )
    
  
  
  return (
    <div>
      <Routes>
        <Route path='/' element ={<Home films = {films}/>} />
        <Route path='detail/:id' element ={<FilmDetails films = {films}/>} />
      </Routes>
    </div>
  );
}

export default App;

