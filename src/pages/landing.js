import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Python from 'react-icons/fa'
import y from '../components/Certification'

import Certificate from '../assets/images/Selenium.png'
import LinuxCommandLine from '../assets/images/LinuxCommandLine.png'
import LearningDocker from '../assets/images/LearningDocker.png'
import LearningPython from '../assets/images/LearningPython.png'
import WorkingRemotely from '../assets/images/WorkingRemotely.png'
import LearningGit from '../assets/images/Git.png'

import pic08 from '../assets/images/pic08.png'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.png'
import pic11 from '../assets/images/Jira-logo.png'
import pic12 from '../assets/images/Jenkins.png'
import pic13 from '../assets/images/MachineLearning.jpg'


const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Liam Aspell</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <div id="main">



            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Skills</h1>
                    </header>
                    <p>This section will document the technologies I have worked with within my time at University and Work. I will talk about my experience with the technologies as well as.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Python</h3>
                            </header>
                            <p>Python is one of the newer languages that I have learned, due to my university programming modules delivered mostly in Java and C#, but quickly became one of my favourite coding languages. I use python when I first began my career at Oracle, writing scripts that would automate different jobs that would be ran on a daily basis. These scripts include operations such as unzipping and zipping folders, and building .ini files to support automation.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div className="box alt">
                        <div className="col-4"><span className="image fit"><img src={pic09} alt="" /></span></div>
                     </div> 
                    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Java</h3>
                            </header>
                            <p>Java was the first programming language I learnt when I began my Computer Science and Software Engineering degree. Add filler about modules taken here. Although I dont use Java in my daily work, I test software built in Java within the Oracle Suite. For this it is important to me to remain familiar with the language when attempting to understand how and bugs are happening within the programs in the manner that they do.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" height={350} />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Docker</h3>
                            </header>
                            <p>Docker is another technology that I learned at the beginning of my time at Oracle. Building many new images and containers, and running scripts to automate this work along with creating Dockerfiles to build my images. I feel it is an important technology to know, and aids me especially within my job as a QA Engineer, where I am required to create new images and containers running new builds on a weekly basis. Docker with the aid of bash scripting allows me to do this very efficiently.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic11} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jira</h3>
                            </header>
                            <p>Jira is an important asset that I contribute to quite regularly. Especially as an intern, its important that I document the tests I have ran previously, so I can easily reference my previous work when tasked with a new issue that may be similar. It has also been a useful resource for learning how to document work correctly, allowing me to communicate with the developers in a concise, efficient manner.</p>
                            
                        </div>
                    </div>
                </section>
                <section>
                    <div className="box alt">
                        <div className="col-4"><span className="image fit"><img src={pic12} alt=""   /></span></div>
                     </div> 
                    
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jenkins</h3>
                            </header>
                            <p>Jenkins is a technology that I still feel quite inexperienced in, although I have done a lot of work with Jenkins machines from both a QA and Machine Learning Context. It is something that is widely used and my experience with this up to now will serve me when getting more comfortable with kubernetes, which is a technology I hope to learn more about in the future.</p>
                            
                        </div>
                    </div>
                </section>
                
            </section>
            
           
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Certifications</h1>
                    </header>

                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={Certificate} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Learning Selenium</h3>
                            </header>
                            <p>Selenium is a technology I first learnt in Third Year of University, in the form of a team project, where we created a website and found it necessary to run some walkthrough tests with the aid of Selenium. Since then I attained this certification, and have wrote some selenium test scripts for this website to ensure all of the pages load successfully, and buttons, links work as expected.</p>
                           
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={LinuxCommandLine} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Learning Linux Command Line</h3>
                            </header>
                            <p>This was a very enjoyable certification which acted mostly as a refresher. I used the linux command line a good bit in University, but since I took this course and applied the various different commands on a daily basis, inside docker, the windows subsystem for linux and within virtual machines, my knowledge of the command line continues to develop.</p>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={LearningDocker} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Learning Docker</h3>
                            </header>
                            <p>This course gave me a comprenhensive introduction into how to use Docker. I learned how to build Dockerfiles which I could then use to build images, which I could then use to build containers, and how to pass files into these containers which I could use in my testing. I also learnt how to use vim as part of this certification, for creating, editing files efficiently.</p>
                           
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={LearningPython} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Learning Python</h3>
                            </header>
                            <p>Due to my prior knowledge of Object Orientated Programming methodoligies, Python was a language I could pick up quite easily, with the aid of this course. It taught me a little bit about the background of python, some of the attributes, such as the importance of indentation. This course helped prepare me for some of the work writing scripts I would go on to do in Oracle</p>
                        </div>
                    </div>
                </section>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={LearningGit} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Learning Git</h3>
                            </header>
                            <p>Version Control is one of the most important skills in software development. I gained a cert in Git from Linkedin Learning during my first few weeks at Oracle. I now use Git frequently through github, and am able to use the commands more comfortably with practice over time. This helps me to keep a better track over the development of my personal projects.</p>
                           
                        </div>
                    </div>
                </section>
                
            </section>

        </div>

       

    </Layout>
)

export default Landing
