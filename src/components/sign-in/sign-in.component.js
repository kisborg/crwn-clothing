import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =  async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleChange = (e) => {
    const { value, name } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  }
  return (
    <div className="sign-in">
      <h2>I already have and account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={email}
          label="email"
          handleChange={handleChange}
          required 
        />
        <FormInput 
          name="password" 
          type="password" 
          value={password}
          label="password"
          handleChange={handleChange} 
          required 
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
        </div>
      </form>
    </div>
  )
}
