const Post = ({ post }) => {
  return (
    <div>
      Post fetched dynamically
      <h2>
        {" "}
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

// export async function getStaticPaths() {
//   // returns array of objects
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await response.json();
//   posts.map((post) => {
//     return {
//       paths: [
//         {
//           params: { postId: `${post.id}` },
//         },
//           {
//             params: { postId: "2" },
//           },
//           {
//             params: { postId: "3" },
//           },
//       ],
//       fallback: false,
//     };
//   });
// } SSG with dynamiv parameters, below code is for dynamically fetching id or dynamic paths and presenting it

export async function getStaticPaths() {
    // called during build time not run time , use for creating array of paths
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
}

// Error: getStaticPaths is required for dynamic SSG pages and is missing for '/post/[postId]'.
// Read more: https://nextjs.org/docs/messages/invalid-getstaticpaths-value

// getStaticPaths fallback: jalse

// 1. The paths returned from getStaticPaths will be rendered to HTML at build time by
// getStaticProps.
// 2. If fallback is set to false, then any paths not returned by getStaticPaths will result in a 404
// page


// getStaticPaths fallback: true

// 1. The paths returned from getStaticPaths will be rendered to HTML at build time by
// getStaticProps.

// 2. The paths that have not been generated at build time will not result in a 404 page. Instead,
// Next.js will serve a “fallback” version of the page on the first request to such a path.

// 3. In the background, Next.js will statically generate the requested path HTML and JSON. This
// includes running getStaticProps.



