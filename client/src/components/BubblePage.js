import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  
  // getColors = async () => {
  //   const res = await axiosWithAuth().get('http://localhost:5000/api/colors');
  //   const { data } = res.data;
  //   this.ListeningStateChangedEvent({ colors: data}); 
  // }
  
  useEffect(() => {
   axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then(response => {
        console.log('BubblePage axios GET req res', response)
        setColorList(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList}   />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
