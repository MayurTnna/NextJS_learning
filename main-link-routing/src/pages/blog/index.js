import Link from "next/link";

function Blog() {
  return (
    <div>
      Bloghu
      <Link href="/product" legacyBehavior>
        <button>product</button>
      </Link>
      <Link href="/" legacyBehavior>
        <button>home</button>
      </Link>
    </div>
  );
}

export default Blog;
