import React, { useState } from 'react'
import ListApp from './components/ListApp';
import FormApp from './components/FormApp';
import './App.css'




function App() {
const [data, setData] = useState([{name:'Sahil', surname: 'Salmanov'}]);
  
    const handleFormSubmit = (name, surname) => {
      const newData = [...data, { name, surname }];
      setData(newData);
    };

    const deleteList = (e) => {
    let tr = e.target.parentElement.parentElement
    let td = tr.querySelectorAll('td')
    let name = td[0].innerText
    let surname = td[1].innerText
    let obj = {name: name, surname: surname}
    const filtered = data.filter(item => item.name != name && item.surname != surname)
    console.log(filtered)
    setData(filtered)
    }

   const clear = () => {
    setData([])
   }
  

    return (
      <div className='container'>
       <div><FormApp onSubmit={handleFormSubmit} /></div> 
      <div><ListApp data={data} delete = {deleteList} clear = {clear} /></div>  
      </div>
    );
  }
  
  export default App;




