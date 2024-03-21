import React, { Component } from 'react';
// Props as Data Pass in main file as component but class as Constructor(props){super(props);this.data=props}
class Class_Props extends Component {

    constructor(props){
        super(props);
        this.data=props;
    }
    render() {
        return (
            <div>
                <div className="col text-center">
                <h1>Class </h1>
                <div className="card">
                    <img className="card-img-top" src={this.data.img} style={{ width: '200px',margin:"0 auto" }}  alt="Card image" />
                    <div className="card-body ">
                        <h4 className="card-title">{this.data.title}</h4>
                        <p className="card-text">{this.data.desc}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Class_Props;
