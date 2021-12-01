import { useEffect, useState } from 'react';
import './Tours.css'

const url = "https://course-api.com/react-tours-project";
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
        <main>
            <div className="card">
                <img src="https://images.unsplash.com/photo-1637921986514-fdb90068fbf8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80" alt="" />
                <div className="info">
                <h1 className='title'>Tour de France</h1>
                <p className='content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi corporis repellat saepe neque, pariatur quibusdam enim, explicabo a iusto totam delectus non, voluptatem quia iure voluptatum mollitia placeat atque. Fuga esse impedit id autem sunt totam voluptatum corrupti, quae ex eveniet omnis consequuntur quas fugit iure dolores qui officia.
                </p>
                <div className='price'>
                    <p>$120.00</p>
                    <button>Check In</button>
                </div>
                </div>
            </div>

            
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
                                <p>{price}</p>
                                <button>Check In</button>
                            </div>
                            </div>
                            </div>
                    )
                })}
                
    

        </main>
    )
}


export default Tours
