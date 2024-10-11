import React from 'react'
import Images from '../components/Images'

export default function CardItem(props) {
    return (
        <>
        <li class={props.post.classLi}>
            <Images imageName={props.post.imageName} altText={props.post.altImage} className={props.post.classImage}/>
            {props.post.classImage2 && 
                <Images imageName={props.post.imageName2} altText={props.post.altImage2} className={props.post.classImage2}/>
            }
            <p class={props.post.pClass}>{props.post.pText}</p>
        </li>
        </>
    )
}
