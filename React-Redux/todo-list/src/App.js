import './App.css';

import React, { Component } from 'react'
import Zeras from './zeras';
import AddZeras from './AddZeras';
export default class App extends Component {

  state={
    zerass:[
      { name:'Rasel', age: 29, belt:'black', id:1 },
      { name:'Tnm', age: 20, belt:'green', id:12 },
      { name:'Sobur', age: 27, belt:'white', id:3 }
    ]
  }

  addZeras=(zeras)=>{
    zeras.id=Math.random();
    let zerass=[...this.state.zerass, zeras]
    this.setState({
      zerass: zerass
    })
  }


  deleteZeras=(id)=>{
    let zerass=this.state.zerass.filter(zeras=>{
      return zeras.id!==id
    });
    this.setState({
      zerass:zerass
    })
  }

   render() {
     
    return (
      <div className="app-content">
        
        <h1>My name Rasel</h1>
        <Zeras deleteZeras={this.deleteZeras} zerass={this.state.zerass}/>
        <AddZeras addZeras={this.addZeras}/>
                          
      </div>
    )
  }
}



