import React from 'react'
import Images from '../components/Images'

export default function CardItem({classLi, imageName, imageName2, classImage2, pText, pClass}) {
    console.log ('ImageName2'+ imageName2)
    return (
        <>
        <li className={classLi}>
            <Images imageName={imageName} />
            {imageName2 && 
                <Images imageName={imageName2}/>
            }
            <p className={pClass}>{pText}</p>
        </li>
        </>
    )
}
