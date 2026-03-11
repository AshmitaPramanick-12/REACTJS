import React from 'react'
import { Bookmark } from 'lucide-react'
const Card = (props) => {

  console.log(props)
  return (
   <div className="card">
       <div>
         <div className="top">
          {/* <img src="https://tse4.mm.bing.net/th/id/OIP.yNz3G8-Z4E7S7ErGUYCkiAHaEK?pid=Api&P=0&h=180" alt="" /> */}
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark size={12}  /></button>
        </div>
        <div className='center'>
          {/* <h3>Amazon <span>5 days ago</span></h3> */}
          {/* <h3>{props.company} <span>5 days ago</span></h3> */}
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          {/* <h2>Senior UI/UX Designer</h2> */}
          <div className='tag'>
            {/* <h4>PartTime</h4> */}
            <h4>{props.tag1}</h4>
            {/* <h4>Senior Level</h4> */}
            <h4>{props.tag2}</h4>
          </div>
        </div>
       </div>
        <div className="buttom">
          <div>
              {/* <h3>$120/hr</h3> */}
              <h3>{props.pay}</h3>
              {/* <p>Mumbai,India</p> */}
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
