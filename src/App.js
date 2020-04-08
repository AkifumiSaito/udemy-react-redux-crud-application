import React, { Component } from 'react';

const App = ()=>{
  const porfiles = [
    {name: "Taro", age:10},
    {name: "Hanako", age:5},
    {name: "Noname"}
  ]

  return(
  <div>
    {
      porfiles.map((profile, index)=>
     {
       return <User name={profile.name} age ={profile.age} key={index}/>
     })
    }
  </div>
  )
}

const User = (props)=>{
return <div>Hi, Iam {props.name}, and {props.age}years old!</div>
}

User.defaultProps = {
  age : 1
}

export default App;
