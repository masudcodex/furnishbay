import React from 'react';
import bgImage from '../../../Assets/Images/subscribe-bg.jpg';

const Subscribe = () => {

    return (
        <div className='py-20 bg-center bg-white' style={{backgroundImage: `url(${bgImage})`}}>
            <h2 className='text-xl mx-5 font-bold mt-5 text-center pb-10 text-white'>Send me exclusive offers, prdoucts, and personalized tips for buying and selling on Furnishbay.</h2>
            <div className="input-group justify-center">
                <input type="text" className='input md:w-96' name='email' placeholder='Enter your email'/>
                <button type='submit' className="btn btn-md btn-secondary md:w-60 text-white">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;