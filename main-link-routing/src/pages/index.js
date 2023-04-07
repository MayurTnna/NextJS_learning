import Link from "next/link";
import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  const handleClick = () => {
    setTimeout(function () {
      console.log("placing order");
    }, 1000);
    setTimeout(function () {
      console.log("order placed");
    }, 2000);
    setTimeout(function () {
      router.push("/product");
    }, 2000);
    

  };
  return (
    <div>
      {" "}
      <h1>Main app's index file</h1>
      <Link href="/blog" legacyBehavior>
        <button>Blog</button>
      </Link>
      <Link href="/product" legacyBehavior>
        <button>product</button>
      </Link>
      <button onClick={handleClick}>place order</button>
      <div id="message"></div>
    </div>
  );
}

export default index;
