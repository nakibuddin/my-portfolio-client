import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://01-portfolio-server.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error('my_fetch_error: ', err));
    },[])
    
    const showAll = (name) => {
        navigate(`/project/${name}`)        
    }

    return (
        <div>
            <h1 className='text-3xl text-center font-bold mb-8'>My Projects</h1>
            <div className='md:mx-16 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                {
                    projects.map( project => <div key={project?._id}>

                        <div className="border border-gray-300 max-w-xs rounded-md shadow-md  bg-gray-900  text-gray-100">
                            <img src={project?.url} alt="" className="object-fill object-center w-full rounded-t-md h-60  bg-white" />
                            <div className="flex flex-col justify-between p-2 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-center text-3xl font-semibold tracking-wide">{project.projectName}</h2>
                                    <p className="text-center text-gray-100">{project?.description}</p>
                                </div>
								<div className='flex justify-center'>
									<button onClick={() => showAll(project.project_url_name)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mr-2 mb-3">Show Details</button>
                                    <a href={project?.live_link} target='_blank' className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md  bg-violet-400  text-gray-900 mb-3">Live Site</a>
								</div>
                            </div>
                        </div>   
                        
                    </div>)
                }         
            </div>
        </div>
    );
};

export default Projects;