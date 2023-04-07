import Link from "next/link";

function index() {
  return (
    <div>
      <h1>NextJS static generation with data</h1>
      <Link href="/userlist" legacyBehavior>
        <button>user</button>
      </Link>
      <Link href="/post">
        <button>Post fetching dynamically with id</button>
      </Link>
    </div>
  );
}

export default index;
