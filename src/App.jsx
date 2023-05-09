import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logut from "./Logut";
import Profile from "./Profile";

function App() {
  const { isAuthenticated ,isLoading} = useAuth0();
  if(isLoading)return <h1>Loading....</h1>
  return (
    <>
      <Profile />
      {isAuthenticated ? <Logut /> : <Login />}
    </>
  );
}

export default App;
