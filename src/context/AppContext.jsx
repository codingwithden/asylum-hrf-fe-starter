import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
// import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(); // fake data (testData) is loaded, here we want to replace with the real data
  const [isDataLoading, setIsDataLoading] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint - STEP ONE
    const response = await axios.get('https://asylum-be.onrender.com/fiscalSummary')
    return response.data;
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    const response = await axios.get('https://asylum-be.onrender.com/citizenshipSummary');
    return response.data;
  };

  const updateQuery = async () => { 
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state - STEP TWO
    const fiscalData = await getFiscalData();
    const citizenshipData = await getCitizenshipResults();
    setGraphData({ // STEP THREE: Updating graph data
      ...fiscalData, // grabbing the data
      citizenshipResults: citizenshipData,
    });
    setIsDataLoading(false); // in case it fails to catch
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  useEffect(() => {
    setIsDataLoading(true);
  }, []);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
