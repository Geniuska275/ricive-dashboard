import React from "react";
import Nav from "./nav";
import Main from "./Main";

function Dashboard() {
  return (
    <div className="min-h-[90vh] w-full grid grid-cols-12">
      <Nav />
      <div className="grid col-span-9 ">
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
