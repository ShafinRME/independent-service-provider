import React from 'react';
import './About.css'
import myphoto from '../../images/Banner/profesional pic.jpg';

const About = () => {
    return (
        <div className='about'>
            <div>
                <img src={myphoto} alt="" />

            </div>
            <div>
                <h2>Md Shafin Ahmed</h2>
            </div>
            <div className='my-journey'>
                <h3>My Journey</h3>
                <p>
                    First time i hear about this course from youtube.Then i feel interest to become a Web Developer.Then December 2021 i enroll this course by paying from my tuition income.So i am fully determined to be a successful person in this journey.Now I am working by giving best effort.I never be sure that i will be successful but i am sure that i will try for this success till the last time of my Life.Alhamdulillah.Please keep me on your prayers.Thank you.
                </p>
            </div>
        </div>
    );
};

export default About;