import React, { useContext, useEffect, useState, Component } from 'react';
import {context} from '../Context';
import ShowPic from './ShowPic';
import Category from './Category';
// import image from './children 1 (22).jpg';

const HomePage = () => {
    const allPictures = useContext(context);

    return (         
        <div className="show">
            <div >
            </div>
            { allPictures.map((pic: any) => (
                <ShowPic key={pic.id} count={pic.count} date={pic.date} creator={pic.creator} id={pic.id} color={"pink[500]"}/>
            )) }     
        </div>)
}
export default HomePage;
