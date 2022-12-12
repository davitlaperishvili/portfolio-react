import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'

export default function Login() {
    const [ formValue, setFormValue] = useState({
        email: '',
        pass: ''
    })
    const auth = getAuth();
    function onFormSubmit(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formValue.email, formValue.pass)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          // ...
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      }
      function handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        const inputItem = {...formValue, [name]: value};
        setFormValue(inputItem)
      }
  return (
    <div className="login_form">
          <div className="form_wrap">
            <form action="" onSubmit={onFormSubmit}>
              <div className="form_items">
                <div className="form_item">
                  <input type="email" name="email" placeholder="Email" value={formValue.email} onChange={handleInputChange}/>
                </div>
                <div className="form_item">
                  <input type="password" name="pass" placeholder="Password" value={formValue.pass} onChange={handleInputChange}/>
                </div>
                <div className="form_item form_submit">
                    <button type="submit" className="gilaki">Log In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
  )
}
