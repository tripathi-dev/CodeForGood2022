import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div
      style={{
        padding: "20px",
        marginTop: "100px",
        marginLeft: "20px",
        backgroundColor: "#c5c6d0",
        borderRadius: "20px",
      }}
    >
      <h2>Case Study</h2>
      <div class="input-group w-75 mx-auto mt-5">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile02"
          style={{ backgroundColor: "	#9897a9", color: "white" }}
        />
      </div>

      <h2 class="mt-5">User Dashboard</h2>
      <div class="input-group w-75 mx-auto mt-5">
        <textarea
          class="form-control"
          aria-label="With textarea"
          style={{ height: "20rem", backgroundColor: "#9897a9" }}
        ></textarea>
      </div>
      <Link to="/admin-login">
        <button
          type="button"
          class="btn btn-info mt-4"
          style={{ paddingLeft: "100px", paddingRight: "100px" }}
        >
          Return
        </button>
      </Link>
    </div>
  );
}

export default AdminDashboard;
