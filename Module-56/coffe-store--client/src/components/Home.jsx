import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import { useLoaderData } from 'react-router-dom';
import CofffeCard from './CofffeCard';

const Home = () => {

    const coffees =  useLoaderData();

    return (
        <div>
           <Banner></Banner>
           <Feature></Feature>
           <h2>All coffe . {coffees.length}</h2>

           <div className='grid grid-cols-2'>
                
                    {
                        coffees.map(coffe => <CofffeCard coffe = {coffe}></CofffeCard>)
                    }
                
           </div>
        </div>
    );
};

export default Home;