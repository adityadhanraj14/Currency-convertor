import { useState, useEffect } from 'react';

function useCurrencyInfo() {
    const [data, setData] = useState({});
    const api = "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b9d3fb694e8b4326bb60045286318093";

    useEffect(() => {
        fetch(api)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
                // console.log(res.rates); 
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return data;
}

export default useCurrencyInfo;
