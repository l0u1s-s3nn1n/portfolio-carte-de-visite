import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        
<div className='sidebar'>
    <div className='id'>
        <div className='idContent'>
            <img src='./media/devkawai.jpg' alt='profil-pic'></img>
        </div>
    </div>

    <div className='navigation'>
        <ul>
            <li>
                <Link exact="true" to='/'  className="navActive">
                    <i className='fas fa-home'></i>
                    <span>Accueil</span>
                </Link>
            </li>
            <li>
                <Link exact="true" to="/competences" className="navActive">
                    <i className='fas fa-mountain'></i>
                    <span>Compétences</span>
                </Link>
            </li>
            <li>
                <Link exact="true" to="/portfolio" className="navActive">
                    <i className='fas fa-images'></i>
                    <span>Portfolio</span>
                </Link>
            </li>
            <li>
                <Link exact="true" to="/contact" className="navActive">
                    <i className='fas fa-address-book'></i>
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
    </div>


    <div className='socialNetwork'>
        <ul>
            <li>
                <a href='https://www.linkedin.com/in/louis-le-bail/'> <i className='fab fa-linkedin'></i></a>
            </li>
    
            <li>
                <a href='https://github.com/l0u1s-s3nn1n'> <i className='fab fa-github'></i></a>
            </li>
        </ul>
    </div>

    
    
</div>

    );
}; 

export default Navigation;
