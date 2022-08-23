import React from 'react'
import { Container } from 'react-bootstrap'
import './listNFTDetailsStyle.scss'

const ListNFTDetails = (props) => {
    let item=props?.NFTDETAILS
  console.log("brandArtistList", item)
  return (
    <Container className="nft_details_style">
      <ul>
        <li>
          <strong>{item.items}</strong>
          <span>{"Items"}</span>
        </li>
        <li>
          <strong>{item.ownership}</strong>
          <span>{"Owners"}</span>
        </li>
        <li>
          <strong>{"$0"}</strong>
          <span>{"Floor Price"}</span>
        </li>
        <li>
          <strong>{"$0"}</strong>
          <span>{"Volume Traded"}</span>
        </li>
      </ul>
    </Container>
  );
}

export {ListNFTDetails}