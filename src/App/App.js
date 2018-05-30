import React, { Component } from 'react'
import styles from './App.scss'
import { LinkedList } from '../utlits/doubleLinkList'

class App extends Component {
  constructor() {
    super()
    this.LinkedList = new LinkedList
    this.addnext = this.addnext.bind(this)
    this.addpre = this.addpre.bind(this)
    this.deleteNode = this.deleteNode.bind(this)
    this.n = 0
    this.state = {
      value:''
    }
  }

  addnext() {
    this.n = this.n + 1
    this.LinkedList.append(this.n)
    console.log(this.LinkedList)
  }

  addpre() {
    this.n = this.n + 1
    this.LinkedList.prepend(this.n)
    console.log(this.LinkedList)
  }
  
  deleteNode(value){
    this.LinkedList.deleteNode(value)
    console.log(this.LinkedList)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={(e) => {
          this.addnext()
        }}>nextAdd</button>
        <button onClick={(e) => {
          this.addpre()
        }}>preAdd</button>
        <input  
          value={this.state.value}
        onChange={(e)=>{
          this.setState({
            value:e.target.value
          })
        }}/>
        <button onClick={(e)=>{
          this.deleteNode(Number(this.state.value))
        }}>Delete</button>
      </div>
    );
  }
}

export default App
