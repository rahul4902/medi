import { useState } from "react";
import Location from "../icons/Location";
import Search from "../icons/Search";
import { MoviesData, renderMovieTitle } from "../movies-data";
import Autocomplete from "react-autocomplete";
const SearchForm = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="search-form">
        <form action="#">
          <div className="row justify-content-center">
            <div className="col-md-9 col-sm-9 col-12">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-12  mb-4">
                  <div className="input-group auto-complete-section">
                    <select
                      className="form-select"
                      id="inputGroupSelect04"
                      aria-label="Example select with button addon"
                      name="type"
                    >
                      <option selected value="">
                        All
                      </option>
                      <option value="test">Tests</option>
                      <option value="package">Package</option>
                    </select>
                    {/* <input
                      type="text"
                      className="no-focus-outline"
                      placeholder="Search here..."
                    /> */}
                    <Autocomplete
                      className="sf"
                      value={search}
                      items={MoviesData()}
                      getItemValue={(item) => item.title}
                      shouldItemRender={renderMovieTitle}
                      renderItem={(item, isHighlighted) => (
                        <div
                          className={`item ${
                            isHighlighted ? "selected-item" : ""
                          }`}
                          key={item.id} // Assuming each movie item has a unique identifier like 'id'
                        >
                          {item.title}
                        </div>
                      )}
                      onChange={(event, val) => setSearch(val)}
                      onSelect={(val) => setSearch(val)}
                      placeholder="Search Here..."
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 col-6">
                  <div className="location-container">
                    <select
                      name="location"
                      className="select-input no-focus-outline"
                    >
                      <option selected>Location</option>
                    </select>
                    <span className="select-icon">
                      <Location height="1.5rem" />
                    </span>
                  </div>
                </div>
                <div className="col-md-2 col-sm-2 col-lg-2 col-6">
                  <button className="search-btn">
                    <div className="icon-container">
                      <Search height="18px" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
