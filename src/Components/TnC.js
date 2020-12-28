import React from 'react'

const TnC = () => {
  const tncArr = [
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
    "The TechoKids Referral Program eligibility is determined by TechoKids at its sole discretion",
    "We reserve the right to disqualify any member that obtains a Free Trial through fraud or abuse of this Referral Program or otherwise in violation of these terms.",
  ]

  return (
    <div>
      <h2>Terms and Conditions</h2>
      {
        tncArr.map((item,index) => {
          return (
            <div>
              <p>{index+1}. &nbsp; {item} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TnC;