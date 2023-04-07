import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/blog" legacyBehavior>
          <a>blog</a>
        </Link>
      </h2>
      <h2>
        <Link href="product/1" legacyBehavior>
          <a>Product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="product/2" legacyBehavior>
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="product/3" replace legacyBehavior>
          <a>Product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`product/${productId}`} legacyBehavior>
          <a>Product {productId}</a>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
{/* <Link href="product/3" replace legacyBehavior>
  <a>Product 3</a>
</Link>; basically this is useful while not remembering past history of routes and directly route to main home page */}
