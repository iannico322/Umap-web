
import { Welcome} from './screen/welcome/welcome';
import { Login } from './screen/login/login';
import { Register } from './screen/register/register';
import { Profile } from './screen/profile/profile';
import MainDasboard from './screen/main/main';
import { Admin } from './screen/admin/admin';
import Guest from './screen/main/guest';
import { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';

function App() {
  const [name,setName] = useState('');
  const [mobile,setMobile] = useState('');
  const [email,setEmail] = useState('');

  const handleSubmit = () => {
    if(name.length === 0){
      alert("Name has left Blank!");
    }
    else if(mobile.length === 0){
      alert("Mobile has left Blank!");
    }
    else if(email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/enquiry.php';
      let fData = new FormData();
      fData.append('name', name);
      fData.append('mobile', mobile);
      fData.append('email', email);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }

  return (
    <>
      <div className='container'>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="mobile">Mobile</label>
        <input type="text" name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="button" name="submit" id="submit" value="SEND" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default App;
