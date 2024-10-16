import React from 'react'
import CardItem from '../components/CardItem';

const ItemList = ({className, carditems }) => {

    if (!carditems) {
        return console.log('carditems no exist')
    }

    return (
        <ul className={className}>
        {carditems.map((carditem, index) => (
            <CardItem key={index} 
            classLi={carditem.classLi} 
            imageName={carditem.imageName}
            imageName2={carditem.imageName2}
            pText={carditem.pText} 
            pClass={carditem.pClass}  />
            ))}
        </ul>
    )

}


export default ItemList;