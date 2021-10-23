import React from 'react'
import { Card } from '../component/card/Card'
import { Carrousel } from '../component/carrosel/Carrousel'
import { Footer } from '../component/footer/Footer'
import { Navbar } from '../component/navbar/Navbar'

export const App = () => {
    return (
        <>
            <Navbar/>
            <Carrousel/>
            <Card/>
            <Footer/>
        </>
    )
}
