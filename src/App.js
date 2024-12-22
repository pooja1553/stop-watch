import React from 'react';
import './App.css'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      time:0,
      running:false,
    }
    this.timer=null;
  }
  startTimer=()=>{
    if(!this.state.running){
      this.setState({running:true});
      this.timer=setInterval(() => {
        this.setState((prevState)=>({
          time:prevState.time+1,
        }))
      }, 1000);
    }
    // alert("Start");
    // this.setState({time:1})
  }
  stopTimer=()=>{
    this.setState({running:false});
    clearInterval(this.timer);
    // alert("Stop");
  }
  resetTimer=()=>{
    this.setState({running:false,time:0});
    clearInterval(this.timer);
    // alert("Reset");
  }
  formatTimer=()=>{
    const seconds = this.state.time % 60;
    const minutes = Math.floor(this.state.time / 60) % 60;
    const hours = Math.floor(this.state.time / 3600);
    return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2,'0')}`
  }

   render(){
    return(
      <>
      {/* <h1>{this.state.time}</h1> */}
      <div className="main">
        <div className='box1'>
          <div className='box2'>
            <div className='one'>
              <h1>Stop Watch</h1>
            </div>
            <div className='two'>
              <div className='two1'><h1>{this.formatTimer()}</h1></div>
              <div className='two2'>
                <button onClick={this.startTimer} className="btn btn-primary">Start</button>
                <button onClick={this.stopTimer} className="btn btn-primary">Stop</button>
                <button onClick={this.resetTimer} className="btn btn-primary">Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default App;
