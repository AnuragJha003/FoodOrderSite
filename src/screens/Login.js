import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
 
const Login = () => {
  const [credentials,setcredentials]=useState({email:"",password:""})
  let navigate=useNavigate();
  const handleSubmit= async(e)=>{
      e.preventDefault();
      //synthetic event 
      const response= await fetch("http://localhost:5000/api/loginuser",{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
          },
          body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json=await response.json()
      console.log(json);

      if(!json.success){
          //if false
          alert("Enter valid creds"); 
      }
      if(json.success){
        localStorage.setItem("authToken",json.authToken); //cache m store ho rha auth token 
        //storing the email in the localstorage so that for user specific detail can be made
        localStorage.setItem("userEmail",credentials.email);
        //everytime we will have a new auth token generated login is tried and stored in the cache for some while 
        console.log(localStorage.getItem("authToken"));
        navigate("/");//home page m aaja 

      }
  }

  const onChange= (event)=>{
      setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  return (
    <div> <div className="container">
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name="email" value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credentials.password} onChange={onChange} />
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>

  <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
</form>
</div></div>
  )
}

export default Login