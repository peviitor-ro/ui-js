import React from 'react';
import './search.style.scss';
import magnifyGlass from '../../assets/svgs/magniy_glass_icon.svg';
import location from '../../assets/svgs/location_icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateCountry,
  updateQ,
  updateCounty,
  updatCity
} from '../../state/query.slice';
import { getAllJobs, getTotalRomania } from '../../utils/get-data';
import { updateAllJobs, updateTotalRomania } from '../../state/jobs.slice';
import {
  searchLocation,
  searchMunicipiu,
  removeDuplicates
} from '../../utils/advanced-search';
import { v4 as uuidv4 } from 'uuid';

export const Search = (props) => {
  // Props
  const handleClick = props.handleClick;
  const queries = props.queries;

  // Redux
  const dispatch = useDispatch();
  const q = useSelector((state) => state.query.q);
  const country = useSelector((state) => state.query.country);
  const city = useSelector((state) => state.query.city);
  const county = useSelector((state) => state.query.county);

  // States
  const [data, setData] = React.useState([]);
  const [uniqueResults, setUniqueResults] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState('');

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (queries.county && !props.landing) {
      setSelectedLocation(
        `${queries.city.toLowerCase()}, ${queries.county.toLowerCase()}`
      );
    }
  }, [queries.county, queries.city, props.landing]);

  // Functions
  // Update query search
  const updateQuerySearch = (e) => {
    dispatch(updateQ(e.target.value));
  };

  // Update country search
  const updateCountrySearch = (e) => {
    if (e.target.value) {
      getTotalRomania().then((totalRomania) => {
        dispatch(updateTotalRomania(totalRomania));
      });
    } else {
      getAllJobs().then((totalRomania) => {
        dispatch(updateAllJobs(totalRomania));
      });
    }
    dispatch(updateCountry(e.target.value));
    dispatch(updatCity(''));
    dispatch(updateCounty(''));
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
  };

  // Handle clear X
  const handleClearX = (e) => {
    e.preventDefault();
    dispatch(updateQ(''));
  };

  // Handle click input
  const handleClickInput = (e) => {
    /*
    / get the list of options for the input that was clicked
    */

    // Select the list of ul options
    const dataList = e.target.nextElementSibling;

    // Add event listener to the list of options
    dataList.addEventListener('click', (d) => {
      // Update the value of the input with the selected option
      e.target.value = d.target.getAttribute('data');
      switch (e.target.id) {
        case 'county':
          dispatch(updateCounty(e.target.value));
          dispatch(updatCity(''));
          break;
        default:
          break;
      }
    });
  };

  //ADVANCED SEARCH FUNCTIONS
  //************************ */
  async function getData() {
    try {
      const response = await fetch(`https://orase.peviitor.ro/`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const removeAccents = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const handleLiClick = (e) => {
    const selectedLocationId = e.target.id;
    const selectedLocation = uniqueResults.find(
      (result) => result.id === selectedLocationId
    );
    if (selectedLocation.judet === null && !selectedLocation.bucuresti) {
      // If it's the capital of the county and not part of Bucharest
      dispatch(updateCounty(removeAccents(selectedLocation?.query)));
      dispatch(updatCity(removeAccents(selectedLocation?.query)));
      setSelectedLocation(
        `${selectedLocation.query.toLowerCase()}, ${selectedLocation.query.toLowerCase()}`
      );
      setUniqueResults([]);
      setShow(false);
    } else if (selectedLocation.bucuresti) {
      // If it's one of the 6 sectors of Bucharest
      dispatch(updateCounty(removeAccents(selectedLocation?.parent)));
      dispatch(updatCity(removeAccents(selectedLocation?.query)));
      setSelectedLocation(
        `${selectedLocation.query.toLowerCase()}, ${selectedLocation.parent.toLowerCase()}`
      );
      setUniqueResults([]);
      setShow(false);
    } else {
      dispatch(updateCounty(removeAccents(selectedLocation?.parent)));
      dispatch(updatCity(removeAccents(selectedLocation?.query)));
      setSelectedLocation(
        `${selectedLocation.query.toLowerCase()}, ${selectedLocation.judet.toLowerCase()} (${selectedLocation.parent.toLowerCase()})`
      );
      setUniqueResults([]);
      setShow(false);
    }
  };

  const onChangeInput = (e) => {
    setSelectedLocation(e.target.value);
    // Start the search after at least 3 letters
    if (e.target.value.length >= 3) {
      const searchResult = searchLocation(
        e.target.value.toLowerCase(),
        data.judet
      );
      const searchResultBucuresti = searchMunicipiu(
        e.target.value.toLowerCase(),
        data.municipiu
      );
      // Check if there are any matching results
      if (searchResult || searchResultBucuresti) {
        const uniqueResults = removeDuplicates(searchResult);
        if (searchResultBucuresti) {
          // Assign unique identifier for Bucharest
          searchResultBucuresti.forEach((result) => {
            result.bucuresti = true;
            if (!result.hasOwnProperty('parent')) {
              result.parent = 'BUCUREȘTI';
            }
          });
          uniqueResults.push(...searchResultBucuresti);
        }
        uniqueResults.forEach((result) => {
          result.id = uuidv4();
        });
        setUniqueResults(uniqueResults);
      }
    } else {
      // Display a message when less than 3 letters are entered
    }
    // Clear results when the search input is empty
    if (e.target.value.length < 1) {
      setSelectedLocation('');
      setUniqueResults([]);
    }
  };

  const ref = React.useRef(false);

  const [show, setShow] = React.useState(false);

  document.addEventListener('click', (e) => {
    try {
      if (
        e.target.childNodes[2] === ref.current ||
        e.target.parentNode.childNodes[2] === ref.current
      ) {
        setShow(true);
      } else {
        setShow(false);
      }
    } catch (e) {}
  });

  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="inputs-wrapper">
        <div className="input-container">
          <img src={magnifyGlass} alt="magnify glass icon" />
          <input
            autoFocus
            placeholder="Ce doriți să lucrați?"
            onChange={updateQuerySearch}
            value={q}
          />
          {q && (
            <span className="clear" onClick={handleClearX}>
              <svg
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </span>
          )}
        </div>
        <div className="option-container ">
          {country === 'România' ? (
            <div className="county query">
              <img src={location} alt="location icon" />
              <input
                id="county"
                value={selectedLocation}
                className="searchInp"
                type="text"
                placeholder="Tastează locația"
                autoComplete="off"
                onChange={onChangeInput}
                onClick={handleClickInput}
              />
              <ul
                name="county"
                ref={ref}
                className={show ? 'searchResults' : 'hide searchResults'}
                value={
                  queries.county.toLowerCase()
                    ? queries.county.toLowerCase()
                    : ''
                }
              >
                <li data="">Alege locatia</li>
                {uniqueResults?.map((result, index) => {
                  return (
                    <li key={index} id={result.id} onClick={handleLiClick}>
                      {result?.query.toLowerCase()},{' '}
                      {result.judet
                        ? result.judet.toLowerCase() +
                          ' (' +
                          result.parent.toLowerCase() +
                          ')'
                        : result.bucuresti
                        ? result.parent.toLowerCase()
                        : result.query.toLowerCase()}
                    </li>
                  );
                })}
              </ul>

              <span
                className="clear"
                onClick={() => {
                  dispatch(updateCounty(''));
                  dispatch(updatCity(''));
                  setSelectedLocation('');
                  setUniqueResults([]);
                }}
              >
                <svg
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </svg>
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <button type="submit" className="btn-yellow btn">
        Caută
      </button>
    </form>
  );
};
