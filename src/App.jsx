import { useReducer, useState } from 'react';
import './App.css'

let initialState = {
  value:{
    name:"Anil",
    surname:"Dollor"
  }
};
const reducer = (oldState, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGEMYNAME":
    // code block
      console.log("CHANGEMYNAME");
      console.log('oldState >>>>>',oldState);
      console.log('oldState >>>>>',oldState.value.name);
      console.log('action >>>>>',action);
      console.log('action >>>>>',action.payload);
      //oldState.value.name = action.payload
     // Anil = Sunil
     oldState = {
      ...oldState,
      value:{
        ...oldState.value,
        name:action.payload
      }
     }
      return oldState;
      break;
    case "CHANGEMYSURNAME":
      // code block
      console.log("CHANGEMYSURNAME");
      console.log("CHANGEMYNAME");
      console.log('oldState >>>>>',oldState);
      console.log('oldState >>>>>',oldState.value.name);
      console.log('action >>>>>',action);
      console.log('action >>>>>',action.payload);
      oldState.value.surname = action.payload
       oldState = {
        ...oldState,
        value:{
          ...oldState.value,
          surname:action.payload
        }
      }
     // Anil = Sunil
      return oldState;
      break;
    default:
      // code block
      return oldState;
  }

}
function App() {
  //2.1 Hooks area
 //const [var, setVar]  = useState();
  const [currentValue, dispatch]  = useReducer(reducer,initialState);
  console.log(currentValue.value)
  return (
    <>
      <h1>Name = {currentValue.value.name}</h1>
      <h1>Surname = {currentValue?.value?.surname}</h1>
      <button onClick={ () =>{ dispatch({type:"CHANGEMYNAME",payload:"Sunil"}) }}>ChangeMyName</button>
      <button onClick={ () =>{ dispatch({type:"CHANGEMYSURNAME",payload:"Sharma"}) }}>ChangeMySurname</button>
    </>
  )
}

export default App
