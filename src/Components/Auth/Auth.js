import React, {Component} from 'react'
import axios from 'axios'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    handleUsernameInput(value) {
        this.setState({username: value})
    }

    handlePasswordInput(value) {
        this.setState({password: value})
    }

    login() {
      //axios call
    }

    register() {
         //axios call
    }

    render(){
        const { username, password } = this.state
        return(
            <div>
                <h1>Auth</h1>
                <input type="text" placeholder="Username" value={username}
                onChange={e => this.handleUsernameInput(e.target.value)}
                />
                <input type="text" placeholder="Password" value={password}
                onChange={e => this.handlePasswordInput(e.target.value)}
                />
                <button onClick={this.login}>Log In</button>
                <button onClick={this.register} id="reg">Register</button>
            </div>
        )
    }
}

export default Auth