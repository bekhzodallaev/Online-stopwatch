import React from "react";

class App extends React.Component{
     state = {
        hour :0,
        minute:0,
        second:0,
        btnDisabled:false,
        interval: "",
        intervalStorage:[],
     };
    startClicked = () =>{
      this.setState({
        btnDisabled:true,
      })
    let timer =   setInterval(() =>{
        const {hour, minute, second} = this.state;
        if(second === 59){
          if(minute === 59){
            this.setState({
              second:0,
              minute:0,
              hour: hour + 1,
            })
          }else{
            this.setState({
              second:0,
              minute:minute + 1,
            })
          }
          
        }else{
          this.setState({
            second: second + 1,
          })
        }
         
      },1000);
      this.setState({
        interval:timer,
      })
    };
    stopClicked = () =>{
      clearInterval(this.state.interval);
      this.setState({
        btnDisabled:false,
      })
    };
    intervalClicked = () =>{
      const {hour, minute,second,intervalStorage} = this.state;
      intervalStorage.push(`${hour} : ${minute} : ${second}`);
      this.setState({
        intervalStorage,
      })
    };
    clearClicked = () =>{
      this.stopClicked();
      this.setState({
        second:0,
        minute:0,
        hour:0,
        intervalStorage:[],
      })
    };


    render(){
        const {hour, minute, second,btnDisabled, intervalStorage} = this.state;
        return <div>
           <div className="container mt-5 text-center  col-md-12 col-sm-12 col-xs-12 ">
             <h1>Online <span>Stopwatch</span> ⏱ </h1>
               <div className="card-header">
                  <div className="timer-col">
                    <p className="timer-hour" >Hours</p>
                    <p className="timer-label">{hour}</p>
                  </div>
                  <div className="timer-col">
                    <p className="timer-minute">Minutes</p>
                    <p className="timer-label">{minute}</p>
                  </div>
                  <div className="timer-col">
                    <p className="timer-second">Seconds</p>
                    <p className="timer-label">{second}</p>
                  </div>
               </div>
               <div className="card-body d-flex justify-content-around mt-5  col-md-12 col-sm-12 col-xs-12 ">
                  <button className="btn btn-success " onClick={this.startClicked} disabled = {btnDisabled}>Start</button>
                  <button className="btn btn-danger" onClick={this.stopClicked}>Stop</button>
                  <button className="btn btn-secondary" onClick={this.intervalClicked} disabled ={!btnDisabled}>Interval</button>
                  <button className="btn btn-primary" onClick={this.clearClicked}>Clear</button>

               </div>
              
           </div>
           <div className="card-footer mt-4 col-md-12 col-sm-12 col-xs-12 ">
                    <div className="container-intervals text-center">
                    {intervalStorage.map((item, index ) => <p>{index + 1} =&gt; {item}</p> )}
                    </div>
               </div>

        </div>
    }
        

}
export default App;