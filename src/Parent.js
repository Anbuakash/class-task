import React, { Component } from 'react'
import Child from './Child'
var obj =[
    {"id": 11, "name":"Abhinav", "salary":75000 },
     { "id": 2131, "name":"Gaurav", "salary":62000 }, 
     { "id": 3012, "name":"Raj", "salary":32000}];
export default class Parent extends Component {
  render() {
    const getname=(param)=>{
    const getsalary=obj.filter((value)=>{
        return value.salary < param ?value :'';

    })
        console.log(getsalary);
    }
    return (
     <>
     <Child newobj={obj} rend={'hed'} clic={getname}/>
     
     </>
    )
  }
}
