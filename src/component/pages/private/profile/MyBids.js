import React, { useEffect, useState } from "react";
import { Row, Col, Table } from "react-bootstrap";
import { brandsApiCallGet } from "../../../../Axios/Brands";
import { LoaderAnimated } from "../../../common";
import ShowcasePagintion from "../../public/showcase/ShowcasePagintion";
import moment from "moment";

export default function MyBids() {
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  const [bidList, setBidList] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    brandsApiCallGet(`/users/api/v1/mybid/${limit}/${page}`)
      .then((response) => {
        setBidList(response.data);
        setTotalRecord(response?.count);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, [page]);

  return (
    <div>
      <LoaderAnimated isLoading={loading} />
      <Row className="purchase_history_style">
        <Col lg={12}>
          <Table className="res-table">
            <thead>
              <tr>
                <th scope="col">NFT Title</th>
                <th scope="col">Bid Price</th>
                <th scope="col">Bid Placed At</th>
              </tr>
            </thead>
            <tbody>
              {bidList.map((data, index) => (
                <tr key={index}>
                  <td data-label="NFT Title">{data?.nftTitle}</td>
                  <td data-label="Bid Price">{data?.price}</td>
                  <td data-label="Bid Placed At">
                    {moment(data?.createdAt).format("MMM, DD, yyyy hh:mm a")}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col className="text-end">
          {totalRecord > 12 && (
            <ShowcasePagintion
              limit={limit}
              total={totalRecord}
              nextPage={setPage}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
