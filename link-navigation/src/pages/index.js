import Link from "next/link";

Link
function ProductHome() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog" legacyBehavior>
      <button>blog page</button>
      </Link>
      <Link href="/product" legacyBehavior>
      <button>product page</button>
      </Link>
    </div>
  );
}

export default ProductHome;

// the use of the <Link> component in your Next.js application. Specifically, you are using an <a> element as a child of the <Link> component, which is not allowed in Next.js.
// Or, if you need to use an <a> element for some reason, you can use the Link component's passHref prop and wrap the <a> element around the Link component, like this: or use legacybehvior