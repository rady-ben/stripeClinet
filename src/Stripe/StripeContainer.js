import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51IP4OWFnTWRdE6IkHz2mFT9QodFhRDCfIam3yQympKU4Ypn2TFCTtYxaHG16mEMJaQXGQXMQcHBidHydOQ6uLxYZ005uyh8ftd";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;