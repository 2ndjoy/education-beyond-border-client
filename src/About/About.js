import React from 'react';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img alt='' src='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img alt='' src='https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' className="absolute w-3/5 right-5 border-8 top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-semibold my-4 text-primary">About me</p>
                    <h1 className="text-5xl my-5 font-bold">I am qualified <br />  & of experience <br /> in this field</h1>
                    <p className="py-6">I gather information and research based on your choice (scholarship or without scholarship). Also I help you by guiding and providing information </p>
                    <p className="py-6"> I verify that your documents are sufficient and guide you on your CV. I help you to get a scholarship or admission to a university. I have been doing this for 4 years.</p>
                    <button className="btn btn-primary ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;