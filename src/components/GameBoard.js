import React, { Component } from 'react'

export default class GameBoard extends Component{
     render() {
          return (
          <>
               <div className="container mt-5 pt-4">
               <section className="row justify-content-between px-5 col-10 jusify-content-between mx-auto">
                    {this.props.children}
                    </section>
               </div>
          </>
     )}
}
