import React, { Component } from "react";


class ChildForm extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value);
    }
    render(){
        return(
            <>
            <h1>Employee FEEDBACK Data</h1>
            
            <div className="Data" >
                {this.props.value.map((item,index)=>{
                    return(
                        <div key={index}>
                        <span ><div className="box" >Name : {item.Name} | Department : {item.Department} | Rating : {item.Rating}</div></span>
                       </div>
                            )
                    
                        
                    

                    })}
                    
                </div>
                <button className="btn1" type="button" onClick={this.props.toggleFunc}>Go back</button>
            </>
        )
    }
}

export default ChildForm;