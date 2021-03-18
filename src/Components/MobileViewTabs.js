import React from "react";

const MobileViewTabs = () => {
  return (
    <React.Fragment>
      <div className="main_tabs">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-lista-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-lista"
              type="button"
              role="tab"
              aria-controls="pills-lista"
              aria-selected="true"
            >
              List A
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-listb-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-listb"
              type="button"
              role="tab"
              aria-controls="pills-listb"
              aria-selected="false"
            >
              List B
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-lista"
            role="tabpanel"
            aria-labelledby="pills-lista-tab"
          >
            <div className="users_main">
              <div className="users_list_box"></div>
              <div className="users_details_box"></div>
              <div className="dump_btn_box">
                <button type="button" class="mt-2 btn btn-secondary">
                  Secondary
                </button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-listb"
            role="tabpanel"
            aria-labelledby="pills-listb-tab"
          >
            ...
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileViewTabs;
