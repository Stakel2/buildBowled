import React from 'react'
import { Container } from 'react-bootstrap'
import './ArtCollectionInfoStyle.scss'

const ArtCollectionInfo = (props) => {
    const {items, owners, averagePrice, valueTraded } = props
    return (
        <Container className='nft_details_style'>
        <ul>
            <li>
                <strong>{items}</strong>
                <span>items</span>
            </li>
            <li>
                <strong>{owners}</strong>
                <span>owners</span>
            </li>
            <li>
                <strong>{averagePrice}</strong>
                <span>average price</span>
            </li>
            <li>
                <strong>{valueTraded}</strong>
                <span>value traded</span>
            </li>
        </ul>
        </Container>
    )
}

export {ArtCollectionInfo}
