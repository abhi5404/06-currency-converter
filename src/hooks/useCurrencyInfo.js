import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`
            );
            const result = await response.json();
            setData(result[currency.toLowerCase()]);
        };

        fetchData();
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
// filepath: c:\Users\ASUS\OneDrive\Desktop\REACT\06-currency-converter\src\hooks\useCurrencyInfo.js