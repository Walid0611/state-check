import React, { Component } from 'react'
import './Counter.css'




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
   
    <p> Counter state className Component</p> 
    <button  onClick={this.increment}  >plus</button>
    <p>  {this.state.Counter} </p>
    <button  onClick={this.decrment}   >moins</button>
    <button  onClick={this.rest}   >rest</button>


    <hr/>

<p>timer</p>
<p>{this.state.timer} </p>


<div id="container">
  <div classNameName="card" id="hulk">
    <div classNameName="card-image">
      <img src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png"/>
    </div>
    <div classNameName="card-text">
      <h2>MARVEL</h2>
      <p>COMICS<br/>GROUP</p>
      <div>
      <div>
        <span>15</span>
        <span>&cent;</span>

        </div>
      <div><span>27</span><span>May</span></div>
    </div>
      </div>
  </div>
  <div classNameName="card" id="spiderman">
    <div classNameName="card-image">
      <img src="https://pngimg.com/uploads/spider_man/spider_man_PNG59.png"/>
    </div>
    <div classNameName="card-text">
      <h2>MARVEL</h2>

      <div>
      <div>
        <span>COMICS</span>
        <span>GROUP</span>

        </div>
      <div><span>12</span><span>&cent;</span></div>
    </div>
      </div>
  </div>
  <div classNameName="card" id="deadpool">
    <div classNameName="card-text">
      <div><span>40</span><span>&cent;</span></div>
      <div>
        <span>29</span>
        <span>JAN</span>
        <span>02461</span>
      </div>
    </div>
    <div classNameName="card-image">
      <p>&copy; 1979 Marvel <br/>Comics Group</p>
      <img src="https://www.pngkey.com/png/full/82-824923_deadpool-deadpool-marvel-comics.png"/>
    </div>
  </div>
</div>


<div className="card">
	<div className="card__info">
		<div className="card__logo">PlasticIsShiny</div>
		<div className="card__chip">
			<svg className="card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100" aria-label="Chip">
				<g opacity="0.8">
					<polyline points="0,50 35,50" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="0,20 20,20 35,35" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="50,0 50,35" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="65,35 80,20 100,20" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="100,50 65,50" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="0,80 20,80 35,65" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="50,100 50,65" fill="none" stroke="#000" stroke-width="2" />
					<polyline points="65,65 80,80 100,80" fill="none" stroke="#000" stroke-width="2" />
				</g>
			</svg>
			<div className="card__chip-texture"></div>
		</div>
		<div className="card__type">debit</div>
		<div className="card__number">
			<span className="card__digit-group">0000</span>
			<span className="card__digit-group">0021</span>
			<span className="card__digit-group">4748</span>
			<span className="card__digit-group">3647</span>
		</div>
		<div className="card__valid-thru" aria-label="Valid thru">Valid<br/>thru</div>
		<div className="card__exp-date"><time datetime="2038-01">01/38</time></div>
		<div className="card__name" aria-label="Walid meftah">Walid Meftah</div>
		<div className="card__vendor" role="img" aria-labelledby="card-vendor">
			<span id="card-vendor" className="card__vendor-sr">Mastercard</span>
		</div>
	</div>
	<div className="card__texture"></div>
</div>













</div>
    )
  }
}

export default Counter