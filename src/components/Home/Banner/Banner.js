import React from 'react';
import { useNavigate } from 'react-router-dom';
import Photo from '../../../assets/nakib_img.PNG'

import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact')
    }

    return (
        <section className=" bg-gray-800  text-gray-100 md:mx-16 rounded-md mb-20">
            <div className="container flex flex-col mx-auto lg:flex-row p-2">
                <div className="w-full lg:w-1/3">
                    {/* <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxIMpcng0PpqR2S4Ct0htq3Cn7NCrdr4z9Tg&usqp=CAU" alt="" /> */}
                    <img className='rounded-md' src={Photo} alt="" />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8  text-violet-400">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg> */}
                    <p className="text-center text-sm mb-4">Hi, I am</p>
                    <h2 className="text-center text-4xl font-bold leading-none">Nakib Uddin Ahmad</h2>
                    <p className="text-center mt-4 mb-8 font-semibold text-[24px]">A
                        <span style={{ color: 'white', }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={[' Full Stack Developer', ' MERN Stack Developer',]}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </span>
                    </p>
                    <div className='flex justify-center'>
                        <a href='https://drive.google.com/file/d/12mRKgmUv_B4uMMZFX9DzLL9WSQvVZwX_/view?usp=share_link' target='_blank' className="self-start px-10 py-3 text-lg font-medium rounded-md  bg-violet-400  text-gray-900">Resume</a>
                        <button onClick={goToContact} className="self-start ml-5 px-10 py-3 text-lg font-medium rounded-lg  bg-violet-400  text-gray-900">Let's Talk</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;