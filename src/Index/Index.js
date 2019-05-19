import React from 'react';
import Header from './Header/Header';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Archive from './Archive/Archive';
import About from './About/About';


const Index = ()=>{
    return(
        <div>
        <Header />
        <Archive />
        <About />
        <Gallery />
        <Contact />
        </div>

    )

}
export default Index;