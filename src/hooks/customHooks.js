
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/4a2ac2e8504d2dfdb16dd49c/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res); 
        setData(res.conversion_rates);
      })
      .catch((error) => console.error('Error fetching data:', error)); 
  }, [currency]);

  console.log(data); 
  return data;
}

export default useCurrencyInfo;

