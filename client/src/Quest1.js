
import React from "react";
import './App.css';
import { NextBtn } from './components/NextBtn';

function Quest1({newArr, pollResults, handleResults}) {

  return (
        <div className="page">
          <NextBtn link="quest2" heading1="Polling Unit" heading2="Results"/>
          <div className="container">
            <div className="polling-container">
              <div>
              <div className="form">
                {
                  newArr.map((unit, i)=>{
                    return (unit &&
                    <button 
                        key={"pollUnit_"+i} 
                        className= "polling-card"
                        onClick={handleResults}
                        value={unit}
                      >
                        {unit}
                    </button>)
                  })
                }
              </div>
            </div>
          </div>
            <div className="results-container">
              <div className="result">
                {
                  pollResults.map((result, i)=>(
                    <ul key={"result_"+i} className="list-container">
                      <li>Result Id: {result.result_id}</li>
                      <li>Name: {result.polling_unit_name}</li>
                      <li>Party: {result.party_abbreviation}</li>
                      <li>Score: {result.party_score}</li>
                    </ul>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
  );
}

export default Quest1;

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
