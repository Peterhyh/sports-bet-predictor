

const HomePage = () => {
    return (
        <div>
            <h1>Sports Bet</h1>
            <div className="user-entry-section">
                <div>
                    <label>Enter Player's Name:</label>
                    <input placeholder="Player's name"></input>
                </div>
                <div>
                    <label>Enter Your Team:</label>
                    <input placeholder="Your team"></input>
                </div>
                <div>
                    <label>Enter Your Opponent Team:</label>
                    <input placeholder="Opponent team"></input>
                </div>
            </div>
        </div>
    );
}

export default HomePage;