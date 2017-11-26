import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Forms} from './App'
import registerServiceWorker from './registerServiceWorker';
class Helloworld extends React.Component{//state full component
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <h1>Helloworld</h1>
        </div>
        );
    }
}

const Hello = ()=>{//stateless or functional components
    return(
        <div>
            <h1>
                Helloworld
            </h1>
        </div>
    );
}
const Show =()=>{
    return(
        <div>
            <Helloworld/>
            <Hello />
        </div>

    );
}


ReactDOM.render(<Show />, document.getElementById('root'));
registerServiceWorker();
