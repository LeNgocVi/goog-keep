import React, { useState } from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import ListIcon from "@material-ui/icons/List";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AppsIcon from "@material-ui/icons/Apps";
import MenuIcon from "@material-ui/icons/Menu";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
// import { filtersSlice } from "../../redux/filterSlice";
import { useDispatch } from "react-redux";

export default function Header({ handleClickMenuOpen, grid, setGrid }) {
  const dispatch = useDispatch();
  const [serchText, setSearchText] = useState("");
  const handleSearchTextChange = (e) => {
    // console.log("handleSearchTextChange", { e });
    // dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };
  const menuClick = () => {
    handleClickMenuOpen();
  };
  const handleGrid = () => {
    setGrid("col-md-12");
  };

  const handleGridToggle = () => {
    setGrid("col-md-3");
  };
  let navigate = useNavigate();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate(`/signup`);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <header>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-2 col-sm-6 col-5">
            <div className="logo">
              <MenuIcon className="mobileMenu" onClick={menuClick} />
              <a href="/" className="text-decoration-none">
                <img
                  alt="Keep"
                  src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                  style={{
                    height: "40px",
                    width: "40px",
                    marginTop: "3px",
                    marginLeft: "4px",
                  }}
                />
                <span className="Keep">Keep</span>
              </a>
            </div>
          </div>
          <div
            className="col-md-8 searchInput col-sm-8 col-7"
            style={{ minHeight: "46px" }}
          >
            <span style={{ paddingLeft: "5px" }}>
              <SearchIcon />
            </span>

            <input
              type="text"
              placeholder="Tìm kiếm"
              // name="searchNote"
              value={serchText}
              onChange={handleSearchTextChange}
              style={{ minHeight: "46px", paddingLeft: "55px" }}
            />
          </div>
          <div className="col-md-2 d-none-sm">
            <ul className="headerIcons headerIcons list-style-none d-inline-block m-0 p-0">
              <li className="list-style-none d-inline-block ml-3">
                <a href="#">
                  <RefreshIcon />
                </a>
              </li>
              <li className="list-style-none d-inline-block ml-3">
                {grid == "col-md-3" ? (
                  <a href="#" className="listIcon" onClick={handleGrid}>
                    <ListIcon />
                  </a>
                ) : (
                  ""
                )}

                {grid == "col-md-12" ? (
                  <a href="#" className="listIcon" onClick={handleGridToggle}>
                    <AppsIcon />
                  </a>
                ) : (
                  ""
                )}
              </li>
              <li className="list-style-none d-inline-block ml-3">
                <a href="#">
                  <AccountCircleIcon />
                </a>
              </li>
              <li className="list-style-none d-inline-block ml-3">
                <a onClick={handleSignOut}>
                  <AppsIcon />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="col-md-2 text-right d-none-sm">
            <ul className="headerIcons headerIcons list-style-none d-inline-block m-0 p-0"></ul>
          </div> */}
        </div>
      </div>
    </header>
  );
}
