import React from 'react';
import Navigation from '../components/Navigation';
import Project from '../components/portfolio/Project';
import ProjectList from '../components/portfolio/ProjectList';

const Portfolio = () => {
    return (
        <div className='portfolio'>
        <Navigation />
        <ProjectList />
        </div>
    );
};

export default Portfolio;