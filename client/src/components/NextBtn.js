import {Heading} from './Heading';
import { Link } from "react-router-dom";

export function NextBtn({link, heading1, heading2}){
  return(
      <div className="next-container">
      <Heading heading={`${heading1}`}/>
      <Heading heading={`${heading2}`}/>

        <button className="next-btn">
          <Link to={`${link}`}>next {'>>'}</Link>
        </button>
      </div>
  )
}
