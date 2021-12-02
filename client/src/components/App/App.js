<<<<<<< HEAD
import Loading from '../Loading/Loading';
=======
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1
import Tours from '../Tours/Tours';

import { useEffect, useState } from 'react';

// api
const url = 'https://course-api.com/react-tours-project';



function App() {
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const load = () => {

                setInterval(() => {
                    setLoading(false)
                }, 3000)
        }

        load()

    }, [])


    return (
        <>
<<<<<<< HEAD
                {
                    loading 
                    ? <Loading />
                    : <Tours data={url} /> 
                }
            
=======
            <Tours data={url} />
>>>>>>> d16bbb7fd48f8711aa05ba79faba6e48195367e1
        </>
    )
}


export default App;
