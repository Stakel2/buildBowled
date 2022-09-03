<div className="mainContainer">
<div className="firstSection">
  <div className="firstContainer">
    <img src="./ground.png"></img>
  </div>

  <div className="bowlLogo">
    <Union5 src={logoBowled} />
    {/* <Bowled src={`https://file.rendit.io/n/GSixZJOvRP2IGG8mnZtQ.svg`} /> */}
  </div>

  <div className="textElement">
    OWN
    {"  "}
    PLAY
    {"  "}
    EARN
    {/* <img src="https://file.rendit.io/n/ezMzQQ54DNFIJggqM0Ny.svg">  </img> */}
  </div>
  <div className="descSection">
    World’s first Play-to-Earn Social Gaming Platform
  </div>
  {/* <div className="logo">
    <img src="https://file.rendit.io/n/ezMzQQ54DNFIJggqM0Ny.svg">  </img>

  </div> */}
</div>
<div className="secondSection" style={{ backgroundImage: `url(./Rectangle358.png)`}}>
  <div className="secondInternal">
    {Number(windowSize.innerWidth) >= 880 ? (
      <div className="roadMapConatiner">
        <div className="dots">
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
        </div>
        <div className="content">
          <div className="conText"> About Us</div>
          <div className="conText"> Our Games</div>
          <div className="conText"> BWLD Tokens</div>
          <div className="conText"> RoadMap</div>
          <div className="conText"> The Team</div>
          <div className="conText"> Community</div>
          <div className="conText"> Blog</div>
          <div className="conText"> FAQ</div>
        </div>
      </div>
    ) : (
      ""
    )}
    <div className="aboutus">
      <div className="textData">
        <div className="mainText">ABOUT US</div>
        <div className="descText">
          <p>
            NFT PREMIER LEAGUE (NPL) IS A WEB3 GAMING APP IN WHICH YOU
            OWN YOUR PLAYERS IN THE FORM OF NFTs. AND YOU CAN MAKE
            HANDSOME EARNINGS BY PLAYING CRICKET MATCHES. IT'S A GAME TO
            LIVE YOUR PASSION FOR CRICKET AGAIN WHILE GETTING REWARDED
            FOR IT.
          </p>
        </div>
      </div>
    </div>
    <div className="secondNfts">
      <img src={img1}></img>
      <img src={img2}></img>
      <img src={img3}></img>
      <img src={img4}></img>
      <img src={img5}></img>
      <img src={img6}></img>
      {Number(windowSize.innerWidth) <= 1170 &&
      Number(windowSize.innerWidth) >= 860 ? (
        <></>
      ) : (
        <>
          <img src={img7}></img>
          <img src={img8}></img>
          <img src={img9}></img>
        </>
      )}

      {Number(windowSize.innerWidth) <= 1484 ? (
        <></>
      ) : (
        <>
          <img src={img10}></img>
          <img src={img11}></img>
          <img src={img12}></img>
        </>
      )}
    </div>
  </div>
</div>
<div className="section3">
  <div className="section3Container">
    {Number(windowSize.innerWidth) >= 880 ? (
      <div className="roadMapConatiner">
        <div className="dots">
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
        </div>
        <div className="content">
          <div className="conText"> About Us</div>
          <div className="conText"> Our Games</div>
          <div className="conText"> BWLD Tokens</div>
          <div className="conText"> RoadMap</div>
          <div className="conText"> The Team</div>
          <div className="conText"> Community</div>
          <div className="conText"> Blog</div>
          <div className="conText"> FAQ</div>
        </div>
      </div>
    ) : (
      ""
    )}
    <div className="gameSection">
      <div className="mainText">
        <p>OUR GAMES</p>
      </div>
      <div className="descText">
        <p>World’s first Play-to-Earn Social Gaming Platform</p>
      </div>
      <div className="gameContainer">
        <div>
          <img src={Lat1} />
        </div>

        <div>
          <img src={Lat3} />
        </div>
        <div className="nplGame">
          <img src={Lat2} />
          <div>
            <p className="main"> NPL</p>
            <p className="desc"> NFT PREMIER LEAGUE</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="section4">
  <div className="section4Container">
    {Number(windowSize.innerWidth) >= 880 ? (
      <div className="roadMapConatiner">
        <div className="dots">
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
        </div>
        <div className="content">
          <div className="conText"> About Us</div>
          <div className="conText"> Our Games</div>
          <div className="conText"> BWLD Tokens</div>
          <div className="conText"> RoadMap</div>
          <div className="conText"> The Team</div>
          <div className="conText"> Community</div>
          <div className="conText"> Blog</div>
          <div className="conText"> FAQ</div>
        </div>
      </div>
    ) : (
      ""
    )}
    <div className="coinContainer">
      <div>
        <img src={Coin}></img>
      </div>
      <div>EARNINGS WITH</div>
      <div>BOWLED.IO</div>
    </div>
    <div className="points">
      <div className="pointsImg">
        <img src={Point} />
        <img src={Point} />
        <img src={Point} />
        <img src={Point} />
        <img src={Point} />
      </div>
      <div className="pointsText">
        <p> Selling player or stadium cards</p>
        <p> Generating sponsorship & ticketing income</p>
        <p>Renting your assets</p>
        <p> Winning matches against other fans</p>

        <p> Finishing tournaments in top positions</p>
      </div>
    </div>
  </div>
</div>

<div className="section5">
  <div className="section5Container">
    {Number(windowSize.innerWidth) >= 880 ? (
      <div className="roadMapConatiner">
        <div className="dots">
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
          <div className="dot"> </div>
        </div>
        <div className="content">
          <div className="conText"> About Us</div>
          <div className="conText"> Our Games</div>
          <div className="conText"> BWLD Tokens</div>
          <div className="conText"> RoadMap</div>
          <div className="conText"> The Team</div>
          <div className="conText"> Community</div>
          <div className="conText"> Blog</div>
          <div className="conText"> FAQ</div>
        </div>
      </div>
    ) : (
      ""
    )}
    <div className="contRoadMap">
      <FlexColumn16>
        <Text40>Roadmap</Text40>
        <FlexRow6>
          <FlexColumn17>
            <Text41>q1</Text41>
            <Text42>q2</Text42>
            <Text43>q3</Text43>
            <Text44>q4</Text44>
            {/* <Text45>q1</Text45> */}
          </FlexColumn17>
          {/* <Element37>
            <Image18
              src={`https://file.rendit.io/n/cTsabbhtBTO1L0f64OqW.svg`}
            />
            <Text46>1</Text46>
            <Text47>2</Text47>
            <Text48>3</Text48>
            <Text49>4</Text49>
            <Text50>5</Text50>
          </Element37> */}
          <div className="lineVector">
          <div className="vector1"></div>
          <div className="quest">
           
            <div className="dot">  </div>
            <div className="dot">  </div>

            <div className="dot">  </div>
            <div className="dot">  </div>
          </div>
          </div>
          <div className="contentCon">
            <div className="content">
              <div className="maint"> CACH</div>
           <p>   Catch to win the match!</p>

              <p> - An exciting game to keep you on your gloves.</p>
              <p>
                  - Catch every throw as the difficulty level increases.
              </p>
              <p> -  When you miss the spin, you miss the win.</p>
              <p>
                -  A Single player game that helps you build focus and
                keeps you hooked for the win.
              </p>
            </div>
            <div className="content">
              <div className="maint"> CRIC5</div>
         <p>     Pick your 5, and see who survives!</p>

              <p> - An euphoric multiplayer game that takes you down the memory lane of your childhood.
.</p>
              <p>
              -  Each player gets to pick 5 NFT cards that will battle against your opponent.

              </p>
              <p>
               - The win is based on the cards picked by each player.
.</p>
              <p>
               - Collect unique NFT character cards that are a virtual representation of strengths possessed by your real life cricket heroes.
              </p>
            </div>
            <div className="content">
              <div className="maint"> SIXR</div>
             <p> Sixr is a ticker for all solo winners! / </p>

              <p> - A relaxing game for solitary players.</p>
              <p>
              - The stronger you hit, the better you score.
              </p>
              <p> - Don’t forget to aim, don’t miss the shot, for you’ll lose the stump and the riches you got. 
</p>
              {/* <p>
                A Single player game that helps you build focus and
                keeps you hooked for the win.
              </p> */}
            </div>
            <div className="content">
              <div className="maint"> NPL</div>
         <p>     It’s so swell, you can’t foretell. Match with an opponent to play NPL!</p>


              <p> - An interesting multiplayer turn-by-turn cricket game.
</p>
              <p>
             - Unique NFT characters with distinctive playstyle and strength.

              </p>
              <p> - Match with opponent to play-for-fun or pick NFT players to play and earn.
</p>
              <p>
               - Keep your wins aligned to rank in the tournament find. 

              </p>
            </div>
          </div>
        </FlexRow6>
      </FlexColumn16>
    </div>
  </div>
</div>
{/* <div className="section6">
<div className="section6Container">

</div>
</div> */}
<div className="section7">
  <div className="section7Container">
    <div className="bowld">
      <p className="p1" style={{ opacity: "100%" }}>
        {" "}
        BWLD
      </p>
      <p className="p1" style={{ opacity: "70%" }}>
        {" "}
        BWLD
      </p>
      <p className="p1" style={{ opacity: "60%" }}>
        {" "}
        BWLD
      </p>
      <p className="p1" style={{ opacity: "40%" }}>
        {" "}
        BWLD
      </p>
      <p className="p1" style={{ opacity: "20%" }}>
        {" "}
        BWLD
      </p>
    </div>
    <div className="discordContainer">
      <div className="discCard">
      <a href="https://discord.gg/tcSrDWQTyj" target="_blank">
        <div className="discImg">
        
          <img src="https://file.rendit.io/n/ZxnYjOoJstTuO7UiEINV.png"></img>
        
          <div className="click"></div>
        
        </div>
        </a>
      </div>
    </div>
  </div>
</div>
{/* <MacBookPro1>
    <BlackFlexColumn>
      <FlexRow20>
        <Element62>
          <Element63>
            <Paragraph20>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.{" "}
            </Paragraph20>
            <Text95>
              Zeux
              <br />
              Portfolio
              <br />
              Careers
              <br />
              Contact us
            </Text95>
            <Text96>@Logo</Text96>
            <Text97>About us</Text97>
            <FlexColumn27>
              <Text98>Contact us</Text98>
              <Paragraph21>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </Paragraph21>
              <Text99>+908 89097 890</Text99>
            </FlexColumn27>
          </Element63>
          <Text100>LOGO</Text100>
        </Element62>
        <Image38
          src={`https://file.rendit.io/n/nvs5NXPDqgNW9oW1mnqp.svg`}
        />
      </FlexRow20>
      <Line src={`https://file.rendit.io/n/bl5wyqjq9yKggoM5Ku4Z.svg`} />
      <Paragraph22>Copyright ® 2021 Lorem All rights Rcerved</Paragraph22>
    </BlackFlexColumn>
  </MacBookPro1> */}
<div className="footerSec">
  <div className="footerContainer">
    <div className="logoSec">
      <div className="logo"><img src={logoBowled}></img></div>
      <div className="logodesc">
      Challenge millions of gamers around the world in various game formats, deploy your skills, knowledge & win big rewards!
      </div>
    </div>
    <div className="aboutSec">
      <div className="aboutdiv">
        <div className="aboutus">ABOUT US</div>
        <div className="decCont">
          <div className="decText">
            <p> Zeux</p>
            <p> Portfolio</p>

            <p> Careers</p>

            <p> Contact us</p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="contactSec">
      <div className="contact">CONTACT US</div>
      <div className="contactdesc">
        lorem Ipsumlorem Ipsumlorem Ipsumlorem Ipsum
      </div>
    </div> */}
    <div className="socialSec">
      <div className="social">CONTACT US</div>
      <div className="socialdesc">
      <ul className="social_links">
    <li>
      <a href="https://twitter.com/Bowleddotio" target="_blank">
        <img src={twitter} alt="icon" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/bowled.io/" target="_blank">
        {" "}
        <img src={insta} alt="icon" />
      </a>
    </li>
    <li>
      <a href="https://t.me/dfxcricverse" target="_blank">
        {" "}
        <img src={telegram} alt="icon" />
      </a>
    </li>
    <li>
      <a href="https://medium.com/@bowled" target="_blank">
        <img src={medium} alt="icon" />
      </a>
    </li>
    <li>
      <a href="https://discord.gg/tcSrDWQTyj" target="_blank">
        <img src={discord} alt="icon" />
      </a>
    </li>
  </ul>
      </div>
    </div>
  </div>
  <div className="copyright">
    
  Copyright ® 2021 Lorem All rights Rcerved
  </div>
</div>
</div>