import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>{this.props.newobj.map((ren,index)=>{

        return <div key={index}>
            <h3>{ren.name}</h3>
            <h3>{ren.age}</h3>
            <h3>{ren.salary}</h3>
            <button onClick={()=>{this.props.clic(ren.salary)}}>Click me</button>
            
        </div>

      })}
      </div>
    )
  }
}

