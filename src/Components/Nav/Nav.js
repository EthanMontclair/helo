import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Nav</h1>
                <button><Link to='/dashboard'>Home</Link></button>
                <button><Link to='/new'>New Post</Link></button>
                <button><Link to='/'>Logout</Link></button>
            </div>
        )
    }
}

export default Nav