//import { Button, Checkbox } from "@mui/material";
//import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { acceptTermsData, updateTACData } from "../../store/actions/home";
//import { useHistory } from "react-router-dom";
//import { useOktaAuth } from "@okta/okta-react";
//
//const Dashboard = () => {
//
//
//    const [selected, setSelected] = useState(false);
//    const [accepted, setAccepted] = useState(null);
//    const dispatch = useDispatch()
//    const history = useHistory()
//
//    const [tilesArr, setTiles] = useState(tiles);
//    const { oktaAuth, authState } = useOktaAuth();
//
//    useEffect(()=> {
//        setTiles(tiles);
//    }, [tiles])
//
//    useEffect(()=>{
//        setAccepted(terms);
//    }, [terms])
//
//    const onClick = (e) => {
//        setSelected(!selected);
//    }
//
//    const onAccept = (flag) => {
//        if(selected === false && flag === true){
//            alert('Please accept the terms and conditions to continue.');
//            return;
//        }
//        if(flag)
//            history.push('/tiles');
//
//        setAccepted(flag);
//        dispatch(updateTACData(null));
//        //dispatch(acceptTermsData(flag))
//    }
//
//    const onSignIn = () => {
//        //history.push('/')
//        if(authState.isAuthenticated) {
//            oktaAuth.signOut('/');
//        }
//    }
//
//    if(accepted === false) return ( <div className="flex flex-grow w-full h-dvh p-4 bg-gray-50 px-4 overflow-y-auto text-center">
//                <div className="w-full">
//                    <div className="w-full font-semibold">You are not authorized to access this resource. If you think you have received this message in error, please contact us</div>
//                    <div className="w-full text-center mt-8">Access this portal is only available to authorized users.</div>
//                    <div className="text-center mt-4"><Button className="!bg-blue-500 !text-white !capitalize !font-semibold" onClick={onSignIn}>SignIn</Button></div>
//                </div>
//            </div>)
//
//    return (
//        <>
//            <div className="flex flex-grow w-full h-dvh p-4 bg-gray-50 px-4 overflow-y-auto">{accepted === null && <div className="container">
//                    <div className="pb-12">
//                        <h4 className="pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl text-center">GUARDANT HEALTH, INC.</h4>
//                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl text-center">DATA VISUALIZATION SERVICES TERMS AND CONDITIONS </h4>
//                        <p className="pb-5 text-lg font-normal">
//                        Last Updated: 11/7/2023
//                        </p>
//                        <p className="pb-5 text-md font-medium">
//                        THESE TERMS AND CONDITIONS (the “Agreement”) GOVERN YOUR ACCESS TO AND USE OF THE GUARDANT HEALTH, INC. (“Guardant”, “we”, “us”, or “our”) DATA VISUALIZATION SERVICES VIA THE GUARDANT HEALTH CBIOPORTAL INSTANCE (the “Services”). BY SIGNING THESE TERMS OR ACCESSING OR USING THE SERVICES, YOU, ON BEHALF OF YOURSELF AND/OR THE ENTITY YOU REPRESENT (the “Entity” as indicated in the signature block), (hereinafter “you” or “your”) AS APPLICABLE, ACKNOWLEDGE AND AGREE THAT:
//                        </p>
//                        <ul className="pb-5 px-8 text-md font-medium list-decimal">
//                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">YOU HAVE READ AND UNDERSTAND ALL OF THE TERMS AND CONDITIONS BELOW;</li>
//                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS BELOW;</li>
//                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">THE TERMS AND CONDITIONS BELOW ARE THE LEGAL EQUIVALENT OF A SIGNED, WRITTEN CONTRACT BETWEEN YOU AND GUARDANT; AND</li>
//                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">IF ACCESSING THE SERVICES ON BEHALF OF AN ENTITY, YOU HAVE FULL AUTHORITY TO BIND THE ENTITY TO ALL OF THE TERMS AND CONDITIONS BELOW.</li>
//                        </ul>
//                        <p className="pb-5 text-md font-medium">
//                        IF YOU DO NOT WISH TO BE OR CANNOT BE BOUND BY ALL OF THESE TERMS AND CONDITIONS, INCLUDING, WITHOUT LIMITATION, THE PRECEDING ACKNOWLEDGEMENT, THEN YOU MAY NOT ACCESS OR USE THE SERVICES.
//                        </p>
//                        <p className="pb-5 text-md font-medium">
//                        Guardant reserves the right to change the terms of this Agreement or the Services at any time, and such changes shall become effective thirty (30) days after receipt of the updated Agreement by Entity. If you do not agree with the changes, please stop using the Services and contact Guardant to terminate access to the Services.  You are bound by the most recent Agreement, so it is Your/Entity’s obligation to ensure that You have read, understood and agree to the most recent Agreement made available to Entity.
//                        </p>
//                        <ul className="px-4 list-decimal">
//                            <li className="text-md pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Privacy</li>
//                            <p className="pb-5 text-md font-medium">In order to provide the Services, Guardant must process Personal Information (any information that relates to you, identifies you personally, or could be used to identify you) and Protected Health Information (“PHI”) (as defined by the Health Insurance Portability and Accountability Act of 1996 (“HIPAA”)). We do so in accordance with applicable privacy laws, including the General Data Protection Regulation of the European Union (Regulation (EU) 2016/679) (hereinafter “GDPR”) and HIPAA. Our Privacy Policy  (<a className="text-blue-500 hover:underline" href="https://guardanthealth.com/contact/privacy-policy/" target="_blank" rel="noreferrer">https://guardanthealth.com/contact/privacy-policy/</a>) describes how we process this information. Be sure to read it to understand these matters.</p>
//
//                            <li className="text-md pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Grant of Rights</li>
//                            <p className="pb-5 text-md font-medium">Subject to your full compliance with the terms and conditions set forth in this Agreement, Guardant grants to you a non-exclusive, personal, non-transferable, limited right to access and use the Services and any patient data you access through use of the Services (“Data”) in accordance with this Agreement. You are in control of your access to Data and you cannot share your access with others except as expressly provided by this Agreement. You obtain no rights to the Services except for those rights that are expressly granted herein.</p>
//                            <p className="pb-5 text-md font-medium">
//                            As a condition of this Agreement, when accessing and using the Services, you must:
//                            </p>
//                            <ul className="px-8 list-[lower-roman]">
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not use the Services or the Data for any purpose that is unlawful under applicable federal, state, local, or international law, or prohibited by this Agreement;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not attempt to undermine the security or integrity of Guardant’s computing systems or networks or, where the Services are hosted by a third party, that third party’s computing systems and networks;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not use, or misuse, the Services in any way which may impair the functionality of the Services, or other systems used to deliver the Services or impair the ability of any other user to use the Services;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not use the Services in a malicious, fraudulent or unlawful manner or to cause harm or damage to any person or entity;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not attempt to gain unauthorized access to any materials other than those to which you have been given express permission to access or to the computer system on which the Services are hosted;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not make the Services available, in whole or in part, to any other person, entity or business other than as expressly permitted herein;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not transmit any material that violates any law, infringes on the rights of any third party or contains defamatory, libelous, abusive, obscene or otherwise objectionable material (as determined by us in our sole discretion) or viruses or other malware which may harm the operation of the Services or anyone else’s computer;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not attempt to modify, copy, adapt, reproduce, disassemble, decompile or reverse engineer the Services, in whole or in part, or any computer programs used to deliver the Services;</li>
//                                <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Not modify, combine, integrate, render interoperable, or otherwise access for purposes of automating data conversion or transfer, the Services with any other service or software not provided or approved by us.</li>
//                            </ul>
//
//                            <p className="py-5 text-md font-medium">
//                            You will assume all liability for any use or disclosure of the Data, as set forth in further detail below.
//                            </p>
//                            <li className="text-md pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Access to the Services </li>
//
//                            <p className="pb-5 text-md font-medium">The Services are made available to Authorized Users. The term “Authorized Users” means those individuals who are employees, volunteers, interns, trainees, and other persons whose conduct, in the performance of work for Entity, whether or not paid by the Entity, and who Entity has identified and authorized to use the Services on their behalf. Authorized Users may include: (i) physicians and health care providers working at/for the Entity who order Guardant testing services; and (ii) other individuals working at/for the Entity who require access in accordance with their role at the Entity.</p>
//                            <p className="pb-5 text-md font-medium">Notwithstanding anything contained herein, you acknowledge that your access to the Services may be terminated by us at any time, for any reason or no reason at all, with or without notice.</p>
//
//                            <li className="text-md pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">Your Obligations </li>
//
//
//                            <p className="pb-5 text-md font-medium">You must only use the Services for your own lawful internal business purposes, in accordance with this Agreement and any notice sent by or posted by Guardant regarding this Agreement. </p>
//                            <p className="pb-5 text-md font-medium">You acknowledge and agree that Data includes patient health records as maintained by Guardant with respect to a patient for whom you are involved through either treatment, payment or healthcare operations. You agree that you will not access Data for any patient for whom you do not have such a relationship. Since the Data will include PHI, Guardant is providing access for you to use the Data only for purposes allowed under HIPAA. Use of the Data, including without limitation your research purposes, is at your own risk and you agree to comply with all applicable laws, rules and regulations related to your use of the Data.</p>
//                            <p className="pb-5 text-md font-medium">You are responsible for maintaining the confidentiality of all Personal Information, and PHI that you access via the Services in accordance with federal, state, and local requirements. You will maintain appropriate privacy and security with regard to all personnel, systems, and administrative processes used by you or your Authorized Users to transmit, store and process PHI through the use of the Services. You acknowledge that Entity is a Covered Entity, as such term is defined by HIPAA. You represent that you will abide by all applicable HIPAA and GDPR obligations with respect to use of the Services and acknowledge that Guardant is not responsible for your HIPAA and GDPR compliance.</p>
//
//                            <li className=" list-none text-md pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">4.1 Your Authorized Users </li>
//
//
//                            <p className="pb-5 text-md font-medium">You may permit your Authorized Users to use the Services on your behalf, subject to the terms of this Agreement. In such event, you will:</p>
//
//                        </ul>
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//                    </div>
//
//
//                    <div className="pb-5">
//                        <Checkbox onClick={onClick}></Checkbox><span className="pt-4">I accept the Terms of Service</span>
//                    </div>
//                    <div className="pb-5">
//                        <Button color="success" className="!bg-green-500 !text-white !mr-12 !font-semibold" onClick={()=>{onAccept(true)}}>Accept</Button>
//                        <Button color="error" className="!bg-red-500 !text-white !font-semibold" onClick={()=>{onAccept(false)}}>Decline</Button>
//                    </div>
//                </div>}
//            </div>
//        </>
//    )
//}
//
//export default Dashboard;


import { Button, Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import axios from 'axios'; // Import axios for API requests

const Dashboard = () => {
    const [selected, setSelected] = useState(false);
    const [accepted, setAccepted] = useState(null);
    const history = useHistory();
    const location = useLocation();

    const { oktaAuth, authState } = useOktaAuth();

    // Extract TNC content and TNC value from location state
    const tncPage = location.state?.tncPage || "";
    const initialTncValue = location.state?.tncValue;

    const onClick = (e) => {
        setSelected(e.target.checked);
    }

    const onAccept = async (flag) => {
        if (!selected && flag) {
            alert('Please accept the terms and conditions to continue.');
            return;
        }

        try {
            const user = await oktaAuth.getUser();
            const email = user.email;

            // Call the API to update TNC value
            await axios.put('/items', {
                email: email,
                tnc_value: flag
            });

            // Redirect to /tiles after successful update
            if (flag) {
                history.push('/tiles');
            }

            setAccepted(flag); // Set accepted to true or false based on user action
        } catch (error) {
            console.error('Error updating TNC value:', error);
        }
    }

    const onSignIn = () => {
        if (authState.isAuthenticated) {
            oktaAuth.signOut('/');
        }
    }

    if (accepted === false) {
        return (
            <div className="flex flex-grow w-full h-dvh p-4 bg-gray-50 px-4 overflow-y-auto text-center">
                <div className="w-full">
                    <div className="w-full font-semibold">You are not authorized to access this resource. If you think you have received this message in error, please contact us</div>
                    <div className="w-full text-center mt-8">Access to this portal is only available to authorized users.</div>
                    <div className="text-center mt-4">
                        <Button className="!bg-blue-500 !text-white !capitalize !font-semibold" onClick={onSignIn}>Sign In</Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-grow w-full h-dvh p-4 bg-gray-50 px-4 overflow-y-auto">
            {accepted === null && (
                <div className="container">
                    <div className="pb-12">
                        <h4 className="pb-1 text-xl font-bold text-black dark:text-white sm:text-2xl text-center">GUARDANT HEALTH, INC.</h4>
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl text-center">DATA VISUALIZATION SERVICES TERMS AND CONDITIONS</h4>
                        <p className="pb-5 text-lg font-normal">Last Updated: 11/7/2023</p>
                        <div className="pb-5 text-md font-medium">
                            {tncPage || 'Loading terms and conditions...'}
                        </div>
                    </div>

                    <div className="pb-5">
                        <Checkbox checked={selected} onChange={onClick} />
                        <span className="pt-4">I accept the Terms of Service</span>
                    </div>
                    <div className="pb-5">
                        <Button color="success" className="!bg-green-500 !text-white !mr-12 !font-semibold" onClick={() => onAccept(true)}>Accept</Button>
                        <Button color="error" className="!bg-red-500 !text-white !font-semibold" onClick={() => onAccept(false)}>Decline</Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
