import { useState } from 'react'
import './SignUpForm.css'

interface User {
  name: string,
  email: string,
  password: string
}

interface Error {
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

  const [error, setError] = useState<Error>({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if (error.name == '' && error.email == '' && error.password == ''){
      alert('Submit OK')
    } else {
      alert('Error - Name: ' + error.name + ', Email: ' + error.email + ', Password: ' + error.password)
    }
  }

  const handleChange = (event: any) => {
    event.preventDefault()
    const { name, value } = event.target;
    
    // validations
    switch(name){
      case 'name':
        setError(prevState => ({...prevState, [name]: value.length < 5 ? 'Must contains more then 5 chars' : ''}))
        break
      case 'email':
        setError(prevState => ({...prevState, [name]: Regex.test(value)? '' : 'Email is not valid'}))
        break
      case'password':
        setError(prevState => ({...prevState, [name]: value.length < 8 ? 'Must contains more then 8 chars' : ''}))
        break
      default:
        break
    }
    
    setUser(prevState => ({...prevState, [name]: value}))
  }

  const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);


  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} noValidate >
          <div className='fullName'>
            <label htmlFor="fullName">Full Name</label>
            <input type='text' name='name' onChange={handleChange}/>
            <span style={{ fontSize: ".5rem", color: "red"}}>{error['name']}</span>
          </div>
          <div className='email'>
            <label htmlFor="email">Email</label>
            <input type='email' name='email' onChange={handleChange}/>
            <span style={{ fontSize: ".5rem", color: "red"}}>{error['email']}</span>
          </div>
          <div className='password'>
            <label htmlFor="password">Password</label>
            <input type='password' name='password' onChange={handleChange}/>
            <span style={{ fontSize: ".5rem", color: "red"}}>{error['password']}</span>
          </div>              
          <div className='submit'>
            <button>Register Me</button>
          </div>
        </form>
      </div>
    </div>
  )

}