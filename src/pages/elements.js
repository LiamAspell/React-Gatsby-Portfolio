import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import Oracle from '../assets/images/oracle.png'
import Oneview from '../assets/images/oneview.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import HarveyNorman from '../assets/images/harveynorman.png'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Liam Aspell</title>
            <meta name="description" content="Elements Page" />
        </Helmet>
        
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>My Work Experience</h1>
                    </header>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '15px'
                    }}>
                      
                            <div>
                                {/*<h2 id="content">Oracle Corporation</h2>*/}
                                <img src={Oneview} width="450px" height='100px' />
                                <h4>Dublin, Ireland</h4>
                                <h5>July 2022 - September 2022</h5>
                                <p>I joined Oracle in June of 2021 as a QA Tools Intern. Originally I expressed an interest in joining the QA tools division of Oracles International Product Solutions (IPS) team. After undertaking a 2nd Year Software Testing Module during my degree, I developed a special interest in the testing process. Passionate to learn more of the impact of QA on modern software development, I was enthused and motivated to join and get working.</p>

                            </div>


                        
                
                        </div>

                        <hr className="major" />
                    
                        <div>
                            {/*<h2 id="content">Oracle Corporation</h2>*/}
                            <img src={Oracle} width="300px" height='200px' />
                            <h4>Dublin, Ireland</h4>
                            <h5>June 2021 - June 2022</h5>
                            <p>I joined Oracle in June of 2021 as a QA Tools Intern. Originally I expressed an interest in joining the QA tools division of Oracles International Product Solutions (IPS) team. After undertaking a 2nd Year Software Testing Module during my degree, I developed a special interest in the testing process. Passionate to learn more of the impact of QA on modern software development, I was enthused and motivated to join and get working.</p>

                        </div>
                       
                        <hr className="major" />
                       
                        <div>
                            <img src={HarveyNorman} width="300px" height='200px' />
                            <h4>Kildare, Ireland</h4>
                            <h5>October 2019 - May 2021</h5>
                            <p>I  worked in Harvey Norman in Naas, Co.Kildare for 1 year and 9 months, mostly on a part time basis while progressing through University. All of the positions I carried out during my time there were within the Computers Department, which most interested me. I was originally hired as a Sales person, but advanced into a tech support role soon after. This was a very enjoyable job for me, due to my interest in Computer Hardware, Troubleshooting and resolving issues for customers. </p>
                        </div>
                </div>
            </section>

            

    </Layout>
)

export default Elements