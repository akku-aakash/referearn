import React, { useState } from 'react'
import img1 from '../Assets/Artboard 1.png'
import img2 from '../Assets/Mobile Version Image.png'
import gift from '../Assets/Gift.png'
import img3 from '../Assets/Artboard 8.png'
import img4 from '../Assets/Artboard 9.png'
import img5 from '../Assets/Artboard 10.png'
import '../Styles/Home.css'
import TnC from './TnC'
import Faq from './Faq'

const Home = () => {
  let [tnc, setDiv] = useState(true);

  const howWorks = [
    {
      img: img3,
      head: "Share your referral code",
      info: "Invite Friends & Family (by sharing your unique link)"
    },
    {
      img: img4,
      head: "Earn cash rewards",
      info: "They enrol, you start getting rewards"
    },
    {
      img: img5,
      head: "Win MacBook",
      info: "Accumulate upto 10 referrals & Win Macbook Pro"
    },
  ]

  const toggle = () => {
    setDiv( tnc= (!tnc) )
  }

  return (
    <div className="home">
      <div className="navbar"> Navbar </div>
      <div className="home-header">
        Refer and Earn
      </div>
      <div className="content">
        <img src={ window.innerWidth <= 600 ? img2 : img1 } width="100%" />
        <div className="content-info" style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap"}}>
          <div>
          <h1>Invite your friends to TechoKids and <br />Win Cash Rewards & MacBook!</h1>
          <p style={{fontSize: "1.25em", marginBottom: "2em"}}>Login to generate your unique referral link</p>
          <button id="login">Login</button>
          </div>
          <img id ="gift" src={gift} style={{float: "right"}} width="auto" height="200px" style={{margin: "1em"}} />
        </div>
        <div className="content-info">
          <h1>How it works?</h1>
          {
            howWorks.map( (item, index) => {
              return (
                <li key={index} style={{margin: "2em 0", fontSize: "1.25em"}}>
                  <img src={item.img} style={{width: "100px", float: "left", marginRight: "1em"}} />
                  <h4> {item.head} </h4>
                  <p> {item.info} </p>
                </li>
              )
            })
          }
        </div>
        <div id="tnc">
          <div className="button-group">
            <button onClick={toggle}><h3>T&C</h3></button><button onClick={toggle}><h3>FAQ</h3></button>
          </div>
          { tnc ? <TnC /> : <Faq /> }
        </div>
      </div>
      <div className="footer">
        <div className="footer-book">

        </div>
      </div>
    </div>
  )
}

export default Home;