import React from 'react'
import Astyle from "./style.module.css";
import Bstyle from "./style1.module.css";

function Module() {
  return (
    <div>
        {/* module is css deffernt file but class name is same so is easy for all */}
      <h1 className={Astyle.text}>Hello External css1</h1>
      <h2 className={Bstyle.text}>Hello Exnternal css2</h2>
    </div>
  )
}

export default Module;
