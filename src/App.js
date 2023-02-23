import React, { Component } from 'react'
import './App.css';
import Counter from './compenets/Counter';



export class App extends Component {

constructor(){
  super();
  this.state={
    person: {
      fullName: 'Walid Meftah',
      bio: 'im a video player i love club africain',
      imgSrc: 'https://c8.alamy.com/comp/KRDJK6/soccer-player-cartoon-avatar-KRDJK6.jpg',
      profession: 'Web Developer',
    },
    show: true,
  }
}

toggel=()=>{
  this.setState({ show: !this.state.show })
}

  
  render() {
    const { person, show} = this.state;
  
    return (
      <div>
<h1>hello everybady this my home page im happy to vist me so your welcome </h1>

<button  onClick={()=>this.toggel()} >show/hide</button>
    <h1>  { this.state.name }    </h1>
   

{  this.state.show &&     <Counter/>}
   

<h2>{person.fullName}</h2>
            <p2>{person.bio}</p2>
            <img src={person.imgSrc} alt="Profile" />
            <p3>{person.profession}</p3>


      </div>
    )
  }
}
export default App