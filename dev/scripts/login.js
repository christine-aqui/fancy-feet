import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
            {this.props.data.loggedIn ? <p>Sign Out </p> : <p> Login </p> }
            </div>
        )
    }
    
 }

 export default Login; 