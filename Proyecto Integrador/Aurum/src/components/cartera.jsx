import React from 'react'
import Bolsillo from './Bolsillo'

export default function Cartera() {
  return (
    <>
    <div className="cartera__container  ">
        <br />
        <div className="titulo__cartera">
            <h1 className="text-dark texto__titulo__cart"> Cartera</h1>
    <br /><br />

        </div>
    <br />
    <br />
        <div className="container cont__Cart">
            <Bolsillo />
            <Bolsillo />

        </div>
    
    </div>
    </>
  )
}
