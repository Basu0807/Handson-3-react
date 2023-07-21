import React, { Component } from "react";
import ChildForm from "./ChildForm"

class ParentForm extends Component{
state={
    Name:'',
    Department:'',
    Rating: '',
    clicked: true,
    EmpData:[]

}

InputHandler=(e)=>{

this.setState({[e.target.name]:[e.target.value]})

}

toggleFunction =()=>{
this.setState({clicked : !this.state.clicked})
console.log(this.state.clicked);
}

SubmitHandler=(event)=>{
    event.preventDefault();
 const newObj={
    Name: this.state.Name,
    Department:this.state.Department,
    Rating:this.state.Rating
 }
 this.state.EmpData.push(newObj)
 this.setState({
    EmpData:this.state.EmpData,
    Name:"  ",
    Department: " ",
    Rating : " ",
    clicked :false
})
    

}

    render(){
        return(
            <div>
                {this.state.clicked?
                <form>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                <label htmlFor="name">Name : </label>
                <input id="name" type="text" name="Name" value={this.state.Name} onChange={this.InputHandler} placeholder="ENTER NAME" required/><br></br>
                <label htmlFor="Dept">Department : </label>
                <input id="Dept" type="text" name="Department" value={this.state.Department} onChange={this.InputHandler} placeholder="ENTER DEPARTMENT" required/><br></br>
                <label htmlFor="Ratinng">Rating : </label>
                <input id="Rating" type="number" name="Rating" value={this.state.Rating} onChange={this.InputHandler} required/><br></br>

                <button className="btn" onClick={this.SubmitHandler}>Submit</button>
                </form> : 
                <ChildForm value={this.state.EmpData} toggleFunc={this.toggleFunction}/>
                }
                

                
                
                

            </div>
        )
    }
}

export default ParentForm;