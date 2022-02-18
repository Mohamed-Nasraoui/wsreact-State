import { Component } from 'react';
import './App.css';
import Profile from './Components/Profile';
import { Button} from 'react-bootstrap'


export default class App extends Component {
constructor(props){
  super(props)
  this.state={show:false}
}

handleclick=()=>this.setState({show:!this.state.show})
render(){
    return (
      <div className="App">


<h1>My Profile</h1>
      
      <Button variant="primary" onClick={this.handleclick}>Toggel</Button>
      {this.state.show?<Profile/>:null}
    
      </div>
    );
      
  }

}