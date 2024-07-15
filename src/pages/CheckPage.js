import { useState } from 'react';




const CheckPage = () => {
    const [name, setName] = useState('');
    const [result, setResult] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult("Here are the results:")
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Player's Name: </label>
                <input
                    type="text"
                    placeholder='Last, First'
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>
            </form>
            {result && <p>{result}</p>}
        </div>
    );
}

export default CheckPage;