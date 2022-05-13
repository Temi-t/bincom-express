import React from "react";
import './App.css';
import { NextBtn } from './components/NextBtn';
import {useParams} from 'react-router-dom';

function Quest2({lga, handleLga, partySum}) {
  const params = useParams();

  return (
        <div className="page">
          <NextBtn link="/quest3" heading1="Local government" heading2="Results"/>
          <div className="container">
            <div className="polling-container">
              <div>
              <div className="form">
                  <select className="lga-choice" onChange={handleLga}>
                    {
                      lga.map((unit, i)=>(
                        <option key={"lga unit_"+i} value={unit.lga_id}>          
                          {unit.lga_name}
                        </option>))
                    }
                  </select>
              </div>
            </div>
          </div>
            <div className="results-container">
              <div className="result">
                {
                 /* partySum.map((result, i)=>{
                    return(
                      <ul key={"result_"+i} className="list-container">
                        <li> {result.party_abbreviation}:  {result.party_sum} </li>
                        <li>{result.lga_name} Total: ...  </li>
                      </ul>
                    )
                  })*/
                }
              </div>
            </div>
          </div>
        </div>
  );
}

export default Quest2;

