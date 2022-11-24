import React from 'react';

const Blog = () => {
    return (
        <div className='bg-white pb-12'>
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
            <div className="card w-10/12 bg-base-100 shadow-md rounded-md mx-auto my-12">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <div className="card-actions justify-end">
                    <p>
                    Every object with its methods and properties contains an internal and hidden property known as <b>[[Prototype]]</b>. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the <b>[[Prototype]]</b> of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using <b>__proto__</b>. <br /> <br />
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200520193336/Untitled-Diagram108.png" alt="" /> <br /> <br />
                    For example, there are two objects 'person1' and 'person2'. The object 'person2' can inherits the methods and properties of the object 'person1' and further uses them.
                    </p>
                    </div>
                </div>
            </div>
            <div className="card w-10/12 bg-base-100 shadow-md rounded-md mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should we write unit tests?</h2>
                    <div className="card-actions">
                        <p>
                            Unit testing is a method of testing that tests the individual software unit in the process of isolation. Check the output of a function for any given input. It means verifying that the component renders for any specific accessory to react components. In other words, to writing a unit tests is also alike writing code that verifies the code works as expected. <br />
                            Unit Testing is important for React Apps, as it helps in testing the individual functionality of React components. Moreover, any error in code can be identified at the beginning itself, saving time to rectify it at later stages. Some of the core benefits of Unit Testing are: <br /> <br />
                            <ul>
                                <li>
                                    <b>Process Becomes Agile:</b> Agile Testing process is the main advantage of unit testing. When you add more features to the software, it might affect the older designs and you might need to make changes to the old design and code later. This can be expensive and require extra effort. But if you do unit testing, the whole process becomes much faster and easier.
                                </li>
                                <li>
                                    <b>Quality of code:</b> Unit testing significantly improves the quality of the code. It helps developers to identify the smallest defects that can be present in the units before they go for the integration testing.
                                </li>
                                <li>
                                    <b>Facilitates change:</b> Refactoring the code or updating the system library becomes much easier when you test each component of the app individually.
                                </li>
                                <li>
                                    <b>Smooth Debugging:</b> The debugging process is very simplified by doing unit testing. If a certain test fails, then only the latest changes that have been made to the code need to be debugged.
                                </li>
                                <li>
                                    <b>Reduction in cost:</b> When bugs are detected at an early stage, through unit testing, they can be fixed at almost no cost as compared to a later stage, let's say during production, which can be really expensive.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className="card w-10/12 bg-base-100 shadow-md rounded-md mx-auto mt-12">
                <div className="card-body">
                    <h2 className="card-title">What are the difference between React vs. Angular vs. Vue?</h2>
                    <div className="card-actions">
                        <div className="overflow-x-auto">
                            <table className="table-fixed md:table table-zebra">
                                <thead>
                                <tr>
                                    <th>Categories</th>
                                    <th>React</th>
                                    <th>Angular</th>
                                    <th>Vue</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr className='hover'>
                                    <th>Type</th>
                                    <td>Rich library to build UI</td>
                                    <td>A framework</td>
                                    <td>A library</td>
                                </tr>
                                <tr className="hover">
                                    <th>Development Approach</th>
                                    <td>Everything is on JavaScript</td>
                                    <td>Based on TypeScript</td>
                                    <td>Based on JavaScript and HTML</td>
                                </tr>
                                <tr className='hover'>
                                    <th>Maintained and Supported By</th>
                                    <td>Facebook</td>
                                    <td>Google</td>
                                    <td>Former Google Employee</td>
                                </tr>
                                <tr className='hover'>
                                    <th>Ideal for</th>
                                    <td>Modern web development and native-rendered apps for IOS and Android.</td>
                                    <td>Large scale, rich featured applications or enterprise level apps.</td>
                                    <td>Web development and single-page applications.</td>
                                </tr>
                                <tr className='hover'>
                                    <th>Model</th>
                                    <td>Based on Virtual DOM (Document Object Model)</td>
                                    <td>Based on MVC (Model-View-Controller) architecture</td>
                                    <td>Based on Virtual DOM(Document Object Model)</td>
                                </tr>
                                <tr className='hover'>
                                    <th>Companies Using</th>
                                    <td>Used by Facebook, Uber, Netflix, Twitter, Reddit, Paypal, Walmart and others</td>
                                    <td>Used by Google, Forbes, Wix and weather.com</td>
                                    <td>Used by Alibaba. Baidu, Gitlab and others</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;