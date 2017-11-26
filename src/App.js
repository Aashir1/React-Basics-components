import React from 'react';



export class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInput: '',
            users : []
        }
    }

    inputHandler = (event)=>{
        let tempArray = this.state.userInput;
        tempArray.push(event.target.value);
        
        this.setState({
            userInput : event.target.value, users : tempArray
        });
        console.log(event.target.value);
    }
    buttonHandler = ()=>{
        

        console.log(this )
        console.log(this.state.userInput);
    }

    render(){
        return(
            <div>
                <input type="text" onChange = {this.inputHandler}/>
                <button onClick = {this.buttonHandler}>Add Me</button>
            </div>
        );
    }
} 