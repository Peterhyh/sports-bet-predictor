import UserEntrySection from "../components/UserEntrySection";

const HomePage = () => {
    return (
        <div>
            <h1>Sports Bets</h1>
            <div className="user-entry-section">
                <h2>Player Info</h2>
                <UserEntrySection label="Enter Date:" placeholder="MM/DD/YYYY" />
                <UserEntrySection label="Enter Player's First Name:" placeholder="First name" />
                <UserEntrySection label="Enter Player's Last Name:" placeholder="Last name" />
                <UserEntrySection label="Enter Your Team:" placeholder="Your team" />
                <UserEntrySection label="Enter Your Opponent Team:" placeholder="Opponent team" />
                <UserEntrySection label="Sport:" placeholder="NBA/MLB/PGA/etc." />
            </div>
            <div className="user-entry-section">
                <h2>Betting Info</h2>
                <UserEntrySection label="Play:" placeholder="HITS, RUNS, RBI, K, etc." />
                <UserEntrySection label="More/Less:" placeholder="more/less" />
                <UserEntrySection label="Betting Number:" placeholder="#" />
                <UserEntrySection label="Ending Result Number:" placeholder="#" />
                <UserEntrySection label="Platform:" placeholder="Sleeper/PrizePicks/etc." />
            </div>
            <button>Submit</button>
        </div>
    );
}

export default HomePage;