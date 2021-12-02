import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const fetchTours = async () => {
            const requestTours = await fetch(url);
            const resp = await requestTours.json();
            setTours(resp);
<<<<<<< HEAD
        }
=======
            setLoading(false)
    }
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1

    useEffect(()=>{
        fetchTours();
    }, []);

<<<<<<< HEAD
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
                

=======
    if(loading) {
        return(
            <Loading loading={loading}/>
        )
    }

    if(error) {
        return(
            <Error />
        )
    }

    return (
        <main>
            {tours.map((tour) => {

                const {id,name,info,image,price} = tour;
                return(
                        <div className="card" key={id}>
                        <img src={image} alt={name} />
                        <div className="info">
                        <h1 className='title'>{name}</h1>
                        <p className='content'>
                            {info}
                        </p>
                        <div className='price'>
                            <p>$ {price}</p>
                            <button onClick={() => setError(true)}>Not Interested</button>
                        </div>
                        </div>
                        </div>
                )
            })}             
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1
        </main>
    )
}


export default Tours
