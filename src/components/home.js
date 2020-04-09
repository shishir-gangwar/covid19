import React, {useState, useEffect} from 'react';
import axios from 'axios';

import MapExplorer from './mapexplorer';

function Home(props) {
  const [states, setStates] = useState([]);
  const [stateDistrictWiseData, setStateDistrictWiseData] = useState({});
  const [fetched, setFetched] = useState(false);
  const [regionHighlighted] = useState(undefined);

  useEffect(() => {
    if (fetched === false) {
      getStates();
    }
  }, [fetched]);

  const getStates = async () => {
    try {
      const [response, stateDistrictWiseResponse] = await Promise.all([
        axios.get('https://api.covid19india.org/data.json'),
        axios.get('https://api.covid19india.org/state_district_wise.json'),
      ]);
      setStates(response.data.statewise);
      setStateDistrictWiseData(stateDistrictWiseResponse.data);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Home">
      {fetched && (
        <React.Fragment>
          <MapExplorer
            states={states}
            stateDistrictWiseData={stateDistrictWiseData}
            regionHighlighted={regionHighlighted}
          />
        </React.Fragment>
      )}
    </div>
  );
}

export default Home;
