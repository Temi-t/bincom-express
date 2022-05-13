import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import Quest1 from './Quest1';
import Quest2 from './Quest2';
import Quest3 from './Quest3';

function App() {
  const [pollUnits, setPollUnits] = useState([]);
  const [pollResults, setPollResults] = useState([]);
  const [lga, setLga] = useState([])
  const [partySum, setPartySum] = useState([])

  //fetch pollUnits
  useEffect(()=>{
    function fetchPollUnits(){
      Axios.get('http://localhost:3001/api/pollunits')
      .then(res => {
        setPollUnits(res.data)
      })
      .catch(err => console.log(err))
      }
    fetchPollUnits()
  }, [])
  let unitArr = []
  pollUnits.map((poll)=> unitArr.push(poll.polling_unit_name))
  let newArr = unitArr.filter((ele, i)=> unitArr.indexOf(ele) === i)

  //fetch lga
  useEffect(()=>{
      function fetchLga (){
      Axios.get('http://localhost:3001/api/lga')
      .then(res => {
        setLga(res.data)
      })
      .catch(err => console.log(err))
    }
    fetchLga()
  }, [])

  const handleResults = (e) =>{
    Axios.get('http://localhost:3001/api/pollResults')
    .then(res => {
    let singleUnit = res.data.filter((unit)=>{ 
      return unit.polling_unit_name === e.target.value
    })
      setPollResults(singleUnit)
    })
    .catch(err => console.log(err))
  }
  
  //fetch partySum
  useEffect(()=>{
    function fetchPartySum (){
      Axios.get('http://localhost:3001/api/partySum')
      .then(res => {
        setPartySum(res.data)
      })
      .catch(err => console.log(err))
    }
    fetchPartySum()
  }, []);

  const handleLga = (e) => {
    const lgaChoice = e.target.value;

    console.log('lgaChoice ==>>>',typeof lgaChoice)
    /*partySum.map((lgParties)=>{
      if(lgParties.lga_id === lga.lga_id ){
        console.log("Selected Lga =====>", )
      }
    });*/
    console.log(partySum,'+++++++', typeof lgaChoice)
    /*let result = lga.filter((o1)=> {
    return partySum.some((o2)=> {
        return o1.lga_id === o2.lga_id; // return the ones with equal id
        });
    });
   console.log("filtered===>", result)*/
    const res = partySum.filter((unit, i)=>{
      console.log(unit.lga_id, 'r>>>>>>', lgaChoice);
      //convert lgaChoice to number with ~~
      return unit.lga_id === ~~(lgaChoice)
    });
    console.log("result ====>", res)

  }
  return (
    <Router>
      <div className = "App" >
        <Routes>
          <Route path="/quest2" element={<Quest2 lga={lga} partySum={partySum} handleLga={handleLga}/>} />
          <Route  path="/quest3" element={<Quest3 />} />
          <Route  path="/" element={
            <Quest1 newArr={newArr} pollResults={pollResults} handleResults={handleResults} /> } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

              //<button className= "polling-card" ></button>
              //
                /*pollUnits.map((unit, i)=>{
                  return (unit.polling_unit_name &&
                  <button 
                      key={"pollUnit_"+i} 
                      className= "polling-card"
                      onClick={handleResults}
                      value={unit.polling_unit_name}
                    >
                      {unit.polling_unit_name}
                  </button>)
                })
                */

    //fetch('https://jsonplaceholder.typicode.com/todos/1')
