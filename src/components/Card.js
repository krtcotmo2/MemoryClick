import React from 'react'

export default function Card(props){   
     return (
          <>
               <div className="card" onClick={() => props.cardClick(props.id)}>
                    <img src={props.image} title={props.name}/>
               </div>
          </>
     )  ;   
};
 