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

const NewBorn = () => {
    
    const allPictures: picture[] = useContext(context);

    return(
        <div> 
            {allPictures.filter( p => p.category ==="newborn").map( p => 
            <ShowPic key={p.id} count={p.count} date={p.date} creator={p.creator} id={p.id} color={"pink"}/>)}
        </div>
    ); 
}
export default NewBorn;