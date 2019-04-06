import React from 'react';

export default function Directions(props){
     return (
          <>
          <div className="row justify-content-center mx-0 mt-5 pt-4">
               <button type="button" className="btn btn-secondary" onClick={() => props.toggleDirections()}>{ !props.dirShown ?  "Show": "Hide"} directions</button>
          </div>
          </>
     )
}