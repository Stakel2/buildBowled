import React from "react";

export default function Cashfree({data}) {
       // debugger;
       window.open(data)
    const config = {
        onPaymentSuccess: function(data) {},
        onPaymentFailure: function(data) {},
        onError: function(err) {},
    };
    const cfCheckout = window.Cashfree.initializeApp(config);
    let isUPIIntentReady = false;
    let order_token = "2345";  //order_token is received after create order api is called
    cfCheckout.elements([
           {
                  pay: document.getElementById
                  ('pay-intent'),
                  type: 'upi-intent',
                  onChange: upiIntentHandler
           }
    ]) 
    function upiIntentHandler(data){
           console.log("UPI intent --> ", data)
           isUPIIntentReady = data.isReadyToPay
    }
  function payUpi() {
           if(!isUPIIntentReady) {
                  alert("UPI Intent not ready to pay!")
                  return
           }
          cfCheckout.pay(order_token, 'upi-intent');
    }
  return (
       // <div style={{ maxWidth: "750px", minHeight: "200px" }}>
    {/* <div id="pay-card">
    <table>
         <tr><td>Card number</td><td><input  type="text" value="" data-card-number/> </td></tr>
         <tr><td>card expiry MM</td><td><input  type="text" value="" data-card-expiry-mm/> </td></tr>
         <tr><td>card expiry YY</td><td><input  type="text" value="" data-card-expiry-yy/> </td></tr>
         <tr><td>card cvv</td><td><input  type="password" value="" data-card-cvv/></td></tr>

    </table>
    <button id="pay-card-btn">Pay</button>
</div> */
/* <div id="pay-intent">
       UPI App  <select  data-upi-provider>
               <option value="">select</option>
              <option value="gpay">gpay</option>
              <option value="phonepe">phonepe</option>
              <option value="paytm">paytm</option>
              <option value="bhim">bhim</option>
       </select>
       {/* <input type="text" data-app-phone /> */}
//        * <button id="pay-intent-btn "onClick={payUpi}>Pay</button>
// </div>
// </div> */} 
  )
}
