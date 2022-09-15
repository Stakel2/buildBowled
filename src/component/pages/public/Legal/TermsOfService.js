import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../../common/layout/Layout";
import { useLocation } from "react-router-dom";
import "./legal.scss";

const TermsOfService = () => {
  document.body.className = "inner_page";
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center mb-3">Terms Of Service</h1>
              <div className="privacy_sec privacy_sec_term">
                <p>
                  These Platform User Terms of Service (these “Terms”)
                  govern your access to and use of certain products, services
                  and properties made available by bowled.io (“bowled.io,” “we,”
                  “us” or “our”). (As used herein, the term “you” (including any
                  variant) refers to each individual who enters into these Terms
                  on such individual’s own behalf or any entity on behalf of
                  which an individual enters into these Terms.) Our products,
                  services and properties include, without limitation, the
                  creation, purchase, sale, exchange, or modification of certain
                  digital assets; our online and/or mobile services,
                  games/gaming services and software provided on or in
                  connection with those services (collectively, the “Service”).
                  Certain features of the Service may be subject to additional
                  guidelines, terms, or rules (“Supplemental Terms”), which will
                  be displayed in connection with such features. All such
                  Supplemental Terms are incorporated by reference into these
                  Terms. If these Terms are inconsistent with any Supplemental
                  Terms, the Supplemental Terms shall control solely with
                  respect to such services.
                </p>
                <p>
                  BOWLED.IO OFFERS A PLATFORM FOR CREATORS, BUYERS, AND SELLERS
                  OF DIGITAL ASSETS AND ANY PRODUCTS, SERVICES AND/OR BENEFITS,
                  WHETHER DIGITAL OR OTHERWISE, TO BE FURNISHED BY OR ON BEHALF
                  OF SELLERS IN CONNECTION WITH SUCH SALES. WE ARE NOT A BROKER,
                  FINANCIAL INSTITUTION, OR CREDITOR. THE SERVICE IS AN
                  ADMINISTRATIVE PLATFORM ONLY. BOWLED.IO FACILITATES
                  TRANSACTIONS BETWEEN THE BUYER AND SELLER BUT IS NOT A PARTY
                  TO ANY AGREEMENT BETWEEN THE BUYER AND SELLER OR OTHERWISE
                  BETWEEN ANY USERS OF THE SERVICE. YOU SPECIFICALLY ACKNOWLEDGE
                  AND AGREE THAT, IF YOU USE THE SERVICE TO MAKE A PURCHASE, THE
                  SELLER SHALL BE AN INTENDED THIRD-PARTY BENEFICIARY OF THESE
                  TERMS WITH RESPECT TO THE ITEM(S) SOLD AND SELLER’S RIGHTS
                  WITH RESPECT THERETO. BOWLED.IO SHALL USE COMMERCIALLY
                  REASONABLE EFFORTS TO PROCURE THAT BUYERS SHALL BE AN INTENDED
                  THIRD-PARTY BENEFICIARY OF BOWLED.IO’S AGREEMENT(S) WITH
                  SELLERS OF ITEMS FOR THE PURPOSE OF ENFORCING BUYERS’ RIGHTS
                  WITH RESPECT THERETO. YOU ACCEPT THAT BOWLED.IO SHALL NOT BE A
                  PARTY TO OR HAVE ANY RESPONSIBILITY OR LIABILITY FOR, ARISING
                  OUT OF, RELATING TO, ASSOCIATED WITH OR RESULTING FROM ANY
                  DISPUTES BETWEEN YOU AND ANY SELLER OF AN ITEM IN RESPECT OF
                  THE USE, MISUSE, PROVISION OR FAILURE TO PROVIDE ANY ITEM.
                </p>

                <p>
                  YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE IDENTITY,
                  LEGITIMACY, AND AUTHENTICITY OF ITEMS YOU PURCHASE THROUGH THE
                  SERVICES. NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST
                  VERIFICATION, BOWLED.IO MAKES NO CLAIMS ABOUT THE IDENTITY,
                  LEGITIMACY, OR AUTHENTICITY OF ITEMS OFFERED FOR SALE ON OR
                  THROUGH THE PLATFORM.
                </p>
                <p>
                  PLEASE READ SECTION 20 OF THESE TERMS CAREFULLY, AS IT
                  CONTAINS AN ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED
                  EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO
                  BINDING AND FINAL ARBITRATION. 
                  <strong>
                    UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU
                    WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF
                    AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR
                    CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR
                    PROCEEDING; AND (2) YOU ARE AGREEING TO MANDATORY INDIVIDUAL
                    ARBITRATION FOR THE RESOLUTION OF DISPUTES AND WAIVING YOUR
                    RIGHT TO A JURY TRIAL ON YOUR CLAIMS.
                  </strong>
                </p>
                <p>
                  PLEASE BE AWARE THAT SECTION 3(d) OF THESE TERMS, BELOW,
                  CONTAINS YOUR OPT-IN CONSENT TO RECEIVE COMMUNICATIONS FROM
                  US, INCLUDING EMAIL COMMUNICATION.
                </p>
                <p>
                  THESE TERMS OF USE ARE IMPORTANT AND AFFECT YOUR LEGAL RIGHTS,
                  SO PLEASE READ THEM CAREFULLY. BY CLICKING ON ANY “I ACCEPT”
                  BUTTON, COMPLETING THE ACCOUNT REGISTRATION PROCESS,
                 OR OFFERING ITEMS FOR SALE THROUGH THE SERVICE, PURCHASING
                  ITEMS THROUGH THE SERVICE, AND/OR OTHERWISE USING THE SERVICE,
                  YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS
                  INCORPORATED HEREIN BY REFERENCE. If you do not agree to these
                  Terms, you may not access or use the Service or
                  purchase any Items.
                </p>
                <p>
                  Please refer to our Privacy Policy for information about how
                  we collect, use and share personal information about you. By
                  submitting data through the Service, you expressly consent to
                  the collection, use and disclosure of your personal data in
                  accordance with the Privacy Policy.
                </p>
                <p>
                  We reserve the right to change or modify these Terms at any
                  time and in our sole discretion. If we make changes to these
                  Terms, we will provide notice of such changes, such as by
                  sending an email notification, providing notice through the
                  Service or updating the “Last Updated” date at the beginning
                  of these Terms. By continuing to access or use the Service at
                  any point after such update, you confirm your acceptance of
                  the revised Terms and all of the terms incorporated therein by
                  reference. We encourage you to review these Terms frequently
                  to ensure that you understand the terms and conditions that
                  apply when you access or use the Service. If you do not agree
                  to the revised Terms, you may not access or use the Service.
                </p>

                <h3>Our Service</h3>
                <p>
                  The Service is an online platform on which an individual can
                   purchase or offer to purchase, and
                  sell or offer for sale unique non-fungible tokens (“NFTs”) and
                  any non-digital products, services and/or benefits to be
                  furnished by or on behalf of sellers in connection with the
                  sale of such assests implemented on the one or more blockchain
                  platform networks then-utilized by Bowled.io (each, a
                  “Blockchain Platform”) using smart contracts. You may only
                  participate in the purchase or sale of any Item by
                  registering for an Account, as described below.
                </p>

                <h3>
                  Account Registration; Consent to Electronic Communication
                </h3>
                <p>
                  <ul>
                    <li>
                      In order to use certain features of the Service you will
                      need to register for an account on the Service
                      (“Account”). You must be eighteen (18) years old to
                      register for an Account. By creating an Account, you agree
                      to (i) provide accurate, current, and complete Account
                      information about yourself, (ii) maintain and promptly
                      update from time to time as necessary your Account
                      information, (iii) maintain the security of your password
                      and accept all risks of unauthorized access to your
                      Account and the information you provide to us, and (iv)
                      immediately notify us if you discover or otherwise suspect
                      any security breaches related to the Service or your
                      Account. You may not have more than one Account, and
                      bowled.io reserves the right to block multiple accounts of
                      the same user.
                    </li>
                    <li>
                      You agree that you will not:
                      <ul>
                        <li>
                          Buy, sell, rent, or lease access to your Account or
                          username without our written permission.
                        </li>
                        <li>
                          Register or attempt to register for a new Account
                          without our written permission after your Account has
                          been disabled or deleted by us.
                        </li>
                        <li>Share your Account password with anyone.</li>
                        <li>
                          Log in or try to log in to access the Service through
                          unauthorized third party applications or clients.
                        </li>
                      </ul>
                    </li>
                    <li>
                      We may require you to provide additional information and
                      documents at the request of any competent authority or in
                      order to help us comply with applicable law, regulation,
                      or policy, including laws related to anti-laundering
                      (legalization) of incomes obtained by criminal means, or
                      for counteracting financing of terrorism. We may also
                      require you to provide additional information and
                      documents in cases where it has reasons to believe that:
                      <ul>
                        <li>
                          Your Account is being used for money laundering or for
                          any other illegal activity.
                        </li>
                        <li>
                          You have concealed or reported false identification
                          information and other details.
                        </li>
                        <li>
                          Transactions effected via your Account were effected
                          in breach of these Terms.
                        </li>
                      </ul>
                      In such cases, bowled.io, in its sole discretion, may
                      pause or cancel your transactions until such requested
                      additional information and documents have been reviewed by
                      us and accepted as satisfying the requirements of
                      applicable law, regulation, or policy. If you do not
                      provide complete and accurate information and documents in
                      response to such a request, we may refuse to provide any
                      Item, Content, product, service, and/or further access to
                      the Service to you.
                    </li>
                    <li>
                      By creating an Account, you consent to receive electronic
                      communications from bowled.io (e.g., via email or by
                      posting notices to the Service). These communications may
                      include notices about your Account (e.g., password changes
                      and other transactional information) and are part of your
                      relationship with us. You agree that any notices,
                      agreements, disclosures or other communications that we
                      send to you electronically will satisfy any legal
                      communication requirements, including, but not limited to,
                      any requirements that such communications be in writing.
                      You should maintain copies of electronic communications
                      from us by printing a paper copy or saving an electronic
                      copy. We have no obligation to store for your later use or
                      access any such electronic communications that we make to
                      you. We may also send you promotional communications via
                      email, including, but not limited to, newsletters, special
                      offers, surveys and other news and information we think
                      will be of interest to you. You may opt out of receiving
                      these promotional emails at any time by following the
                      unsubscribe instructions provided therein.
                    </li>
                    <li>
                      When you register for an Account, you hereby represent and
                      warrant, to and for the benefit of bowled.io and its
                      affiliates, as follows:
                      <ul>
                        <li>
                          Authority. You have all requisite capacity, power and
                          authority to enter into and perform your obligations
                          under these Terms, including to list, buy, sell
                          or trade any Items. The execution, delivery and
                          performance of, and the performance of your
                          obligations under, these Terms have been duly
                          authorized by all necessary action on your part and on
                          the part of any entity on behalf of which you are
                          entering into these Terms, and no other proceedings
                          are necessary to authorize the execution, delivery or
                          performance of your obligations under these Terms.
                        </li>
                        <li>
                          Due Execution. These Terms constitute your legal,
                          valid and binding obligation, enforceable against you
                          in accordance with these Terms.
                        </li>
                        <li>
                          Accuracy of Information. All information provided to
                          us, including any address and social security number
                          or tax ID number, is accurate and complete. None of:
                          (i) you; (ii) any affiliate of any entity on behalf of
                          which you are entering into these Terms; (iii) any
                          other person having a beneficial interest in any
                          entity on behalf of which you are entering into these
                          Terms (or in any affiliate thereof); or (iv) any
                          person for whom you are acting as agent or nominee in
                          connection with these Terms is: (A) a country,
                          territory, entity or individual named on an OFAC list
                          as provided at
                          <a>http://www.treas.gov/ofac</a>, or any person or
                          entity prohibited under the OFAC programs, regardless
                          of whether or not they appear on the OFAC list; or (B)
                          a senior foreign political figure, or any immediate
                          family member or close associate of a senior foreign
                          political figure.
                        </li>
                        <li>
                          Non-Contravention. These Terms do not, and the
                          performance of your obligations under these Terms and
                          your  listing, buying, selling or trading of
                          any Items will not: (i) if you are entering into these
                          terms on behalf of an entity, conflict with or violate
                          any of the charter documents of such entity or any
                          resolution adopted by its equity holders or other
                          persons having governance authority over the entity;
                          (ii) contravene, conflict with or violate any right of
                          any third party or any legal requirement applicable to
                          you or to any of the assets owned or used by you; or
                          (iii) result in any breach of or constitute a default
                          (or an event that with notice or lapse of time or both
                          would become a default) under any material contract or
                          agreement to which you are a party, permit held by you
                          or legal requirement applicable to you.
                        </li>
                        <li>
                          Independent Investigation and Non-Reliance. You are
                          sophisticated, experienced and knowledgeable in the
                           listing, buying, selling or trading of any
                          Items. Additionally, you have conducted an independent
                          investigation of the Service and the matters
                          contemplated by these Terms, have formed your own
                          independent judgment regarding the benefits and risks
                          of and necessary and desirable practices regarding the
                          foregoing and, in making the determination to 
                          list, buy, sell or trade any Items using the Service,
                          you have relied solely on the results of such
                          investigation and such independent judgment. Without
                          limiting the generality of the foregoing, you
                          understand, acknowledge and agree that the legal
                          requirements pertaining to blockchain technologies and
                          digital assets generally, including the Items, are
                          evolving, and you have conducted an independent
                          investigation of such potentially applicable legal
                          requirements and the resulting risks and
                          uncertainties, including the risk that one or more
                          governmental entities or other persons may assert that
                          any digital assets or coins (including
                          the Items) may constitute securities under applicable
                          legal requirements. You hereby irrevocably disclaim
                          and disavow reliance upon any statements or
                          representations made by or on behalf of, or
                          information made available by, Bowled.io, in
                          determining to enter into these Terms, list,
                          buy, sell or trade any Items or use the Service.
                        </li>
                        {/* <li>
                          Litigation. There is no legal proceeding pending that
                          relates to your activities relating to the Minting of
                          Items or other token- or digital asset- trading or
                          blockchain technology related activities.
                        </li> */}
                        <li>
                          Intellectual Property and Related Matters. You are the
                          sole and exclusive owner of all right, title and
                          interest in and to all rights, including intellectual
                          property rights, incorporated into or otherwise used,
                          held for use or practiced in connection with (or
                          planned by you to be incorporated into or otherwise
                          used, held for use or practiced in connection with)
                          the Item, any Off-Chain Benefits and genrating 
                          the Item, other than any intellectual property rights
                          that are validly licensed (or provided on a hosted
                          basis) to you pursuant to valid and binding licenses
                          granted to you.
                        </li>
                        <li>
                          Compliance. You have not failed to comply with, and
                          have not violated, any applicable legal requirement
                          relating to any payment  activities. No investigation or
                          review by any governmental entity is pending or, to
                          your knowledge, has been threatened against or with
                          respect to you, nor does any government order or
                          action prohibit you or any of your representatives
                          from engaging in or continuing any conduct, activity
                          or practice relating to trading Items.
                        </li>
                        <li>
                          You must provide all equipment and software necessary
                          to connect to the Service. You are solely responsible
                          for any fees, including Internet connection or mobile
                          fees, that you incur when accessing the Service.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <h3>
                  You must provide all equipment and software necessary to
                  connect to the Service. You are solely responsible for any
                  fees, including Internet connection or mobile fees, that you
                  incur when accessing the Service.
                </h3>
                <ul>
                  {/* <li>
                    An individual who has created an Account (each, a “User”)
                    may be able to use the Service to create or issue (“Mint”)
                    an Item on a Blockchain Platform. By Minting an Item or
                    otherwise using the Service, you agree to comply with any
                    terms, including licenses or payment rights, that you embed
                    within or otherwise include with the Item, and to disclose
                    fully all such terms in the description of your listing of
                    the Item on the Service. Certain additional terms may apply
                    to your use of the Service to Mint Items.
                  </li> */}
                  <li>
                    The Service includes a marketplace, and bowled.io is not and
                    shall not be a party to any transaction or dispute between
                    the owner of an Item and any actual or prospective
                    purchaser or owner of that Item, whether arising from any
                    rights granted in that Item or otherwise.
                  </li>
                </ul>

                <h3>Pricing/Payments</h3>
                <ul>
                  <li>
                    All pricing and payment terms are as indicated at point of
                    sale or otherwise on the Service, and any payment
                    obligations you incur are binding at the time of purchase.
                    Please review carefully the terms of purchase of any Item
                    before purchasing, including the terms of any licenses,
                    payment rights, or Off-Chain Benefits relating to or
                    incorporated into the Items. Bowled.io is not a party to any
                    secondary transaction on the Service between sellers and
                    actual or prospective purchasers, and any dispute related to
                    a purchase of an Item on the Service shall be between the
                    seller and actual or prospective purchasers of such Item.
                  </li>
                  <li>
                    You may not substitute any other currency, for the currency in which
                    you have contracted to pay at the time of purchase. For
                    clarity, no fluctuation in the value of any currency,
                     shall impact or excuse
                    your obligations with respect to any purchase.
                  </li>
                  <li>
                    Bowled.io may charge a fee to the seller of any Item listed
                    for sale on the Service (“Listing Fee”). The amount of such
                    Listing Fee may be expressed as an absolute value or as a
                    percentage of the amount received by the seller for such
                    Item, in each case as indicated at the point of listing for
                    such Item for sale on the Service.
                  </li>
                  <li>
                    In connection with any subsequent sale of an Item after its
                    initial sale on the Service (each such sale, a “Secondary
                    Sale”), fees may be due to bowled.io from the seller or
                    buyer of such Item (“Secondary Sale Fee”). Such Secondary
                    Sale Fee may be coded into the Item and may apply to all
                    Secondary Sales of the Item, whether or not such Secondary
                    Sale takes place on the Service.
                  </li>
                  {/* <li>
                    In certain instances we may accept, process, and settle
                    payments made in cryptocurrency. In order to make a purchase
                    of an Item using cryptocurrency, you must either (i) deposit
                    such cryptocurrency into your Account, or (ii) connect a
                    digital wallet to the Service, in each case in accordance
                    with the functionality of the Service. If the balance of
                    such cryptocurrency in your Account is less than sufficient
                    to cover the price of an Item at the time of purchase, you
                    may not be able to purchase that Item using this such
                    payment method of payment. In order to purchase an Item
                    using a digital wallet, you may be required to must first
                    download a supported bridge extension in order and use such
                    extension to connect and unlock your digital wallet through
                    the Service. Once you submit an order to Mint or purchase an
                    Item, your order is passed on to the applicable extension,
                    which completes the transaction on your behalf. If the
                    balance of such cryptocurrency in your Account is
                    insufficient to cover the price of an Item at the time of
                    purchase you may not be able to purchase that Item. Whether
                    a particular cryptocurrency is accepted as a payment method
                    by bowled.io is subject to change at any time in bowled.io’s
                    sole discretion.
                  </li> */}
                  <li>
                    In certain instances we may accept, process, and settle
                    payments of fiat currency via credit card or other means.
                    Payment processing for the Service in such instances will be
                    performed by bowled.io’s third-party payment processor. Your
                    use of the Service and the payment processing provided by
                    the Payment Processor is subject to the their-party
                    Connected Account Agreements, as may be modified by the
                    Payment Processor from time to time (collectively, the
                    “Payment Processor Agreement”). As a condition of using the
                    Payment Processor’s payment processing, you must provide
                    accurate and complete information, and you authorize us to
                    share this information with the Payment Processor and to
                    charge your payment method for all amounts that may become
                    due under this Agreement. All bank, credit card, or other
                    payment information is sent directly to and stored with the
                    Payment Processor using its security protocols. We do not
                    store your payment information on its systems and shall not
                    have any responsibility for the safety or security of that
                    information. Your use of the Payment Processor’s payment
                    processing is conditioned upon your compliance with the
                    Payment Processor Agreement, and if the Payment Processor
                    Agreement is terminated by the Payment Processor, you may
                    not be able to use the Services, or you may have your use of
                    the Services suspended or terminated.
                  </li>
                  <li>
                    Bowled.io may add or change any payment processing services
                    at any time. Such services may be subject to additional
                    terms or conditions. Whether a particular currency is
                    accepted as a payment method by us is subject to change at
                    any time in bowled.io’s sole discretion.
                  </li>
                </ul>

                <h3>Appointment of bowled.io as Limited Payments Agent</h3>
                <p>
                  By using the Service to create an Item, you hereby appoint us as
                  your limited payments agent for the sole purpose of receiving,
                  holding and settling payments due and owed to you arising out
                  of (i) the creation of Items through the Service; and (ii) any
                  Secondary Sale of Items. Subject to the terms of this
                  Agreement, bowled.io will process such payments and settle
                  payments that are actually received by us, less any amounts
                  owed to bowled.io, including taxes, fees and other
                  obligations. You agree that a payment received by bowled.io on
                  your behalf satisfies the payor’s obligation to make payment
                  to you, regardless of whether bowled.io actually settles such
                  payment to you. If bowled.io does not settle any such payments
                  to you as described in these Terms, you will have recourse
                  only against bowled.io and not the payor, as payment is deemed
                  made by the payor to you upon constructive or actual receipt
                  by bowled.io.
                </p>

                <h3>Ownership</h3>
                <ul>
                  <li>
                    Unless otherwise indicated in writing by us, the Service and
                    all content and other materials contained therein,
                    including, without limitation, the bowled.io logo and all
                    designs, text, graphics, pictures, information, data,
                    software, sound files, other files and the selection and
                    arrangement thereof (collectively, “Content”) are the
                    proprietary property of bowled.io or our affiliates,
                    licensors or users, as applicable.
                  </li>
                  <li>
                    Notwithstanding anything to the contrary in these Terms, the
                    Service and Content may include software components provided
                    by bowled.io or its affiliates or a third party that are
                    subject to separate license terms, in which case those
                    license terms will govern such software components.
                  </li>
                  <li>
                    The bowled.io logo and any bowled.io product or service
                    names, logos or slogans that may appear on the Service are
                    trademarks of bowled.io or our affiliates and may not be
                    copied, imitated or used, in whole or in part, without our
                    prior written permission. You may not use any metatags or
                    other “hidden text” utilizing “bowled.io,” “bowled.io
                    Protocol,” or any other name, trademark or product or
                    service name of bowled.io or our affiliates without our
                    prior written permission. In addition, the look and feel of
                    the Service and Content, including, without limitation, all
                    page headers, custom graphics, button icons and scripts,
                    constitute the service mark, trademark or trade dress of
                    bowled.io and may not be copied, imitated or used, in whole
                    or in part, without our prior written permission. All other
                    trademarks, registered trademarks, product names and
                    bowled.io names or logos mentioned on the Service are the
                    property of their respective owners and may not be copied,
                    imitated or used, in whole or in part, without the
                    permission of the applicable trademark holder. Reference to
                    any products, services, processes or other information by
                    name, trademark, manufacturer, supplier or otherwise does
                    not constitute or imply endorsement, sponsorship or
                    recommendation by bowled.io.
                  </li>
                </ul>

                <h3>Licenses Granted to You</h3>
                <ul>
                  <li>
                    You are hereby granted a limited, revocable, nonexclusive,
                    nontransferable, non-assignable, non-sublicensable, “as-is”
                    license to access and use the Service and Content for your
                    own personal, non-commercial use; provided, however, that
                    such license is subject to these Terms and does not include
                    any right to (i) sell, resell, or use commercially the
                    Service or Content, (ii) distribute, publicly perform, or
                    publicly display any Content, (iii) modify or otherwise make
                    any derivative uses of the Service or Content, or any
                    portion thereof, (iv) use any data mining, robots, or
                    similar data gathering or extraction methods, (v) download
                    (other than page caching) any portion of the Service or
                    Content, except as expressly permitted by us, and (vi) use
                    the Service or Content other than for their intended
                    purposes. This license is subject to your compliance with
                    the Acceptable Use Policy set forth in Section 11 below.
                  </li>
                  <li>
                    You are granted a limited, nonexclusive, nontransferable
                    right to create a text hyperlink to the Service for
                    noncommercial purposes, provided that such link does not
                    portray bowled.io or our affiliates or any of our Services,
                    Content, products or services in a false, misleading,
                    derogatory or otherwise defamatory manner, and provided
                    further that the linking site does not contain any adult or
                    illegal material or any material that is offensive,
                    harassing or otherwise objectionable in bowled.io’s sole
                    discretion. This limited right may be revoked at any time.
                    You may not use a logo or other proprietary graphic of
                    bowled.io to link to the Service or Content without our
                    express written permission. Further, you may not use, frame
                    or utilize framing techniques to enclose any bowled.io
                    trademark, logo or other proprietary information, including
                    the images found on the Service, the content of any text or
                    the layout or design of any page, or form contained on a
                    page, on the Service without our express written consent
                  </li>
                  <li>
                    Your rights in Items sold or offered for sale on or through
                    the Service may be subject to certain restrictions or
                    limitations, as determined by the creator or by us and as
                    stated on the Service. Your rights in any Item that you
                    purchase through the Service are limited to those rights
                    expressly granted in the license as listed at point of sale
                    or otherwise through the Service. bowled.io does not
                    guarantee that any Items created on the Service will be
                    transferable to or accessible through any other platform or
                    service.
                  </li>
                </ul>

                <h3>User Content</h3>
                <p>
                  The Service may include the ability for you to make certain
                  content available on or through the Service (“User Content”).
                  If you choose to make User Content available on or through the
                  Service, you hereby grant bowled.io a fully paid,
                  royalty-free, worldwide, non-exclusive right (including any
                  moral rights) and license to use, sublicense, distribute,
                  reproduce, modify, adapt, and display, such User Content (in
                  whole or in part) for the purposes of (i) providing the
                  Service, including making User Content available to other
                  Users in accordance with your elections on the Service; and
                  (ii) improving the Service. You also hereby grant each other
                  User of the Service a non-exclusive license to access your
                  User Content through the Service, and to use, reproduce,
                  distribute, display and perform such User Content solely as
                  permitted through the functionality of the Service and under
                  these Terms. You are solely responsible for any User Content
                  you provide. You represent and warrant that such Content will
                  not be libelous or defamatory and that you have, or have
                  obtained, all rights, licenses, consents, permissions, power
                  and/or authority necessary to grant the rights granted herein
                  for any User Content that you submit, post or display on or
                  through the Service. You agree that such User Content will not
                  contain material the use of which as permitted herein is
                  violative of copyright or other proprietary rights. bowled.io
                  has no responsibility for the User Content posted or listed
                  via the Service, although bowled.io reserves the right (but
                  bowled.io has no obligation) to remove any User Content for
                  any reason or for no reason, including in the event that
                  bowled.io determines Content to be in violation of these
                  Terms.
                </p>

                <h3>Third-Party Services/Terms</h3>
                <ul>
                  <li>
                    The Service may contain links to third-party properties
                    (“Third-Party Properties”) and applications (“Third-Party
                    Applications”). When you click on a link to a Third-Party
                    Property or Third-Party Application, you are subject to the
                    terms and conditions (including privacy policies) of another
                    property or application. Such Third-Party Properties and
                    Third-Party Applications and are not under the control of
                    bowled.io. bowled.io is not responsible for any Third-Party
                    Properties or Third-Party Applications. bowled.io provides
                    links to these Third-Party Properties and Third-Party
                    Applications only as a convenience and does not review,
                    approve, monitor, endorse, warrant, or make any
                    representations with respect to Third-Party Properties or
                    Third-Party Applications, or their products or services. You
                    use all links in Third-Party Properties, and Third-Party
                    Applications at your own risk. When you leave our Service,
                    our Terms and policies no longer govern. You should review
                    all applicable agreements and policies, including privacy
                    and data gathering practices, of any Third-Party Properties
                    or Third-Party Applications, and should make whatever
                    investigation you feel necessary or appropriate before
                    proceeding with any transaction with any third party.
                  </li>
                  <li>
                    The Service and Content may include components, including
                    software components that are provided by a third party and
                    that are subject to separate license terms, in which case
                    those license terms will govern your access to and use of
                    such components. Our Service and/or any Third-Party Property
                    may include terms governing the use of such Item, including
                    license terms. In the event you purchase such Item through
                    our marketplace, you are required to comply with the terms
                    that govern such Item, which may be different from these
                    Terms.
                  </li>
                </ul>

                <h3>Acceptable Use Policy</h3>
                <p>
                  You agree that you are solely responsible for your conduct
                  while participating in the purchase or sale of Items or
                  otherwise accessing or using the Service. You agree that you
                  will abide by these Terms and will not:
                </p>
                <ul>
                  <li>Provide false or misleading information to bowled.io</li>
                  <li>
                    Use or attempt to use another user’s Account without
                    authorization from such user and Bowled.io.
                  </li>
                  <li>Create or list counterfeit Items.</li>
                  <li>
                    Pose as another person or create a misleading username.
                  </li>
                  <li>
                    Circumvent or attempt to circumvent any limitations or
                    restrictions placed on promotions offered by bowled.io.
                  </li>
                  <li>
                    Use the Service in any manner that could interfere with,
                    disrupt, negatively affect or inhibit other users from fully
                    enjoying the Service, or that could damage, disable,
                    overburden or impair the functioning of the Service in any
                    manner.
                  </li>
                  <li>
                    Develop, utilize, or disseminate any software, or interact
                    with any API in any manner, that could damage, harm, or
                    impair the Service
                  </li>
                  <li>
                    Reverse engineer any aspect of the Service, or do anything
                    that might discover source code or bypass or circumvent
                    measures employed to prevent or limit access to any service,
                    area, or code of the Service
                  </li>
                  <li>
                    Attempt to circumvent any content-filtering techniques we
                    employ, or attempt to access any feature or area of the
                    Service that you are not authorized to access.
                  </li>
                  <li>
                    Use any robot, spider, crawler, scraper, script, browser
                    extension, offline reader, or other automated means or
                    interface not authorized by us to access the Service,
                    extract data or otherwise interfere with or modify the
                    rendering of Service pages or functionality
                  </li>
                  <li>
                    Collect or harvest data from our Service that would allow
                    you to contact individuals, companies, or other persons or
                    entities, or use any such data to contact such entities
                  </li>
                  <li>
                    Use data collected from our Service for any direct marketing
                    activity (including without limitation, email marketing, SMS
                    marketing, telemarketing, and direct marketing)
                  </li>
                  <li>
                    Bypass or ignore instructions that control all automated
                    access to the Service;
                  </li>
                  <li>
                    Use the Service for any illegal or unauthorized purpose, or
                    engage in, encourage, or promote any activity that violates
                    any applicable law or these Terms
                  </li>
                  <li>
                    Use the a Blockchain Platform to carry out any illegal
                    activities in connection with or in any way related to your
                    access to and use of the Service, including but not limited
                    to money laundering, terrorist financing or deliberately
                    engaging in activities designed to adversely affect the
                    performance of the a Blockchain Platform used by the
                    Service, or the Service itself
                  </li>
                  <li>
                    Engage in or knowingly facilitate any “front-running,” “wash
                    trading,” “pump and dump trading,” “ramping,” “cornering” or
                    fraudulent, deceptive or manipulative trading activities,
                    including:
                    <ul>
                      <li>
                        trading an Item at successively lower or higher prices
                        for the purpose of creating or inducing a false,
                        misleading or artificial appearance of activity in such
                        Item, unduly or improperly influencing the market price
                        for such Item trading on the Service or establishing a
                        price which does not reflect the true state of the
                        market in such Item
                      </li>
                      <li>
                        executing or causing the execution of any transaction in
                        an Item which involves no material change in the
                        beneficial ownership thereof
                      </li>
                      <li>
                        entering any order for the purchase or sale of an Item
                        with the knowledge that an order of substantially the
                        same size, and at substantially the same price, for the
                        sale of such Item, has been or will be entered by or for
                        the same or different parties
                      </li>
                      <li>
                        participating in, facilitating, assisting or knowingly
                        transacting with any pool, syndicate or joint account
                        organized for the purpose of unfairly or deceptively
                        influencing the market price of an Item
                      </li>
                    </ul>
                  </li>
                  <li>
                    Use the Service to carry out any financial activities
                    subject to registration or licensing, including but not
                    limited to using the Service to transact in securities,
                    commodities futures, trading of commodities on a leveraged,
                    margined or financed basis, binary options (including
                    prediction-market transactions), real estate or real estate
                    leases, equipment leases, debt financings, equity financings
                    or other similar transactions
                  </li>
                  <li>
                    Use the Service to participate in fundraising for a
                    business, protocol, or platform, including but not limited
                    to creating, listing, or buying assets that (i) are
                    redeemable for financial instruments, (ii) give owners any
                    rights to participate in an ICO or any securities offering,
                    or (iii) entitle owners to financial rewards, including but
                    not limited to, DeFi yield bonuses, staking bonuses, and
                    burn discounts.
                  </li>
                </ul>

                <h3>Listing Guidelines</h3>
                <ul>
                  <li>
                    bowled.io has the right, but not the obligation, to remove
                    any listing at any time. bowled.io exercises its sole
                    judgment in allowing or disallowing certain assets,
                    listings, smart contracts, and collections.
                  </li>
                  <li>
                    Items, listings, smart contracts, collections, and other
                    User Content that bowled.io in its sole discretion deems
                    inappropriate, disruptive, or illegal are prohibited on the
                    Service. bowled.io reserves the rights to determine the
                    appropriateness of listings on its site and remove any User
                    Content, including any listing, at any time. If you create
                    or offer an Item, listing, smart contract, or collection in
                    violation of these policies, we reserve the right to take
                    corrective actions, as appropriate, including but not
                    limited to removing the asset, listing, smart contract, or
                    collection, deleting your Account, and permanently
                    withholding referral payments and developer revenue sharing
                    fees or any other payments due and owed to you. Bowled.io
                    cannot destroy or impound your Items or smart contracts, but
                    we reserve the right to destroy inappropriate or illegal
                    metadata stored on our servers.
                  </li>
                  <li>
                    The following User Content is prohibited on the Service,
                    whether included in or made available in or through Items,
                    listings, smart contracts, or collections that include
                    metadata, or otherwise:
                    <ul>
                      <li>
                        content that violates international or United States
                        intellectual property laws
                      </li>
                      <li>
                        content that promotes suicide or self-harm, incites hate
                        or violence against others, degrades or doxes another
                        individual, depicts minors in sexually suggestive
                        situations, or is otherwise illegal in the United States
                      </li>
                      <li>
                        content with a primary or substantial purpose in a game
                        or application that violates international or United
                        States intellectual property laws, promotes suicide or
                        self-harm, incites hate or violence against others,
                        degrades or doxes another individual, depicts minors in
                        sexually suggestive situations, or is otherwise illegal
                        in the United States
                      </li>
                      <li>
                        content created or used primarily or substantially for
                        the purpose of raising funds for known terrorist
                        organizations (as listed on
                        <a>
                          https://www.state.gov/foreign-terrorist-organizations/
                        </a>{" "}
                        or as may be determined by bowled.io from time to time
                        in its sole discretion)
                      </li>
                      <li>
                        as determined in our sole and absolute discretion, NSFW
                        content and other content that is intended to be
                        age-restricted. Item names, listings and their
                        descriptions, smart contract names, and collections
                        including profanity or overtly sexual content are
                        prohibited. A smart contract that contains NSFW content
                        is subject to being marked NSFW, even if the NSFW
                        content only represents a portion of the content on the
                        smart contract
                      </li>
                      <li>
                        content that includes stolen assets, assets taken
                        without authorization, and otherwise illegally obtained
                        assets, all including but not limited to Items. Listing
                        illegally obtained Items may result in your listings
                        being cancelled, your Items being hidden, or your
                        Account being suspended If you have reason to believe
                        that an asset listed on the Service was illegally
                        obtained, please contact us immediately
                      </li>
                      <li>
                        content that is illegal or offensive, or content that
                        includes or uses profanity or graphic language
                      </li>
                    </ul>
                    If you become aware of the creation, listing, or buying of
                    assets in violation of any of the terms specified in this
                    section, please contact us at akshay.khandelwal@dfx,world to
                    report it.
                  </li>
                </ul>

                <h3>Copyright</h3>
                <p>
                  bowled.io retains the absolute right, but bowled.io has not
                  the obligation, to terminate the Account and remove the User
                  Content of any user of the Service who violates or infringes
                  our rights or those of any third party. Without limiting the
                  foregoing, if you believe that your intellectual property has
                  been used on the Service in a way that constitutes
                  infringement, please provide us with the following
                  information: (1a) an electronic or physical signature of the
                  person authorized to act on behalf of the owner of the
                  copyright interest; (2b) a description of the copyrighted work
                  that you claim has been infringed; (3c) a description of the
                  location on our Service of the material that you claim is
                  infringing; (4d) your address, telephone number and e-mail
                  address; (5e) a written statement by you that you have a good
                  faith belief that the disputed use is not authorized by the
                  copyright owner, its agent or the law; and (6f) a statement by
                  you, made under penalty of perjury, that the above information
                  in your notice is accurate and that you are the copyright
                  owner or authorized to act on the copyright owner’s behalf.
                  Such information may be sent to akshay.khandelwal@dfx.world.
                </p>

                <h3>Investigations</h3>
                <p>
                  f bowled.io becomes aware of any possible violations by you of
                  these Terms, bowled.io reserves the right to investigate such
                  violations. If, as a result of the investigation, bowled.io
                  believes that criminal activity may have occurred, bowled.io
                  reserves the right to refer the matter to, and to cooperate
                  with, any and all applicable legal authorities. bowled.io is
                  entitled, except to the extent prohibited by applicable law,
                  to disclose any information or materials on or in the Service,
                  including User Content, in bowled.io’s possession in
                  connection with your use of the Service, to (i) comply with
                  applicable laws, legal process or governmental request; (ii)
                  enforce these Terms, (iii) respond to any claims that User
                  Content violates the rights of third parties, (iv) respond to
                  your requests for customer service, or (v) protect the rights,
                  property or personal safety of bowled.io, its users, or the
                  public, and all law enforcement or other government officials,
                  as bowled.io in its sole discretion believes to be necessary
                  or appropriate. By agreeing to these Terms, you hereby provide
                  your irrevocable consent to such monitoring. You acknowledge
                  and agree that you have no expectation of privacy concerning
                  your use of the Service, including without limitation text,
                  voice, or video communications.
                </p>

                <h3>Release</h3>
                <p>
                  You hereby release and forever discharge bowled.io and our
                  officers, employees, agents, successors, and assigns (the
                  “bowled.io Entities”) from, and hereby waive and relinquish,
                  each and every past, present and future dispute, claim,
                  controversy, demand, right, obligation, liability, action and
                  cause of action of every kind and nature (including personal
                  injuries, death, and property damage), that has arisen or
                  arises directly or indirectly out of, or that relates directly
                  or indirectly to, the Service (including any interactions
                  with, or act or omission of, other Users or any Third-Party
                  Properties or Third-Party Applications). IF YOU ARE A
                  CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE
                  SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES:
                  “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
                  CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR
                  AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR
                  HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH
                  THE DEBTOR.”
                </p>

                <h3>Assumption of Risk Related To Items</h3>
                <p>You acknowledge and agree that:</p>
                <ul>
                  <li>
                    The prices of digital assets are extremely volatile.
                    Fluctuations in the price of other digital assets could
                    materially and adversely affect the Items, which may also be
                    subject to significant price volatility. We cannot and do
                    not guarantee that any purchasers of Items will not lose
                    money.
                  </li>
                  <li>
                    You are solely responsible for determining what, if any,
                    taxes apply to transactions involving your Items. Neither
                    bowled.io nor any other bowled.io Entity is responsible for
                    determining the taxes that may apply to transactions
                    involving Items.
                  </li>
                  <li>
                    Items exist and can be transferred only by virtue of the
                    ownership record maintained on the blockchain supporting
                    such Items. Our Service does not store, send, or receive
                    Items. Any transfer of Items occurs within the supporting
                    blockchain and not on the Service.
                  </li>
                  <li>
                    There are risks associated with using digital currency,
                    including but not limited to, the risk of hardware, software
                    and Internet connections, the risk of malicious software
                    introduction, and the risk that third parties may obtain
                    unauthorized access to information stored within your
                    digital wallet.
                  </li>
                  <li>
                    The legal and regulatory regime governing blockchain
                    technologies is uncertain, and
                    new regulations or policies may materially adversely affect
                    the development of the Service and the utility of Items
                  </li>
                  <li>
                    There are risks associated with purchasing user-generated
                    User Content, including but not limited to, the risk of
                    purchasing counterfeit assets, mislabeled assets, assets
                    that are vulnerable to metadata decay, assets on smart
                    contracts with bugs, and assets that may become
                    untransferable.
                  </li>
                  <li>
                    bowled.io reserves the right to hide collections, contracts,
                    and assets that bowled.io suspects or believes may violate
                    these Terms. Items you purchase may become inaccessible on
                    the Service. Under no circumstances shall the inability to
                    view your assets on the Service serve as grounds for a claim
                    against bowled.io.
                  </li>
                  <li>
                    bowled.io has no responsibility for the Items created, sold,
                    bought or traded on the Service. bowled.io does not
                    investigate and cannot guarantee or warrant the
                    authenticity, uniqueness, marketability, legality or value
                    of any Item created or traded on the Service. For the
                    avoidance of doubt, bowled.io shall have no responsibility
                    for any failure of any User to comply with any terms
                    regarding the authenticity, uniqueness, scarcity or other
                    description or characteristics of the Item furnished by or
                    on behalf of that User and available via the Service.
                  </li>
                </ul>
                <h3>Indemnification</h3>
                <p>
                  To the fullest extent permitted by applicable law, you agree
                  to indemnify, defend, and hold harmless bowled.io and the
                  bowled.io Entities from and against all actual or alleged
                  third party claims, damages, awards, judgments, losses,
                  liabilities, obligations, penalties, interest, fees, expenses
                  (including, without limitation, attorneys’ fees and expenses)
                  and costs (including, without limitation, court costs, costs
                  of settlement, and costs of or associated with pursuing
                  indemnification and insurance), of every kind and nature
                  whatsoever arising out of or related to these Terms or your
                  use of the Service, whether known or unknown, foreseen or
                  unforeseen, matured or unmatured, or suspected or unsuspected,
                  in law or equity, whether in tort, contract or otherwise
                  (collectively, “Claims”), including, but not limited to,
                  damages to property or personal injury, that are caused by,
                  arise out of or are related to (a) your use or misuse of the
                  Service, User Content or Items, (b) any feedback you provide,
                  (c) your violation of these Terms, and (d) your violation of
                  the rights of any third party, including another user. You
                  agree to promptly notify bowled.io of any third-party Claims
                  and cooperate with the Bowled.io Entities in defending such
                  Claims. You further agree that the bowled.io Entities shall
                  have control of the defense or settlement of any third-party
                  Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF,
                  ANY OTHER INDEMNITIES SET FORTH IN A SEPARATE WRITTEN
                  AGREEMENT BETWEEN YOU AND BOWLED.IO.
                </p>

                <h3>Disclaimers</h3>
                <p>
                  THE SERVICE, CONTENT CONTAINED THEREIN, AND ITEMS LISTED
                  THEREIN ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS
                  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS
                  OR IMPLIED. BOWLED.IO (AND ITS SUPPLIERS) MAKE NO WARRANTY
                  THAT THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE
                  AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
                  BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR
                  SAFE. BOWLED.IO DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS,
                  EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED
                  WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT AS TO THE
                  SERVICE OR ANY CONTENT CONTAINED THEREIN. BOWLED.IO DOES NOT
                  REPRESENT OR WARRANT THAT CONTENT ON THE SERVICE IS ACCURATE,
                  COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE. WE WILL NOT BE
                  LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN
                  IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE
                  SERVICE. WHILE BOWLED.IO ATTEMPTS TO MAKE YOUR ACCESS TO AND
                  USE OF THE SERVICE AND CONTENT SAFE, BOWLED.IO CANNOT AND DOES
                  NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, OR ANY
                  ITEMS LISTED ON OUR SERVICE OR OUR SERVERS ARE FREE OF VIRUSES
                  OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY
                  OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT
                  SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE
                  OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY
                  BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
                  WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU
                  SUSTAIN AS A RESULT OF YOUR USE OF THE SERVICE. WE TAKE NO
                  RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE
                  OF ITEMS, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR
                  CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN
                  PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED
                  ADDRESSES; (II) SERVER FAILURE OR DATA LOSS; (III) CORRUPTED
                  DIGITAL WALLET FILES; (IV) UNAUTHORIZED ACCESS TO
                  APPLICATIONS; OR (V) ANY UNAUTHORIZED THIRD PARTY ACTIVITIES,
                  INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING,
                  BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE SERVICE OR
                  ITEMS
                </p>
                <p>
                  FROM TIME TO TIME, BOWLED.IO MAY OFFER NEW “BETA” FEATURES OR
                  TOOLS. SUCH FEATURES OR TOOLS ARE OFFERED “AS IS” AND WITH ALL
                  FAULTS, SOLELY FOR EXPERIMENTAL PURPOSES AND WITHOUT ANY
                  WARRANTY OF ANY KIND, AND MAY BE MODIFIED OR DISCONTINUED AT
                  BOWLED.IO’S SOLE DISCRETION. THE PROVISIONS OF THIS SECTION
                  APPLY WITH FULL FORCE TO SUCH FEATURES OR TOOLS.
                </p>
                <p>
                  ITEMS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE
                  OF THE OWNERSHIP RECORD MAINTAINED IN THE BLOCKCHAIN NETWORK.
                  ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL
                  ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE APPLICABLE
                  BLOCKCHAIN PLATFORM. WE DO NOT GUARANTEE THAT BOWLED.IO OR ANY
                  BOWLED.IO ENTITY CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN
                  ANY ITEMS. WE CANNOT AND DO NOT GUARANTEE THAT ANY ITEM WILL
                  HAVE OR RETAIN ANY INHERENT VALUE, OR THAT YOU WILL BE ABLE TO
                  SELL OR RESELL ANY ITEM PURCHASED THROUGH THE SERVICE.
                </p>
                <p>
                  bowled.io is not responsible for any losses or harms sustained
                  by you due to vulnerability or any kind of failure, abnormal
                  behavior of software (e.g., wallet, smart contract),
                  blockchains, or any other features of or inherent to the
                  Items. bowled.io is not responsible for casualties due to
                  developers or representatives delay or failure to report any
                  issues with any blockchain supporting Items, including without
                  limitation forks, technical node issues, or any other issues
                  that result in losses of any sort.
                </p>
                <p>
                  Nothing in these Terms shall exclude or limit liability of
                  either party for fraud, death or bodily injury caused by
                  negligence, violation of laws, or any other activity that
                  cannot be limited or excluded under the laws applicable to
                  your jurisdiction. SOME JURISDICTIONS DO NOT ALLOW THE
                  EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS,
                  SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
                </p>

                <h3>Limitation of Liability</h3>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL
                  BOWLED.IO BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST
                  PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
                  SPECIAL OR PUNITIVE DAMAGES ARISING FROM THESE TERMS, THE
                  SERVICE, ANY ITEMS, OR FOR ANY DAMAGES RELATED TO LOSS OF
                  REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
                  SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND
                  WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
                  CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF
                  BOWLED.IO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  ACCESS TO, AND USE OF, THE SERVICE IS UNDERTAKEN BY YOU AT
                  YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
                  RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE
                  DEVICE OR LOSS OF DATA RESULTING THEREFROM.
                </p>

                <h3>Dispute Resolution/Arbitration</h3>

                <p>
                  Dispute Resolution. Please read the arbitration agreement in
                  this section (“Arbitration Agreement”) carefully. It contains
                  procedures for MANDATORY BINDING ARBITRATION AND A CLASS
                  ACTION WAIVER.
                </p>
                <ul>
                  <li>
                    Applicability of Arbitration Agreement. You agree that all
                    claims and disputes (excluding claims for injunctive or
                    other equitable relief as set forth below) in connection
                    with these Terms or the use of any Service provided by
                    bowled.io that cannot be resolved informally shall be
                    resolved by binding arbitration on an individual basis under
                    the terms of this Arbitration Agreement. Unless otherwise
                    agreed to, all arbitration proceedings shall be held in
                    English. This Arbitration Agreement applies to you and
                    bowled.io, and to any subsidiaries, affiliates, agents,
                    employees, predecessors in interest, successors, and
                    assigns, as well as all authorized or unauthorized users or
                    beneficiaries of services or goods provided under these
                    Terms.
                  </li>
                  <li>
                    Notice Requirement and Informal Dispute Resolution. Before
                    either party may seek arbitration, the party must first send
                    to the other party a written notice describing the nature
                    and basis of the claim or dispute and the requested relief
                    (“Notice of Dispute”). A Notice of Dispute to bowled.io
                    should be sent to: akshay.khandelwal@dfx.world. After the
                    Notice of Dispute is received, you and bowled.io may attempt
                    to resolve the claim or dispute informally. If you and
                    bowled.io do not resolve the claim or dispute within thirty
                    (30) days after the Notice of Dispute is received, either
                    party may begin an arbitration proceeding. The amount of any
                    settlement offer made by any party may not be disclosed to
                    the arbitrator until after the arbitrator has determined the
                    amount of the award, if any, to which either party is
                    entitled.
                  </li>
                  <li>
                    Arbitration Rules. Arbitration shall be initiated at the
                    Singapore International Arbitration Centre (“SIAC”) in
                    accordance with the Arbitration Rules of the Singapore
                    International Arbitration Centre ("SIAC Rules") for the time
                    being in force, which rules are deemed to be incorporated by
                    reference in this clause and shall govern all aspects of the
                    arbitration, including but not limited to the method of
                    initiating and/or demanding arbitration, except to the
                    extent such rules are in conflict with these Terms. The
                    arbitration shall be conducted by a single, neutral
                    arbitrator. Each party shall bear its own costs (including
                    attorney’s fees) and disbursements arising out of the
                    arbitration and shall pay an equal share of the fees and
                    costs of the SIAC.
                  </li>
                  <li>
                    Time Limits. If you or bowled.io pursues arbitration, the
                    arbitration action must be initiated and/or demanded within
                    the statute of limitations (i.e., the legal deadline for
                    filing a claim) and within any deadline imposed under the
                    SIAC Rules for the pertinent claim.
                  </li>
                  <li>
                    Authority of Arbitrator. If arbitration is initiated, the
                    arbitrator will decide the rights and liabilities, if any,
                    of you and bowled.io, and the dispute will not be
                    consolidated with any other matters or joined with any other
                    cases or parties. The arbitrator shall have exclusive
                    authority to (i) determine the scope and enforceability of
                    this Arbitration Agreement; and (ii) resolve any dispute
                    related to the interpretation, applicability, enforceability
                    or formation of this Arbitration Agreement including, but
                    not limited to, any claim that all or any part of this
                    Arbitration Agreement is void or voidable; and shall also
                    have the authority to grant motions dispositive of all or
                    part of any claim. The exceptions to the preceding sentence
                    are (1) all disputes arising out of or relating to the class
                    action waiver, including any claim that all or part of the
                    class action waiver is unenforceable, illegal, void or
                    voidable, or such class action waiver has been breached,
                    shall be decided by a court of competent jurisdiction and
                    not by an arbitrator; (2) all disputes arising out of or
                    relating to the payment of arbitration fees shall be decided
                    only by a court of competent jurisdiction and not by an
                    arbitrator; and (3) all disputes arising out of or relating
                    to whether either party has satisfied any condition
                    precedent to arbitration shall be decided only by a court of
                    competent jurisdiction and not by an arbitrator. The
                    arbitrator shall have the authority to award monetary
                    damages, and to grant any non-monetary remedy or relief
                    available to an individual under applicable law, the SIAC
                    Rules, and these Terms. The arbitrator shall issue a written
                    award and statement of decision describing the essential
                    findings and conclusions on which the award is based,
                    including the calculation of any damages awarded. The
                    arbitrator has the same authority to award relief on an
                    individual basis that a judge in a court of law would have.
                    The award of the arbitrator is final and binding upon you
                    and Bowled.io. Any judgment on the award rendered by the
                    arbitrator may be entered in any court of competent
                    jurisdiction.
                  </li>
                  <li>
                    Waiver of Jury Trial. THE PARTIES HEREBY WAIVE THEIR
                    CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE
                    A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that
                    all claims and disputes shall be resolved by arbitration
                    under this Arbitration Agreement. Arbitration procedures are
                    typically more limited, more efficient and less costly than
                    rules applicable in a court and are subject to very limited
                    review by a court. In the event any litigation should arise
                    between you and Bowled.io in any court in a suit to vacate
                    or enforce an arbitration award or otherwise, YOU AND
                    BOWLED.IO WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing
                    that the dispute be resolved by a judge.
                  </li>
                  <li>
                    Waiver of Class or Consolidated Actions. ALL CLAIMS AND
                    DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST
                    BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON
                    A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER
                    CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED
                    WITH THOSE OF ANY OTHER CUSTOMER OR USER. If a decision is
                    issued stating that applicable law precludes enforcement of
                    any of this subsection’s limitations as to a given claim for
                    relief, then the claim must be severed from the arbitration
                    and brought into the courts of Singapore. All other claims
                    shall be arbitrated.
                  </li>
                  <li>
                    Confidentiality. All aspects of the arbitration proceeding,
                    including but not limited to the award of the arbitrator and
                    compliance therewith, shall be strictly confidential. The
                    parties agree to maintain confidentiality unless otherwise
                    required by law. This paragraph shall not prevent a party
                    from submitting to a court of law any information necessary
                    to enforce this Agreement, to enforce an arbitration award,
                    or to seek injunctive or equitable relief.
                  </li>
                  <li>
                    Severability. If any part or parts of this Arbitration
                    Agreement are found under the law to be invalid or
                    unenforceable by a court of competent jurisdiction, then
                    such specific part or parts shall be of no force and effect
                    and shall be severed and the remainder of the Arbitration
                    Agreement shall continue in full force and effect.
                  </li>
                  <li>
                    Right to Waive. Any or all of the rights and limitations set
                    forth in this Arbitration Agreement may be waived by the
                    party against whom the claim is asserted. Such waiver shall
                    not waive or affect any other portion of this Arbitration
                    Agreement.
                  </li>
                  <li>
                    Survival of Agreement. This Arbitration Agreement will
                    survive the termination of your relationship with Bowled.io.
                  </li>
                  <li>
                    Emergency Equitable Relief. Notwithstanding the foregoing,
                    either party may seek emergency equitable relief before a
                    court in Singapore in order to maintain the status quo
                    pending arbitration. A request for interim measures shall
                    not be deemed a waiver of any other rights or obligations
                    under this Arbitration Agreement.
                  </li>
                  <li>
                    Claims Not Subject to Arbitration. Notwithstanding the
                    foregoing, claims of defamation, violation of the Computer
                    Fraud and Abuse Act, and infringement or misappropriation of
                    the other party’s patent, copyright, trademark or trade
                    secrets shall not be subject to this Arbitration Agreement.
                  </li>
                  <li>
                    Courts. In any circumstances where the foregoing Arbitration
                    Agreement permits the parties to litigate in court, the
                    parties hereby agree to submit to the personal jurisdiction
                    of the courts located within Singapore, for such purpose.
                  </li>
                </ul>

                <h3>General</h3>
                <p>
                  We reserve the right in our sole discretion to modify,
                  suspend, or discontinue the Service, or any features or parts
                  thereof, whether temporarily or permanently, at any time with
                  or without notice to you in our sole discretion. These Terms,
                  and your access to and use of the Service, shall be governed
                  by and construed and enforced in accordance with the laws of
                  Singapore, without regard to any conflict of law rules or
                  principles that would cause the application of the laws of any
                  other jurisdiction. Any dispute between the parties that is
                  not subject to arbitration shall be resolved in the courts of
                  Singapore. Notwithstanding anything contained in these Terms,
                  we reserve the right, without notice and in our sole
                  discretion, to terminate your right to access or use the
                  Service at any time and for any or no reason, and you
                  acknowledge and agree that we shall have no liability or
                  obligation to you in such event and that you will not be
                  entitled to a refund of any amounts that you have already paid
                  to us, to the fullest extent permitted by applicable law. If
                  any term, clause or provision of these Terms is held invalid
                  or unenforceable, then that term, clause or provision will be
                  severable from these Terms and will not affect the validity or
                  enforceability of any remaining part of that term, clause or
                  provision, or any other term, clause or provision of these
                  Terms. Your relationship to Bowled.io is that of an
                  independent contractor, and neither party is an agent or
                  partner of the other. These Terms, and any rights and licenses
                  granted hereunder, may not be transferred or assigned by you
                  without the prior written consent of Bowled.io. Bowled.io’s
                  failure to assert any right or provision under these Terms
                  shall not constitute a waiver of such right or provision.
                  Except as otherwise provided herein, these Terms are intended
                  solely for the benefit of Bowled.io and you and are not
                  intended to confer third party beneficiary rights upon any
                  other person or entity.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default TermsOfService;


// <Container>
// <Row>
//   <Col>
//     <h1 className="text-center mb-3">Terms Of Service</h1>
//     <div className="privacy_sec privacy_sec_term">
//       <p>
//         These NFT Platform User Terms of Service (these “Terms”)
//         govern your access to and use of certain products, services
//         and properties made available by bowled.io (“bowled.io,” “we,”
//         “us” or “our”). (As used herein, the term “you” (including any
//         variant) refers to each individual who enters into these Terms
//         on such individual’s own behalf or any entity on behalf of
//         which an individual enters into these Terms.) Our products,
//         services and properties include, without limitation, the
//         creation, purchase, sale, exchange, or modification of certain
//         digital assets; our online and/or mobile services,
//         games/gaming services and software provided on or in
//         connection with those services (collectively, the “Service”).
//         Certain features of the Service may be subject to additional
//         guidelines, terms, or rules (“Supplemental Terms”), which will
//         be displayed in connection with such features. All such
//         Supplemental Terms are incorporated by reference into these
//         Terms. If these Terms are inconsistent with any Supplemental
//         Terms, the Supplemental Terms shall control solely with
//         respect to such services.
//       </p>
//       <p>
//         BOWLED.IO OFFERS A PLATFORM FOR CREATORS, BUYERS, AND SELLERS
//         OF DIGITAL ASSETS AND ANY PRODUCTS, SERVICES AND/OR BENEFITS,
//         WHETHER DIGITAL OR OTHERWISE, TO BE FURNISHED BY OR ON BEHALF
//         OF SELLERS IN CONNECTION WITH SUCH SALES. WE ARE NOT A BROKER,
//         FINANCIAL INSTITUTION, OR CREDITOR. THE SERVICE IS AN
//         ADMINISTRATIVE PLATFORM ONLY. BOWLED.IO FACILITATES
//         TRANSACTIONS BETWEEN THE BUYER AND SELLER BUT IS NOT A PARTY
//         TO ANY AGREEMENT BETWEEN THE BUYER AND SELLER OR OTHERWISE
//         BETWEEN ANY USERS OF THE SERVICE. YOU SPECIFICALLY ACKNOWLEDGE
//         AND AGREE THAT, IF YOU USE THE SERVICE TO MAKE A PURCHASE, THE
//         SELLER SHALL BE AN INTENDED THIRD-PARTY BENEFICIARY OF THESE
//         TERMS WITH RESPECT TO THE ITEM(S) SOLD AND SELLER’S RIGHTS
//         WITH RESPECT THERETO. BOWLED.IO SHALL USE COMMERCIALLY
//         REASONABLE EFFORTS TO PROCURE THAT BUYERS SHALL BE AN INTENDED
//         THIRD-PARTY BENEFICIARY OF BOWLED.IO’S AGREEMENT(S) WITH
//         SELLERS OF ITEMS FOR THE PURPOSE OF ENFORCING BUYERS’ RIGHTS
//         WITH RESPECT THERETO. YOU ACCEPT THAT BOWLED.IO SHALL NOT BE A
//         PARTY TO OR HAVE ANY RESPONSIBILITY OR LIABILITY FOR, ARISING
//         OUT OF, RELATING TO, ASSOCIATED WITH OR RESULTING FROM ANY
//         DISPUTES BETWEEN YOU AND ANY SELLER OF AN ITEM IN RESPECT OF
//         THE USE, MISUSE, PROVISION OR FAILURE TO PROVIDE ANY ITEM.
//       </p>

//       <p>
//         YOU BEAR FULL RESPONSIBILITY FOR VERIFYING THE IDENTITY,
//         LEGITIMACY, AND AUTHENTICITY OF ITEMS YOU PURCHASE THROUGH THE
//         SERVICES. NOTWITHSTANDING INDICATORS AND MESSAGES THAT SUGGEST
//         VERIFICATION, BOWLED.IO MAKES NO CLAIMS ABOUT THE IDENTITY,
//         LEGITIMACY, OR AUTHENTICITY OF ITEMS OFFERED FOR SALE ON OR
//         THROUGH THE PLATFORM.
//       </p>
//       <p>
//         PLEASE READ SECTION 20 OF THESE TERMS CAREFULLY, AS IT
//         CONTAINS AN ARBITRATION AGREEMENT WHICH WILL, WITH LIMITED
//         EXCEPTIONS, REQUIRE DISPUTES BETWEEN US TO BE SUBMITTED TO
//         BINDING AND FINAL ARBITRATION. 
//         <strong>
//           UNLESS YOU OPT OUT OF THE ARBITRATION AGREEMENT: (1) YOU
//           WILL ONLY BE PERMITTED TO PURSUE CLAIMS AND SEEK RELIEF
//           AGAINST US ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR
//           CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION OR
//           PROCEEDING; AND (2) YOU ARE AGREEING TO MANDATORY INDIVIDUAL
//           ARBITRATION FOR THE RESOLUTION OF DISPUTES AND WAIVING YOUR
//           RIGHT TO A JURY TRIAL ON YOUR CLAIMS.
//         </strong>
//       </p>
//       <p>
//         PLEASE BE AWARE THAT SECTION 3(d) OF THESE TERMS, BELOW,
//         CONTAINS YOUR OPT-IN CONSENT TO RECEIVE COMMUNICATIONS FROM
//         US, INCLUDING EMAIL COMMUNICATION.
//       </p>
//       <p>
//         THESE TERMS OF USE ARE IMPORTANT AND AFFECT YOUR LEGAL RIGHTS,
//         SO PLEASE READ THEM CAREFULLY. BY CLICKING ON ANY “I ACCEPT”
//         BUTTON, COMPLETING THE ACCOUNT REGISTRATION PROCESS, MINTING
//         OR OFFERING ITEMS FOR SALE THROUGH THE SERVICE, PURCHASING
//         ITEMS THROUGH THE SERVICE, AND/OR OTHERWISE USING THE SERVICE,
//         YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS
//         INCORPORATED HEREIN BY REFERENCE. If you do not agree to these
//         Terms, you may not access or use the Service or Mint or
//         purchase any Items.
//       </p>
//       <p>
//         Please refer to our Privacy Policy for information about how
//         we collect, use and share personal information about you. By
//         submitting data through the Service, you expressly consent to
//         the collection, use and disclosure of your personal data in
//         accordance with the Privacy Policy.
//       </p>
//       <p>
//         We reserve the right to change or modify these Terms at any
//         time and in our sole discretion. If we make changes to these
//         Terms, we will provide notice of such changes, such as by
//         sending an email notification, providing notice through the
//         Service or updating the “Last Updated” date at the beginning
//         of these Terms. By continuing to access or use the Service at
//         any point after such update, you confirm your acceptance of
//         the revised Terms and all of the terms incorporated therein by
//         reference. We encourage you to review these Terms frequently
//         to ensure that you understand the terms and conditions that
//         apply when you access or use the Service. If you do not agree
//         to the revised Terms, you may not access or use the Service.
//       </p>

//       <h3>Our Service</h3>
//       <p>
//         The Service is an online platform on which an individual can
//         Mint (as defined below), purchase or offer to purchase, and
//         sell or offer for sale unique non-fungible tokens (“NFTs”) and
//         any non-digital products, services and/or benefits to be
//         furnished by or on behalf of sellers in connection with the
//         sale of such NFTs (“Off-Chain Benefits,” collectively with the
//         NFTs, “Items”), implemented on the one or more blockchain
//         platform networks then-utilized by Bowled.io (each, a
//         “Blockchain Platform”) using smart contracts. You may only
//         participate in the Minting, purchase or sale of any Item by
//         registering for an Account, as described below.
//       </p>

//       <h3>
//         Account Registration; Consent to Electronic Communication
//       </h3>
//       <p>
//         <ul>
//           <li>
//             In order to use certain features of the Service you will
//             need to register for an account on the Service
//             (“Account”). You must be eighteen (18) years old to
//             register for an Account. By creating an Account, you agree
//             to (i) provide accurate, current, and complete Account
//             information about yourself, (ii) maintain and promptly
//             update from time to time as necessary your Account
//             information, (iii) maintain the security of your password
//             and accept all risks of unauthorized access to your
//             Account and the information you provide to us, and (iv)
//             immediately notify us if you discover or otherwise suspect
//             any security breaches related to the Service or your
//             Account. You may not have more than one Account, and
//             bowled.io reserves the right to block multiple accounts of
//             the same user.
//           </li>
//           <li>
//             You agree that you will not:
//             <ul>
//               <li>
//                 Buy, sell, rent, or lease access to your Account or
//                 username without our written permission.
//               </li>
//               <li>
//                 Register or attempt to register for a new Account
//                 without our written permission after your Account has
//                 been disabled or deleted by us.
//               </li>
//               <li>Share your Account password with anyone.</li>
//               <li>
//                 Log in or try to log in to access the Service through
//                 unauthorized third party applications or clients.
//               </li>
//             </ul>
//           </li>
//           <li>
//             We may require you to provide additional information and
//             documents at the request of any competent authority or in
//             order to help us comply with applicable law, regulation,
//             or policy, including laws related to anti-laundering
//             (legalization) of incomes obtained by criminal means, or
//             for counteracting financing of terrorism. We may also
//             require you to provide additional information and
//             documents in cases where it has reasons to believe that:
//             <ul>
//               <li>
//                 Your Account is being used for money laundering or for
//                 any other illegal activity.
//               </li>
//               <li>
//                 You have concealed or reported false identification
//                 information and other details.
//               </li>
//               <li>
//                 Transactions effected via your Account were effected
//                 in breach of these Terms.
//               </li>
//             </ul>
//             In such cases, bowled.io, in its sole discretion, may
//             pause or cancel your transactions until such requested
//             additional information and documents have been reviewed by
//             us and accepted as satisfying the requirements of
//             applicable law, regulation, or policy. If you do not
//             provide complete and accurate information and documents in
//             response to such a request, we may refuse to provide any
//             Item, Content, product, service, and/or further access to
//             the Service to you.
//           </li>
//           <li>
//             By creating an Account, you consent to receive electronic
//             communications from bowled.io (e.g., via email or by
//             posting notices to the Service). These communications may
//             include notices about your Account (e.g., password changes
//             and other transactional information) and are part of your
//             relationship with us. You agree that any notices,
//             agreements, disclosures or other communications that we
//             send to you electronically will satisfy any legal
//             communication requirements, including, but not limited to,
//             any requirements that such communications be in writing.
//             You should maintain copies of electronic communications
//             from us by printing a paper copy or saving an electronic
//             copy. We have no obligation to store for your later use or
//             access any such electronic communications that we make to
//             you. We may also send you promotional communications via
//             email, including, but not limited to, newsletters, special
//             offers, surveys and other news and information we think
//             will be of interest to you. You may opt out of receiving
//             these promotional emails at any time by following the
//             unsubscribe instructions provided therein.
//           </li>
//           <li>
//             When you register for an Account, you hereby represent and
//             warrant, to and for the benefit of bowled.io and its
//             affiliates, as follows:
//             <ul>
//               <li>
//                 Authority. You have all requisite capacity, power and
//                 authority to enter into and perform your obligations
//                 under these Terms, including to Mint, list, buy, sell
//                 or trade any Items. The execution, delivery and
//                 performance of, and the performance of your
//                 obligations under, these Terms have been duly
//                 authorized by all necessary action on your part and on
//                 the part of any entity on behalf of which you are
//                 entering into these Terms, and no other proceedings
//                 are necessary to authorize the execution, delivery or
//                 performance of your obligations under these Terms.
//               </li>
//               <li>
//                 Due Execution. These Terms constitute your legal,
//                 valid and binding obligation, enforceable against you
//                 in accordance with these Terms.
//               </li>
//               <li>
//                 Accuracy of Information. All information provided to
//                 us, including any address and social security number
//                 or tax ID number, is accurate and complete. None of:
//                 (i) you; (ii) any affiliate of any entity on behalf of
//                 which you are entering into these Terms; (iii) any
//                 other person having a beneficial interest in any
//                 entity on behalf of which you are entering into these
//                 Terms (or in any affiliate thereof); or (iv) any
//                 person for whom you are acting as agent or nominee in
//                 connection with these Terms is: (A) a country,
//                 territory, entity or individual named on an OFAC list
//                 as provided at
//                 <a>http://www.treas.gov/ofac</a>, or any person or
//                 entity prohibited under the OFAC programs, regardless
//                 of whether or not they appear on the OFAC list; or (B)
//                 a senior foreign political figure, or any immediate
//                 family member or close associate of a senior foreign
//                 political figure.
//               </li>
//               <li>
//                 Non-Contravention. These Terms do not, and the
//                 performance of your obligations under these Terms and
//                 your Minting, listing, buying, selling or trading of
//                 any Items will not: (i) if you are entering into these
//                 terms on behalf of an entity, conflict with or violate
//                 any of the charter documents of such entity or any
//                 resolution adopted by its equity holders or other
//                 persons having governance authority over the entity;
//                 (ii) contravene, conflict with or violate any right of
//                 any third party or any legal requirement applicable to
//                 you or to any of the assets owned or used by you; or
//                 (iii) result in any breach of or constitute a default
//                 (or an event that with notice or lapse of time or both
//                 would become a default) under any material contract or
//                 agreement to which you are a party, permit held by you
//                 or legal requirement applicable to you.
//               </li>
//               <li>
//                 Independent Investigation and Non-Reliance. You are
//                 sophisticated, experienced and knowledgeable in the
//                 Minting, listing, buying, selling or trading of any
//                 Items. Additionally, you have conducted an independent
//                 investigation of the Service and the matters
//                 contemplated by these Terms, have formed your own
//                 independent judgment regarding the benefits and risks
//                 of and necessary and desirable practices regarding the
//                 foregoing and, in making the determination to Mint,
//                 list, buy, sell or trade any Items using the Service,
//                 you have relied solely on the results of such
//                 investigation and such independent judgment. Without
//                 limiting the generality of the foregoing, you
//                 understand, acknowledge and agree that the legal
//                 requirements pertaining to blockchain technologies and
//                 digital assets generally, including the Items, are
//                 evolving, and you have conducted an independent
//                 investigation of such potentially applicable legal
//                 requirements and the resulting risks and
//                 uncertainties, including the risk that one or more
//                 governmental entities or other persons may assert that
//                 any digital assets or cryptographic tokens (including
//                 the Items) may constitute securities under applicable
//                 legal requirements. You hereby irrevocably disclaim
//                 and disavow reliance upon any statements or
//                 representations made by or on behalf of, or
//                 information made available by, Bowled.io, in
//                 determining to enter into these Terms, Mint, list,
//                 buy, sell or trade any Items or use the Service.
//               </li>
//               <li>
//                 Litigation. There is no legal proceeding pending that
//                 relates to your activities relating to the Minting of
//                 Items or other token- or digital asset- trading or
//                 blockchain technology related activities.
//               </li>
//               <li>
//                 Intellectual Property and Related Matters. You are the
//                 sole and exclusive owner of all right, title and
//                 interest in and to all rights, including intellectual
//                 property rights, incorporated into or otherwise used,
//                 held for use or practiced in connection with (or
//                 planned by you to be incorporated into or otherwise
//                 used, held for use or practiced in connection with)
//                 the Item, any Off-Chain Benefits and the Minting of
//                 the Item, other than any intellectual property rights
//                 that are validly licensed (or provided on a hosted
//                 basis) to you pursuant to valid and binding licenses
//                 granted to you.
//               </li>
//               <li>
//                 Compliance. You have not failed to comply with, and
//                 have not violated, any applicable legal requirement
//                 relating to any blockchain technologies, token trading
//                 activities or Minting Items. No investigation or
//                 review by any governmental entity is pending or, to
//                 your knowledge, has been threatened against or with
//                 respect to you, nor does any government order or
//                 action prohibit you or any of your representatives
//                 from engaging in or continuing any conduct, activity
//                 or practice relating to Minting Items.
//               </li>
//               <li>
//                 You must provide all equipment and software necessary
//                 to connect to the Service. You are solely responsible
//                 for any fees, including Internet connection or mobile
//                 fees, that you incur when accessing the Service.
//               </li>
//             </ul>
//           </li>
//         </ul>
//       </p>
//       <h3>
//         You must provide all equipment and software necessary to
//         connect to the Service. You are solely responsible for any
//         fees, including Internet connection or mobile fees, that you
//         incur when accessing the Service.
//       </h3>
//       <ul>
//         <li>
//           An individual who has created an Account (each, a “User”)
//           may be able to use the Service to create or issue (“Mint”)
//           an Item on a Blockchain Platform. By Minting an Item or
//           otherwise using the Service, you agree to comply with any
//           terms, including licenses or payment rights, that you embed
//           within or otherwise include with the Item, and to disclose
//           fully all such terms in the description of your listing of
//           the Item on the Service. Certain additional terms may apply
//           to your use of the Service to Mint Items.
//         </li>
//         <li>
//           The Service includes a marketplace, and bowled.io is not and
//           shall not be a party to any transaction or dispute between
//           the Minter of an Item and any actual or prospective
//           purchaser or owner of that Item, whether arising from any
//           rights granted in that Item or otherwise.
//         </li>
//       </ul>

//       <h3>Pricing/Payments</h3>
//       <ul>
//         <li>
//           All pricing and payment terms are as indicated at point of
//           sale or otherwise on the Service, and any payment
//           obligations you incur are binding at the time of purchase.
//           Please review carefully the terms of purchase of any Item
//           before purchasing, including the terms of any licenses,
//           payment rights, or Off-Chain Benefits relating to or
//           incorporated into the Items. Bowled.io is not a party to any
//           secondary transaction on the Service between sellers and
//           actual or prospective purchasers, and any dispute related to
//           a purchase of an Item on the Service shall be between the
//           seller and actual or prospective purchasers of such Item.
//         </li>
//         <li>
//           You may not substitute any other currency, whether
//           cryptocurrency or fiat currency, for the currency in which
//           you have contracted to pay at the time of purchase. For
//           clarity, no fluctuation in the value of any currency,
//           whether cryptocurrency or otherwise, shall impact or excuse
//           your obligations with respect to any purchase.
//         </li>
//         <li>
//           Bowled.io may charge a fee to the seller of any Item listed
//           for sale on the Service (“Listing Fee”). The amount of such
//           Listing Fee may be expressed as an absolute value or as a
//           percentage of the amount received by the seller for such
//           Item, in each case as indicated at the point of listing for
//           such Item for sale on the Service.
//         </li>
//         <li>
//           In connection with any subsequent sale of an Item after its
//           initial sale on the Service (each such sale, a “Secondary
//           Sale”), fees may be due to bowled.io from the seller or
//           buyer of such Item (“Secondary Sale Fee”). Such Secondary
//           Sale Fee may be coded into the Item and may apply to all
//           Secondary Sales of the Item, whether or not such Secondary
//           Sale takes place on the Service.
//         </li>
//         <li>
//           In certain instances we may accept, process, and settle
//           payments made in cryptocurrency. In order to make a purchase
//           of an Item using cryptocurrency, you must either (i) deposit
//           such cryptocurrency into your Account, or (ii) connect a
//           digital wallet to the Service, in each case in accordance
//           with the functionality of the Service. If the balance of
//           such cryptocurrency in your Account is less than sufficient
//           to cover the price of an Item at the time of purchase, you
//           may not be able to purchase that Item using this such
//           payment method of payment. In order to purchase an Item
//           using a digital wallet, you may be required to must first
//           download a supported bridge extension in order and use such
//           extension to connect and unlock your digital wallet through
//           the Service. Once you submit an order to Mint or purchase an
//           Item, your order is passed on to the applicable extension,
//           which completes the transaction on your behalf. If the
//           balance of such cryptocurrency in your Account is
//           insufficient to cover the price of an Item at the time of
//           purchase you may not be able to purchase that Item. Whether
//           a particular cryptocurrency is accepted as a payment method
//           by bowled.io is subject to change at any time in bowled.io’s
//           sole discretion.
//         </li>
//         <li>
//           In certain instances we may accept, process, and settle
//           payments of fiat currency via credit card or other means.
//           Payment processing for the Service in such instances will be
//           performed by bowled.io’s third-party payment processor. Your
//           use of the Service and the payment processing provided by
//           the Payment Processor is subject to the their-party
//           Connected Account Agreements, as may be modified by the
//           Payment Processor from time to time (collectively, the
//           “Payment Processor Agreement”). As a condition of using the
//           Payment Processor’s payment processing, you must provide
//           accurate and complete information, and you authorize us to
//           share this information with the Payment Processor and to
//           charge your payment method for all amounts that may become
//           due under this Agreement. All bank, credit card, or other
//           payment information is sent directly to and stored with the
//           Payment Processor using its security protocols. We do not
//           store your payment information on its systems and shall not
//           have any responsibility for the safety or security of that
//           information. Your use of the Payment Processor’s payment
//           processing is conditioned upon your compliance with the
//           Payment Processor Agreement, and if the Payment Processor
//           Agreement is terminated by the Payment Processor, you may
//           not be able to use the Services, or you may have your use of
//           the Services suspended or terminated.
//         </li>
//         <li>
//           Bowled.io may add or change any payment processing services
//           at any time. Such services may be subject to additional
//           terms or conditions. Whether a particular cryptocurrency is
//           accepted as a payment method by us is subject to change at
//           any time in bowled.io’s sole discretion.
//         </li>
//       </ul>

//       <h3>Appointment of bowled.io as Limited Payments Agent</h3>
//       <p>
//         By using the Service to Mint an Item, you hereby appoint us as
//         your limited payments agent for the sole purpose of receiving,
//         holding and settling payments due and owed to you arising out
//         of (i) the Minting of Items through the Service; and (ii) any
//         Secondary Sale of Items. Subject to the terms of this
//         Agreement, bowled.io will process such payments and settle
//         payments that are actually received by us, less any amounts
//         owed to bowled.io, including taxes, fees and other
//         obligations. You agree that a payment received by bowled.io on
//         your behalf satisfies the payor’s obligation to make payment
//         to you, regardless of whether bowled.io actually settles such
//         payment to you. If bowled.io does not settle any such payments
//         to you as described in these Terms, you will have recourse
//         only against bowled.io and not the payor, as payment is deemed
//         made by the payor to you upon constructive or actual receipt
//         by bowled.io.
//       </p>

//       <h3>Ownership</h3>
//       <ul>
//         <li>
//           Unless otherwise indicated in writing by us, the Service and
//           all content and other materials contained therein,
//           including, without limitation, the bowled.io logo and all
//           designs, text, graphics, pictures, information, data,
//           software, sound files, other files and the selection and
//           arrangement thereof (collectively, “Content”) are the
//           proprietary property of bowled.io or our affiliates,
//           licensors or users, as applicable.
//         </li>
//         <li>
//           Notwithstanding anything to the contrary in these Terms, the
//           Service and Content may include software components provided
//           by bowled.io or its affiliates or a third party that are
//           subject to separate license terms, in which case those
//           license terms will govern such software components.
//         </li>
//         <li>
//           The bowled.io logo and any bowled.io product or service
//           names, logos or slogans that may appear on the Service are
//           trademarks of bowled.io or our affiliates and may not be
//           copied, imitated or used, in whole or in part, without our
//           prior written permission. You may not use any metatags or
//           other “hidden text” utilizing “bowled.io,” “bowled.io
//           Protocol,” or any other name, trademark or product or
//           service name of bowled.io or our affiliates without our
//           prior written permission. In addition, the look and feel of
//           the Service and Content, including, without limitation, all
//           page headers, custom graphics, button icons and scripts,
//           constitute the service mark, trademark or trade dress of
//           bowled.io and may not be copied, imitated or used, in whole
//           or in part, without our prior written permission. All other
//           trademarks, registered trademarks, product names and
//           bowled.io names or logos mentioned on the Service are the
//           property of their respective owners and may not be copied,
//           imitated or used, in whole or in part, without the
//           permission of the applicable trademark holder. Reference to
//           any products, services, processes or other information by
//           name, trademark, manufacturer, supplier or otherwise does
//           not constitute or imply endorsement, sponsorship or
//           recommendation by bowled.io.
//         </li>
//       </ul>

//       <h3>Licenses Granted to You</h3>
//       <ul>
//         <li>
//           You are hereby granted a limited, revocable, nonexclusive,
//           nontransferable, non-assignable, non-sublicensable, “as-is”
//           license to access and use the Service and Content for your
//           own personal, non-commercial use; provided, however, that
//           such license is subject to these Terms and does not include
//           any right to (i) sell, resell, or use commercially the
//           Service or Content, (ii) distribute, publicly perform, or
//           publicly display any Content, (iii) modify or otherwise make
//           any derivative uses of the Service or Content, or any
//           portion thereof, (iv) use any data mining, robots, or
//           similar data gathering or extraction methods, (v) download
//           (other than page caching) any portion of the Service or
//           Content, except as expressly permitted by us, and (vi) use
//           the Service or Content other than for their intended
//           purposes. This license is subject to your compliance with
//           the Acceptable Use Policy set forth in Section 11 below.
//         </li>
//         <li>
//           You are granted a limited, nonexclusive, nontransferable
//           right to create a text hyperlink to the Service for
//           noncommercial purposes, provided that such link does not
//           portray bowled.io or our affiliates or any of our Services,
//           Content, products or services in a false, misleading,
//           derogatory or otherwise defamatory manner, and provided
//           further that the linking site does not contain any adult or
//           illegal material or any material that is offensive,
//           harassing or otherwise objectionable in bowled.io’s sole
//           discretion. This limited right may be revoked at any time.
//           You may not use a logo or other proprietary graphic of
//           bowled.io to link to the Service or Content without our
//           express written permission. Further, you may not use, frame
//           or utilize framing techniques to enclose any bowled.io
//           trademark, logo or other proprietary information, including
//           the images found on the Service, the content of any text or
//           the layout or design of any page, or form contained on a
//           page, on the Service without our express written consent
//         </li>
//         <li>
//           Your rights in Items sold or offered for sale on or through
//           the Service may be subject to certain restrictions or
//           limitations, as determined by the Minter or by us and as
//           stated on the Service. Your rights in any Item that you
//           purchase through the Service are limited to those rights
//           expressly granted in the license as listed at point of sale
//           or otherwise through the Service. bowled.io does not
//           guarantee that any Items Minted on the Service will be
//           transferable to or accessible through any other platform or
//           service.
//         </li>
//       </ul>

//       <h3>User Content</h3>
//       <p>
//         The Service may include the ability for you to make certain
//         content available on or through the Service (“User Content”).
//         If you choose to make User Content available on or through the
//         Service, you hereby grant bowled.io a fully paid,
//         royalty-free, worldwide, non-exclusive right (including any
//         moral rights) and license to use, sublicense, distribute,
//         reproduce, modify, adapt, and display, such User Content (in
//         whole or in part) for the purposes of (i) providing the
//         Service, including making User Content available to other
//         Users in accordance with your elections on the Service; and
//         (ii) improving the Service. You also hereby grant each other
//         User of the Service a non-exclusive license to access your
//         User Content through the Service, and to use, reproduce,
//         distribute, display and perform such User Content solely as
//         permitted through the functionality of the Service and under
//         these Terms. You are solely responsible for any User Content
//         you provide. You represent and warrant that such Content will
//         not be libelous or defamatory and that you have, or have
//         obtained, all rights, licenses, consents, permissions, power
//         and/or authority necessary to grant the rights granted herein
//         for any User Content that you submit, post or display on or
//         through the Service. You agree that such User Content will not
//         contain material the use of which as permitted herein is
//         violative of copyright or other proprietary rights. bowled.io
//         has no responsibility for the User Content posted or listed
//         via the Service, although bowled.io reserves the right (but
//         bowled.io has no obligation) to remove any User Content for
//         any reason or for no reason, including in the event that
//         bowled.io determines Content to be in violation of these
//         Terms.
//       </p>

//       <h3>Third-Party Services/Terms</h3>
//       <ul>
//         <li>
//           The Service may contain links to third-party properties
//           (“Third-Party Properties”) and applications (“Third-Party
//           Applications”). When you click on a link to a Third-Party
//           Property or Third-Party Application, you are subject to the
//           terms and conditions (including privacy policies) of another
//           property or application. Such Third-Party Properties and
//           Third-Party Applications and are not under the control of
//           bowled.io. bowled.io is not responsible for any Third-Party
//           Properties or Third-Party Applications. bowled.io provides
//           links to these Third-Party Properties and Third-Party
//           Applications only as a convenience and does not review,
//           approve, monitor, endorse, warrant, or make any
//           representations with respect to Third-Party Properties or
//           Third-Party Applications, or their products or services. You
//           use all links in Third-Party Properties, and Third-Party
//           Applications at your own risk. When you leave our Service,
//           our Terms and policies no longer govern. You should review
//           all applicable agreements and policies, including privacy
//           and data gathering practices, of any Third-Party Properties
//           or Third-Party Applications, and should make whatever
//           investigation you feel necessary or appropriate before
//           proceeding with any transaction with any third party.
//         </li>
//         <li>
//           The Service and Content may include components, including
//           software components that are provided by a third party and
//           that are subject to separate license terms, in which case
//           those license terms will govern your access to and use of
//           such components. Our Service and/or any Third-Party Property
//           may include terms governing the use of such Item, including
//           license terms. In the event you purchase such Item through
//           our marketplace, you are required to comply with the terms
//           that govern such Item, which may be different from these
//           Terms.
//         </li>
//       </ul>

//       <h3>Acceptable Use Policy</h3>
//       <p>
//         You agree that you are solely responsible for your conduct
//         while participating in the purchase or sale of Items or
//         otherwise accessing or using the Service. You agree that you
//         will abide by these Terms and will not:
//       </p>
//       <ul>
//         <li>Provide false or misleading information to bowled.io</li>
//         <li>
//           Use or attempt to use another user’s Account without
//           authorization from such user and Bowled.io.
//         </li>
//         <li>Create or list counterfeit Items.</li>
//         <li>
//           Pose as another person or create a misleading username.
//         </li>
//         <li>
//           Circumvent or attempt to circumvent any limitations or
//           restrictions placed on promotions offered by bowled.io.
//         </li>
//         <li>
//           Use the Service in any manner that could interfere with,
//           disrupt, negatively affect or inhibit other users from fully
//           enjoying the Service, or that could damage, disable,
//           overburden or impair the functioning of the Service in any
//           manner.
//         </li>
//         <li>
//           Develop, utilize, or disseminate any software, or interact
//           with any API in any manner, that could damage, harm, or
//           impair the Service
//         </li>
//         <li>
//           Reverse engineer any aspect of the Service, or do anything
//           that might discover source code or bypass or circumvent
//           measures employed to prevent or limit access to any service,
//           area, or code of the Service
//         </li>
//         <li>
//           Attempt to circumvent any content-filtering techniques we
//           employ, or attempt to access any feature or area of the
//           Service that you are not authorized to access.
//         </li>
//         <li>
//           Use any robot, spider, crawler, scraper, script, browser
//           extension, offline reader, or other automated means or
//           interface not authorized by us to access the Service,
//           extract data or otherwise interfere with or modify the
//           rendering of Service pages or functionality
//         </li>
//         <li>
//           Collect or harvest data from our Service that would allow
//           you to contact individuals, companies, or other persons or
//           entities, or use any such data to contact such entities
//         </li>
//         <li>
//           Use data collected from our Service for any direct marketing
//           activity (including without limitation, email marketing, SMS
//           marketing, telemarketing, and direct marketing)
//         </li>
//         <li>
//           Bypass or ignore instructions that control all automated
//           access to the Service;
//         </li>
//         <li>
//           Use the Service for any illegal or unauthorized purpose, or
//           engage in, encourage, or promote any activity that violates
//           any applicable law or these Terms
//         </li>
//         <li>
//           Use the a Blockchain Platform to carry out any illegal
//           activities in connection with or in any way related to your
//           access to and use of the Service, including but not limited
//           to money laundering, terrorist financing or deliberately
//           engaging in activities designed to adversely affect the
//           performance of the a Blockchain Platform used by the
//           Service, or the Service itself
//         </li>
//         <li>
//           Engage in or knowingly facilitate any “front-running,” “wash
//           trading,” “pump and dump trading,” “ramping,” “cornering” or
//           fraudulent, deceptive or manipulative trading activities,
//           including:
//           <ul>
//             <li>
//               trading an Item at successively lower or higher prices
//               for the purpose of creating or inducing a false,
//               misleading or artificial appearance of activity in such
//               Item, unduly or improperly influencing the market price
//               for such Item trading on the Service or establishing a
//               price which does not reflect the true state of the
//               market in such Item
//             </li>
//             <li>
//               executing or causing the execution of any transaction in
//               an Item which involves no material change in the
//               beneficial ownership thereof
//             </li>
//             <li>
//               entering any order for the purchase or sale of an Item
//               with the knowledge that an order of substantially the
//               same size, and at substantially the same price, for the
//               sale of such Item, has been or will be entered by or for
//               the same or different parties
//             </li>
//             <li>
//               participating in, facilitating, assisting or knowingly
//               transacting with any pool, syndicate or joint account
//               organized for the purpose of unfairly or deceptively
//               influencing the market price of an Item
//             </li>
//           </ul>
//         </li>
//         <li>
//           Use the Service to carry out any financial activities
//           subject to registration or licensing, including but not
//           limited to using the Service to transact in securities,
//           commodities futures, trading of commodities on a leveraged,
//           margined or financed basis, binary options (including
//           prediction-market transactions), real estate or real estate
//           leases, equipment leases, debt financings, equity financings
//           or other similar transactions
//         </li>
//         <li>
//           Use the Service to participate in fundraising for a
//           business, protocol, or platform, including but not limited
//           to creating, listing, or buying assets that (i) are
//           redeemable for financial instruments, (ii) give owners any
//           rights to participate in an ICO or any securities offering,
//           or (iii) entitle owners to financial rewards, including but
//           not limited to, DeFi yield bonuses, staking bonuses, and
//           burn discounts.
//         </li>
//       </ul>

//       <h3>Listing Guidelines</h3>
//       <ul>
//         <li>
//           bowled.io has the right, but not the obligation, to remove
//           any listing at any time. bowled.io exercises its sole
//           judgment in allowing or disallowing certain assets,
//           listings, smart contracts, and collections.
//         </li>
//         <li>
//           Items, listings, smart contracts, collections, and other
//           User Content that bowled.io in its sole discretion deems
//           inappropriate, disruptive, or illegal are prohibited on the
//           Service. bowled.io reserves the rights to determine the
//           appropriateness of listings on its site and remove any User
//           Content, including any listing, at any time. If you create
//           or offer an Item, listing, smart contract, or collection in
//           violation of these policies, we reserve the right to take
//           corrective actions, as appropriate, including but not
//           limited to removing the asset, listing, smart contract, or
//           collection, deleting your Account, and permanently
//           withholding referral payments and developer revenue sharing
//           fees or any other payments due and owed to you. Bowled.io
//           cannot destroy or impound your Items or smart contracts, but
//           we reserve the right to destroy inappropriate or illegal
//           metadata stored on our servers.
//         </li>
//         <li>
//           The following User Content is prohibited on the Service,
//           whether included in or made available in or through Items,
//           listings, smart contracts, or collections that include
//           metadata, or otherwise:
//           <ul>
//             <li>
//               content that violates international or United States
//               intellectual property laws
//             </li>
//             <li>
//               content that promotes suicide or self-harm, incites hate
//               or violence against others, degrades or doxes another
//               individual, depicts minors in sexually suggestive
//               situations, or is otherwise illegal in the United States
//             </li>
//             <li>
//               content with a primary or substantial purpose in a game
//               or application that violates international or United
//               States intellectual property laws, promotes suicide or
//               self-harm, incites hate or violence against others,
//               degrades or doxes another individual, depicts minors in
//               sexually suggestive situations, or is otherwise illegal
//               in the United States
//             </li>
//             <li>
//               content created or used primarily or substantially for
//               the purpose of raising funds for known terrorist
//               organizations (as listed on
//               <a>
//                 https://www.state.gov/foreign-terrorist-organizations/
//               </a>{" "}
//               or as may be determined by bowled.io from time to time
//               in its sole discretion)
//             </li>
//             <li>
//               as determined in our sole and absolute discretion, NSFW
//               content and other content that is intended to be
//               age-restricted. Item names, listings and their
//               descriptions, smart contract names, and collections
//               including profanity or overtly sexual content are
//               prohibited. A smart contract that contains NSFW content
//               is subject to being marked NSFW, even if the NSFW
//               content only represents a portion of the content on the
//               smart contract
//             </li>
//             <li>
//               content that includes stolen assets, assets taken
//               without authorization, and otherwise illegally obtained
//               assets, all including but not limited to Items. Listing
//               illegally obtained Items may result in your listings
//               being cancelled, your Items being hidden, or your
//               Account being suspended If you have reason to believe
//               that an asset listed on the Service was illegally
//               obtained, please contact us immediately
//             </li>
//             <li>
//               content that is illegal or offensive, or content that
//               includes or uses profanity or graphic language
//             </li>
//           </ul>
//           If you become aware of the creation, listing, or buying of
//           assets in violation of any of the terms specified in this
//           section, please contact us at akshay.khandelwal@dfx,world to
//           report it.
//         </li>
//       </ul>

//       <h3>Copyright</h3>
//       <p>
//         bowled.io retains the absolute right, but bowled.io has not
//         the obligation, to terminate the Account and remove the User
//         Content of any user of the Service who violates or infringes
//         our rights or those of any third party. Without limiting the
//         foregoing, if you believe that your intellectual property has
//         been used on the Service in a way that constitutes
//         infringement, please provide us with the following
//         information: (1a) an electronic or physical signature of the
//         person authorized to act on behalf of the owner of the
//         copyright interest; (2b) a description of the copyrighted work
//         that you claim has been infringed; (3c) a description of the
//         location on our Service of the material that you claim is
//         infringing; (4d) your address, telephone number and e-mail
//         address; (5e) a written statement by you that you have a good
//         faith belief that the disputed use is not authorized by the
//         copyright owner, its agent or the law; and (6f) a statement by
//         you, made under penalty of perjury, that the above information
//         in your notice is accurate and that you are the copyright
//         owner or authorized to act on the copyright owner’s behalf.
//         Such information may be sent to akshay.khandelwal@dfx.world.
//       </p>

//       <h3>Investigations</h3>
//       <p>
//         f bowled.io becomes aware of any possible violations by you of
//         these Terms, bowled.io reserves the right to investigate such
//         violations. If, as a result of the investigation, bowled.io
//         believes that criminal activity may have occurred, bowled.io
//         reserves the right to refer the matter to, and to cooperate
//         with, any and all applicable legal authorities. bowled.io is
//         entitled, except to the extent prohibited by applicable law,
//         to disclose any information or materials on or in the Service,
//         including User Content, in bowled.io’s possession in
//         connection with your use of the Service, to (i) comply with
//         applicable laws, legal process or governmental request; (ii)
//         enforce these Terms, (iii) respond to any claims that User
//         Content violates the rights of third parties, (iv) respond to
//         your requests for customer service, or (v) protect the rights,
//         property or personal safety of bowled.io, its users, or the
//         public, and all law enforcement or other government officials,
//         as bowled.io in its sole discretion believes to be necessary
//         or appropriate. By agreeing to these Terms, you hereby provide
//         your irrevocable consent to such monitoring. You acknowledge
//         and agree that you have no expectation of privacy concerning
//         your use of the Service, including without limitation text,
//         voice, or video communications.
//       </p>

//       <h3>Release</h3>
//       <p>
//         You hereby release and forever discharge bowled.io and our
//         officers, employees, agents, successors, and assigns (the
//         “bowled.io Entities”) from, and hereby waive and relinquish,
//         each and every past, present and future dispute, claim,
//         controversy, demand, right, obligation, liability, action and
//         cause of action of every kind and nature (including personal
//         injuries, death, and property damage), that has arisen or
//         arises directly or indirectly out of, or that relates directly
//         or indirectly to, the Service (including any interactions
//         with, or act or omission of, other Users or any Third-Party
//         Properties or Third-Party Applications). IF YOU ARE A
//         CALIFORNIA RESIDENT, YOU HEREBY WAIVE CALIFORNIA CIVIL CODE
//         SECTION 1542 IN CONNECTION WITH THE FOREGOING, WHICH STATES:
//         “A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE
//         CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR
//         AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR
//         HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH
//         THE DEBTOR.”
//       </p>

//       <h3>Assumption of Risk Related To Items</h3>
//       <p>You acknowledge and agree that:</p>
//       <ul>
//         <li>
//           The prices of digital assets are extremely volatile.
//           Fluctuations in the price of other digital assets could
//           materially and adversely affect the Items, which may also be
//           subject to significant price volatility. We cannot and do
//           not guarantee that any purchasers of Items will not lose
//           money.
//         </li>
//         <li>
//           You are solely responsible for determining what, if any,
//           taxes apply to transactions involving your Items. Neither
//           bowled.io nor any other bowled.io Entity is responsible for
//           determining the taxes that may apply to transactions
//           involving Items.
//         </li>
//         <li>
//           Items exist and can be transferred only by virtue of the
//           ownership record maintained on the blockchain supporting
//           such Items. Our Service does not store, send, or receive
//           Items. Any transfer of Items occurs within the supporting
//           blockchain and not on the Service.
//         </li>
//         <li>
//           There are risks associated with using digital currency,
//           including but not limited to, the risk of hardware, software
//           and Internet connections, the risk of malicious software
//           introduction, and the risk that third parties may obtain
//           unauthorized access to information stored within your
//           digital wallet.
//         </li>
//         <li>
//           The legal and regulatory regime governing blockchain
//           technologies, cryptocurrencies, and tokens is uncertain, and
//           new regulations or policies may materially adversely affect
//           the development of the Service and the utility of Items
//         </li>
//         <li>
//           There are risks associated with purchasing user-generated
//           User Content, including but not limited to, the risk of
//           purchasing counterfeit assets, mislabeled assets, assets
//           that are vulnerable to metadata decay, assets on smart
//           contracts with bugs, and assets that may become
//           untransferable.
//         </li>
//         <li>
//           bowled.io reserves the right to hide collections, contracts,
//           and assets that bowled.io suspects or believes may violate
//           these Terms. Items you purchase may become inaccessible on
//           the Service. Under no circumstances shall the inability to
//           view your assets on the Service serve as grounds for a claim
//           against bowled.io.
//         </li>
//         <li>
//           bowled.io has no responsibility for the Items Minted, sold,
//           bought or traded on the Service. bowled.io does not
//           investigate and cannot guarantee or warrant the
//           authenticity, uniqueness, marketability, legality or value
//           of any Item created or traded on the Service. For the
//           avoidance of doubt, bowled.io shall have no responsibility
//           for any failure of any User to comply with any terms
//           regarding the authenticity, uniqueness, scarcity or other
//           description or characteristics of the Item furnished by or
//           on behalf of that User and available via the Service.
//         </li>
//       </ul>
//       <h3>Indemnification</h3>
//       <p>
//         To the fullest extent permitted by applicable law, you agree
//         to indemnify, defend, and hold harmless bowled.io and the
//         bowled.io Entities from and against all actual or alleged
//         third party claims, damages, awards, judgments, losses,
//         liabilities, obligations, penalties, interest, fees, expenses
//         (including, without limitation, attorneys’ fees and expenses)
//         and costs (including, without limitation, court costs, costs
//         of settlement, and costs of or associated with pursuing
//         indemnification and insurance), of every kind and nature
//         whatsoever arising out of or related to these Terms or your
//         use of the Service, whether known or unknown, foreseen or
//         unforeseen, matured or unmatured, or suspected or unsuspected,
//         in law or equity, whether in tort, contract or otherwise
//         (collectively, “Claims”), including, but not limited to,
//         damages to property or personal injury, that are caused by,
//         arise out of or are related to (a) your use or misuse of the
//         Service, User Content or Items, (b) any feedback you provide,
//         (c) your violation of these Terms, and (d) your violation of
//         the rights of any third party, including another user. You
//         agree to promptly notify bowled.io of any third-party Claims
//         and cooperate with the Bowled.io Entities in defending such
//         Claims. You further agree that the bowled.io Entities shall
//         have control of the defense or settlement of any third-party
//         Claims. THIS INDEMNITY IS IN ADDITION TO, AND NOT IN LIEU OF,
//         ANY OTHER INDEMNITIES SET FORTH IN A SEPARATE WRITTEN
//         AGREEMENT BETWEEN YOU AND BOWLED.IO.
//       </p>

//       <h3>Disclaimers</h3>
//       <p>
//         THE SERVICE, CONTENT CONTAINED THEREIN, AND ITEMS LISTED
//         THEREIN ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS
//         WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS
//         OR IMPLIED. BOWLED.IO (AND ITS SUPPLIERS) MAKE NO WARRANTY
//         THAT THE SERVICE: (A) WILL MEET YOUR REQUIREMENTS; (B) WILL BE
//         AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE
//         BASIS; OR (C) WILL BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR
//         SAFE. BOWLED.IO DISCLAIMS ALL OTHER WARRANTIES OR CONDITIONS,
//         EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED
//         WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A
//         PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT AS TO THE
//         SERVICE OR ANY CONTENT CONTAINED THEREIN. BOWLED.IO DOES NOT
//         REPRESENT OR WARRANT THAT CONTENT ON THE SERVICE IS ACCURATE,
//         COMPLETE, RELIABLE, CURRENT, OR ERROR-FREE. WE WILL NOT BE
//         LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN
//         IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED ON THE
//         SERVICE. WHILE BOWLED.IO ATTEMPTS TO MAKE YOUR ACCESS TO AND
//         USE OF THE SERVICE AND CONTENT SAFE, BOWLED.IO CANNOT AND DOES
//         NOT REPRESENT OR WARRANT THAT THE SERVICE, CONTENT, OR ANY
//         ITEMS LISTED ON OUR SERVICE OR OUR SERVERS ARE FREE OF VIRUSES
//         OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY
//         OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT
//         SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE
//         OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY
//         BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
//         WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU
//         SUSTAIN AS A RESULT OF YOUR USE OF THE SERVICE. WE TAKE NO
//         RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE
//         OF ITEMS, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR
//         CLAIMS ARISING FROM: (I) USER ERROR SUCH AS FORGOTTEN
//         PASSWORDS, INCORRECTLY CONSTRUCTED TRANSACTIONS, OR MISTYPED
//         ADDRESSES; (II) SERVER FAILURE OR DATA LOSS; (III) CORRUPTED
//         DIGITAL WALLET FILES; (IV) UNAUTHORIZED ACCESS TO
//         APPLICATIONS; OR (V) ANY UNAUTHORIZED THIRD PARTY ACTIVITIES,
//         INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING,
//         BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE SERVICE OR
//         ITEMS
//       </p>
//       <p>
//         FROM TIME TO TIME, BOWLED.IO MAY OFFER NEW “BETA” FEATURES OR
//         TOOLS. SUCH FEATURES OR TOOLS ARE OFFERED “AS IS” AND WITH ALL
//         FAULTS, SOLELY FOR EXPERIMENTAL PURPOSES AND WITHOUT ANY
//         WARRANTY OF ANY KIND, AND MAY BE MODIFIED OR DISCONTINUED AT
//         BOWLED.IO’S SOLE DISCRETION. THE PROVISIONS OF THIS SECTION
//         APPLY WITH FULL FORCE TO SUCH FEATURES OR TOOLS.
//       </p>
//       <p>
//         ITEMS ARE INTANGIBLE DIGITAL ASSETS. THEY EXIST ONLY BY VIRTUE
//         OF THE OWNERSHIP RECORD MAINTAINED IN THE BLOCKCHAIN NETWORK.
//         ANY TRANSFER OF TITLE THAT MIGHT OCCUR IN ANY UNIQUE DIGITAL
//         ASSET OCCURS ON THE DECENTRALIZED LEDGER WITHIN THE APPLICABLE
//         BLOCKCHAIN PLATFORM. WE DO NOT GUARANTEE THAT BOWLED.IO OR ANY
//         BOWLED.IO ENTITY CAN EFFECT THE TRANSFER OF TITLE OR RIGHT IN
//         ANY ITEMS. WE CANNOT AND DO NOT GUARANTEE THAT ANY ITEM WILL
//         HAVE OR RETAIN ANY INHERENT VALUE, OR THAT YOU WILL BE ABLE TO
//         SELL OR RESELL ANY ITEM PURCHASED THROUGH THE SERVICE.
//       </p>
//       <p>
//         bowled.io is not responsible for any losses or harms sustained
//         by you due to vulnerability or any kind of failure, abnormal
//         behavior of software (e.g., wallet, smart contract),
//         blockchains, or any other features of or inherent to the
//         Items. bowled.io is not responsible for casualties due to
//         developers or representatives delay or failure to report any
//         issues with any blockchain supporting Items, including without
//         limitation forks, technical node issues, or any other issues
//         that result in losses of any sort.
//       </p>
//       <p>
//         Nothing in these Terms shall exclude or limit liability of
//         either party for fraud, death or bodily injury caused by
//         negligence, violation of laws, or any other activity that
//         cannot be limited or excluded under the laws applicable to
//         your jurisdiction. SOME JURISDICTIONS DO NOT ALLOW THE
//         EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS,
//         SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
//       </p>

//       <h3>Limitation of Liability</h3>
//       <p>
//         TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL
//         BOWLED.IO BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST
//         PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
//         SPECIAL OR PUNITIVE DAMAGES ARISING FROM THESE TERMS, THE
//         SERVICE, ANY ITEMS, OR FOR ANY DAMAGES RELATED TO LOSS OF
//         REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED
//         SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, AND
//         WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF
//         CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF
//         BOWLED.IO HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
//         ACCESS TO, AND USE OF, THE SERVICE IS UNDERTAKEN BY YOU AT
//         YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY
//         RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE
//         DEVICE OR LOSS OF DATA RESULTING THEREFROM.
//       </p>

//       <h3>Dispute Resolution/Arbitration</h3>

//       <p>
//         Dispute Resolution. Please read the arbitration agreement in
//         this section (“Arbitration Agreement”) carefully. It contains
//         procedures for MANDATORY BINDING ARBITRATION AND A CLASS
//         ACTION WAIVER.
//       </p>
//       <ul>
//         <li>
//           Applicability of Arbitration Agreement. You agree that all
//           claims and disputes (excluding claims for injunctive or
//           other equitable relief as set forth below) in connection
//           with these Terms or the use of any Service provided by
//           bowled.io that cannot be resolved informally shall be
//           resolved by binding arbitration on an individual basis under
//           the terms of this Arbitration Agreement. Unless otherwise
//           agreed to, all arbitration proceedings shall be held in
//           English. This Arbitration Agreement applies to you and
//           bowled.io, and to any subsidiaries, affiliates, agents,
//           employees, predecessors in interest, successors, and
//           assigns, as well as all authorized or unauthorized users or
//           beneficiaries of services or goods provided under these
//           Terms.
//         </li>
//         <li>
//           Notice Requirement and Informal Dispute Resolution. Before
//           either party may seek arbitration, the party must first send
//           to the other party a written notice describing the nature
//           and basis of the claim or dispute and the requested relief
//           (“Notice of Dispute”). A Notice of Dispute to bowled.io
//           should be sent to: akshay.khandelwal@dfx.world. After the
//           Notice of Dispute is received, you and bowled.io may attempt
//           to resolve the claim or dispute informally. If you and
//           bowled.io do not resolve the claim or dispute within thirty
//           (30) days after the Notice of Dispute is received, either
//           party may begin an arbitration proceeding. The amount of any
//           settlement offer made by any party may not be disclosed to
//           the arbitrator until after the arbitrator has determined the
//           amount of the award, if any, to which either party is
//           entitled.
//         </li>
//         <li>
//           Arbitration Rules. Arbitration shall be initiated at the
//           Singapore International Arbitration Centre (“SIAC”) in
//           accordance with the Arbitration Rules of the Singapore
//           International Arbitration Centre ("SIAC Rules") for the time
//           being in force, which rules are deemed to be incorporated by
//           reference in this clause and shall govern all aspects of the
//           arbitration, including but not limited to the method of
//           initiating and/or demanding arbitration, except to the
//           extent such rules are in conflict with these Terms. The
//           arbitration shall be conducted by a single, neutral
//           arbitrator. Each party shall bear its own costs (including
//           attorney’s fees) and disbursements arising out of the
//           arbitration and shall pay an equal share of the fees and
//           costs of the SIAC.
//         </li>
//         <li>
//           Time Limits. If you or bowled.io pursues arbitration, the
//           arbitration action must be initiated and/or demanded within
//           the statute of limitations (i.e., the legal deadline for
//           filing a claim) and within any deadline imposed under the
//           SIAC Rules for the pertinent claim.
//         </li>
//         <li>
//           Authority of Arbitrator. If arbitration is initiated, the
//           arbitrator will decide the rights and liabilities, if any,
//           of you and bowled.io, and the dispute will not be
//           consolidated with any other matters or joined with any other
//           cases or parties. The arbitrator shall have exclusive
//           authority to (i) determine the scope and enforceability of
//           this Arbitration Agreement; and (ii) resolve any dispute
//           related to the interpretation, applicability, enforceability
//           or formation of this Arbitration Agreement including, but
//           not limited to, any claim that all or any part of this
//           Arbitration Agreement is void or voidable; and shall also
//           have the authority to grant motions dispositive of all or
//           part of any claim. The exceptions to the preceding sentence
//           are (1) all disputes arising out of or relating to the class
//           action waiver, including any claim that all or part of the
//           class action waiver is unenforceable, illegal, void or
//           voidable, or such class action waiver has been breached,
//           shall be decided by a court of competent jurisdiction and
//           not by an arbitrator; (2) all disputes arising out of or
//           relating to the payment of arbitration fees shall be decided
//           only by a court of competent jurisdiction and not by an
//           arbitrator; and (3) all disputes arising out of or relating
//           to whether either party has satisfied any condition
//           precedent to arbitration shall be decided only by a court of
//           competent jurisdiction and not by an arbitrator. The
//           arbitrator shall have the authority to award monetary
//           damages, and to grant any non-monetary remedy or relief
//           available to an individual under applicable law, the SIAC
//           Rules, and these Terms. The arbitrator shall issue a written
//           award and statement of decision describing the essential
//           findings and conclusions on which the award is based,
//           including the calculation of any damages awarded. The
//           arbitrator has the same authority to award relief on an
//           individual basis that a judge in a court of law would have.
//           The award of the arbitrator is final and binding upon you
//           and Bowled.io. Any judgment on the award rendered by the
//           arbitrator may be entered in any court of competent
//           jurisdiction.
//         </li>
//         <li>
//           Waiver of Jury Trial. THE PARTIES HEREBY WAIVE THEIR
//           CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE
//           A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that
//           all claims and disputes shall be resolved by arbitration
//           under this Arbitration Agreement. Arbitration procedures are
//           typically more limited, more efficient and less costly than
//           rules applicable in a court and are subject to very limited
//           review by a court. In the event any litigation should arise
//           between you and Bowled.io in any court in a suit to vacate
//           or enforce an arbitration award or otherwise, YOU AND
//           BOWLED.IO WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing
//           that the dispute be resolved by a judge.
//         </li>
//         <li>
//           Waiver of Class or Consolidated Actions. ALL CLAIMS AND
//           DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST
//           BE ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON
//           A CLASS BASIS, AND CLAIMS OF MORE THAN ONE CUSTOMER OR USER
//           CANNOT BE ARBITRATED OR LITIGATED JOINTLY OR CONSOLIDATED
//           WITH THOSE OF ANY OTHER CUSTOMER OR USER. If a decision is
//           issued stating that applicable law precludes enforcement of
//           any of this subsection’s limitations as to a given claim for
//           relief, then the claim must be severed from the arbitration
//           and brought into the courts of Singapore. All other claims
//           shall be arbitrated.
//         </li>
//         <li>
//           Confidentiality. All aspects of the arbitration proceeding,
//           including but not limited to the award of the arbitrator and
//           compliance therewith, shall be strictly confidential. The
//           parties agree to maintain confidentiality unless otherwise
//           required by law. This paragraph shall not prevent a party
//           from submitting to a court of law any information necessary
//           to enforce this Agreement, to enforce an arbitration award,
//           or to seek injunctive or equitable relief.
//         </li>
//         <li>
//           Severability. If any part or parts of this Arbitration
//           Agreement are found under the law to be invalid or
//           unenforceable by a court of competent jurisdiction, then
//           such specific part or parts shall be of no force and effect
//           and shall be severed and the remainder of the Arbitration
//           Agreement shall continue in full force and effect.
//         </li>
//         <li>
//           Right to Waive. Any or all of the rights and limitations set
//           forth in this Arbitration Agreement may be waived by the
//           party against whom the claim is asserted. Such waiver shall
//           not waive or affect any other portion of this Arbitration
//           Agreement.
//         </li>
//         <li>
//           Survival of Agreement. This Arbitration Agreement will
//           survive the termination of your relationship with Bowled.io.
//         </li>
//         <li>
//           Emergency Equitable Relief. Notwithstanding the foregoing,
//           either party may seek emergency equitable relief before a
//           court in Singapore in order to maintain the status quo
//           pending arbitration. A request for interim measures shall
//           not be deemed a waiver of any other rights or obligations
//           under this Arbitration Agreement.
//         </li>
//         <li>
//           Claims Not Subject to Arbitration. Notwithstanding the
//           foregoing, claims of defamation, violation of the Computer
//           Fraud and Abuse Act, and infringement or misappropriation of
//           the other party’s patent, copyright, trademark or trade
//           secrets shall not be subject to this Arbitration Agreement.
//         </li>
//         <li>
//           Courts. In any circumstances where the foregoing Arbitration
//           Agreement permits the parties to litigate in court, the
//           parties hereby agree to submit to the personal jurisdiction
//           of the courts located within Singapore, for such purpose.
//         </li>
//       </ul>

//       <h3>General</h3>
//       <p>
//         We reserve the right in our sole discretion to modify,
//         suspend, or discontinue the Service, or any features or parts
//         thereof, whether temporarily or permanently, at any time with
//         or without notice to you in our sole discretion. These Terms,
//         and your access to and use of the Service, shall be governed
//         by and construed and enforced in accordance with the laws of
//         Singapore, without regard to any conflict of law rules or
//         principles that would cause the application of the laws of any
//         other jurisdiction. Any dispute between the parties that is
//         not subject to arbitration shall be resolved in the courts of
//         Singapore. Notwithstanding anything contained in these Terms,
//         we reserve the right, without notice and in our sole
//         discretion, to terminate your right to access or use the
//         Service at any time and for any or no reason, and you
//         acknowledge and agree that we shall have no liability or
//         obligation to you in such event and that you will not be
//         entitled to a refund of any amounts that you have already paid
//         to us, to the fullest extent permitted by applicable law. If
//         any term, clause or provision of these Terms is held invalid
//         or unenforceable, then that term, clause or provision will be
//         severable from these Terms and will not affect the validity or
//         enforceability of any remaining part of that term, clause or
//         provision, or any other term, clause or provision of these
//         Terms. Your relationship to Bowled.io is that of an
//         independent contractor, and neither party is an agent or
//         partner of the other. These Terms, and any rights and licenses
//         granted hereunder, may not be transferred or assigned by you
//         without the prior written consent of Bowled.io. Bowled.io’s
//         failure to assert any right or provision under these Terms
//         shall not constitute a waiver of such right or provision.
//         Except as otherwise provided herein, these Terms are intended
//         solely for the benefit of Bowled.io and you and are not
//         intended to confer third party beneficiary rights upon any
//         other person or entity.
//       </p>
//     </div>
//   </Col>
// </Row>
// </Container>