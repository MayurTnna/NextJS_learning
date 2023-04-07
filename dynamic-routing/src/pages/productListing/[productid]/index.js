import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productID = router.query.productid;
  return <div>ProductDetail about it:- {productID}</div>;
}

export default ProductDetail;
