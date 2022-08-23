import React, { useContext, useEffect, useState } from 'react'
import './DropsStyle.scss'
import { CardGallery, Layout, LoaderAnimated } from '../../../common'
import { Container, Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { apiNftCallGet, apiNftCallPost } from '../../../../Axios/Nft'
import { context } from '../../../../Context/MainContext'
import { GetNftCollections } from '../../../Api/Actions'
import { apiCallPost } from '../../../../Axios/Axios'

const Drops = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(15);
  const [collectionData, setCollectionData] = useState({});
  const [blockChainData, setBlockChain] = useState([]);
  const [selectBlockChainName, setselectBlockChainName] = useState("");
  const [nftCollectionData1, setnftCollectionData1] = useState();
  const { nftcCollectionData, dispatchNftCollectionData } = useContext(context);
  const { userLocation } = useContext(context);

  useEffect(() => {
    getDropDetail(params?.dropId)
    setLoading(true)
    //nftCollectionData(0);
  }, [])

  useEffect(() => {
    getBlockChainList()
  }, [])

  useEffect(() => {
    userLocation && nftFilter();
  }, [selectBlockChainName, pageNo, userLocation]);

  const nftCollectionData = pageNo => {
    GetNftCollections(
      { setLoading, dispatchNftCollectionData },
      params.dropId,
      12,
      pageNo,
    )
  }

  const getDropDetail = (id) => {
    setLoading(true)
    apiNftCallGet(`/collections/` + id, {}, 'toastOff')
      .then(async (res) => {
        if (res.error) {
          navigate('/404')
        } else {
          setCollectionData(res.data)
        }
        setLoading(false)
        // console.log("response earlier", res);
      })
      .catch((err) => {
        setLoading(false)
      })
  }

  const nextPage = pageNo => {
    //nftCollectionData(pageNo);
    setPageNo(pageNo)
  }

  const collectData = () => {
    nftCollectionData(pageNo)
  }

  function getBlockChainList () {
    setLoading(true)
    apiNftCallGet(`/blockchain/list`)
      .then(async res => {
        if (res.error) {
          navigate('/404')
        } else {
          setBlockChain(res.data)
          setselectBlockChainName(res.data[0].id)
        }
        setLoading(false)
        // console.log("response earlier", res);
      })
      .catch(err => {
        setLoading(false)
      })
  }
  function nftFilter () {
    setLoading(true)
    let data = {
      fileType: '',
      nftType: '',
      blockChainName: selectBlockChainName,
      Collection: `${params?.dropId}`
    }
    apiNftCallPost(`/nft_filter/${limit}/${pageNo}?location=${userLocation}`, data)
      .then(async res => {
        if (res.error) {
          navigate('/404')
        } else {
          console.log('FilterData', res.data)
          setnftCollectionData1(res)


          // setBlockChain(res.data)
        }
        setLoading(false)
        console.log('response earlier', res)
      })
      .catch(err => {
        setLoading(false)
      })
  }

  const blockChainNameOptions =
    blockChainData &&
    blockChainData.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.blockChainName}
        </option>
      )
    })



  return (
    
    <Layout innerClass="draps_page">
      <LoaderAnimated isLoading={loading} />
      <Container className="noPadding banner_micrositeMain">
        
        <img
          className='img-fluid'
          src={`${collectionData?.banner}?tr=w-1920,h-726`}
        />
        <Col className="banner_text">
          {/* <h1>{collectionData?.name}</h1> */}
          {/* <p>{collectionData?.subHeading}</p> */}
        </Col>
      </Container>
      <Container>
        <Col className='aboutEast_section dropsInfo_section'>
          {/* <h2 className="sub-title text-center">Who We are</h2> */}
          <h1 className="text-center">{collectionData?.name}</h1>
          <p className="text-center">{collectionData?.subHeading}</p>
          <p className="text-center aboutEastTextStyle">
            {collectionData?.description}{' '}
          </p>
        </Col>
        <h2 className='exColl_title'>Explore Collections</h2>
        <div className="filterBlockChainStyle">
          
          <h4>Filter By BlockChain</h4>
          
          <div className="filter_input_style full-width" style={{ marginLeft: "20px", minWidth: "200px" }}>
            <select
              className="form-control"
              onChange={(e) => {
                setselectBlockChainName(e.target.value);
              }}
            >
              {blockChainNameOptions}
            </select>
          </div>
        </div>
        {nftCollectionData1 &&     
          (
           
            <CardGallery
              galleryTitle={"Explore Collections"}
              gallery={nftCollectionData1?.data}
              count={nftCollectionData1?.count}
              startItem={0}
              endItem={nftCollectionData1?.data?.length}
              showCollect="true"
              collectData={collectData}
              hw={true}
              limit={limit}
              total={nftCollectionData1?.count}
              nextPage={nextPage}
              className="drops_cardGallery"
            />
          )}
      </Container>
    </Layout>
  )
}

export default Drops
