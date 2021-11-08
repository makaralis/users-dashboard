import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/index';
import { cardsData } from '../../utils/data';
import Card from '../../components/Card';

 
const Home = () => {
    return (
    <div className="main-wrapper">
        <Navbar/>
        <div className="cards-wrapper">
        {cardsData.map((card)=> <Card title={card.title} subTitle={card.subTitle}/>)}
        </div>
    </div>
    )
}

export default Home;