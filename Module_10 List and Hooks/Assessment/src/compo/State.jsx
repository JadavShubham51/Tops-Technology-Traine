import React, { Component } from 'react';

class State extends Component {

constructor()
{
    super()
    this.state={name:"shubamk",Movie:"3 idiot"}
}

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h1>{this.state.name}</h1>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default State;