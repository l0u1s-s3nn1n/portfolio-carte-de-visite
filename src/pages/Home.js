import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                        
                    <div className="rocket">
                        <div className="rocket-body">
                            <div className="body"></div>
                            <div className="fin fin-left"></div>
                            <div className="fin fin-right"></div>
                            <div className="window"></div>
                        </div>
                        <div className="exhaust-flame"></div>
                            <ul className="exhaust-fumes">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className="star">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                    </div>
                    <div className='contentTextBloc'>
                        <p className='bonjour'>Bonjour, je m'appelle</p>
                        <h1>Louis</h1>
                        <h2>Je construis des 
                        <br/>choses pour le web.</h2>

                        <p className='jesuis'>Je suis un développeur MERN & Blockchain.</p>
                        <div className='pdf'>
                        <a href="./media/CV.pdf" target="_blank">Télécharger CV</a>
                        </div>
                        <div className='contactezmoi'>
                        <Link exact="true" to="/contact">
                        <span>Contactez-moi</span>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default Home;