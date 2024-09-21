import { faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const Header = ({ selected }) => {

    const history = useHistory();
    //const dispatch = useDispatch();

    const onLogout = () => {
        history.push('/logout');
    }

    const onClicked = () => {
        //dispatch(clearSelectedCohort());
        history.push('/home');
    }


    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col px-4 py-4 md:flex-row">
                <div className="w-1/2 text-center text-white md:w-2/12">
                    <img
                        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                        src="/assets/logo.jpg"
                        alt="Next.js Logo"
                        width={180}
                        height={37}
                        priority={1}
                        />
                </div>
                <div className="w-1/2 text-left md:w-3/12 align-baseline">
                   
                </div>
                <div className="w-full text-right md:w-7/12">
                    <div className="flex flex-col">
                        <div className="flex flex-col px-4 py-2 md:flex-row">
                            <div className="w-[95%]" />
                            
                            <div className="w-[5%]">
                                <div className="absolute right-0 flex flex-cols">
                                    <div title="Logout" className="relative pr-4 cursor-pointer" onClick={onLogout}>
                                        
                                    <FontAwesomeIcon
                                        className="text-red-700 rounded-full cursor-pointer"
                                        icon={faSignOut}
                                        size="2x"
                                    />

                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;