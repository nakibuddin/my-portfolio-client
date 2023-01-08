import React from 'react';

const Carousel = ({project}) => {

    return (
        <div className='border-4 border-gray-800'>
            <div className="carousel mx-16">
                <div id="item1" className="carousel-item w-full">
                    <img src={project?.url_2} className="w-full" />
                </div> 
                <div id="item2" className="carousel-item w-full">
                    <img src={project?.url_3} className="w-full" />
                </div> 
                <div id="item3" className="carousel-item w-full">
                    <img src={project?.url_4} className="w-full" />
                </div> 
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
            </div>
        </div>
    );
};

export default Carousel;