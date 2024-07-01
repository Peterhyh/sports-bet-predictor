import UserEntrySection from "../components/UserEntrySection";

const HomePage = () => {
    return (
        <div>
            <h1>Sports Bet</h1>
            <div className="user-entry-section">
                <UserEntrySection label="Enter Player's Name:" placeholder="Player's name" />
                <UserEntrySection label="Enter Your Team:" placeholder="Your team" />
                <UserEntrySection label="Enter Your Opponent Team:" placeholder="Opponent team" />
            </div>
        </div>
    );
}

export default HomePage;