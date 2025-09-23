import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../store/userSlice';

export default function Test() {
    //2.1 
                                      //state.sliceName.propertyName
    const name = useSelector((state) => state.user.name);
    const dispatch = useDispatch();
  return (
    <>
        <h1>{name}</h1>
        <button onClick={()=>{ dispatch(changeName("Sunil")) }}>ChangeMyName</button>
    </>
  )
}
