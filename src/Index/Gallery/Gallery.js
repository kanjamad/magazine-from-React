import React from 'react';
import Gallery_1 from './gallery_1.jpg';
import Gallery_2 from './gallery_2.jpg';
import Gallery_3 from './gallery_3.jpg';
import Gallery_4 from './gallery_4.jpg';
import Gallery_5 from './gallery_5.jpg';
import Gallery_6 from './gallery_6.jpg';
import './Gallery.css';


const Gallery = ()=>{
    return (
        <section id="gallery">
		<div className="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
				<img src={Gallery_1} alt=""/>
				<img src={Gallery_2} alt=""/>
				<img src={Gallery_3}alt=""/>
				<img src={Gallery_4} alt=""/>
				<img src={Gallery_5} alt=""/>
				<img src={Gallery_6} alt=""/>
			</div>
		</div>
	</section>
    )
}
export default Gallery;