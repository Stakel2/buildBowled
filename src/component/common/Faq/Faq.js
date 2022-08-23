import React from "react";
import "./Faq.scss";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <section className="faq_sec">
        <Container>
          <Row>
            <Col md={12}>
              <div className="faq_title">
                <h2>
                  Frequently Asked <span>Questions</span>
                </h2>
              </div>
            </Col>
            <Col md={12} lg={10} className="mx-auto">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What is Bowled.io and what does it exactly do?
                  </Accordion.Header>
                  <Accordion.Body>
                    Bowled.io is world’s first Cricket based Play-to-Earn game:
                    an ecosystem of assets where users can compete against each
                    other on user-owned teams. Our core aim is to develop an
                    innovative model where users can deploy their knowledge and
                    passion for the game. This platform would enable the fans to
                    use Cricket-related skills and reap exciting social and
                    economic benefits.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What is P2E or Play-To-Earn?
                  </Accordion.Header>
                  <Accordion.Body>
                    Play-to-Earn is a new type of video game in which players
                    are rewarded with tokens or other cryptocurrency-based
                    rewards for winning battles and completing tasks, which they
                    can use in-game or trade on an open market. This is a
                    significant change in the gaming industry, which has
                    hitherto kept in-game assets limited to centralised
                    platforms that did not allow them to be transferred
                    externally.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>What is Metaverse?</Accordion.Header>
                  <Accordion.Body>
                    The Metaverse is a vast, interconnected virtual world in
                    which people can recreate many of the activities they
                    undertake in real life, as well as much more. Building,
                    buying, selling, owning, socialising, entertaining, working,
                    studying, and so on are examples of these activities. Anyone
                    who wants to access the Metaverse can, which can provide
                    chances to people from all walks of life, regardless of
                    colour, gender, or socioeconomic background.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Is it possible to make a living off of P2E games?
                  </Accordion.Header>
                  <Accordion.Body>
                    By playing some of the Play-to-Earn games, some gamers in
                    the Philippines have been able to make two to three times
                    the local minimum wage. The amount of money that can be
                    made, however, is determined by a number of factors,
                    including the player's ability, the length of time they
                    spend playing the game, their win rate, and the open market
                    price fluctuations of in-game tokens and assets.
                    <br />
                    P2E games are popular among people who want to augment their
                    income.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What are the requirements for participating in a
                    Play-to-Earn game?
                  </Accordion.Header>
                  <Accordion.Body>
                    To play the game, you will need a mobile device or a
                    laptop/PC, an internet connection, a crypto wallet, and a
                    game asset. See how to set up a crypto wallet like MetaMask
                    in this BitPinas post.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    Is it safe to play such P2E games?
                  </Accordion.Header>
                  <Accordion.Body>
                    Because participating in P2E gaming entails risk, you should
                    conduct your own study and educate yourself on how to
                    utilise crypto safely, securely, and responsibly.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    What makes Bowled.io stand out?
                  </Accordion.Header>
                  <Accordion.Body>
                    <a href="https://bowled.io/">Bowled.io</a>, like most other
                    well-crafted mobile first games, is designed for mass
                    adoption. The importance of proven and well-balanced game
                    play in a pleasant Cricket setting cannot be overstated. The
                    ability to easily integrate the blockchain layer into the
                    game, as well as the lack of entrance fees, will be major
                    drivers for player growth. Bowled.io is thought to possess
                    all of the necessary characteristics to become many people's
                    initial point of contact with blockchain-related content and
                    tokens in the Cricket games vertical and beyond.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Faq;
