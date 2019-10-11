import React, {Component} from 'react'
import {Link} from 'react-router-dom'

  export default class NavBar extends Component{
    render(){

      return(
        <div className='nav-bar'>
        
        <div className='left-side'>
        <Link to='/'>Home</Link>
        <Link to='/conversations'>Conversations</Link>
        </div>
        <div className='right-side'>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
        </div>
        
        </div>
)
}
}