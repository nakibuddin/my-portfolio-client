import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
    const [isWait, setIsWait] = useState(0);
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact')
    }

    setTimeout(() => {
        setIsWait(1);
    }, "1500")

    return (
        <div className='about-me mb-5 md:mx-16 bg-gray-800'>
            <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                <h1 className='text-center text-white text-3xl font-bold my-4'>About Me</h1>
                <h3 className='md:mx-8 text-white text-lg mb-6'>Hi, I am Nakib Uddin Ahmad. I am from Dhaka, Bangladesh. I have done my bachelor’s in computer science and engineering from Ahsanullah university of science and technology, Tejgaon Dhaka.</h3>
                <h3 className='md:mx-8 text-white text-lg mb-8'> A dedicated full-stack web developer. I have the determination to do my work. I am a fast learner and very hardworking person. I do my work with full determination and focus.</h3>
            </div>

            {
                isWait ?
                    <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000"
                        className='text-center mb-8'>
                        <button onClick={goToContact} className="self-start ml-5 px-10 py-3 text-lg font-medium rounded-lg  bg-violet-400  text-gray-900">Let's Talk</button>
                    </div>
                    :
                    <button onClick={goToContact} className="invisible self-start mb-8 ml-5 px-10 py-3 text-lg font-medium rounded-lg  bg-violet-400  text-gray-900">Let's Talk</button>
            }

        </div>
    );
};

export default AboutMe;