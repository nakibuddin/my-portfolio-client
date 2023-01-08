import React from 'react';
import './ProjectDetails.css';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Carousel from '../../Carousel/Carousel';


const ProjectDetails = () => {
    const project = useLoaderData();
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/home')
    }

    return (
        
        <div className='project-details md:mx-16 bg-gray-800 text-white'>
            <h1 className='text-3xl text-center font-semibold mt-4 mb-6'>Project Details</h1>
            <Carousel project={project}></Carousel>
            <div className='mx-16 mt-4 text-xl'>
                <p className='font-bold'>Name: <span className='font-normal'>{project?.projectName}</span></p>
                <p className='font-bold'>Description:</p>
                <div className='ml-4'>
                    {/* p1 means point1 */}
                    <p>{project?.p1}</p>
                    <p>{project?.p2}</p>
                    <p>{project?.p3}</p>
                    <p>{project?.p4}</p>
                    <p>{project?.p5}</p>
                </div>
            </div>

            <div className='flex justify-center md:mx-36 mt-8 mb-6'>
                <a href={project?.live_link} target='_blank' className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mr-2 mb-2">Live Site</a>
                <a href={project?.gitHub_client} target='_blank' className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mr-2 mb-2">GitHub Client Side</a>
                <a href={project?.gitHub_server} target='_blank' className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mr-2 mb-2">GitHub Server Side</a>
            </div>
            <div className='flex justify-center'>
                <button onClick={goToHome} className="flex items-center justify-center h-10 md:w-24 p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mr-2 mb-10">Back</button>
            </div>
        </div>
    );
};

export default ProjectDetails;