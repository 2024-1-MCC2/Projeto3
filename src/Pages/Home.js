import React from 'react'
import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import ImageHome from '../Components/ImageHome'
import EjaEmbu from '../Assets/Img/ejaembu.jpg'
import Footer from '../Components/Footer'
import Section from '../Components/Section'

function Home() {
    return (
        <div>

            <Header />
            <ImageHome
                images={[
                    { src: EjaEmbu, alt: "Desrição da img1", text: "" },
                ]}
            />
            <Section/>
            <Carousel />
            <Footer />
        </div>
    )
}
export default Home