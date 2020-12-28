import React from 'react'

const Faq = () => {
  const faqArr = [
    {
      id: 1,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 2,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 3,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 4,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 5,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 6,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 7,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
    {
      id: 8,
      ques: "How can I refer?",
      ans: " The student can invite/refer their friends: While booking their mention your name to TechoKids before hand. From the left table (Invite & win MacBook when you cross 10 referrals) From your school, neighbourhood, society or tuitions/coaching classes Once demo is booked share their number, name, email ID to TechoKids."
    },
  ]

  return (
    <div>
      <h2>FAQs & Strategies for "Refer & Earn"</h2>
      {
        faqArr.map((item,index) => {
          return (
            <div>
              <p>Q{item.id} &nbsp; {item.ques} <br />{item.ans} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Faq;