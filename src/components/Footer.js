/*Icon cheatsheet = https://fontawesome.com/v5/cheatsheet/free/brands */

import React from 'react'


const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
               
                <li><a href="#" className="icon alt fa-stack-overflow"><span className="label">#</span></a></li>
                <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <h7>Liam Aspell 2021</h7>
            </ul>
        </div>
    </footer>
)

export default Footer
