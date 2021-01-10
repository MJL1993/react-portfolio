import Header from '../Header'
import Jumbotron from '../Jumbotron'
import Whitecool from '../Whitecool'
import Card1 from '../Card1'
import Card2 from '../Card2'
import Footer from'../Footer'
import React from 'react'

export default function HomePage() {
    return (
        <div className="Body">
        <Header/>
        <Jumbotron/>
        <Whitecool/>
        <Card1/>
        <Card2/>
        <Footer/>
        </div>
    )
}
