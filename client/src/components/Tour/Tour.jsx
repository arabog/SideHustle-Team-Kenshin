import styled from "styled-components"

import { useState } from "react"


const Button = styled.button `
          display: inline-block;
          cursor: pointer;
          margin-left: 10px;
          background: hsl(205, 78%, 60%);
          color: white;
          padding: 5px 10px;

          border: none;
          outline: none;
`

const Tour = ( { tour } ) => {
          const [showMore, setShowMore] = useState(false);

          const { info } = tour;
                    

          return (
                    <div className="card" >
                              <img src={tour.image} alt="" />

                              <div className="info">
                                        <h1 className='title'> {tour.name} </h1>
                                        
                                        <div className='content'>  
                                                  {
                                                            showMore ? info : `${info.substring(0, 180)}`
                                                  }                                                  
                                                  
                                                  <Button onClick={() => setShowMore(!showMore)}>
                                                            {showMore ?  "Show Less" : "Show More" }
                                                  </Button>
                                        </div>
                                        
                                        <div className='price'>
                                                  <p>${tour.price}</p>

                                                  <button>Check In</button>
                                        </div>
                              </div>

                    </div>

          )
}


export default Tour
