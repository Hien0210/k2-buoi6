import React from 'react'
import  { useState,useEffect } from 'react';

const Buoi6 = () => {  
    const [data,setData] = useState('')
    const [data1,setData1] = useState('')
    const [data2,setData2] = useState('')
  useEffect(() => {fetchData() },[])
  useEffect(() => {fetchData1() },[])
  useEffect(() => {fetchData2() },[])
  const fetchData = async () =>{
    try{
      const dataR = await fetch("https://jsonplaceholder.typicode.com/todos")
      const dataRes = await dataR.json()
      setData(dataRes);      
    } catch (err) {
      console.log("err", err.message);
    }
  }
  const fetchData1 = async () =>{
    try{
      const dataR1 = await fetch("https://jsonplaceholder.typicode.com/posts")
      const dataRes1 = await dataR1.json()
      setData1(dataRes1);      
    } catch (err) {
      console.log("err", err.message);
    }
  }
  const fetchData2 = async () =>{
    try{
      const dataR2 = await fetch("https://jsonplaceholder.typicode.com/users")
      const dataRes2 = await dataR2.json()
      setData2(dataRes2);      
    } catch (err) {
      console.log("err", err.message);
    }
  }
  return (
    <div className='data'>
        <div className='datalist'>
        {data.filter(d => d.id <=20).map((d,index) =>(
            <div key={index} className='dataitem'>            
            <p>title: {d.title}</p>
            <p>id: {d.id}</p>
            <p>completed: {d.completed}</p>
            </div>
        ))}
        </div>
       <div className='datalist'>
       {data1.filter(d => d.id <=20).map((d,index) =>(
            <div key={index} className='dataitem'>            
            <p>title: {d.title}</p>
            <p>id: {d.id}</p>
            <p>body: {d.body}</p>
            </div>
        ))}
       </div>
       <div className='datalist'>
       {data2.filter(d => d.id <=20).map((d,index) =>(
            <div key={index} className='dataitem'>           
            <p>id: {d.id}</p>
            <p>name: {d.name}</p>
            <p>username: {d.username}</p>
            <p>phone: {d.phone}</p>
            </div>
        ))}
       </div>
    </div>
  )
}

export default Buoi6
