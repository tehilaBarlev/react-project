import React, { useContext } from 'react';
import ShowPic from './ShowPic';
import {context} from '../Context';

interface picture{
    count: number,
    date: string,  
    creator: string,
    id:string, 
    category:string
}
const Love = () => {

    const allPictures: picture[] = useContext(context);

    return (
        <div>
            <div className="wellcome">
            <span>תמונות אהובות לפי דירוג</span>
            </div>
            {allPictures.sort((a,b)=>{return b.count-a.count}).map( p => 
            <ShowPic key={p.id} count={p.count} date={p.date} creator={p.creator} id={p.id}/>)}
        </div>
    );      
}
export default Love;