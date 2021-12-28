/*Icon cheatsheet = https://fontawesome.com/v5/cheatsheet/free/brands */

import React from 'react'
  

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
               
                <li><a href="https://stackoverflow.com/users/12406476/liam-aspell" className="icon alt fa-stack-overflow"><span className="label">Stack overflow</span></a></li>
                <li><a href="https://github.com/LiamAspell" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/liam-aspell-969822160/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <h7>Liam Aspell 2021</h7>
            </ul>
        </div>
    </footer>
)

export default Footer
