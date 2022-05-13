import React from "react";
import './App.css';
import { NextBtn } from './components/NextBtn';

function Quest3({}) {

  return (
        <div className="page">
          <NextBtn link="/" heading1="Polling Unit" heading2="Results"/>
          <div className="container">
            <div className="polling-container">
              <div>
              <div className="form">
              form container
              </div>
            </div>
          </div>
            <div className="results-container">
              <div className="result">
            results container
              </div>
            </div>
          </div>
        </div>
  );
}

export default Quest3;

