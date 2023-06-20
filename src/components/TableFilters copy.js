import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setListDisplay } from "../slice/list.slice";
import { setStableState } from "../slice/stable.slice";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavList] = useState(false);
  const dispatch = useDispatch();
  const listDisplay = useSelector((state) => state.listDisplay);
  const stableState = useSelector((state) => state.stable);

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, showFavList]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={stableState}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {stableState.showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={
            listDisplay.showList ? "no-list-btn" : "no-list-btn active"
          }
          onClick={() => setShowFavList(!showFavList)}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={listDisplay.showList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavList(!showFavList)}
        >
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon-star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;
