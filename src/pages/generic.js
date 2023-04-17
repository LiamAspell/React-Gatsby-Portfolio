import React from 'react'
import { useState } from 'react';
import Helmet from 'react-helmet'
import {FaGithub, FaYoutube, FaPDF} from 'react-icons/fa';
import {AiFillFilePdf} from 'react-icons/ai';
import gif from '../assets/images/Command Pattern.gif'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import BannerLanding from '../components/BannerLanding'
import Python from 'react-icons/fa'
import pic08 from '../assets/images/pic08.png'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.png'
import pic11 from '../assets/images/pic11.jpg'
import pic12 from '../assets/images/Jenkins.png'
import pic13 from '../assets/images/MachineLearning.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Liam Aspell</title>
            <meta name="description" content="Generic Page" />
        </Helmet>


        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Projects</h1>
                    </header>

                    
                    <h2 id="content">Interactive Python Browser Games representing Bebras Tasks</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div>
                            <p>This was my Final Year capstone project, completed over a 6 month phase.</p>
                            <p>This was a solo project completed as part of the music programming module in Final Year.</p>
                            <p>It is a command line based application, which takes letters as arguments, that generates svg code for a variety of different shapes, which can be coloured or styled accordingly. It is basically a minimized version of MS Paint for SVG shapes</p>
                            
                            <ul className="icons">
                                <a href="https://github.com/LiamAspell/Final-Year-Project---Browser-Games-inspired-by-Bebras-Tasks/"><FaGithub  color="white" size="3rem"/></a>
                                <a href="https://www.youtube.com/watch?v=yy7FE2FxwpI&feature=youtu.be&ab_channel=LiamAspell"><FaYoutube  color="red" size="3rem"/></a>
                                <a href="https://github.com/LiamAspell/Final-Year-Project---Browser-Games-inspired-by-Bebras-Tasks/blob/main/Liam%20Aspell%20CSSE%20Thesis.pdf"><AiFillFilePdf  color="LightBlue" size="3rem"/></a>
                            </ul>
                        </div>
                        {/*<span><img src={pic11} height="600px" width="600px" /></span>*/}
                    </div>

                    
                    <h2 id="content">Spotify Unwrapped, A music programming project</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div>
                            <p>This was a solo project completed as part of the music programming module in Final Year.</p>
                            <p>It is a command line based application, which takes letters as arguments, that generates svg code for a variety of different shapes, which can be coloured or styled accordingly. It is basically a minimized version of MS Paint for SVG shapes</p>
                            <p>During this project I learned how to use design patterns such as the memento pattern, factory pattern among others, to implement different functions, such as undo and redo.</p>
                            <ul className="icons">
                                <a href="https://github.com/LiamAspell/SpotifyUnwrapped"><FaGithub  color="white" size="3rem"/></a>
                                <a href="https://www.youtube.com/watch?v=Cdv-MGwgIWs&ab_channel=LiamAspell"><FaYoutube  color="red" size="3rem"/></a>
                                <a href="https://github.com/LiamAspell/SpotifyApi/blob/master/Report%20-%2017300046.pdf"><AiFillFilePdf  color="LightBlue" size="3rem"/></a>
                            </ul>
                        </div>
                        {/*<span><img src={pic11} height="600px" width="600px" /></span>*/}
                    </div>

                    <h2 id="content">SVG Code Generator implementing C# and .NET Framework</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div>
                            <p>I completed this project over the course of a semester as part of the Software Design Patterns module.</p>
                            <p>It is a command line based application, which takes letters as arguments, that generates svg code for a variety of different shapes, which can be coloured or styled accordingly. It is basically a minimized version of MS Paint for SVG shapes</p>
                            <p>During this project I learned how to use design patterns such as the memento pattern, factory pattern among others, to implement different functions, such as undo and redo.</p>
                            <ul className="icons">
                                <a href="https://github.com/LiamAspell"><FaGithub  color="white" size="3rem"/></a>
                            </ul>
                        </div>
                        {/*<span><img src={pic11} height="600px" width="600px" /></span>*/}
                    </div>
                  
                    <h2 id="content">Personal Portfolio Website implementing ReactJS and GatsbyJS</h2>
                    <p>This project is the Website that you are currently visiting! There was a few iterations of this project before it, but this is the most recent iteration and is the best looking, fastest performing and the one with the most features so far.</p>
                    <p>In a way it represents a journey of learning to code, from the very basics of html and css, front end frameworks, some javascript operations, use of react hooks and use of GatsbyJS.</p>
                    <p>The website with hosted with the aid of netlify, which is a very basic hosting service, in order to give it a location on the web.</p>
                    <p>Overall, the project was very easy to setup and style and I will be making adding further features to it in the future.</p>
                    <ul className="icons">
                        <a href="https://github.com/LiamAspell"><FaGithub  color="white" size="3rem"/></a>
                    </ul>

                    <h2 id="content">Golf Tracker</h2>
                    <p>This is a project that I built as part of a team for a module in third year of University. It ran for three months overall and the objective was to collaborate to build an application of some type.</p>
                    <p>We decided to build an application to record and track golf scores, so that an individual user could track their statistics over time, and get a more accurate view of their scores in order to recognise their strengths and weaknesses.</p>
                    <p>I played in active role in the production of this project. Initially, I designed a navigation bar to link all of the different pages together. After this I worked on a profile page, and helped with the production of some of the other pages, before finally documenting the project and performing some testing.</p>

                    <ul className="icons">
                        <a href="https://github.com/LiamAspell"><FaGithub  color="white" size="3rem"/></a>
                    </ul>


                    

                    {/*Insert the Gif here at later stage*/}

                </div>
            </section>
        </div>

    </Layout>
);


export default Generic