import React from 'react';


export default function() {
  return (
    <>
    <section className="back">
    <img src="./woood.jpg" alt=""/>


    <div className="heros-container">

      <div className="form-left">
        <form>
          <h1>Login</h1>
          <div className="inputs-box">
            <input type="text" placeholder="Email" required />
            <i class="fa fa-envelope" aria-hidden="true"></i>
           </div>
          <div className="inputs-box">
            <input type="password" placeholder="Password" required />
            <i class="fa fa-lock" aria-hidden="true"></i>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/>Keep Me Login</label>
          <a href="#">Forgot Password?</a>
          </div>

          <button type="submit"className="btn">Login</button>
          <div className="register-link">
            <p>Don't have an account? <a href="#">Create Account</a></p>
          </div>

          <div className='btn2'>
            <h3 className="line">
              Login With
            </h3>
            </div>

            <div className="social">
            <i class="fa-brands fa-google"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-twitter"></i>
      
      </div>
          
        </form>

      </div>

      <div className="form-right">
        <div className="come">
        <h1>Welcome <br/>Back!</h1>
        </div>
        
      </div>


    
    </div>
    </section>
    </>
     
   
   
   )

}