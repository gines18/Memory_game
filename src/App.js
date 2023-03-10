
import './App.css';
import 'bootstrap'
import Cards from './AppCards.js'
import React from 'react'

const imageCards = [
  {
      image: "./ajeet-mestry-UBhpOIHnazM-unsplash.jpg"
  },
  {
      image: "./austin-chan-ukzHlkoz1IE-unsplash.jpg"
  },
  {
      image: "./chris-lawton-5IHz5WhosQE-unsplash.jpg"
  },
  {
      image: "./david-kovalenko-G85VuTpw6jg-unsplash.jpg"
  },
  {
      image: "./davisuko-5E5N49RWtbA-unsplash.jpg"
  },
  {
      image: "./diego-ph-fIq0tET6llw-unsplash.jpg"
  },
  {
      image: "./hans-peter-gauster-3y1zF4hIPCg-unsplash.jpg"
  },
  {
      image: "./jess-bailey-l3N9Q27zULw-unsplash.jpg" 
  },
  {
      image: "./laura-vinck-Hyu76loQLdk-unsplash.jpg" 
  },
  {
      image: "./mike-dorner-sf_1ZDA1YFw-unsplash.jpg" 
  },
  {
      image: "./raimond-klavins-uAk731NvaJo-unsplash.jpg" 
  },
  {
      image: "./tirza-van-dijk-cNGUw-CEsp0-unsplash.jpg" 
  },
  ];


  
function App() {

  // const [currentState, setCurrentState] = useState(image)

  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-primary justify-content-center">
  <div class="container">
    <p class="navbar-brand" >Click Game</p>
    <p class="navbar-brand" >You guessed incorrectly!</p>
    <p class="navbar-brand" >Score: 0 | Top Score: 12</p>
  </div>
</nav>

<div class="card ">
  <div class="card-body text-center bg-light ">
    <h5 class="card-title">Clicky Game!</h5>
    <p class="card-text">Click on an image to earn points, but don't click on any more than once!</p>
   
  </div>
</div>

<div className="Portfolio">
  {imageCards.map((project) => (
<Cards image={project.image}/>
  ))}
  </div>


<div class="card ">

  <div class="card-body text-center">
    <blockquote class="blockquote mb-0 ">
      <p>Have a great game!</p>
    
    </blockquote>
  </div>
</div>

</>
  );

}

export default App;
