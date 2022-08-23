import React, { useState, useContext, useEffect } from "react";
import { Container, Row, InputGroup, FormControl, Form } from "react-bootstrap";
import "./AllRafflesStyle.scss";
import {
  ClaimCard,
  Layout,
  LoaderAnimated,
  ModalCustom,
} from "../../../common";
import BreadcrumbCustom from "../../../common/breadcrumb/BreadcrumbCustom";
import TicketHistoryTable from "../../../common/ticketHistoryTable/TicketHistoryTable";
import Slider from "react-slick";
import "../home/Fslider.scss";
import PaypalButton from "../../../common/paypal/paypal";
import { context } from "../../../../Context/MainContext";
import { toasts } from "../../../common/Toast/Toast";
import { brandsApiCallGet, brandsApiCallPost } from "../../../../Axios/Brands";
import { useNavigate, useParams } from "react-router-dom";
import ShowcasePagintion from "../showcase/ShowcasePagintion";

const currencytype = [
  {
    type: "checkbox",
    name: "USD",
  },
  {
    type: "checkbox",
    name: "KYL",
  },
  {
    type: "checkbox",
    name: "Matic",
  },
];

const AllRaffles = () => {
  const param = useParams();
  const [showModal, setShowModal] = useState(false);
  const [raffleData, setRaffleData] = useState({});
  const [totalTicket, setTotalTicket] = useState();
  const [raffleTransId, setRaffleTransId] = useState("");
  const [ticketsToBuy, setTicketsToBuy] = useState(null);
  const [totalPriceToPay, setTotalPriceToPay] = useState(0);
  const [raffleNfts, setRaffleNfts] = useState([]);
  const [winnersList, setWinnersList] = useState([]);
  const handleClose = () => setShowModal(false);
  const [loading, setLoading] = useState(false);
  const { loginState } = useContext(context);
  const [isRaffleActive, setIsRaffleActive] = useState(null);

  const [page, setPage] = useState(1);
  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  const navigate = useNavigate();
 
  const nowTime = Math.floor(Date.now() / 1000);
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: raffleNfts.length > 5 ? 5 : raffleNfts.length,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: raffleNfts.length > 5 ? 5 : raffleNfts.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: raffleNfts.length > 3 ? 3 : raffleNfts.length,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: raffleNfts.length > 2 ? 2 : raffleNfts.length,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    getRaffleData(param.raffleId);
  }, [page]);

  useEffect(() => {
    
    setTotalPriceToPay(raffleData?.price * ticketsToBuy);
  }, [ticketsToBuy,raffleData]);
console.log("raffleData", raffleData)
  const getRaffleData = (id) => {
    setLoading(true);

    brandsApiCallGet(`/users/raffles/api/v1/` + id)
      .then((res) => {
        // setLoading(false);
        setRaffleData(res?.data);
        setTotalTicket(res?.data.tickets);
        setIsRaffleActive(res.data.expiryDate < nowTime ? false : true);

        brandsApiCallGet(`/users/raffles/api/v1/nfts/` + id)
          .then((res) => {
            setLoading(false);
            setRaffleNfts(res?.data);
          })
          .catch((error) => {
            setLoading(false);
          });

        res.data.expiryDate < nowTime &&
          brandsApiCallGet(`/users/raffles/api/v1/winner/${id}`)
            .then((res1) => {
              setLoading(false);
              setWinnersList(res1?.data);
            })
            .catch((error) => {
              setLoading(false);
            });
      })
      .catch((error) => {
        setLoading(false);
      });

  //  checkStatus()
  };
  function checkStatus() {
    if (loginState.user.accessToken) {
      brandsApiCallGet(`/users/raffles/api/v1/status/` + param.raffleId)
        .then((res) => {
          setLoading(false);
          setRaffleData({ ...raffleData, ticketsLeft: res?.data?.ticketsLeft });
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  }
  const buyTicketHandler = (id) => {
    setLoading(true);

    if (loginState.user.accessToken) {
      checkStatus();
      if (raffleData.ticketsLeft > 0) {
        if (ticketsToBuy && ticketsToBuy > 0) {
          ticketsToBuy <= raffleData.ticketsLeft
            ? setShowModal(true)
            : toasts.error("Please enter valid number of tickets to buy.");
        } else {
          toasts.error("Please enter valid number of tickets to buy.");
        }
      } else {
        toasts.error("All Tickets are sold out.");
      }
    } else {
      setLoading(false);
      toasts.error("Please Login");
      navigate("/login");
    }
    // };
  };
  const onCreatePayment = (id, type) => {
    setLoading(true);
    if (loginState.user.accessToken) {
    } else {
      setLoading(false);
      toasts.error("Please Login");
    }
  };

  const onPaymentSucess = (res, type) => {
    setLoading(true);
    brandsApiCallGet(`/users/raffles/api/v1/status/` + param.raffleId)
      .then((res1) => {
        setLoading(false);
        setRaffleTransId(res1?.data?.raffleTransId);

        let data = {
          raffleId: raffleData.raffleId,
          totalTicket: ticketsToBuy,
          price: res.purchase_units[0].amount.value,
          paymentOrderId: res.id,
          status: res.status,
          paymentgateway: type,
          raffleTransId: res1?.data?.raffleTransId,
        };

        brandsApiCallPost(`/users/raffles/api/v1/buy`, data, {})
          .then((res) => {
            setShowModal(false);
            setLoading(false);
            if (res?.error === false) {
              navigate("/user/order/success");
            }
          })
          .catch((error) => {
            setLoading(false);
            console.log("error1", error);
          });
      })
      .catch((error) => {
        setLoading(false);
        console.log("error2", error);
      });
  };

  const onPaymentError = () => {
    setLoading(false);
    navigate("/user/order/failed");
  };

  const onPaymentCancel = (res) => {
    navigate("/user/order/failed");
  };

  return (
    <Layout>
      <LoaderAnimated isLoading={loading} />
      <Container className="allRfl_cont slider_style">
        <BreadcrumbCustom raffleName={raffleData.name} />
        <Row className="nftbe_claim">
          <h2 className="text-center comnHeading">
            {isRaffleActive
              ? "NFT TO BE CLAIMED"
              : winnersList && winnersList.length > 0
              ? "NFT CLAIMED"
              : "NFT LIST"}
          </h2>
          {raffleNfts.length > 0 ? (
            <Slider {...settings}>
              {raffleNfts.map((item, index) => {
                return (
                  <ClaimCard
                    key={index}
                    {...item}
                    toDeclared
                    isRaffleActive={isRaffleActive}
                  />
                );
              })}
            </Slider>
          ) : (
            <p className="text-center balance">
              No Nft available for the Raffle
            </p>
          )}
        </Row>
        {isRaffleActive && (
          <Row className="buyTkt">
            <h2 className="text-center comnHeading">BUY TICKET</h2>
            {raffleData?.ticketsLeft ? (
              <>
                <div className="text-center total_price">
                  <p>
                    Total Price to pay: <strong>{totalPriceToPay}</strong>
                  </p>

                  <Form.Check
                    inline
                    label="PAYPAL"
                    checked={true}
                    name="group1"
                    type="radio"
                    id={"PAYPAL"}
                    className="mb-3"
                  />
                </div>

                <InputGroup className="buyTkt_group">
                  <FormControl
                    placeholder={
                      raffleData.ticketsLeft + "/" + totalTicket
                    }
                    value={ticketsToBuy}
                    type="number"
                    required
                    onChange={(e) => setTicketsToBuy(e.target.value)}
                    onKeyPress={preventMinus}
                    min="1"
                  />
                  <button
                    onClick={() => buyTicketHandler(raffleData.raffleId)}
                    className="btn-trans btn btn-primary"
                  >
                    Buy
                  </button>
                </InputGroup>
              </>
            ) : (
              <p className="text-center balance">No ticket available to buy.</p>
            )}
          </Row>
        )}

        {!isRaffleActive &&
          (winnersList?.length > 0 ? (
            <Row className="tktHistory">
              <h2 className="text-center comnHeading">WINNERS LIST</h2>
              <TicketHistoryTable data={winnersList} />
            </Row>
          ) : (
            <p
              className="text-center balance"
              style={{ margin: "5%", fontSize: "16px" }}
            >
              No winner found
            </p>
          ))}

        {/* {winnersList && winnersList.length > 10 && (
          <ShowcasePagintion
            activePage={page}
            total={winnersList.length / 10}
            nextPage={nextPage}
            limit={1}
          />
        )} */}
      </Container>
      <ModalCustom
        show={showModal}
        size="modal-sm"
        customClass="buyToken_modalStyle"
        title={"BUY WITH"}
        onHide={handleClose}
      >
        <PaypalButton
          amount={totalPriceToPay}
          currency="USD"
          onCreatePayment={onCreatePayment}
          onPaymentSucess={onPaymentSucess}
          onPaymentError={onPaymentError}
          onPaymentCancel={onPaymentCancel}
        />
        {/* <Form>
          {currencytype.map((item, index) => (
            <div key={index} className="currency_list">
              <label class="currency_item">
                <input type="checkbox" name={item.name} />
                <strong>{item.name}</strong>
                <span class="checkmark"></span>
              </label>
            </div>
          ))}
        </Form> */}
      </ModalCustom>
    </Layout>
  );
};

export default AllRaffles;
