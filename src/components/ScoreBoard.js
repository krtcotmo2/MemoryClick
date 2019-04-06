import React from 'react'

export default function ScoreBoard(props){    
     return (
          <>
               <div className="bg-dark text-white fixed-top px-5 py-3">
                    <section className="row justify-content-between px-5">
                         {props.children}
                    </section>
               </div>
          </>
     )
}
