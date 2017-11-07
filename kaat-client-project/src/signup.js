import React, { Component } from 'react';
import './App.css';
import './template-style/css/bootstrap.min.css';
import './template-style/css/mdb.min.css';
import $ from 'jquery';

class Signup extends Component {
    handleClick = (e) => {
      e.preventDefault();
       var firstName = this.refs.first_name.value;
       var lastName = this.refs.last_name.value;
       var email = this.refs.email.value;
       var password = this.refs.password.value;

      $.ajax({
        url: 'http://localhost:5000/users',
        type: 'POST',
       data: { user: { firstName: firstName, lastName: lastName, email: email, password: password } },
        success: (response) => {
          console.log('it worked!', response);
        }
        });
      }

      render() {
        return (
          <div>
            <label htmlFor='first_name'> First Name: </label>
             <input id='first_name' ref='first_name' placeholder='Enter first name' />
             <br />

             <label htmlFor='first_name'> Last Name: </label>
             <input ref='last_name' placeholder='Enter last name' />
             <br />

             <label htmlFor='first_name'> Email: </label>
             <input ref='email' placeholder='Enter email' />
             <br />

             <label htmlFor='first_name'> Password: </label>
             <input ref='password' placeholder='Enter password' />
             <br />

             <label htmlFor='first_name'> Password confirmation: </label>
             <input ref='password_confirmation' />
             <br />

             <button onClick={this.handleClick}>Submit</button>
            </div>
          )
        }
}


  // imgonnadosomething = (e) => {
  //   e.preventDefault()
  //
  //   // send info to backend to create user
  //   // do something with response
  // }
//
//   render() {
//     return (
//       <div className="view-other hm-black-light">
//         <br/>
//         <h2>Sign up</h2>
//         <br/>
//         <form onSubmit={ this.handleSubmit }>
//           <ul>
//             <li> First name: <input type="text" name="user[first_name]"/><br/> </li>
//             <li> Last name: <input type="text" name="user[last_name]"/><br/> </li>
//             <li> Email: <input type="text" name="user[email]"/><br/> </li>
//             <li> Password: <input type="password" name="user[password]"/><br/> </li>
//             <br/>
//             <input type="submit" value="Sign Up"/>
//           </ul>
//         </form>
//       </div>
//     );
//   }
// }

export default Signup;
