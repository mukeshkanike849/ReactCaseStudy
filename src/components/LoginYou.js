/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function LoginYou() {
  return (
    <div>
        
        <section class='Form my-4 mx-4'>

            <div class='container' >
                <div class='row'>

                    <div class='col-lg-5'>
                        <img src={require("../images/techno-elevate-login-page-image-1.png")} style={{ width: "50%" }} class='img-fluid' alt="" />
                    </div>

                    <div class='col-lg-7'>
                        <form>
                            <div class='form-row'>
                                <div class='col-lg-7'>
                                    <input type="email" placeholder='Email-Address' class='form-control' />
                                </div>
                            </div>

                            <div class='form-row'>
                                <div class='col-lg-7'>
                                    <input type="password" placeholder='********' class='form-control' />
                                </div>
                            </div>

                            <div class='form-row'>
                                <div class='col-lg-7'>
                                    <button type='button' class='btn1'>Login</button>
                                </div>
                            </div>

                            <a href="#">Forgot password</a>

                            <p>Don't have an account ? <a href='#'>Register here</a></p>
                        </form>
                    </div> 
                </div>
            </div>

        </section>
    </div>
  )
}

export default LoginYou;