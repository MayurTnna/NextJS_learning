import React from "react";

function Userlist({ user }) {
  return (
    <>
      <div>Userlist</div>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </>
  );
}

export default Userlist;

// getStaticProps runs only on the server side
//  The function will never run client-side
// The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the
//  browser. getStaticProps is allowed only in a page and cannot be run from a regular component file
//  It is used only for pre-rendering and not client-side data fetching

