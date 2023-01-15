import React from 'react';
import useTitle from './../../hooks/useTitle';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import MyTsParticles from '../MyTsParticles/MyTsParticles';

const Contact = () => {
    useTitle('Contact');
    const navigate = useNavigate();

    const sendEmail = event => {
        event.preventDefault();

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_x5af9fa', 'template_52nr3wp', event.target, 'gGLUdmrxjvm2YSRQD')
            .then((result) => {
                setTimeout(() => { navigate('/home'); }, "2500");
                event.target.reset();
                // toast('Message Sent Successfully', {duration: 4000} )';
                toast.success('Message Sent Successfully');

            }, (error) => {
                console.log(error.text);
                toast.error(error.text);
            });

    }

    return (
        <section className="py-6 mb-5  bg-gray-800  text-gray-50 md:mx-16 rounded-md">
            
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Dhaka-1361, Bangladesh</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+8801914922045</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>nakibaust137@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form data-aos="fade-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" onSubmit={sendEmail} noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                    <label className="block">
                        <span className="mb-1">Full name</span>
                        <input type="text" name="name" id="name" placeholder="" className="block w-full border p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-800" required />
                    </label>
                    <label className="block">
                        <span className="mb-1">Email address</span>
                        <input type="email" name="email" id="email" placeholder="" className="block w-full border p-3 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-800" required />
                    </label>
                    <label className="block">
                        <span className="mb-1">Message</span>
                        <textarea name="message" id="message" rows="3" className="block w-full border p-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  bg-gray-800" required></textarea>
                    </label>
                    <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75  bg-violet-400  text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
                </form>
            </div>
            <MyTsParticles></MyTsParticles>
        </section>
    );
};

export default Contact;