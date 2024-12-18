import React, {useState, useEffect} from 'react'
import Card from "./Card.jsx";

const apiEndPoint = `https://kyhnet23-assignment.azurewebsites.net/api/news`;
const Grid = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndPoint);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Content fetching data', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="grid-container">
                <h1>Our News</h1>
                <div id="news-grid">
                    {data.map((item) => (
                        <Card key={item.id} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Grid
