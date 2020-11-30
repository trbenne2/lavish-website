import React, { Fragment } from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data'

function Home() {
    return (
        <Fragment>
            <HeroSection {...homeObjOne} />
        </Fragment>
    )
}

export default Home
