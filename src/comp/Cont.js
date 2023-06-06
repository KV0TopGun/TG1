import React from 'react'
import {useState} from "react";
import ContIMG from './ContIMG.js';
import '../css/Cont.css'
import Citem from "./Citem";
import Clist from "./Clist";


function Cont () {
    const [ posts, setPosts] = useState ([
        {id:1, title :"Array", body:"Descr"},
        {id:2, title :"Array2", body:"Descr"},
        {id:3, title :"Array3", body:"Descr"},
    ])

return (

<div className="Cont">
    <ContIMG
    name="Aaa"
    address="GGG"
    image="logo.svg"
     />
    <ContIMG
        name="CCC"
        address="GGG"
        image="test.jpg"
    />
    <ContIMG
    name="BBB"
    address="UUU"
    image="test2.jpg"
    />

    <Citem post={{id:1, title:'GGG',body: 'OOO' }}/>
    <Citem post={{id:2, title:'BBB',body: '111' }}/>
    <Clist posts={posts} title="uma"/>
</div>

    )
}

export default Cont