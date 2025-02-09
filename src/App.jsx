import React from "react";

const App = () => {
    const navigateToPage = () => {
        window.location.href = "page2.html";
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <img 
                src="https://via.placeholder.com/300" 
                alt="Placeholder Image" 
                className="max-w-80 h-auto"
            />
            <button 
                onClick={navigateToPage} 
                className="mt-5 px-5 py-2 text-lg bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-700"
            >
                Go to Next Page
            </button>
        </div>
    );
};

export default App;