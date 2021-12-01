import { useEffect, useState } from 'react';
import './Tours.css'

import Tour from  "../Tour/Tour"
import styled from 'styled-components';

const url = "https://course-api.com/react-tours-project";


const Wrapper = styled.div `
    display: flex;

    align-items: center;
    justify-content: center;

`


const Heading = styled.h2 `
    font-size: 30px;

    color: deepblue;
    border-bottom: 4px solid lightblue;
    text-align: center;

`


const Tours = () => {

    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
            const requestTours = await fetch(url);
            const resp = await requestTours.json();
            setTours(resp);
        }

    useEffect(()=>{
        fetchTours();
    }, []);

    return (
        <main >
                <Heading>Tours</Heading>

            
                {

                    tours.map((tour) => (
                        <Wrapper key={tour.id}>
                            <Tour tour={tour} />
                        </Wrapper>
                    ))
                
                //     tours.map((tour) => {

                //     const {id,name,info,image,price} = tour;
                //     return(
                //             <div className="card" key={id}>
                //             <img src={image} alt={name} />
                //             <div className="info">
                //             <h1 className='title'>{name}</h1>
                //             <p className='content'>
                //                 {info}
                //             </p>
                //             <div className='price'>
                //                 <p>{price}</p>
                //                 <button>Check In</button>
                //             </div>
                //             </div>
                //             </div>
                //     )
                // })
                
                }
                

        </main>
    )
}


export default Tours
