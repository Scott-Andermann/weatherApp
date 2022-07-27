import React, { useEffect, useState } from 'react';
import './CatFacts.css'

function CatFacts() {
    const catEndpoint = 'https://catfact.ninja/fact?max_length=140';

    const [data, setData] = useState(null);
    const [update, setUpdate] = useState(null);

    const handleClick = () => {
        // used to run useEffect loop to get a new Cat fact
        setUpdate(Math.random());
    }

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(catEndpoint);
            const json = await response.json();
            setData(json.fact);
        } catch (error) {
            console.log('error', error);
        }
    };
      fetchData();  
    }, [update])

    return (
        <div className='catFacts'>
            <h1>Cat fact of the day:</h1>
            <p>{data}</p>
            <button onClick={handleClick}>Click for new fact</button>
        </div>
    )
}

export default CatFacts;