import { useDispatch, useSelector } from "react-redux"
import { fetchAllImages } from "./featurs/imageSlice";
import { useEffect } from "react";
import React from "react";

export default function Images(){
    useEffect(
        ()=>{disp(fetchAllImages())},[]
    )
    let disp=useDispatch();
    let images=useSelector(state=>state.images.imageArr);


 return(
    <>
    {images.map(item=><div key={item.id}><img src="{item.url}"/></div>)}
    </>
   )
 
 }