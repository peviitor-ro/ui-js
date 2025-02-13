// svg
import logo from "../assets/svg/logo.svg";
import { useEffect, useState, useContext, useCallback, useRef } from "react";
import TagsContext from "../context/TagsContext";
import { useNavigate, useLocation } from "react-router-dom";
import removeIcon from "../assets/svg/remove.svg";
import { ReactComponent as FlagMagnifyGlass } from "../assets/svg/ro_flag_magnifying_glass.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/close_icon.svg";
import { ReactComponent as MapPinIcon } from "../assets/svg/map_pin.svg";
import { orase } from "../utils/getCityName";
// components
import FiltreGrup from "./FiltreGrup";
// redux
import { useSelector, useDispatch } from "react-redux";
// functions to update the jobSlice state.
import {
  setJobs,
  clearJobs,
  setTotal,
  setNumberOfCompany,
  setLoading
} from "../reducers/jobsSlice";
// utils fetch functions
import { createSearchString } from "../utils/createSearchString";
// functions to fetch the data
import {
  getData,
  getNumberOfCompany,
  getJobSuggestion
} from "../utils/fetchData";
import { findParamInURL, updateUrlParams } from "../utils/urlManipulation";
import Button from "./Button";
import getCityMatch from "../utils/getCityMatch";

const FilterTags = ({ tags, removeTag }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {Object.entries(tags).map(([key, currentArray]) =>
        currentArray.map((item) => (
          <Button
            key={item}
            buttonType="addFilters"
            onClick={() => removeTag(key, item)}
          >
            {item}
            <img src={removeIcon} alt="x" className="cursor-pointer ml-2" />
          </Button>
        ))
      )}
    </div>
  );
};

const Search = () => {
  const {
    q,
    city,
    remote,
    county,
    company,
    removeTag,
    deletAll,
    handleRemoveAllFilters,
    contextSetQ,
    contextSetCity,
    fields
  } = useContext(TagsContext);
  // fields
  const [text, setText] = useState("");
  // dispatch
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // jobs
  const total = useSelector((state) => state.jobs.total);
  const loading = useSelector((state) => state.jobs.loading);
  const nrJoburi =
    total >= 20 ? "de rezultate" : total === 1 ? "rezultat" : "rezultate";

  const [isLocation, setLocation] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const handleClearLocation = () => setLocation("");
  const handleFocus = (input) => setFocusedInput(input);
  // const handleBlur = () => setFocusedInput(null); // Optional, depending on whether you want to hide the dropdown when blurred
  const [filteredCities, setFilteredCities] = useState(orase);
  const dropdownRef = useRef(null);

  // state for job suggestion drop-down
  const [jobSuggestions, setJobSuggestions] = useState([]);
  // useEffect to set the search input field as the user search query

  useEffect(() => {
    if (location.pathname === "/rezultate") {
      setText(q + "");
    }
  }, [location.pathname, q]);

  useEffect(() => {
    if (!location.pathname.includes("/rezultate")) {
      return;
    }
    //Keeping the state in sync with the URL param
    const qParam = findParamInURL("q");
    const cityParam = findParamInURL("city");
    contextSetQ(qParam || [""]);
    contextSetCity(cityParam || [""]);
  }, [contextSetQ, contextSetCity, location.pathname, location.search]);
  // useEffect to load the number of company and jobs
  useEffect(() => {
    if (!location.pathname.includes("/rezultate")) {
      return;
    }

    const numbersInfo = async () => {
      const companyNumber = await getNumberOfCompany();
      dispatch(setNumberOfCompany(companyNumber));
    };
    numbersInfo();
  }, [dispatch]);
  // Send text from input into state q.
  const handleUpdateQ = async (e) => {
    e.preventDefault();

    if (location.pathname !== "/rezultate") {
      await navigate("/rezultate");
    }
    contextSetQ([text]);
    contextSetCity([isLocation]);
  };

  // fetch data when states change values
  // this make the fetch automated when checkboxes are checked or unchecked
  useEffect(() => {
    // Function to fetch data and update state
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        // Create the search string
        const searchString = createSearchString(
          q,
          city,
          county,
          company,
          remote,
          1
        );

        // Fetch the data
        const { jobs, total } = await getData(searchString);

        // Update the Redux state
        dispatch(clearJobs());
        dispatch(setJobs(jobs));
        dispatch(setTotal(total));
        updateUrlParams({ page: 1 });
      } catch (error) {
        // Handle any errors that occur during fetch
        console.error("Failed to fetch data:", error);
      } finally {
        // Ensure loading is set to false after data is fetched or an error occurs
        dispatch(setLoading(false));
      }
    };

    // Only fetch data if any of the query parameters are set
    if (
      q.length !== 0 ||
      city.length !== 0 ||
      remote.length !== 0 ||
      company.length !== 0
    ) {
      fetchData();
    } else {
      // Clear jobs and total if no query parameters are set
      dispatch(clearJobs());
      dispatch(setTotal(0));
    }
  }, [dispatch, q, city, remote, company, county, removeTag]);
  //new

  // remove text from input on X button.
  function handleCloseIcon() {
    setText("");
    updateUrlParams({ q: null });
    contextSetQ([""]);
  }

  // Function to filter cities based on input
  const filterCities = useCallback((input) => {
    const filtered = getCityMatch(input);
    setFilteredCities(filtered);
  }, []); // You might want to add dependencies here if orase changes

  // Update filtered cities when location input changes
  useEffect(() => {
    filterCities(isLocation);
  }, [isLocation, filterCities]); // Include filterCities in the dependency array

  // Close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFocusedInput(null); // Close the dropdown
      }
    };

    if (focusedInput) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [focusedInput]);

  // fetch job suggestion
  // Updated fetch logic with your provided async function
  const fetchData = async (text) => {
    try {
      const response = await getJobSuggestion(text); // Assuming getJobSuggestion is defined elsewhere
      setJobSuggestions(response.suggestions); // Update suggestions state with fetched data
      console.log(response.suggestions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Aligning the h2 with the first card
  const [h2Width, setH2Width] = useState("auto");
  const calculateH2Width = () => {
    const screenWidth = window.innerWidth;
    const gap = 28;
    let cardWidth;
    const breakpoint = 1024;

    cardWidth = screenWidth > breakpoint ? 384 : 300;

    screenWidth >= 740 && screenWidth <= 767
      ? setH2Width(300)
      : setH2Width(
        (Math.floor((screenWidth - gap * 4 - cardWidth) / (cardWidth + gap)) +
          1) *
        cardWidth +
        (Math.floor(
          (screenWidth - gap * 4 - cardWidth) / (cardWidth + gap)
        ) +
          1 -
          1) *
        gap
      );
  };

  useEffect(() => {
    calculateH2Width();
    window.addEventListener("resize", calculateH2Width);
    return () => {
      window.removeEventListener("resize", calculateH2Width);
    };
  }, []);

  // Debouncing the fetch call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        fetchData(text); // Call the updated fetch function
      } else {
        setJobSuggestions([]); // Reset suggestions if text is empty
      }
    }, 300); // Adjust debounce delay as needed

    return () => clearTimeout(timer); // Cleanup timeout if user continues typing
  }, [text]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
      className={`${location.pathname === "/rezultate" ? "md:flex-row lg:flex-row" : ""
        }`}
    >
      <div
        className={`flex items-center justify-beetween flex-col mt-5 gap-2 lg:gap-0 lg:flex-row
          ${location.pathname === "/"
            ? "w-[100%] mt-0 md:flex-col sm:items-center sm:flex-col sm:items-center"
            : ""
          }
          ${location.pathname === "/rezultate"
            ? "md:justify-center  w-[80%] md:w-[80%] lg:justify-between 2xl:w-[80%]"
            : ""
          }`}
      >
        {location.pathname === "/rezultate" && (
          <a href="/" className="logo lg:mr-3" style={{ minWidth: "54px" }}>
            <img src={logo} alt="peviitor" />
          </a>
        )}
        <form
          onSubmit={handleUpdateQ}
          className={`flex flex-col items-center relative  lg:justify-between lg:mt-0 lg:gap-0 lg:flex-row  max-w-full
                ${location.pathname === "/" ? "gap-2 mt-4 md:gap-2" : ""}
                ${location.pathname === "/rezultate"
              ? "w-full gap-1 sm:justify-center sm:w-auto md:justify-center md:items-center md:w-[90%]"
              : ""
            }`}
        >
          <div
            className={`flex items-center justify-between rounded-full w-[300px] md:w-[480px] lg:w-[340px] 
                ${location.pathname === "/" ? "relative xl:w-[485px] " : ""}
                ${location.pathname === "/rezultate"
                ? "sm:flex-col sm:w-[400px] md:w-[580px] 2xl:w-[90%] lg:w-[90%]"
                : ""
              }`}
          >
            {/* Job Title Input */}
            <div
              className={`flex items-center relative w-full border border-[#89969C] bg-white rounded-full h-[54px]
    ${location.pathname === "/rezultate" ? "w-full" : ""}
    ${location.pathname !== "/"
                  ? "lg:border-r-2 border-[#89969C] " // Border pe dreapta pe orice pagină, nu doar pe "/"
                  : "lg:border-r-0 lg:rounded-tr-none lg:rounded-br-none divider" // Adaugă divider doar pe paginile care nu sunt "/"
                } 
    ${focusedInput === "jobTitle" &&
                  text.length >= 3 &&
                  location.pathname === "/"
                  ? "lg:border-b-[#eeeeee] lg:rounded-bl-none"
                  : ""
                }`}
            >
              <FlagMagnifyGlass className="ml-5" />
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={() => handleFocus("jobTitle")}
                placeholder="Caută un loc de muncă"
                className="w-full py-3 px-2 xl:pl-2 bg-transparent outline-none border-none focus:outline-none focus:ring-0"
              />
              {text && (
                <CloseIcon
                  className="w-4 h-4 mr-6 fill-slate-500 cursor-pointer"
                  onClick={handleCloseIcon}
                />
              )}
            </div>

            {/* Dropdown for Job Title */}
            {location.pathname === "/" &&
              focusedInput === "jobTitle" &&
              text.length >= 3 && (
                <ul className="hidden lg:block lg:absolute lg:left-0 lg:w-full lg:border lg:border-t-0 border-[#89969C] lg:rounded-3xl lg:rounded-t-none p-0 lg:mt-4 lg:max-h-[150px] lg:overflow-y-scroll custom-scrollbar lg:bottom-0 lg:transform lg:translate-y-full lg:box-border">
                  {jobSuggestions &&
                    jobSuggestions.length > 0 &&
                    jobSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className={`px-12 py-2 cursor-pointer ${index % 2 === 0 ? "bg-custom-gray" : "bg-white"
                          } hover:bg-gray-200`}
                        onMouseDown={() => {
                          setText(suggestion.term);
                          setFocusedInput(null);
                        }}
                      >
                        {suggestion.term}
                      </li>
                    ))}
                </ul>
              )}

            {/* Dropdown for Job Title */}
            {location.pathname === "/" &&
              focusedInput === "jobTitle" &&
              text.length >= 3 && (
                <ul className="hidden lg:block lg:absolute lg:left-0 lg:w-full lg:border lg:border-t-0 border-[#89969C] lg:rounded-3xl lg:rounded-t-none p-0 lg:mt-4 lg:max-h-[150px] lg:overflow-y-scroll custom-scrollbar lg:bottom-0 lg:transform lg:translate-y-full lg:box-border">
                  { }
                  {jobSuggestions &&
                    jobSuggestions.length > 0 &&
                    jobSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className={`px-12 py-2 cursor-pointer ${index % 2 === 0 ? "bg-custom-gray" : "bg-white"
                          } hover:bg-gray-200`}
                        onMouseDown={() => {
                          setText(suggestion.term);
                          setFocusedInput(null);
                        }}
                      >
                        {suggestion.term}
                      </li>
                    ))}
                </ul>
              )}
          </div>

          {/* Add Location Input */}
          <div ref={dropdownRef}>
            {" "}
            {/* Add ref to the container */}
            {location.pathname === "/" && (
              <div className="flex items-center justify-between w-[300px] mt-1 relative md:w-[480px] lg:w-[241px] lg:mt-0">
                <div
                  style={{ height: "54px" }}
                  className={`flex items-center  relative w-full border border-[#89969C] bg-white rounded-full  lg:border-l-0 lg:rounded-tl-none lg:rounded-bl-none
                      ${focusedInput === "location"
                      ? "lg:border-b-[#eeeeee] lg:rounded-br-none"
                      : ""
                    }`}
                >
                  <MapPinIcon className="w-6 h-6 text-gray-500 ml-5" />
                  <input
                    type="text"
                    value={isLocation}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => handleFocus("location")}
                    placeholder="Adaugă o locație"
                    className="w-full py-3 px-4 pl-2 bg-transparent outline-none border-none focus:outline-none focus:ring-0"
                  />
                  {isLocation && (
                    <CloseIcon
                      className="w-4 h-4 mr-6 fill-slate-500 cursor-pointer"
                      onClick={handleClearLocation}
                    />
                  )}
                </div>

                {/* Add Location Input dropdown*/}
                {focusedInput === "location" && (
                  <ul
                    className="hidden lg:block lg:absolute lg:left-0 lg:w-full lg:border lg:border-t-0 lg:border-[#89969C] 
                    lg:rounded-3xl lg:rounded-t-none  lg:mt-4 lg:max-h-[150px] lg:overflow-y-scroll custom-scrollbar lg:bottom-0 lg:transform lg:translate-y-full lg:box-border"
                  >
                    {filteredCities.map((suggestion, index) => (
                      <li
                        key={index}
                        className={`px-12 py-2 cursor-pointer ${index % 2 === 0 ? "bg-custom-gray" : "bg-white"
                          } hover:bg-gray-200`}
                        onClick={() => {
                          setLocation(suggestion);
                          setFocusedInput(null); // Close dropdown on selection
                        }}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <Button type="submit" buttonType="search">
            Caută
          </Button>
        </form>
      </div>

      {/* new component */}
      {location.pathname === "/rezultate" && (
        <div>
          {location.pathname === "/rezultate" && <FiltreGrup />}
          {loading ? (
            <div className="h-[20px] w-[50%] md:w-[16%] mx-auto my-8 md:mx-0 bg-gray-300 animate-pulse rounded-md"></div>
          ) : (
            total > 0 && (
              <h2
                className="text-start text-text_grey_darker my-8 text-lg"
                style={{ width: h2Width, margin: "32px auto" }}
              >
                {total} {nrJoburi}
              </h2>
            )
          )}

          {!deletAll && total > 0 && (
            <div
              className="pb-9 flex gap-2 flex-wrap"
              style={{ width: h2Width, margin: "0 auto" }}
            >
              <FilterTags tags={fields} removeTag={removeTag} />
              <div className="flex gap-2 ml-4">
                <Button
                  buttonType="deleteFilters"
                  onClick={handleRemoveAllFilters}
                >
                  Șterge filtre
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Search;
