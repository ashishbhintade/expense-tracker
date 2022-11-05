import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { trasnactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {trasnactions.map((trasnactions) => (
          <li>
            {trasnactions.text}
            <span>-$400</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
