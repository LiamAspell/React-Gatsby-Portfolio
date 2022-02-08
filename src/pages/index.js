import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.png'
import pic02 from '../assets/images/pic02.png'
import pic03 from '../assets/images/pic03.png'
import pic04 from '../assets/images/pic04.png'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import keys from '../assets/images/keys.jpg'
class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Liam Aspell"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>About Me</h2>
                            </header>
                        <div style={{
                            display: 'flex'
                        }}>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            {/* <img src={keys}  height="250px"/> */}
                        </div>
                            {/* <ul className="actions">
                                <li><Link to="/landing" className="button next">My Skills and Proficiencies</Link></li>
                                <li><Link to="/landing" className="button next">Some of my past / current Projects</Link></li>
                                <li><Link to="/landing" className="button next">My Working Experience (So Far!)</Link></li>
                                <li><Link to="/landing" className="button next">To Contact Me</Link></li>
                            </ul> */}
                            {/* <ul className="actions">
                                <li><Link to="/landing" className="button next">My Skills and Proficiencies</Link></li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/generic" className="button next">Some of my past / current Projects</Link></li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/elements" className="button next">My Working Experience (So Far!)</Link></li>
                            </ul>
                            <ul className="actions">
                                <li><Link to="/contact" className="button next">To Contact Me</Link></li>                                
                            </ul> */}
                        </div>
                    </section>

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Skills and Certifications</h3>
                                <p>What I'm good at!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Projects</h3>
                                <p>Some ideas I have executed (or attempted!)</p>
                            </header>
                            <Link to="/generic" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Work Experience</h3>
                                <p></p>
                            </header>
                            <Link to="/elements" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Contact Me</h3>
                                <p>Have a Query?</p>
                            </header>
                            <Link to="/contact" className="link primary"></Link>
                        </article>
                        
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex