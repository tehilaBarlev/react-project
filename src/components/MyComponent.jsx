import React,{useState} from "react";
import { makeStyles } from '@material-ui/core/styles';

export default function MyComponent(props) {
    const a = props.arr;
    return (
        <div>
            {props.arr.map((p)=>
                p.category===props.category?<li>{p.name}</li>:''
            )}
            {props.arr.filter(p=>p.category===props.category).length > 5? <li>בקטגוריה זו מוצרים רבים</li>:""}
             
        </div>
    );
    
}
