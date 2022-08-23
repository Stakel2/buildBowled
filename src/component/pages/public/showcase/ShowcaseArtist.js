import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { LoaderAnimated, CardFeatured } from "../../../common/";
import ShowcasePagintion from "./ShowcasePagintion";

const ShowcaseArtist = (props) => {
  const [artistsList, setArtistsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [totalRecords, setTotalRecords] = useState(0);
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`artist/api/v1/${limit}/${page}`)
      .then((res) => {
        if (res) {
          let list = res.data.details;
          // let featuredList = list.filter((val) => val.isFeatured === 1);
          setArtistsList(list);
          setTotalRecords(res.data.totalRecords)
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [page]);

  return (
    artistsList?.length > 0 ?
    <Container className='showcase_list_style'> 
      <LoaderAnimated isLoading={loading} />
        <Row>
          
          {artistsList.map((artist) => (
            <Col className='showcasepage_item' xs={12} lg={3}>
              <CardFeatured 
                key={artist.artistId}
                onClick={() => navigate(`/artist-detail/${artist.artistId}`)}
                profileimg={artist?.profileImage} 
                alt={artist?.atristname}
                featured_banner_img={artist?.coverImage}
                title={artist?.title}
                // subtitle={}
                description={`${artist?.description?.substring(0, 40)}...`}            
              />
            </Col>
          ))}
        </Row>
        <Col className="text-end">
          {totalRecords > 16 && (
            <ShowcasePagintion
              limit={limit}
              total={totalRecords}
              nextPage={setPage}
            />
          )}
        </Col>
    </Container>    
    : (
      <Row>
        <Col>
          <p className="text-center" style={{color:"#848484"}}>
            No Artist Found 
          </p>
        </Col>
      </Row>
    )
    
  )
}

export default ShowcaseArtist