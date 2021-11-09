import React from 'react';
import './Home.scss';
import Navbar from '../../components/Navbar/index';
import { cardsData, usersData, usersDataTheads } from '../../utils/data';
import Card from '../../components/Card';
import Table from '../../components/Table';


const Home = () => {
    return (
        <div className="main-wrapper">
            <Navbar/>
            <div className="cards-wrapper">
            {cardsData.map((card, index)=> <Card title={card.title} subTitle={card.subTitle} key={card.title} index={index}/>)}
            </div>
            <Table tableTitle="Campaigns" theads={usersDataTheads} data={usersData}/>
        </div>
    )
}

export default Home;