import React from 'react'

export default function CardLink({classItem, classLink, textLink}) {
    return (
        <li class={classItem}><a href="#" class={classLink}>{textLink}</a></li>
    )
}
