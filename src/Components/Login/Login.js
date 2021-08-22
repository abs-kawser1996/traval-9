import { div } from  'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom';




const Login = () => {
  let history = useHistory();




function createAccount (){
  history.push("/CreateAccount");

}

    return (
        <div className="Login-MainContainer">
<div className="Login-from">
            <Form>
    <h2>Login</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <div id="check-Box"> 
    <Form.Check type="checkbox" label=" Remember me"/>
       
    {/* <p>forgot password</p> */}

    </div>
  </Form.Group>
  <button id="login-div">
    Login
  </button>
</Form> 

<div className="create_Account">
    <p>Don't have an account?<span onClick={createAccount}>create Account</span></p>
</div>


</div>
      

 <br />

<div id="Login_OR" >
    Or 
</div>
{/* fb and google sign in part */}
<div className="social"> 
<div className="Login_fb_google">
  <i  class="fab fa-facebook"></i>
  <p >Continue with Facebook</p>
 </div>

<div className="Login_fb_google">
<i class="fab fa-google"></i>
<p >Continue with Google</p>
</div>


        </div>
        </div>
    );
};

export default Login;