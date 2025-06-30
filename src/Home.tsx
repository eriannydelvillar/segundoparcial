import React from "react";

interface HomeProps {
    userName: string;
}

const Home: React.FC<HomeProps> = ({ userName }) => {
    return (
        <div className="home-container">
            <h1>Welcome, {userName}!</h1>
            <p>This is the home page.</p>
        </div>
    );
};

export default Home;