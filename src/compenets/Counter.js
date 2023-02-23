import React, { Component } from 'react'

export class Counter extends Component {

constructor(){
    console.log('constructor()')
super();
this.state ={
    Counter:0,
    timer:0,
    interval : null
}
}


componentDidMount (){
    console.log('componentDidMount()')
    this.setState({
        interval: setInterval(
            ()=> this.setState ({ timer:this.state.timer +1  }),1000
        )
    })
}

 
// updates

componentDidUpdate(){
    console.log('il y a un update timer ')
    console.log(this.state.timer)
}


componentWillUnmount (){
    console.log('you killed me ')
    clearInterval(this.state.interval)
}



increment =() =>{
this.setState({
    Counter : this.state.Counter + 1
});
}

// partie decrese :

decrment =()=> {
    if ( this.state.Counter >0  ) {
        this.setState({
        Counter : this.state.Counter -1

   

    })}
}



//rest :
rest = () =>{
    this.setState ({
        Counter:0
    })

}







  render() {
    return (
      <div>
   
    <p> Counter state class Component</p> 
    <button  onClick={this.increment}  >plus</button>
    <p>  {this.state.Counter} </p>
    <button  onClick={this.decrment}   >moins</button>
    <button  onClick={this.rest}   >rest</button>


    <hr/>

<p>timer</p>
<p>{this.state.timer} </p>
    
    
    



      </div>
    )
  }
}

export default Counter