import { useState } from 'react'
import './SignUpForm.css'

interface User {
  name: string,
  email: string,
  password: string
}

export const SignUp = () => {

const [user, setUser] = useState<User>({
  name: '',
  email: '',
  password: ''
})

const handleSubmit = (event: any) => {
  
}

const handleChange = (event: any) => {
  event.preventDefault()
  const { name, value } = event.target;
  setUser(prevState => ({...prevState, [name]: value}))
  console.log(user)
}

  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate >
          <div className='fullName'>
            <label htmlFor="fullName">Full Name</label>
            <input type='text' name='name' onChange={handleChange}/>
          </div>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={handleChange}/>
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={handleChange}/>
          </div>              
          <div className='submit'>
            <button>Register Me</button>
          </div>
        </form>
      </div>
    </div>
  )

}