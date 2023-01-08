import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <div className="bg-gray-900 mb-[20px]">
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="h-12 relative flex items-center justify-between">
            <Link
              to="/" aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img className='h-14 w-14 ' src='https://media.istockphoto.com/id/1329330337/vector/initial-gold-n-letter-logo-design-n-logo-design-vector-template.jpg?b=1&s=612x612&w=0&k=20&c=Q44I7k3ENMrbPXG5pQMD74ZKiiSR9r7x2JjwPtjhLxQ=' alt="" />
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 ">
                Nakib Uddin
              </span>
            </Link>

            <ul className="flex items-center hidden space-x-8 lg:flex ">
              <li>
                <NavLink
                  to="/home" aria-label="Home" title="Home"
                  // <button onClick={btnClick} disabled={disable} className={`btn btn-primary ml-[20px] ${disable ? 'text-3xl' : ''} `} > Button</button>
                  // class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                  className={ ({isActive}) => isActive ? 'font-medium text-orange-400 lg:mx-3' : 'text-white font-medium hover:text-orange-200 lg:mx-3' } 
                >
                  Home
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/blog" aria-label="Blog" title="Blog"
                  className={ ({isActive}) => isActive ? 'font-medium text-orange-400 lg:mx-3' : 'text-white font-medium hover:text-orange-200 lg:mx-3' } 
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact" aria-label="Contact" title="Contact"
                  className={ ({isActive}) => isActive ? 'font-medium text-orange-400 lg:mx-3' : 'text-white font-medium hover:text-orange-200 lg:mx-3' } 
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-me" aria-label="about_me" title="About Me"
                  className={ ({isActive}) => isActive ? 'font-medium text-orange-400 lg:mx-3' : 'text-white font-medium hover:text-orange-200 lg:mx-3' } 
                >
                  About Me
                </NavLink>
              </li>

            </ul>


            <ul className="flex items-center hidden space-x-1 lg:flex">              
              
              <li>
                <a
                  href='https://drive.google.com/file/d/12mRKgmUv_B4uMMZFX9DzLL9WSQvVZwX_/view?usp=share_link' target='_blank' aria-label="Resume" title="Resume"
                  className="font-medium tracking-wide text-white hover:text-orange-200 px-4"
                >
                  Resume
                </a>

              </li>  

            </ul>







            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
             

              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          to="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <svg
                            className="w-8 text-deep-purple-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          </svg>
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                            TailwindCss
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>






                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/home" aria-label="Our product" title="Our product"
                            onClick={() => setIsMenuOpen(false)}
                            // className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            className={ ({isActive}) => isActive ? 'font-medium text-orange-500' : 'text-black font-medium hover:text-orange-200' } 
                          >
                            Home
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to="/products" aria-label="Our product" title="Our product"
                            onClick={() => setIsMenuOpen(false)}
                            // className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            className={ ({isActive}) => isActive ? 'font-medium text-orange-500' : 'text-black font-medium hover:text-orange-200' } 
                          >
                            Products
                          </NavLink>
                        </li>

                        <li>
                          <NavLink
                            to="/price" aria-label="Our product" title="Our product"
                            onClick={() => setIsMenuOpen(false)}
                            // className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            className={ ({isActive}) => isActive ? 'font-medium text-orange-500' : 'text-black font-medium hover:text-orange-200' } 
                          >
                            Pricing
                          </NavLink>
                        </li>
                        
                        <li>
                          <Link
                            to="/" aria-label="Sign up" title="Sign up"
                            onClick={() => setIsMenuOpen(false)}
                            className="bg-red-400 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          >
                            Sign up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};
        

export default Navbar;