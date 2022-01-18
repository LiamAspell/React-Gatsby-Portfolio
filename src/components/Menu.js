import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/landing">Skills and Certifications</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/generic">Projects</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/elements">Work Experience</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/contact">Contact Me</Link></li>
            </ul>
        </div>

        {/*<ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        */}
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu;
