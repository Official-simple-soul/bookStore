import React from 'react'

const SignInSignUp = () => {
  return (
    <div>
        <div className="right-main bg-secColor3 hidden md:flex justify-center items-center space-x-4 px-4 py-2 rounded-lg">
            <i class="fa-solid fa-lock"></i>
            <p className="sign-in">Sign In</p>
            <button className='py-1 px-4 rounded-lg shadow-lg'>Create Account</button>
        </div>
    </div>
  )
}

export default SignInSignUp