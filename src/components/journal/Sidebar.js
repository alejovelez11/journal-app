import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../actions/auth";
import { JournalEntries } from "./JournalEntries";
import { useSelector } from "react-redux";
import { startNewNote } from "../../actions/notes";
export const Sidebar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span>{name}</span>
        </h3>

        <button onClick={handleLogout} className="btn">
          Logout
        </button>
      </div>

      <div onClick={handleAddNew} className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x"></i>
        <p className="mt-5">New entry</p>
      </div>

      <JournalEntries />
    </aside>
  );
};
