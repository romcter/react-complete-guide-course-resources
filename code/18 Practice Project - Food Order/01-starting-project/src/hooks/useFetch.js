import { useEffect, useState } from 'react';

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if(!response.ok) {
    console.error('Failed to send http request');
  }

  return resData;
}

export function useFetch(url, config) {

  const [isFetching, setIsFetching] = useState();
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const data = await sendHttpRequest(url, config);
        setFetchedData(data);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [sendHttpRequest]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error
  }
}

async function fetchMeals() {
  const response = await fetch('http://localhost:3000/meals');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }

  return resData.meals;
}