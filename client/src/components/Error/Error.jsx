import React from 'react'
import './Error.css'
import { FiXOctagon } from 'react-icons/fi'

const Error = () => {
    const refresh = () => {
        window.location.reload()
    }

    return (
        <main>
            <div className='error'>
                <FiXOctagon className='x'/>
                <h1>no more tours remaining</h1>
                <button onClick={refresh}>Refresh</button>
            </div>
        </main>
    )
}

export default Error
