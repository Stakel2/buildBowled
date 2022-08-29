import React, {useContext, useEffect, useState, useLayoutEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CardNft, HeaderSection, InviteFriend, ThreeAnimation, StarsAni, CardFeaturedNft, LoaderAnimated } from '../../../common/'
import './MarketStyle.scss'
import Packs from './Packs'
import { context } from  "../../../../Context/MainContext";
import { apiNftCallGet } from '../../../../Axios/Nft'
import { useNavigate } from 'react-router-dom'

const Marketplace = () => {

  const navigate = useNavigate();
  const [playerList, setPlayerList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);
  const { userLocation } = useContext(context);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(6);
  const [totalRecords, setTotalRecords] = useState(0);
  const [listCount, setListCount] =  useState(6)
  useEffect(()=>{
    document.body.className = "landing"
    return ()=>  document.body.className = ""
  })
  useEffect(() => {
    nftFilter();
    nftFilterS();
 }, [page, userLocation]);
 
 function nftFilter() {
  setLoading(true);
console.log(limit , page ,"000000000000000000");
  apiNftCallGet(`/featurednft/${limit}/${page}/desc?location=IN&mintType=PLAYER`)
    .then(async (res) => {
      if (res.error) {
        navigate("/404");
      } else {
        setPlayerList(res?.data?.rows); 
        setTotalRecords(res?.data?.count);
      }
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
    });
}
function nftFilterS() {
  setLoading(true);

apiNftCallGet(`/featurednft/${limit}/${page}/desc?location=IN&mintType=STADIUM`)
.then(async (res) => {
  if (res.error) {
    navigate("/404");
  } else {
    setStadiumList(res?.data?.rows);
    setTotalRecords(res?.data?.count);
  }
  setLoading(false);
})
.catch((err) => {
  setLoading(false);
});
}

  useLayoutEffect(()=> {
    const setAllCount = () => {
      const windWidth = window.innerWidth;
       if(windWidth <= 900){
         setListCount(2)
       }else{
        setListCount(6)
       }
    }

    window.addEventListener('resize', (e)=>{
      setAllCount()
    })
    setAllCount()
  }, [listCount])
  return (
    <> 
      <LoaderAnimated isLoading={loading} />
      <Row className='bannerWrap'>
        <StarsAni />
        <Container>
          <Col lg={12} className="banner_left">
            <h1>Discover <br /> Collect and <br /> Sell Dope  <br /> <span>NFTs</span></h1>
          </Col>
        </Container>
        <Col className="banner_right">
          <ThreeAnimation />
        </Col>
      </Row>
    <Container>
      {/* <Packs /> */}
      {/* <HeaderSection 
        title="New Cards"
        subtitle="Player Cards"
        link="/MarketplaceAll"
        buttonText="Explore All" 
        />
      <Row>
        {Array.from({ length: listCount }).map((_, index) => (
            <Col xs={12} lg={2}>
            <CardNft
                cardImage={KWcard}
                pricevalue={"2.45"}
                dd={"1"}
                hh={"12"}
                mm={"33"}
                bid={"12"}
                btnVariant="outline-primary"
                btntext={"BID"}
                btnLink="/"
                onClick={()=> alert('button')}
            />
          </Col>
         ))}       
      </Row>

      <HeaderSection 
        subtitle="Stadium Cards"
      />

      <Row>
        {Array.from({ length: listCount }).map((_, index) => (
            <Col xs={12} lg={2}>
            <CardNft
                cardImage={stadiumImg}
                pricevalue={"2.45"}
                dd={"1"}
                hh={"12"}
                mm={"33"}
                bid={"12"}
                btnVariant="outline-primary"
                btntext={"BID"}
                btnLink="/"
                onClick={()=> alert('button')}
            />
          </Col>
         ))}       
      </Row> */}


      <HeaderSection id="playercard" 
        title="New Cards"
        subtitle="Player Cards"
        link="/marketplaceall"
        buttonText="Explore All" 
        mtnew="usercard"
        />
      <Row className="mb-5">
           {playerList.map((item, index) => (
             <Col sm={12} md={6} lg={4} xl={2} > <CardFeaturedNft
                {...item}
                nftIndex={index + 1}
                totalNft={playerList.length}
                btnVariant="outline-secondary"
                btntext="BUY"
              />  </Col>  
          ))}
      </Row>
      

      <HeaderSection id="stadiumcard"  
        subtitle="Stadium Cards"
      />

      <Row className="mb-5">
        {stadiumList.map((item, index) => (
          <Col sm={12} md={6} lg={4} xl={2} > <CardFeaturedNft
               {...item}
               nftIndex={index + 1}
               totalNft={stadiumList.length}
               btnVariant="outline-secondary"
               btntext="BUY"
             />  </Col>  
         ))}
      </Row>
      <HeaderSection 
        title="User Cards"
        subtitle="Player Cards"
        link="/marketplaceall"
        buttonText="Explore All" 
        mtnew="usercard"
        />
          <Row className="mb-5">
           <h4 className='comingText'>Coming Soon...</h4>
      </Row>

      <HeaderSection 
        subtitle="Stadium Cards"
      />
        <Row className="mb-5">
           <h4 className='comingText'>Coming Soon...</h4>
      </Row>
      {/* <InviteFriend 
        linkForShare="bowled.io/yjacks789"
      /> */}
    </Container>
    </>
  )
}

export default Marketplace