import React from 'react'



export default function Modal(props){
    if(props.isOpen){
         return (
              <>
              <div className="modal d-flex" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                   <div className="modal-dialog modal-dialog-centered" role="document">
                   <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => props.closeClick()}>
                             <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                        {props.message}
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => props.closeClick()}>Close</button>
                        </div>
                   </div>
                   </div>
                   </div>
              </>
         )              
     }else{
          return(
               <>
               </>
          )
     }
}
