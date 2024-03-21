import React, { Component } from 'react';

class Chines extends Component {

    constructor()
    {
        super()
        this.state={name:"",price:""}
    }
    btnclick=()=>{
        console.log("btn called")
        this.setState({name:"Scallion Flower Roll",price:"10$"})
        
    }
    btnclick1=()=>{
        console.log("btn called")
        this.setState({name:"Chilli paneer dry",price:"15$"})
    }
    btnclick2=()=>{
        console.log("btn called")
        this.setState({name:"Spacial Chines",price:"20$"})
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h1>Chines menu-list</h1>
                            <button className='btn btn-primary' onClick={this.btnclick}>Breakfast</button>
                            <button className='btn btn-success mx-3' onClick={this.btnclick1}>Lunch</button>
                            <button className='btn btn-danger' onClick={this.btnclick2}>Dinner</button>
                            
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.price}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chines;