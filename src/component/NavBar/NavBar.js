import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.png';
import './NavBar.css';
import axios from 'axios';



export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: null,
            showMenu: true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    componentDidMount(){
        axios.get("/auth/me").then((res) => {
            this.setState({user: res.data})
        })
    }
    render() {
        let {showMenu} = this.state;
        let slideCSS = showMenu ? 'slide-menu slide-menu-position' : 'slide-menu';
        let textFadeCSS = showMenu ? 'menu-text menu-text-fade-in' : 'menu-text';
        let mobileLinks = showMenu ? 'box mobileLinks-slide' : 'box';
        let box2CSS = showMenu ? 'box box2-slide' : 'box';
        let box3CSS = showMenu ? 'box box3-slide' : 'box';
    return(
        <div>
            <div>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <header>
            <nav className="desktop-nav">
                <div className='link-wrap'>
                        {
                            this.state.user
                            ?
                            <a href={process.env.REACT_APP_LOGOUT} className='desktop'>Logout</a>
                            :
                            <a href={process.env.REACT_APP_LOGIN} className='desktop'>Login</a>
                        }
                    <Link to='/' className='desktop'>Home</Link>
                    <Link to='/Products' className='desktop'>Menu</Link>
                    <Link to='/Cart' className='desktop'>Cart</Link>
                    <Link to='/Contact' className='desktop'>Contact</Link>
                    </div>
            </nav>
            </header>
        </div>
        )
    }
}

