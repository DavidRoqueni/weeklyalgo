import './App.css';
import React, { Component } from 'react';

export class App extends Component {
  array = ['a', 'a', 'c', 'd', 'c', 'e', 'e', 'g', 'g', 'f'];
  map = {};
  firstNonRepeat = function () {
    for (var i = 0; i < this.array.length; i++) {
      if (this.array[i] in this.map) this.map[this.array[i]]++;
      else this.map[this.array[i]] = 1;
    }
    for (let j = 0; j < this.array.length; j++) {
      if (this.map[this.array[j]] === 1) return this.array[j];
    }
  };
  render() {
    return (
      <div className='container'>
        <h1>Sample Input</h1>
        <div className='row sample'>[ {this.array.toString()} ]</div>
        <div className='row'>
          {this.array.map((e, index) => (
            <div key={index} className='box col'>
              {e.toUpperCase()}
            </div>
          ))}
        </div>
        <div className='answer row'>{this.firstNonRepeat()}</div>
      </div>
    );
  }
}

export default App;
