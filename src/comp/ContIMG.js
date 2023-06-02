import React from 'react'
import '../css/ContIMG.css'

function ContIMG(props) {
    const { name, image, address } = props
    return (
        <div className="String">
            <h1>{props.name}</h1>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} />
            <div>{props.address}</div>
        </div>
    )
}

export default ContIMG