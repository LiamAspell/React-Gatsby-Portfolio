import React from 'react'
import { useState } from 'react';
import Helmet from 'react-helmet'
import {FaGithub, FaLinkedin, FaHackerrank} from 'react-icons/fa';
import pic11 from '../assets/images/pic11.jpg'
import gif from '../assets/images/Command Pattern.gif'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Python from 'react-icons/fa'

import pic08 from '../assets/images/pic08.png'
import pic09 from '../assets/images/pic09.png'
import pic10 from '../assets/images/pic10.png'

import pic12 from '../assets/images/Jenkins.png'
import pic13 from '../assets/images/MachineLearning.jpg'



const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Liam Aspell 2021</title>
            <meta name="description" content="Generic Page" />
        </Helmet>


        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Projects</h1>
                    </header>

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

                    <h2 id="content">SVG Code Generator implementing C# and .NET Framework</h2>

                   
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div>
                            <p>I completed this project over the course of a semester as part of the Software Design Patterns module.</p>
                            <p>It is a command line based application, which takes letters as arguments, that generates svg code for a variety of different shapes, which can be coloured or styled accordingly. It is basically a minimized version of MS Paint for SVG shapes.</p>
                            <p>During this project I learned how to use design patterns such as the memento pattern, factory pattern among others, to implement different functions, such as undo and redo.</p>
                            <ul className="icons">
                                <a href="https://github.com/LiamAspell"><FaGithub  color="white" size="3rem"/></a>
                            </ul>                        
                        </div>
                        {/*<span><img src={pic11} height="600px" width="600px" /></span>*/}
                    </div>

                    <h2 id="content">Golf Tracker</h2>

                    <p>Donec eget  ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>

                    <ul className="icons">
                        <a href="https://github.com/LiamAspell"><FaGithub  color="white" size="3rem"/></a>
                    </ul>


                    <h2 id="content">Personal Portfolio Website implementing ReactJS and GatsbyJS</h2>
                    <p>Donec eget  ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>

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