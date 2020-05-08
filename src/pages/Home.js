import React, {Fragment} from 'react'
import {Banner} from '../components/Banner'
import {Hero} from '../components/Hero'
import Services from '../components/Services'
import { Link } from 'react-router-dom'

import FeaturedRooms from '../components/FeaturedRooms'
export const Home = () => {
    return (<>
        <Hero hero="defaultHero">
            <Banner title="luxurious rooms " subtitle="delux rooms starting at $299" >
             <Link to="/rooms" className="btn-primary"  >
                 our rooms
             </Link>
            </Banner>
        </Hero >
        <Services/>
        <FeaturedRooms/>
      
        </>
    )
}
