"use client";

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { ProductCart } from "@/app/interface";
import { urlFor } from "@/app/lib/sanity";

const CheckoutNow = ({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) => {
  const { checkoutSingleItem } = useShoppingCart();
  function buyNow(priceId: string){
    checkoutSingleItem(priceId)
  }
  const product = {
    name: name,
    price: price,
    description: description,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        buyNow(product.price_id)
      }}
      variant='outline'
    >
      Checkout Now
    </Button>
  );
};

export default CheckoutNow;
