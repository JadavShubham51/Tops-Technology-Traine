import React from 'react'
// Props as Data Pass in main file as component but funtion as a Parameters use

const Func_Props = ({img,title,desc}) => {
  return (
    <div>
        
      <div className="col text-center">
      <h1>Func</h1>
            <div className="card">
                <img className="card-img-top" src={img} alt="Card image" style={{ width: '150px',margin:"0 auto" }} />
                <div className="card-body ">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Func_Props
