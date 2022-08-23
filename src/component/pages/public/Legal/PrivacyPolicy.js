import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Layout } from "../../../common/layout/Layout";
import { useLocation } from "react-router-dom";
import "./legal.scss";

const PrivacyPolicy = () => {
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
              <h1>Privacy Policy</h1>
              <div className="privacy_sec">
                <h3>Introduction</h3>

                <p>
                  Bowled.io (“bowled.io”) is committed to protecting and
                  respecting your privacy. This policy and any other documents
                  referred to set out the basis on which any personal
                  information bowled.io collects from you, or that you provide
                  to us, will be processed by us, and sets out our commitment to
                  protecting the privacy of personal information provided to us,
                  or otherwise collected by us, offline or online, including
                  through this website (“Site”), any mobile applications
                  operated by us (“Apps”) and our platform more generally
                  (“Service”). We encourage you to familiarize yourself with our
                  privacy practices set forth herein, to understand how we
                  collect and use your personal data. Any reference to “we”,
                  “us”, “our” and similar terms herein refers to bowled.io.
                  Whenever you give us personal data, you are consenting to its
                  processing, collection and use in accordance with this privacy
                  policy. You may withdraw your consent at any time by emailing
                  us with your full name.
                </p>

                <h3>THE BINDING NATURE OF THIS PRIVACY POLICY AND ITS SCOPE</h3>
                <p>
                  By accessing or otherwise using the Service, you agree to be
                  bound contractually by this Privacy Policy. This Privacy
                  Policy applies to information collected, used and maintained
                  by us in conjunction with the use of our Services, Apps and /
                  or Site, and explains our information gathering and
                  dissemination practices.
                </p>
                <p>
                  This Privacy Policy has been compiled to better serve those
                  who are concerned with how their “Personally Identifiable
                  Information” (“PII”) is being used online. PII is information
                  that can be used on its own or with other information to
                  identify, contact, or locate a single person, or to identify
                  an individual in context.
                </p>

                <h3>THE RIGHT TO MODIFY</h3>
                <p>
                  We reserve the right to revise or modify this Privacy Policy
                  at any time by posting amended terms on this page, including
                  an indication of the last date of revision. Please revisit
                  this page periodically to stay aware of any modifications to
                  this Privacy Policy. In the event that the modifications
                  materially alter your rights or obligations hereunder, we will
                  make reasonable efforts to notify you of the change. For
                  example, we may send a message to your email address, if we
                  have one on file, or generate a pop-up or similar notification
                  when you access the Service for the first time after such
                  material changes are made. In all cases, your continued use of
                  the Service after our posting of a revised Privacy Policy on
                  this page, indicates that you have read, understood and agreed
                  to the revised Privacy Policy.
                </p>

                <h3>INFORMATION WE MAY COLLECT FROM YOU</h3>
                <p>
                  bowled.io may collect and process two types of information
                  from our users: The first type of information is
                  non-identifiable and anonymous information (“Non-Personal
                  Information”). We are not aware of the identity of the user
                  from which we have collected the Non-Personal Information.
                  Non-Personal Information is any unconcealed information which
                  is available to us while Users are using the Site, Apps and/or
                  Service. Non-Personal Information which is being gathered
                  consists of technical information and behavioural information,
                  and may contain, among other things, type of operating system
                  (e.g. Windows, Linux, etc.), computer configurations, screen
                  resolution (e.g. 800x600, 1024x768, etc.), type of web browser
                  used, keyboard language (e.g. English), location data, the
                  activity of the user on the Site, Apps and / or Service
                  (including dates and times and duration of use, and the nature
                  of the resources and features accessed), details of the user’s
                  internet service provider or mobile carrier, and the user's
                  “click-stream” on the Site, Apps and / or Service. In
                  addition, Non-Personal Information may include information you
                  provide to us through inquiries and / or feedback, as well as
                  when you report a problem with the Site, Apps and / or
                  Service, including the textual information you submit to help
                  us reproduce the issue, and screenshots. This is statistical
                  data about our users' browsing actions and patterns, and does
                  not identify any individual.
                </p>

                <p>
                  The second type of information is PII (as defined above). Each
                  user of the Site, Apps and / or Service automatically provides
                  the user’s IP address and unique device identifiers mainly for
                  enhancing the user's experience and for geolocation and
                  security purposes. In addition, PII collected and stored
                  consists of any personal details provided consciously and
                  voluntarily by you when the user wish to contact us or
                  subscribe for a demo via forms on the Site or Apps, or send us
                  customer service related requests; specifically: your first
                  and last name, your e-mail address(es), your job title, the
                  name of your company or entity, your industry, your phone
                  number, your credit card or other billing information, and
                  copies or records of your correspondence with us. For
                  avoidance of doubt, any Non-Personal Information connected or
                  linked to any PII shall be deemed as PII as long as such
                  connection or linkage exists. We do not collect any PII from
                  you or related to you without your approval, which is
                  obtained, inter alia, through your active acceptance of the
                  Terms of Service and the Privacy Policy.
                </p>

                <h3>Cookies</h3>
                <p>
                  Cookies are small text files that websites save to your
                  computer. These files are used to improve services for you
                  through, for example: (i) remembering settings, so you don’t
                  have to keep re-entering them whenever you visit a new page;
                  (ii) remembering information you’ve given (e.g. your postcode)
                  so you don’t need to keep entering it. Cookies in and of
                  themselves do not personally identify users, although they do
                  identify a device.
                </p>

                <p>
                  Session cookies allow us to track your actions during a single
                  browser session, for example to remember the items returned
                  from a search. They do not remain on your device beyond your
                  session.
                </p>

                <p>
                  Persistent cookies remain on your device between sessions and
                  allow us to authenticate you and to remember your preferences.
                </p>

                <p>
                  Session and persistent cookies can be either first or
                  third-party cookies — a first-party cookie is set by the
                  website being visited. A third-party cookie is issued by a
                  different website to that being visited.
                </p>

                <p>
                  When you use the Service, we may send one or more cookies –
                  small text files containing a string of alphanumeric
                  characters – to your device.{" "}
                  <strong>
                    We may use both session cookies and persistent cookies.
                  </strong>
                </p>

                <p>
                  We may also use a third-party cookie provided by Google
                  Analytics to gather anonymized information for the benefit of
                  all web users.
                </p>

                <p>
                  bowled.io uses cookies to understand your preferences based on
                  previous or current site activity, which enables us to provide
                  you with improved services. We also use cookies to help us
                  compile aggregate data about traffic and interactions with our
                  Service so that we can offer better experiences to our users
                  in the future. We may also use trusted third-party services
                  that track this information on our behalf.
                </p>

                <p>
                  You can choose to have your device warn you each time a cookie
                  is being sent, or you can choose to disable cookies, through
                  the settings on your browser. Please review your browser
                  “Help" file to learn the proper way to modify your cookie
                  settings. Please note that if you delete, or choose not to
                  accept, cookies from the Service, you may not be able to
                  utilize the features of the Service to their fullest
                  potential.
                </p>

                <p>
                  To learn more about cookies and how to manage them, visit 
                  <a>AboutCookies.org</a>.
                </p>

                <h3>HOW DOES WE HANDLE DO NOT TRACK SIGNALS?</h3>

                <p>
                  We honour Do Not Track signals and do not track, plant
                  cookies, or use advertising when a Do Not Track (DNT) browser
                  mechanism is in place.
                </p>

                <h3>INFORMATION WE MAY RECEIVE FROM INTEGRATED SERVICES</h3>
                <p>
                  You may be given the option to authorize certain third
                  parties, such as Facebook or Google (each, an “Integrated
                  Service”) to provide personal information or other information
                  to us.
                  <strong>
                    {" "}
                    By authorizing us to connect with an Integrated Service, you
                    authorize us to access and store your name, email
                    address(es), date of birth, gender, current city, profile
                    picture URL, and other information that the Integrated
                    Service makes available to us, and to use and disclose it in
                    accordance with this privacy policy.
                  </strong>{" "}
                  You should check your privacy settings on each Integrated
                  Service to understand and change the information sent to us
                  through each Integrated Service. Please review each Integrated
                  Service’s terms of use and privacy policies carefully before
                  using their services and connecting to our Service.{" "}
                </p>

                <h3>INFORMATION WE MAY RECEIVE FROM OTHER SOURCES </h3>
                <p>
                  We may obtain information, including personal information,
                  from third parties and sources other than the Service, such as
                  other users of our Service. For example, a user may provide
                  your email address in order to invite you to the Services. If
                  we combine or associate information from other sources with
                  personal information that we collect through the Service, we
                  will treat the combined information as personal information in
                  accordance with this privacy policy.
                </p>

                <h3>HOW BOWLED.IO USES YOUR INFORMATION</h3>
                <p>
                  We may use the information we collect from you in the
                  following ways:
                </p>
                <ul>
                  <li>
                    To carry out our obligations arising from any contracts
                    entered into between you and us.
                  </li>
                  <li>To personalize your experience.</li>
                  <li>
                    To process orders and to send information including
                    confirmations, invoices, technical notices, updates,
                    security alerts, and support and administrative messages
                  </li>
                  <li>
                    To ask for ratings and reviews, and other forms of feedback.
                  </li>
                  <li>
                    To respond to comments and questions and provide customer
                    service.
                  </li>
                  <li>To process and deliver contest entries and rewards.</li>
                  <li>
                    To communicate about promotions, upcoming events, and other
                    news about products and services offered by us and our
                    selected partners
                  </li>
                  <li>
                    To protect, investigate, and deter against fraudulent,
                    unauthorized, or illegal activity.
                  </li>
                  <li>To verify your credentials for security purposes.</li>
                  <li>
                    To carry out end user compliance checks for export control
                    purposes.
                  </li>
                  <li>
                    To issue virus information alerts and other alert messages
                  </li>
                  <li>
                    To provide training sessions for which you have registered.
                  </li>
                  <li>To provide technical support.</li>
                  <li>
                    To inform you of any changes to the Service, as well as
                    about upgrades, updates and renewals.
                  </li>
                  <li>
                    To generate logs, statistics and reports on service usage,
                    service performance and malware infection.
                  </li>
                  <li>
                    To develop and enhance the Service, to repair errors or
                    bugs, and to develop new versions of the Service.
                  </li>
                </ul>

                <h3>WHERE WE STORE YOUR INFORMATION</h3>
                <p>Your information is securely stored by bowled.io.</p>

                <h3>HOW BOWLED.IO PROTECTS YOUR INFORMATION</h3>
                <p>
                  bowled.io endeavours to hold all PII securely in accordance
                  with our internal security procedures and applicable laws.
                  Once we have received your information, we maintain
                  appropriate administrative, physical, technical and
                  organizational measures to protect your PII accessed or
                  processed by bowled.io against unauthorized or unlawful
                  processing or accidental loss, destruction, damage or
                  disclosure. PII is contained behind secured networks and is
                  only accessible by a limited number of persons who have
                  special access rights to such systems, and are required to
                  keep the information confidential. We update and test our
                  security on an ongoing basis.
                </p>
                <p>
                  Our employees or outside contractors are required by us to
                  maintain and uphold your privacy and security and are aware of
                  our privacy and security policies and/or abide by their own
                  privacy and security policies in order to safeguard your
                  information. In addition, all sensitive/credit information you
                  supply is encrypted via Secure Socket Layer (SSL) technology.
                </p>
                <p>
                  All transactions are processed through a gateway provider and
                  are not stored or processed on our servers.
                </p>
                <p>
                  Unfortunately, data transmissions made by means of the
                  Internet cannot be made absolutely secure. Please keep in mind
                  that if you transmit PII online, such transmissions may be
                  intercepted by unauthorized third parties
                </p>

                <h3>TRANSFERRING your information</h3>
                <p>
                  When you give us information, that information may be used,
                  processed or stored anywhere in the world. We will only
                  transfer personal information to a supplier where the supplier
                  has provided assurances that they will provide at least the
                  same level of privacy protection as is required by this
                  privacy policy. Where bowled.io has knowledge that a supplier
                  is using or sharing personal information in a way that is
                  contrary to this policy, bowled.io will immediately take
                  reasonable steps to prevent or stop such processing.
                </p>

                <h3>DISCLOSURE OF YOUR INFORMATION TO THIRD PARTIES</h3>
                <p>
                  We do not sell, trade, or otherwise transfer to outside
                  parties your PII unless we provide you with advance notice.
                  This does not include website hosting partners and other
                  parties who assist us in operating our Site, conducting our
                  business, or serving our users, so long as those parties agree
                  to keep this information confidential. We may also release
                  information when its release is appropriate to comply with the
                  law, enforce our site policies, or protect our or others’
                  rights, property or safety. However, Non-Personal Information
                  may be provided to other parties for marketing, advertising,
                  or other uses.
                </p>
                <p>
                  Where permitted by law, we may share information from or about
                  you with subsidiaries, joint ventures, or other companies
                  under common control, in which case we will require them to
                  adhere to this privacy policy.
                </p>
                <p>
                  If we are acquired by or merged with another entity, if
                  substantially all of our assets are transferred to another
                  company, or as part of a bankruptcy proceeding, we may
                  transfer the information we have collected about you to the
                  other company. Our successors and assigns may collect and use
                  your information for substantially similar purposes as
                  described in this privacy policy.
                </p>

                <h3>THIRD-PARTY LINKS </h3>
                <p>
                  Our Site may contain hyperlinks to websites of third parties
                  (“Third-Party Websites”) that can cause you to leave the Site.
                  We provide these hyperlinks for convenience. The Third-Party
                  Websites are not under our control, and we do not accept any
                  responsibility or liability with respect to the privacy and
                  confidentiality practices of such Third-Party Websites. Any
                  PII that is submitted by you to such Third Party Websites is
                  subject to the privacy policies of the such Third-Party
                  Websites, and it is your responsibility to consult these
                  policies in order to ensure that your PII is being protected.
                </p>

                <h3>SOCIAL MEDIA</h3>
                <p>
                  We may use social media (for example, Facebook and Twitter) in
                  addition to the operation of the Site, Apps and / or Service.
                  Social media accounts are public and are not hosted by us.
                  Users who decide to interact with us through social media
                  must, therefore, read the terms of service and privacy
                  policies of these third-party suppliers of services and the
                  applications used to have access to them.
                </p>
                <p>
                  The PII that is provided to us by way of social media accounts
                  is collected in order to record exchanges (for example,
                  questions and answers, comments, “likes”, shared tweets)
                  between the users and us. It may be used to answer requests,
                  make statistical evaluations and prepare reports and for all
                  other purposes indicated in this privacy policy.
                </p>

                <h3>FAIR INFORMATION PRACTICES</h3>
                <p>
                  In correspondence with the United States Federal Trade
                  Commission’s Fair Information Practices we will take the
                  following responsive action, should a data breach occur, we
                  will notify the users via in-site notification within 7
                  business days. We also agree to the Individual Redress
                  Principle which requires that individuals have the right to
                  legally pursue enforceable rights against data collectors and
                  processors who fail to adhere to the law. This principle
                  requires not only that individuals have enforceable rights
                  against data users, but also that individuals have recourse to
                  courts or government agencies to investigate and/or prosecute
                  non-compliance by data processors.
                </p>

                <h3>DATA PRIVACY OFFICER</h3>
                <p>
                  bowled.io is headquartered in Singapore. bowled.io has
                  appointed an internal data protection officer for you to
                  contact if you have any questions or concerns about
                  bowled.io’s Privacy Policy.{" "}
                </p>
              </div>

              <h1>APPENDIX 1: CAN-SPAM ACT</h1>

              <div className="privacy_sec">
                <p>
                  To be in accordance with CAN-SPAM, we agree to the following:
                </p>
                <ul>
                  <li>
                    Not to use false or misleading subjects or email addresses.
                  </li>
                  <li>
                    To identify the message as an advertisement in some
                    reasonable way.
                  </li>
                  <li>
                    To include the physical address of our business or site
                    headquarters.
                  </li>
                  <li>
                    To monitor third-party email marketing services for
                    compliance, if one is used.
                  </li>
                  <li>To honour opt-out/unsubscribe requests quickly.</li>
                  <li>
                    To allow users to unsubscribe by using the link at the
                    bottom of each email
                  </li>
                </ul>
                <p>
                  If you receive an email which claims to come from us but does
                  not use our domain, or if you are suspicious that an email may
                  not be approved by us, then please send a copy of the email
                  to us so we can investigate.
                </p>
              </div>

              <h1>APPENDIX 2: GDPR</h1>
              <div className="privacy_sec">
                <p>
                  bowled.io collects, uses and keeps information in compliance
                  with the General Data Protection Regulation (Regulation (EU)
                  2016/679) (“GDPR”), the Privacy and Electronic Communications
                  (EC Directive) Regulations 2003, and all relevant regulations.
                  For the purpose of GDPR, the data controller is bowled.io.
                </p>

                <h3>Additional rights for individuals located in the EU</h3>
                <p>
                  Under the GDPR individuals located in the EU have extra rights
                  which apply to their personal information. Personal
                  information under the GDPR is often referred to as personal
                  data and is defined as information relating to an identified
                  or identifiable natural person (individual). This Appendix
                  sets out the additional rights we give to individuals located
                  in the EU including how we process personal information
                  lawfully, transparently and fairly. Please read the Privacy
                  Policy above and this Appendix carefully and contact us at the
                  details at the end of the Privacy Policy if you have any
                  questions.
                </p>

                <p>
                  <strong>What personal information is relevant?</strong>
                </p>
                <p>
                  This Appendix applies to the personal information set out in
                  the Privacy Policy above, including the information which is
                  known as ‘special categories of data’ under the GDPR.
                </p>

                <p>
                  <strong>How we process personal information?</strong>
                </p>
                <p>
                  We will process your personal information for our legitimate
                  interest to allow you to access and use our Services, to send
                  you marketing content we think may be of interest to you, to
                  contact you if you leave your contact details with us or if
                  you otherwise initiate contact with us.
                </p>
                <p>
                  We will rely on performing a contract to process your personal
                  information where we are preparing to enter into a contract
                  with you or we are carrying out our obligations under a
                  contract with you.
                </p>
                <p>
                  We will rely on a legal obligation to process your personal
                  information where we are subject to a legal obligation.
                </p>
                <p>
                  If we need to rely on consent, we will ask for consent to
                  process any of your personal information for that specific
                  purpose before we process your personal information for that
                  reason.
                </p>
                <p>
                  Upon written request, we may provide you with a list of the
                  third parties we use to process your personal information.
                </p>
                <p>
                  If you are under 16 years of age, you must have, and warrant
                  to the extent permitted by law to us that you have, your
                  parent or legal guardian’s permission to access and use the
                  Site, Apps and / or Service and they (your parents or
                  guardian) have consented to you providing us with your
                  personal information.
                </p>

                <h5>
                  <strong>Data Retention</strong>
                </h5>
                <p>
                  We will only retain your personal information for as long as
                  necessary to fulfil the purposes we collected it for,
                  including for the purposes of satisfying any legal,
                  accounting, or reporting requirements
                </p>
                <p>
                  To determine the appropriate retention period for personal
                  information, we consider the amount, nature, and sensitivity
                  of the personal information, the potential risk of harm from
                  unauthorized use or disclosure of your personal information,
                  the purposes for which we process your personal information
                  and whether we can achieve those purposes through other means,
                  and the applicable legal requirements.
                </p>
                <p>
                  In some circumstances you can ask us to delete your data: see
                  ‘access, erasure and data portability’ below for further
                  information.
                </p>
                <p>
                  In some circumstances we may anonymize your personal
                  information (so that it can no longer be associated with you)
                  for analytics, research or statistical purposes in which case
                  we may use this anonymized information indefinitely without
                  further notice to you.
                </p>

                <h5>
                  <strong>Data Transfers</strong>
                </h5>
                <p>
                  The countries to which we send data for the purposes listed
                  above may not have the same data protection laws as the
                  country in which you initially provided the information. If we
                  transfer your personal information to third parties in other
                  countries: (i) we will perform those transfers in accordance
                  with the requirements of applicable law; and (ii) we will
                  protect the transferred personal information in accordance
                  with the Privacy Policy, as supplemented by this Appendix.
                </p>

                <h5>
                  <stron>Extra rights for EU individuals</stron>
                </h5>
                <p>
                  <strong>Objecting to processing:</strong>: You have the right
                  to object to processing of your personal data that is based on
                  our legitimate interests or public interest. If this is done,
                  we must provide compelling legitimate grounds for the
                  processing which overrides your interests, rights and
                  freedoms, in order to proceed with the processing of your
                  personal information.
                </p>
                <p>
                  <strong>Restricting processing:</strong>You have the right to
                  request that we restrict the processing of your personal data
                  if (i) you are concerned about the accuracy of your personal
                  data; (ii) you believe your personal data has been unlawfully
                  processes; (iii) you need us to maintain the data solely for
                  the purpose of a legal claim; or (iv) we are in the process of
                  considering your objection in relation to processing on the
                  basis of legitimate interests.
                </p>
                <p>
                  <strong>Access, erasure and data portability:</strong>You may
                  have the right to request details of the personal information
                  we hold about you, or to request that we erase the personal
                  information we hold about you, or that we transfer this
                  information to a third party.
                </p>
                <p>
                  <strong>Rectification:</strong> If you believe that any
                  information we hold about you is inaccurate, out of date,
                  incomplete, irrelevant or misleading, please contact us using
                  the details below. We will take reasonable steps to promptly
                  correct any information found to be inaccurate, incomplete,
                  misleading or out of date.
                </p>
              </div>
              <h1>APPENDIX 3: CALIFORNIA: SPECIAL SECTION</h1>
              <div className="privacy_sec">
                <p>
                  If you are a California resident, you have the following
                  rights:
                </p>
                <p>
                  1. Information. To request that we disclose the following
                  information about our collection and use of your personal
                  information during the past 12 months:
                  <ul>
                    <li>
                      i. The categories of personal information that we have
                      collected about you;
                    </li>
                    <li>
                      ii. The categories of sources from which personal
                      information is collected;{" "}
                    </li>
                    <li>
                      iii. The business or commercial purpose for collecting or
                      selling personal information;
                    </li>
                    <li>
                      iv. The categories of third parties with whom we share
                      your personal information;
                    </li>
                    <li>
                      v. Whether we have disclosed your personal information for
                      a business purpose, and if so, the categories of personal
                      information received by each category of recipient; and
                    </li>
                    <li>
                      vi. Whether we have sold your personal information, and,
                      if so, the categories of personal information received by
                      each category of recipient.
                    </li>
                  </ul>
                </p>
                <p>
                  2. Access. To request a copy of the personal information that
                  we have collected about you during the past 12 months.{" "}
                </p>
                <p>
                  3. Deletion. To request that we delete personal information
                  about you that we have collected from you.{" "}
                </p>
                <p>
                  4. Opt-out of sales. To direct us not to sell your personal
                  information if we do, and if you are under 16 years of age, we
                  are required to ask for affirmative authorization from you (or
                  it you are under 13, your parent or guardian) to sell your
                  personal information before we do so.
                </p>
                <p>
                  5. Non-Discrimination. To exercise your rights described above
                  free from discrimination, such as denial of goods or services;
                  price/rate increases for goods or services (including through
                  grants of discounts/benefits or imposing penalties); decreases
                  in service quality; or suggesting that such discriminatory
                  acts may occur if you exercise your rights. However, a
                  difference in price or service quality is not discriminatory
                  if reasonably related to the value to our business of the
                  personal information we are unable to use due to the exercise
                  of your rights, and we may offer you certain financial
                  incentives that can result in different prices, rates or
                  service quality.{" "}
                </p>
                <p>
                  6. Financial incentive program disclosures. Receive a clear
                  description of the material terms of any program involving
                  financial incentives for the collection, sale or deletion of
                  your personal information, and decide if you want to consent
                  to be entered in it (you can revoke this consent at any time).{" "}
                </p>

                <p>You may exercise the rights described above as follows: </p>

                <p>
                  1. Right to opt-out of sales
                  <ul>
                    <li>
                      i. You may exercise your right to opt-out of sales of your
                      personal information by emailing us.
                    </li>
                  </ul>
                </p>
                <p>
                  2. Right to information, access and deletion
                  <ul>
                    <li>
                      i. You may exercise the information, access and deletion
                      rights described above by submitting a verifiable request
                      to us by emailing us.
                    </li>
                    <li>
                      ii. Only you, or a person registered with the California
                      Secretary of State that you authorize to act on your
                      behalf, may make a verifiable request related to your
                      personal information. You may also make a verifiable
                      customer request on behalf of your minor child under 13.{" "}
                    </li>
                    <li>
                      iii. The verifiable request must provide sufficient
                      information that allows us to reasonably verify you are a
                      California resident about whom we collected personal
                      information or their authorized representative; and
                      describe your request with sufficient detail that allows
                      us to properly understand, evaluate, and respond to it.{" "}
                    </li>
                    <li>
                      iv. These rights are not absolute, are subject to
                      exceptions, and we may be required or permitted by law to
                      decline your request.
                    </li>
                  </ul>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default PrivacyPolicy;
