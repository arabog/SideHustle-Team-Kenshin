import Loading from '../Loading/Loading';
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
                {
                    loading 
                    ? <Loading />
                    : <Tours data={url} /> 
                }
            
        </>
    )
}


export default App;
