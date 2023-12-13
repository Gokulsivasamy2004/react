import './Register.css';
import {Link} from 'react-router-dom'
function Register(){
    return(
        <div id="registration-form">
	<div class='fieldset'>
    <legend>Net Banking</legend>
		<form action="#" method="post" data-validate="parsley">
			<div class='row'>
				<label for='firstname'>First Name</label>
				<input type="text" placeholder="First Name" name='firstname' id='firstname' data-required="true" data-error-message="Your First Name is required"/>
			</div>
			<div class='row'>
				<label for="email">E-mail</label>
				<input type="text" placeholder="E-mail"  name='email' data-required="true" data-type="email" data-error-message="Your E-mail is required"/>
			</div>
			<div class='row'>
				<label for="cemail">Confirm your E-mail</label>
				<input type="text" placeholder="Confirm your E-mail" name='cemail' data-required="true" data-error-message="Your E-mail must correspond"/>
			</div>
			<Link to='/Home'><input type="submit" value="Apply"/></Link>
		</form>
	</div>
</div>
    )
}
export default Register;