import React from 'react'


const Tour = ( { tour } ) => {
          const handleClick = (e) => {
                    e.preventDefault()

                    
          }


          return (
                    <div className="card" onClick={handleClick}>
                              <img src={tour.image} alt="" />

                              <div className="info">
                                        <h1 className='title'> {tour.name} </h1>
                                        
                                        <p className='content'> {tour.info} </p>
                                        
                                        <div className='price'>
                                                  <p>${tour.price}</p>
                                                  <button>Check In</button>
                                        </div>
                              </div>

                    </div>

          )
}


export default Tour
