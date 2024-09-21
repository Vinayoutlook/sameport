import { useOktaAuth } from "@okta/okta-react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const { oktaAuth, authState } = useOktaAuth();

    const history = useHistory();
  
    const login = async () => oktaAuth.signInWithRedirect();
    //const logout = async () => oktaAuth.signOut('/');
  
    if(!authState) {
      return <div>Loading...</div>;
    }
  
    if(!authState.isAuthenticated) {
      login();
      return (
        <div className="flex items-center justify-center h-screen">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
        </div>
      );
    }else{
      history.push('/home')
    }
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div>
      </div>
    );
  };
  
  export default Login;
  