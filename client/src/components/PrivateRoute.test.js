// Cases to test with private route:

// local storage is empty (should redirect to login)

// local storage doesn't have a "token" key (should redirect to login)

// a null value saved to localStorage as "token" (should redirect to login)

// a valid JWT is stored as "token" in localStorage (should load the component)
// In this "happy path" test, assert that:
// 1) PrivateRoute props are passed through to the <Route/>
// 2) any component props are passed through to the Component rendered