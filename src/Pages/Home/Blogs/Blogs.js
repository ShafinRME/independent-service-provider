import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="difference">
                <h2 className='blogs-head'>What Is the Difference Between Authentication and Authorization?</h2>
                <div className='diff-auth'>
                    <div>
                        <h3>Authentication</h3>
                        <ul>
                            <li>Authentication verifies who the user is.</li>
                            <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                            <li>Authentication is the first step of a good identity and access management process.	</li>
                            <li>Authentication is visible to and partially changeable by the user.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Authorization</h3>
                        <ul>
                            <li>Authorization determines what resources a user can access.
                            </li>
                            <li>Authorization works through settings that are implemented and maintained by the organization.
                            </li>
                            <li>Authorization always takes place after authentication.
                            </li>
                            <li>Authorization isn’t visible to or changeable by the user.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='alternative-firebase'>
                <h2 className='blogs-head'>  Why I am using firebase?</h2>
                <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                    You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.

                    As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.</p>
                <h2 className='blogs-head'>  What other options do you have to implement authentication?</h2>
                <p>
                    There are so many options for implementing authentication system except Firebase.There are below:
                    <ul>
                        <li>Parse - Open Source Backend Platform</li>
                        <li>Back4app - Parse Hosting Platform</li>
                        <li>Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise</li>
                        <li>Backendless - Mobile Backend and API Services Platform;</li>
                        <li>Kuzzle - Backend for web, hybrid, or native mobile apps and IoT projects;
                        </li>
                    </ul>
                </p>

            </div>
            <div className='alternative-auth'>
                <h2 className='blogs-head'>What other services does firebase provide other than authentication</h2>
                <p>
                    There are so many types of services firebase provide us except Authentication.These are given below:
                    <ul>
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>
                        <li>Google Analytics </li>
                    </ul>
                </p>

            </div>
        </div>
    );
};

export default Blogs;