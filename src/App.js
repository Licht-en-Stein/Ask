import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    question: '',
    input: '',
    pix: [],
    viewSelector: false,
    button: false
  }

  handleGif = () => {

  const asyncfun = async () => {
      try{
        const dataFet = await fetch("https://yesno.wtf/api");
        const data = await dataFet.json();
        console.log(data)
        this.setState({
          question: this.state.input,
          input: '',
          pix: data,
          viewSelector: true,
          button: false
        })
      }
      catch (error) {
        console.error('error:', error)
        }
      }
      asyncfun();
    }

  onChange = (event) => {
    this.setState({
      input: event.target.value,
      button: true
    })
  }

  render() { 
    let style = {
     width: '100%',
     height: 'auto',
     position: 'fixed',
     top: 0,
     left: 0,
     zIndex: -1
  };
    let answRender;
    this.state.viewSelector ? answRender = (
      <div className="answer">
        <h2>{this.state.question}</h2>
        <p>{this.state.pix.answer}</p>
        <img src={this.state.pix.image} alt="#" style={style}/>
      </div>) : null

    return (
      <div className="App">
          <h1 className="App-title">Knock yourself out</h1>
          <input type="text" value={this.state.input} onChange={this.onChange}/>
          <button type="submit" onClick={this.handleGif} disabled={!this.state.button}>ask</button>
          {answRender}
       </div>
    );
  }
}

export default App;
