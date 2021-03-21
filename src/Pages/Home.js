import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  let history = useHistory();
  return (
    <div>
      <button
        type="button"
        class="btn btn-secondary"
        onClick={() => {
          history.push("/liberty_preserve");
        }}
      >
        Secondary
      </button>
      <button
        type="button"
        class="btn btn-success"
        onClick={() => {
          history.push("/my_game");
        }}
      >
        Success
      </button>
    </div>
  );
};

export default Home;
