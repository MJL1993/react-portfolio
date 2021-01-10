import React from 'react'
import './Jumbotron.css'
import Spots from '../assets/Spots.jpg'
import Name from './Name'

export default function Jumbotron() {
    return (
        <div>
        <img className="Jumbotron" src={Spots} alt={"Saxophone Picture"} />
        <Name/>
        </div>
    )
}
