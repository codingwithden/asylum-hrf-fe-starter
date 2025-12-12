import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => { // react component
  const navigate = useNavigate(); // navigation 
  const { downloadCSV } = useDownloadData(); // ready to go function for downloading
  
  const handleReadMore = () => {
    window.open('https://humanrightsfirst.org', '_blank'); // "read more" button
  }

  const scrollToTop = () => { 
    window.scrollTo({ top: 0, behavior: 'smooth'}); // fixed smoothness of scrolling with built in approach
  }

  // below is returning the contents of images of graphs, etc.
return (
  <div className="flex-c w-[100vw] secondary-c">

    {/* <section className="flex flex-col items-center text-center mt-10 px-5"> 
      <h1 className="text-4xl font-bold">
        Asylum Office Grant Rate Tracker
      </h1>
      <p className="text-sm text-black mt-4">
        The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers and the public an interactive tool to explore USCIS data on Asylum Office decisions
      </p>
    </section> */}

    <section className="w-full flex justify-center mt-12 px-5">
      <div className="grid grid-cols-3 gap-8 max-w-6xl">

        <div className="flex flex-col items-center text-center">
          <img src={barGraph} alt="Bar chart" className="w-full max-w-[400px]" />
          <p className="text-sm mt-4">
            Search Grant Rates By Office
          </p>
        </div>
        
        <div className="flex flex-col items-center text-center">
          <img src={pieChart} alt="Pie chart" className="w-full max-w-[180px]" /> 
          <p className="text-sm mt-4">
            Search Grant Rates By Nationality
          </p>
            <div className="flex gap-3 mt-4">
              <button className="bg-gray-400 text-white text-xs hover:bg-dark-grey hover:text-black transition-colors duration-200 px-4 py-2">
                View the Data
              </button>
              <button
              className="bg-gray-400 text-white text-xs hover:bg-dark-grey hover:text-black transition-colors duration-200 px-4 py-2"
              onClick={downloadCSV}>
              Download the Data
              </button>
            </div>
          </div>
        <div className="flex flex-col items-center text-center">
          <img src={lineGraph} alt="Line graph" className="w-full max-w-[300px]" />
          <p className="text-sm mt-4">
            Search Grant Rates Over Time
          </p>
        </div>
      </div>
    </section>
      <section className="w-full flex justify-center mt-20 px-5">
        <div className="grid grid-cols-2 gap-12 max-w-6xl items-center">
          <img src={paperStack} alt="Documents" className="w-full rounded-lg" />
          <p className="text-sm leading-relaxed">
            Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
          </p>
        </div>
      </section>

    <section className="w-full text-center mt-24 px-5">
      <h2 className="text-2xl font-semibold">
        Systemic Disparity Insights
      </h2>

      <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto mt-16">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">36%</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">5%</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">6x Lower</h3>
          <p className="text-sm leading-relaxed max-w-xs">
            Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
          </p>
        </div>
      </div>

      <button
        className="bg-gray-500 text-white text-sm px-6 py-2 mt-16 hover:bg-dark-grey hover:text-black transition-colors duration-200"
        onClick={handleReadMore}>
        Read More
      </button>

      <div className="mt-6">
        <button
          className="text-sm pb-10 pt-8"
          onClick={scrollToTop}>
          Back To Top ^
        </button>
      </div>
      </section>
      </div>
);
}
