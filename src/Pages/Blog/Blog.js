import React from 'react';

const Blog = () => {
    return (
        <div className='bg-white'>
            <h2 className='text-3xl font-bold text-center py-14'>Our Blog</h2>
            <div className="card w-10/12 bg-base-100 shadow-md rounded-md mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <div className="card-actions justify-end">
                    <p>
                        There are four main types of state you need to properly manage in your React apps <br /> <br />
                            <ol>
                                <li><b>Local state</b></li>
                                <li><b>Global state</b></li>
                                <li><b>Server state</b></li>
                                <li><b>URL state</b></li>
                            </ol>
                        <br /> <br />
                        <b>Local state</b> is data we manage in one or another component. Local state is most often managed in React using the useState hook. <br />
                        <b>Global state</b> is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                        <b>Server state</b> is data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time we fetch or update data from an external server, including loading and error state.
                        <b>URL state</b> is data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;