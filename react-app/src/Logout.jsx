import { useOktaAuth } from "@okta/okta-react";

const Logout = () => {
    const { oktaAuth, authState } = useOktaAuth();
  
    if(!authState) {
      return <div>Loading...</div>;
    }
  
    if(authState.isAuthenticated) {
      oktaAuth.signOut('/');
    }
  
    return (
      <div className="flex items-center justify-center h-screen">
          <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div></div>
    );
  };
  
  export default Logout;
  