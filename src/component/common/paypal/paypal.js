import React, { useState, useEffect } from "react";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { toasts } from "../Toast/Toast";
import { PAYPAL_CLIENT_ID } from "../../../constant";

// const amount = "2";
// const currency = "USD";
const style = { layout: "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
  amount,
  currency,
  showSpinner,
  onCreatePayment,
  onPaymentSucess,
  onPaymentError,
  onPaymentCancel,
}) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending, isResolved, isInitial, isRejected }, dispatch] =
    usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
              application_context: {
                shipping_preference: "NO_SHIPPING",
              },
            })

            .then((orderId) => {
              console.log("order Id", orderId);
              onCreatePayment(orderId, "PAYPAL");
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function (res) {
            onPaymentSucess(res, "PAYPAL");
            // Your code here after capture the order
          });
        }}
        onError={function (data, actions) {
          toasts.error("An Error occured with your payment ");
          onPaymentError();
        }}
        onCancel={function (data, action) {
          onPaymentCancel(data);
        }}
        onShippingChange={function (data, action) {}}
      />
    </>
  );
};

export default function PaypalButton({
  amount,
  currency,
  onCreatePayment,
  onPaymentSucess,
  onPaymentError,
  onPaymentCancel,
}) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          "client-id": PAYPAL_CLIENT_ID,
          components: "buttons",
          currency: currency,
        }}
      >
        <ButtonWrapper
          onCreatePayment={onCreatePayment}
          onPaymentSucess={onPaymentSucess}
          onPaymentError={onPaymentError}
          onPaymentCancel={onPaymentCancel}
          amount={amount}
          currency={currency}
          showSpinner={false}
        />
      </PayPalScriptProvider>
    </div>
  );
}
