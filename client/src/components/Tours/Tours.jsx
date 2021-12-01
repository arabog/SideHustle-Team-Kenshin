import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import './Tours.css'

const url = "https://course-api.com/react-tours-project";
const Tours = () => {

    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const fetchTours = async () => {
            const requestTours = await fetch(url);
            const resp = await requestTours.json();
            setTours(resp);
            setLoading(false)
    }

    useEffect(()=>{
        fetchTours();
    }, []);

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
        </main>
    )
}


export default Tours
