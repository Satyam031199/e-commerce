'use client'

import { useShoppingCart } from "use-shopping-cart"
import { Button } from "./ui/button"
import { ProductCart } from "@/app/interface"
import { urlFor } from "@/app/lib/sanity"

const AddToBag = ({currency,description,image,name,price,price_id} : ProductCart) => {
    const {addItem,handleCartClick} = useShoppingCart()
    const product = {
        name: name,
        price: price,
        description: description,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id
    }
  return (
    <Button onClick={() => {addItem(product), handleCartClick()}} >
        Add To Cart
    </Button>
  )
}

export default AddToBag