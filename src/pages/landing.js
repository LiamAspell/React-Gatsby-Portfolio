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
            <title>Liam Aspell 2021</title>
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
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic13} alt="" width='100px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Jira</h3>
                            </header>
                            <p>Jira is a resource which I use everyday. It is very important in QA, as I use it to give feedback to developers on what fixes have worked correctly, what needs further work and to report any bugs that I come across while testing. It is an area which I feel largely knowledgable with and also a resource which helps me to stay organized. </p>
                            
                        </div>
                    </div>
                </section>
            </section>
            
           
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Skills</h1>
                    </header>
                    <p>This section will document the technologies I have worked with within my time at University and Work. I will talk about my experience with the technologies as well as .</p>
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                           
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                           
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
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
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                           
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={WorkingRemotely} alt="" width='90px'/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Working Remotely</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                        </div>
                    </div>
                </section>
            </section>

        </div>

       

    </Layout>
)

export default Landing
