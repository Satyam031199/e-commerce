'use client'

import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/stripe/success`}
      cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/stripe/error`}
      currency="INR"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </CartProvider>
  );
};

export default Providers;
