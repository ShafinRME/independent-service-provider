import React from 'react';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import './Home.css'
import pic from '../../../images/Website-head.png'

const Home = () => {
    return (
        <div >
            <h1 className='website-name'>Einstein School</h1>
            <div className='web-head'>
                <div className='web-head-title'>
                    <h3>Learn Something</h3>
                    <h4>With</h4>
                    <h3>Infinity Fun</h3>
                </div>
                <div>
                    <img src={pic} alt="" />
                </div>
            </div>
            <Banner></Banner>
            <Services></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;