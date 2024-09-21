//
// import { Button, Input } from "@mui/material";
// import { useState } from "react";
// import { useHistory } from 'react-router-dom';
// import LoadingScreen from "../../components/loading-screen";
// import { useOktaAuth } from "@okta/okta-react";
//import { fetchTACDataRequested } from '../../store/actions/home';
//
//
// const CustomLogin = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState(false);
//     const [loader, setLoader] = useState(false);
//
//     const { oktaAuth, authState } = useOktaAuth();
//     const history = useHistory();
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoader(true);
//         setError(false);
//
//         try {
//             const transaction = await oktaAuth.signInWithCredentials({ username, password });
//             if (transaction.status === 'SUCCESS') {
//                 oktaAuth.signInWithRedirect({ sessionToken: transaction.sessionToken });
//             } else {
//                 throw new Error('Login failed');
//             }
//         } catch (err) {
//             console.error(err);
//             setError(true);
//         } finally {
//             setLoader(false);
//         }
//     };
//
//     const handleForgotPassword = () => {
//         window.location.href = 'https://portal-ext-sqa.oktapreview.com/signin/forgot-password';
//     };
//
//     if (!authState) {
//         return <div>Loading...</div>;
//     }
//
//     if (authState.isAuthenticated) {
//         history.push('/home');
//         return null; // Redirecting, so return null
//     }
//
//
//
//     return (
//         <div className="w-full h-screen block overflow-hidden">
//             <div className="h-screen bg-white">
//                 <div className="flex text-center h-screen">
//                     <div className="w-full h-screen m-0 p-0 bg-cover bg-left-bottom" style={{
//                         'background-image':'url(/assets/login.png)',
//                     }}>
//                     </div>
//                     <div className="bg-white max-w-[350px] min-w-[350px] flex flex-col justify-center w-full right-0 top-0">
//                         <div className="w-full h-auto m-u">
//                             <img alt="" className="block h-[40px] mb-3 m-auto" src="/assets/logo.jpg" />
//                             <div className="w-full">
//                                 <form className="form-signin mt-0 px-4 m-auto" onSubmit={handleSubmit}>
//                                     <h2 className="form-signin-heading mb-3 font-medium text-[22px] tracking-normal">
//                                         Sign In
//                                     </h2>
//                                     {error && (
//                                         <p className="px-2 py-4 text-[14px] bg-[#f8d7da] border-1 border-solid border-[#f55c6cb] font-normal my-2 rounded tracking-[.05em]">
//                                             Incorrect username or password
//                                         </p>
//                                     )}
//                                     <Input
//                                         className="text-cyan-500 w-full px-4 my-2"
//                                         onChange={(e) => setUsername(e.target.value)}
//                                         placeholder="Username"
//                                         type="text"
//                                         value={username}
//                                     />
//                                     <Input
//                                         className="text-cyan-500 w-full px-4 my-2"
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         placeholder="Password"
//                                         type="password"
//                                         value={password}
//                                     />
//                                     <Button
//                                         className="!bg-red-500 !text-white !font-semibold !py-2 !px-6"
//                                         type="submit"
//                                     >
//                                         Sign In
//                                     </Button>
//                                     <p
//                                         className="mt-2 text-center text-blue-500 cursor-pointer"
//                                         onClick={handleForgotPassword}
//                                     >
//                                         Forgot Password?
//                                     </p>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <LoadingScreen loader={loader} />
//         </div>
//     );
// };
//
// export default CustomLogin;
//


import { Button, Input } from "@mui/material";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import LoadingScreen from "../../components/loading-screen";
import { useOktaAuth } from "@okta/okta-react";
import axios from 'axios'; // Import axios for API requests

const CustomLogin = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [loader, setLoader] = useState(false);
   const [attempts, setAttempts] = useState(0); // Track number of login attempts

   const { oktaAuth, authState } = useOktaAuth();
   const history = useHistory();

   // Function to check user status with backend API
   const checkUserStatus = async (email) => {
       try {
            console.log(email);
           const response = await axios.get(`/items/${encodeURIComponent(email)}`);
           console.log("calling api.....")
           const { tnc_page, tnc_value } = response.data;
           if (response.status === 200 || response.status === 300) {
               // Redirect to /tiles if TNC value is true
               if (tnc_value) {
                   history.push('/tiles');
               } else {
                   // Redirect to /dashboard with TNC content if TNC value is false
                   history.push({
                       pathname: '/dashboard',
                       state: { tncPage: tnc_page, tncValue: tnc_value } // Pass TNC content through state
                   });
               }
           } else {
               handleErrorResponse(response);
           }
       } catch (error) {
           console.error('Error checking user status:', error);
           setError('An error occurred while checking user status.');
       } finally {
           setLoader(false);
       }
   };

   const handleErrorResponse = (response) => {
       switch (response.status) {
           case 400:
               console.error('Client error:', response.data);
               setError('Client error occurred.');
               break;
           case 403:
               console.error('Forbidden access:', response.data);
               setError('Forbidden access.');
               break;
           case 404:
               console.error('Not found:', response.data);
               setError('Resource not found.');
               break;
           case 500:
               console.error('Server error:', response.data);
               setError('Server error occurred.');
               break;
           default:
               console.error('Unexpected status code:', response.status);
               console.log(response);
               console.log(response.status);
               setError('Unexpected error occurred.');
               break;
       }
   };

   const handleSubmit = async (e) => {
       e.preventDefault();
       setLoader(true);
       setError(''); // Clear any previous errors

       try {
           const transaction = await oktaAuth.signInWithCredentials({ username, password });
           if (transaction.status === 'SUCCESS') {
               const { sessionToken } = transaction;
               await oktaAuth.signInWithRedirect({ sessionToken });

               // Get user info after successful login
               const accessToken = oktaAuth.tokenManager.get('accessToken');
               if (accessToken) {
                   const user = await oktaAuth.getUser();
                   const email = user.email;
                   console.log("calling api for fetching data.")
                   await checkUserStatus(email); // Check user status after fetching email
               } else {
                   throw new Error('Access token is not available');
               }
           } else {
               throw new Error('Login failed');
           }
       } catch (err) {
           console.error(err);
           setAttempts(prevAttempts => {
               const newAttempts = prevAttempts + 1;
               if (newAttempts >= 3) {
                   setError('Your account is locked. Please contact your administrator.');
               } else if (err.message === 'Login failed') {
                   setError('Incorrect username or password.');
               }
               return newAttempts;
           });
       } finally {
           setLoader(false);
       }
   };

   useEffect(() => {
       if (authState?.isAuthenticated) {
           oktaAuth.getUser().then(user => {
               const email = user.email;
               console.log(email);
               checkUserStatus(email); // Check user status after fetching email
           }).catch(err => {
               console.error('Error fetching user details:', err);
               setError('Error fetching user details.');
           });
       }
   }, [authState?.isAuthenticated, oktaAuth]);

   if (!authState) {
       return <div>Loading...</div>;
   }

   const handleForgotPassword = () => {
       window.location.href = 'https://portal-ext-sqa.oktapreview.com/signin/forgot-password';
   };

   if (authState.isAuthenticated) {
       return null; // Redirecting, so return null
   }

   return (
       <div className="w-full h-screen block overflow-hidden">
           <div className="h-screen bg-white">
               <div className="flex text-center h-screen">
                   <div className="w-full h-screen m-0 p-0 bg-cover bg-left-bottom" style={{
                       'background-image': 'url(/assets/login.png)',
                   }}>
                   </div>
                   <div className="bg-white max-w-[350px] min-w-[350px] flex flex-col justify-center w-full right-0 top-0">
                       <div className="w-full h-auto m-u">
                           <img alt="" className="block h-[40px] mb-3 m-auto" src="/assets/logo.jpg" />
                           <div className="w-full">
                               <form className="form-signin mt-0 px-4 m-auto" onSubmit={handleSubmit}>
                                   <h2 className="form-signin-heading mb-3 font-medium text-[22px] tracking-normal">
                                       Sign In
                                   </h2>
                                   {error && (
                                       <p className="px-2 py-4 text-[14px] bg-[#f8d7da] border-1 border-solid border-[#f55c6cb] font-normal my-2 rounded tracking-[.05em]">
                                           {error}
                                       </p>
                                   )}
                                   <Input
                                       className="text-cyan-500 w-full px-4 my-2"
                                       onChange={(e) => setUsername(e.target.value)}
                                       placeholder="Username"
                                       type="text"
                                       value={username}
                                   />
                                   <Input
                                       className="text-cyan-500 w-full px-4 my-2"
                                       onChange={(e) => setPassword(e.target.value)}
                                       placeholder="Password"
                                       type="password"
                                       value={password}
                                   />
                                   <Button
                                       className="!bg-red-500 !text-white !font-semibold !py-2 !px-6"
                                       type="submit"
                                   >
                                       Sign In
                                   </Button>
                                   <p
                                           className="mt-2 text-center text-blue-500 cursor-pointer"
                                           onClick={handleForgotPassword}
                                       >
                                           Forgot Password?
                                       </p>

                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <LoadingScreen loader={loader} />
       </div>
   );
};

export default CustomLogin;
