import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Welcome to blog's Home page</h1>
      <Link href="/" legacyBehavior>
        <button>Home</button>
      </Link>
    </div>
  );
}

export default Home;
