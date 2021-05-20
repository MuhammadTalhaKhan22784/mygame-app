import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  let history = useHistory();
  return (
    <div className="d-flex flex-column w-50">
      <button
        type="button"
        className="btn btn-secondary ms-5"
        onClick={() => {
          history.push("/liberty_preserve");
        }}
      >
        Liberty Preserve
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/my_game");
        }}
      >
        Inventory
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/travel");
        }}
      >
        Travel
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/properties");
        }}
      >
        Properties
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/gang");
        }}
      >
        gang
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/home");
        }}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-success ms-5"
        onClick={() => {
          history.push("/street");
        }}
      >
        Street
      </button>
    </div>
  );
};

export default Home;
