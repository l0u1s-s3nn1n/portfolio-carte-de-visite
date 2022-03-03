import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-web3'></i>
                    <span>Web3</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-btc'></i>
                    <span>Cryptomonnaies</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-NFT'></i>
                    <span>NFT</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-DeFi'></i>
                    <span>DeFi</span>
                </li>
                
            </ul>
        </div>
    );
};

export default Hobbies;