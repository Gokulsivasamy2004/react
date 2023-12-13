import './Login.css'
import {Link} from 'react-router-dom'
function Login(){
    return(
        <div class="login-page">
  <div class="form">
    <form class="register-form">
      <input type="text" placeholder="name"required/>
      <input type="password" placeholder="password"required/>
      <input type="text" placeholder="email address"required/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
        <h3>Login Page</h3>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <Link to='/Home'><button>login</button></Link>
      <p class="message">Not registered? <Link to='/Register'>Create account</Link></p>
    </form>
  </div>
</div>
    )
}
export default Login;