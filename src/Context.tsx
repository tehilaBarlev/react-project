import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const context = createContext([]);

export default function Context(props: any) {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    axios.get('/pictures.json')
    .then((data: any) => {
        setPictures(data.data);
    })
  }, []);
  return (
    <context.Provider value={pictures}>
      { props.children }
    </context.Provider>
    );
}