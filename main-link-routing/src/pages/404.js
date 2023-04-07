function Error() {
  return <div>page is not there !!!!!!</div>;
}

export default Error;

 // Prod Server - An optimized build is created once and you deploy that build. You don't make code
// changes on the go once it is deployed
// Dev Server - We should be able to make changes in our code and we want that code to immediately
// reflect in the browser

// For production builds, a page will be pre-rendered once when we run the build command
// In development mode, the page is pre-rendered for every request you make
