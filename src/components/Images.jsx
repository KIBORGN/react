import React from 'react'

export default function Images({imageName, altText, className}) {
    const imagePath = require(`../img/${imageName}`)

    return (
        <img src={imagePath} alt={altText} class={className}></img>
    )
}
