import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, UserList } from "./component/pages/Admin/";
import { PageLayout, LayoutSignUp, LayoutSetup } from "./component/Layout/";
import { NoGuard, AuthGuard } from "./Guard";
import {
  Home,
  Home2,
  Drop,
  Showcase,
  Marketplace,
  MarketplaceAll,
  Microsite,
  Signup,
  Login,
  Artists,
  Aboutus,
  NftGuide,
  Contactus,
  ArtistDetail,
  Drops,
  BrandDetail,
  Product,
  Raffles,
  ProductDetail,
  FeaturedNftAll,
  Mysterybox,
  PrivacyPolicy,
  Play,
  TermsOfService,
} from "./component/pages/public";
import ResetPassword from "./component/pages/public/resetpassword/ResetPassword";
import ForgetPassword from "./component/pages/public/login/ForgetPassword";
import VerifyEmail from "./component/pages/public/signup/VerifyEmail";
import PageNotFound from "./component/PageNotFound";
import PaypalButton from "./component/common/paypal/paypal";
import ResendVerification from "./component/pages/public/resendVerification/resendVerification";
import AllRaffles from "./component/pages/public/allraffles/AllRaffles";
import NftNotFound from "./component/NftNotFound";
import FeaturedDropsAll from "./component/pages/public/drops/featuredDrops/FeaturedDropsAll";
import MysteryBoxes from "./component/pages/public/mysteryboxes/MysteryBoxes";
import {
  Profile,
  EditProfile,
  CreateWallet,
  ManageWallet,
  Kyc,
  Wallet,
  PaymentSuccess,
  PaymentFailed,
  AllTickets,
  SetupPassword,
} from "./component/pages/private";
import MyCollection from "./component/pages/private/profile/MyCollection";
import Transactions from "./component/pages/private/Transactions/Transactions";
import WalletNew from "./component/pages/private/WalletNew/WalletNew";
import ViewNFT from "./component/pages/private/ViewNFT/ViewNFT";
import MyMysteryBoxNft from "./component/pages/public/myMysteryBoxNft/MyMysteryBoxNft";
import LoginWithMobile from "./component/pages/public/login/LoginWithMoble";
import LinkMobile from "./component/pages/private/LinkMobile/LinkMobile";
import LinkEmail from "./component/pages/private/LinkEmail/LinkEmail";
import Cashfree from "./component/common/Cashfree/Cashfree";
import WaitlistModal from "./component/pages/private/Waitlist/WaitlistModal";
export const UserContext = React.createContext();

const App = () => {

    return(
    <Routes>
      <Route path="/" element={<NoGuard />} >
        <Route path="/" element={<PageLayout innerClass="home_wrap" Component={Home2} />} />
        <Route path="/play" element={<PageLayout innerClass="home_wrap" Component={Play} />} />
        <Route path="/drops" element={<PageLayout innerClass="home_wrap" Component={Drop} />} />
        <Route path="/drops/:dropId" element={<PageLayout innerClass="home_wrap" Component={Drops} />} />
        <Route path="/brands/:cat" element={<PageLayout innerClass="home_wrap" Component={Showcase} />} />
        <Route path="/brand-detail/:brandId" element={<PageLayout innerClass="home_wrap" Component={BrandDetail} />} />
        <Route path="/product-detail/:id" element={<PageLayout innerClass="home_wrap" Component={ProductDetail} />} />
        <Route path="/marketplace" element={<PageLayout innerClass="home_wrap" Component={Marketplace} />} />
        <Route path="/marketplaceAll" element={<PageLayout innerClass="home_wrap" Component={MarketplaceAll} />} />
        <Route path="/viewnft/:id" element={<PageLayout innerClass="home_wrap" Component={ViewNFT} />} />
        <Route path="/featurednft/all" element={<PageLayout innerClass="home_wrap" Component={FeaturedNftAll} />} />
        <Route path="/featuredrops/all" element={<PageLayout innerClass="home_wrap" Component={FeaturedDropsAll} />} />
        {/* <Route path="/microsite" element={<PageLayout innerClass="home_wrap" Component={Microsite} />} /> */}

        <Route path="/login" element={<LayoutSignUp Component={Login} />} />
        <Route path="/login-with-mobile" element={<LayoutSignUp Component={LoginWithMobile} />} />
        <Route path="/signup" element={<LayoutSignUp Component={Signup} />} />
        <Route path="/artist-detail/:userId" element={<PageLayout innerClass="home_wrap" Component={ArtistDetail} />} />
        <Route path="/about-us" element={<PageLayout innerClass="home_wrap" Component={Aboutus} />} />
        <Route path="/nft-guide" element={<PageLayout innerClass="home_wrap" Component={NftGuide} />} />
        <Route path="/contact-us" element={<PageLayout innerClass="home_wrap" Component={Contactus} />} />
        {/* <Route path="/product" element={<PageLayout innerClass="home_wrap" Component={Product} />} /> */}
        <Route path="/forget-password" element={<LayoutSignUp Component={ForgetPassword} />} />
        <Route path="/verify-email" element={<LayoutSignUp Component={VerifyEmail} />} />
        <Route path="/privacy-policy" element={<PageLayout className="legalLayout" Component={PrivacyPolicy} />} />
        <Route path="/terms-of-service" element={<PageLayout className="legalLayout" Component={TermsOfService} />} />
        <Route path="/resend-verification" element={<LayoutSignUp Component={ResendVerification} />} />
        {/* <Route path="/paypal" element={<PageLayout innerClass="home_wrap" Component={PaypalButton} />} /> */}
        <Route path="/raffles" element={<PageLayout innerClass="home_wrap" Component={Raffles} />} />
        <Route path="/all-raffels/:raffleId" element={<PageLayout innerClass="home_wrap" Component={AllRaffles} />} />
        <Route path="/mystery-boxes" element={<PageLayout innerClass="home_wrap" Component={MysteryBoxes} />} />
        <Route path="/mystery-box/:id" element={<PageLayout innerClass="home_wrap" Component={Mysterybox} />} />
        <Route path="/reset-password" element={<LayoutSignUp Component={ResetPassword} />} />
        <Route path="/nft-not-found" element={<PageLayout innerClass="home_wrap" Component={NftNotFound} />} />
        <Route path="*" element={<PageLayout innerClass="home_wrap" Component={PageNotFound} />} />
      </Route>
      <Route path="/" element={<AuthGuard />} >
        <Route path="/" element={<PageLayout innerClass="home_wrap" Component={Home} />} />
        <Route path="/user/profile" element={<PageLayout innerClass="home_wrap" Component={Profile} />} />
        <Route path="/user/edit-profile" element={<PageLayout innerClass="edit_profile_page" Component={EditProfile} />} />
        <Route path="/user/create-wallet" element={<PageLayout innerClass="home_wrap" Component={CreateWallet} />} />
        <Route path="/user/setup-password" element={<PageLayout innerClass="home_wrap" Component={SetupPassword} />} />
        <Route path="/user/add-email" element={<LayoutSignUp Component={LinkEmail} />} />
        <Route path="/user/add-phone" element={<LayoutSignUp Component={LinkMobile} />} />
        <Route path="/user/cashfree" element={Cashfree} />
        <Route path="/user/manage-wallet" element={<PageLayout innerClass="home_wrap" Component={ManageWallet} />} />
        <Route path="/user/kyc" element={<PageLayout innerClass="home_wrap" Component={Kyc} />} />
        <Route path="/user/collection" element={<PageLayout innerClass="home_wrap" Component={MyCollection} />} />
        <Route path="/user/wallet" element={<PageLayout innerClass="home_wrap" Component={Wallet} />} />
        <Route path="/user/order/success" element={<PageLayout innerClass="home_wrap" Component={PaymentSuccess} />} />
        <Route path="/user/order/failed" element={<PageLayout innerClass="home_wrap" Component={PaymentFailed} />} />
        <Route path="/user/all-tickets/:raffleId" element={<PageLayout innerClass="home_wrap" Component={AllTickets} />} />
        <Route path="/user/Transactions" element={<PageLayout innerClass="home_wrap" Component={Transactions} />} />
        <Route path="/user/WalletNew" element={<PageLayout innerClass="home_wrap" Component={WalletNew} />} />

        <Route path="/user/my-mystery-box-nft" element={<PageLayout innerClass="home_wrap" Component={MyMysteryBoxNft} />} />
        <Route path="*" element={<PageLayout innerClass="home_wrap" Component={PageNotFound} />} />

        {/* new designs */}
        <Route path="/user/WaitlistModal" element={<PageLayout innerClass="home_wrap" Component={WaitlistModal} />} />

      </Route>

    </Routes>
    )

};

export default App;
