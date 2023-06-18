import React from "react";

const Admin = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "80vw",
        height: "100vh",
        margin: "auto",
      }}
    >
      <div>
        <h1
          style={{ textAlign: "center", fontSize: "50px", fontWeight: "bold" }}
        >
          Products
        </h1>
        <div>
          <table class="border-collapse border border-slate-400 ...">
            <thead>
              <tr>
                <th class="border border-slate-300 ...">State</th>
                <th class="border border-slate-300 ...">City</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-slate-300 ...">Indiana</td>
                <td class="border border-slate-300 ...">Indianapolis</td>
              </tr>
              <tr>
                <td class="border border-slate-300 ...">Ohio</td>
                <td class="border border-slate-300 ...">Columbus</td>
              </tr>
              <tr>
                <td class="border border-slate-300 ...">Michigan</td>
                <td class="border border-slate-300 ...">Detroit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
