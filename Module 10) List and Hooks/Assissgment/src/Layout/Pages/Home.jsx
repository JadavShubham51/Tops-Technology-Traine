import React from 'react'
  import Header from '../Comomon_componet/Header'
  import Footer from '../Comomon_componet/Footer'

  function Home() {
    return (
      <div>
          <Header/> 
        <h1>Home Componet</h1>
        <div class="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>    
    <p>Resize this responsive page to see the effect!</p> 
  </div>
        <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 3</h3>        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>
        <Footer/>
      </div>
    )
  }

  export default Home
    