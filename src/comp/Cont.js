import React from 'react'
import ContIMG from './ContIMG.js';
import '../css/Cont.css'
import Citem from "./Citem";


function Cont () {
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
</div>

    )
}

export default Cont