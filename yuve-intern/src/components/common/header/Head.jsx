import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <img style={{height:'5rem',borderRadius:'50%'}} src='./images/logo/yuva-intern.png' alt="error" />
          <div className='logo'>
            <h1>YUVA-INTERN</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
            <a className='fab fa-facebook-f icon' href="http://sliet.ac.in/" target="_blank"></a>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-linkedin icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
