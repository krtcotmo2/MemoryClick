import React from 'react'

export default function Card(props){    
     return (
          <>
               <div className="card" onClick={() => props.cardClick(props.id)}>
                    <p>{props.id}</p>
               </div>
          </>
     )  ;   
};
 