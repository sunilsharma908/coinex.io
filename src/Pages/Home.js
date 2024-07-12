import React from 'react'
import Banner from '../Components/Banner'
import MarketList from '../Components/MarketList'
import ImageSlider from '../Components/ImageSlider'
import TableHome from '../Components/TableHome'
import Counting from '../Components/Counting'
import MobileDownload from '../Components/MobileDownload'
import Info from '../Components/Info'
import Services from '../Components/Services'

const Home = () => {
    return (
        <>
            <Banner/>
            <MarketList/>
            <ImageSlider/>
            <TableHome/>
            <Counting/>
            <MobileDownload/>
            <Info/>
            <Services/>
        </>
    )
}

export default Home
