import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => (
  <nav
    class="navbar navbar-expand-lg navbar-transparent"
    style={{ backgroundColor: "#4D96FF" }}
  >
    <div class="container-fluid mx-3 text-white">
      <Link class="navbar-brand" to="/">
        <img
          src="https://i.ibb.co/bPTrFG6/VEELogo.png"
          width="50"
          height="50"
          class="logo d-inline-block align-top"
          alt="logo"
        />
      </Link>
      <button
        class="btn navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="white"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link
              style={currentTab(history, "/")}
              class="nav-link text-white"
              to="/"
            >
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link
              style={currentTab(history, "/products")}
              class="nav-link text-white"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link
              style={currentTab(history, "/cart")}
              className="nav-link text-white"
              to="/cart"
            >
              Cart
            </Link>
          </li>
          {isAutheticated() && isAutheticated().user.role === 1 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link text-white"
                to="/admin/dashboard"
              >
                A. Dashboard
              </Link>
            </li>
          )}
          {isAutheticated() && isAutheticated().user.role === 0 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/user/dashboard")}
                className="nav-link text-white"
                to="/user/dashboard"
              >
                User Dashboard
              </Link>
            </li>
          )}
        </ul>
        <ul class="navbar-nav ml-auto">
          {!isAutheticated() && (
            <Fragment>
              <li
                className="nav-item"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Link
                  style={currentTab(history, "/signup")}
                  className="nav-link btn text-white btn btn-dark mx-2"
                  to="/signup"
                >
                  Signup
                </Link>

                <Link
                  style={currentTab(history, "/signin")}
                  className="nav-link btn text-white btn btn-dark mx-2"
                  to="/signin"
                >
                  Sign In
                </Link>
              </li>
            </Fragment>
          )}
          {isAutheticated() && (
            <li className="nav-item">
              <span
                className="nav-link btn text-white btn btn-danger mx-2"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </span>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>
);
  
  export default withRouter(Menu);
  // <nav class="navbar navbar-expand-lg navbar-light shadow">
  //   <div class="container d-flex justify-content-between align-items-center">
  //     <Link
  //       style={currentTab(history, "/")}
  //       className="navbar-brand text-dark logo h1 align-self-center"
  //       to="/"
  //     >
  //       Vijay Electronics
  //     </Link>

  //     <button
  //       class="navbar-toggler border-0"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#templatemo_main_nav"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span class="navbar-toggler-icon"></span>
  //     </button>

  //     <div
  //       class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
  //       id="templatemo_main_nav"
  //     >
  //       <div class="flex-fill">
  //         <ul class="nav navbar-nav d-flex justify-content-evenly mx-lg-auto">
            // <li class="nav-item">
            //   <Link
            //     style={currentTab(history, "/cart")}
            //     className="nav-link"
            //     to="/cart"
            //   >
            //     Cart
            //   </Link>
            // </li>
            // <li class="nav-item">
            //   <Link
            //     style={currentTab(history, "/about")}
            //     className="nav-link"
            //     to="/about"
            //   >
            //     About
            //   </Link>
            // </li>
            // {isAutheticated() && isAutheticated().user.role === 1 && (
            //   <li className="nav-item">
            //     <Link
            //       style={currentTab(history, "/admin/dashboard")}
            //       className="nav-link"
            //       to="/admin/dashboard"
            //     >
            //       A. Dashboard
            //     </Link>
            //   </li>
            // )}
            // {isAutheticated() && isAutheticated().user.role === 0 && (
            //   <li className="nav-item">
            //     <Link
            //       style={currentTab(history, "/user/dashboard")}
            //       className="nav-link"
            //       to="/user/dashboard"
            //     >
            //       U. Dashboard
            //     </Link>
            //   </li>
            // )}

            // {!isAutheticated() && (
            //   <Fragment>
            //     <li className="nav-item" style={{ display: "flex" }}>
            //       <button className="nav-item btn btn-primary">
            //         <Link
            //           style={currentTab(history, "/signup")}
            //           className="nav-link"
            //           to="/signup"
            //         >
            //           Signup
            //         </Link>
            //       </button>
            //       <button className="nav-item btn">
            //         <Link
            //           style={currentTab(history, "/signin")}
            //           className="nav-link"
            //           to="/signin"
            //         >
            //           Sign In
            //         </Link>
            //       </button>
            //     </li>
            //   </Fragment>
            // )}
  //         </ul>
  //         {isAutheticated() && (
  //           <li className="nav-item">
  //             <span
  //               className="nav-link text-warning"
  //               onClick={() => {
  //                 signout(() => {
  //                   history.push("/");
  //                 });
  //               }}
  //             >
  //               Signout
  //             </span>
  //           </li>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // </nav>
  
  // <div>
  //   <ul className="nav nav-tabs bg-light">
  //     <li className="nav-item">
  //       <Link style={currentTab(history, "/")} className="nav-link" to="/">
  //         Home
  //       </Link>
  //     </li>
  //     <li className="nav-item">
  // <Link
  //   style={currentTab(history, "/cart")}
  //   className="nav-link"
        //   to="/cart"
        // >
        //   Cart
        // </Link>
  //     </li>
      // {isAutheticated() && isAutheticated().user.role === 0 && (
      //   <li className="nav-item">
      //     <Link
      //       style={currentTab(history, "/user/dashboard")}
      //       className="nav-link"
      //       to="/user/dashboard"
      //     >
      //       U. Dashboard
      //     </Link>
      //   </li>
      // )}
      // {isAutheticated() && isAutheticated().user.role === 1 && (
      //   <li className="nav-item">
      //     <Link
      //       style={currentTab(history, "/admin/dashboard")}
      //       className="nav-link"
      //       to="/admin/dashboard"
      //     >
      //       A. Dashboard
      //     </Link>
      //   </li>
      // )}
      // {!isAutheticated() && (
      //   <Fragment>
      //     <li className="nav-item">
      //       <Link
      //         style={currentTab(history, "/signup")}
      //         className="nav-link"
      //         to="/signup"
      //       >
      //         Signup
      //       </Link>
      //     </li>
      //     <li className="nav-item">
      //       <Link
      //         style={currentTab(history, "/signin")}
      //         className="nav-link"
      //         to="/signin"
      //       >
      //         Sign In
      //       </Link>
      //     </li>
      //   </Fragment>
      // )}
      // {isAutheticated() && (
      //   <li className="nav-item">
      //     <span
      //       className="nav-link text-warning"
      //       onClick={() => {
      //         signout(() => {
      //           history.push("/");
      //         });
      //       }}
      //     >
      //       Signout
      //     </span>
      //   </li>
      // )}
  //   </ul>
  // </div>
