import React from "react";
import { useSelector } from "react-redux";

const LoadingScreen = () => {
    const loadingStatus = useSelector(({ loading }) => loading);
    const filteredKeys = [];

    for (const inKey in loadingStatus){
        if(loadingStatus[inKey] && loadingStatus[inKey] === 'requested'){
            filteredKeys.push(loadingStatus[inKey]);
        }
    }

    if(filteredKeys.length){
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-500 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-red-700 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
            </div>
        )
    }

    return null;
}

export default LoadingScreen;