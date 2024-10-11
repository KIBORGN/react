import React from 'react'

export default function ItemHeading({classH2, classH3, classP, textH2, textH3, textP}) {
    return (
        <>
            <h2 class={classH2}>{textH2}</h2>
            <h3 class={classH3}>{textH3}</h3>
            {classP && 
                <p class={classP}>{textP}</p>
            }
        </>
    )
}
