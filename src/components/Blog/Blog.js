import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');

    return (
        <h1 data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='font-bold text-center text-5xl lg:mt-20'>Coming soon...</h1>
        // <section className=" bg-gray-800  text-gray-100 md:mx-16 rounded-md">
        //     <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        //         {/* <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2> */}
        //         {/* <p className="mt-4 mb-8  text-gray-400">Sagittis tempor donec id vestibulum viverra. Neque condimentum primis orci at lacus amet bibendum.</p> */}
        //         <div className="space-y-4">
        //             <details className="w-full border rounded-lg">
        //                 <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What are the different ways to manage a state in a React application?</summary>
        //                 <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs. </p>
        //             </details>
        //             <details className="w-full border rounded-lg">
        //                 <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does prototypical inheritance work?</summary>
        //                 <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object. </p>
        //             </details>
        //             <details className="w-full border rounded-lg">
        //                 <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is a unit test? Why should we write unit tests?</summary>
        //                 <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. </p>
        //             </details>

        //             <details className="w-full border rounded-lg">
        //                 <summary className="cursor-pointer px-4 py-6 focus:outline-none focus-visible:ring-violet-400">React vs. Angular vs. Vue?</summary>
        //                 <p className="px-4 py-6 pt-0 ml-4 -mt-4  text-gray-400">There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.

        //                     React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.

        //                     They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.

        //                     Each framework is component-based and allows the rapid creation of UI features. </p>
        //             </details>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Blog;