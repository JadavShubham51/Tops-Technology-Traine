import React from "react";
import React_boostrap from "./React_boostrap/React_boostrap";
import Mui_boostrap from "./MUI_boostrap/Mui_boostrap";
import RecipeReviewCard from "./MUI_boostrap/RecipeReviewCard";
import Module from "./CSS_Module/Module";

// import Boostrap from "./boostrap/Boostrap";


function App() {
  return (
    <div className="App">
      <h1>Hello js</h1>
      
      {/* Module css is Same class in css file but module use file name deffernt use  */}
      <Module/>


      {/* its is simple boostarp using link and import using path */}
      {/* <Boostrap/>  */}
      

      {/* React boostrap is simple but funtion is also component work in react_boostrap button as component also all componet */}
      {/* <React_boostrap/> */}

      {/*MUI Boostrap is easy to use  */}
      {/* <RecipeReviewCard/> */}

    </div>
  );
}

export default App;
