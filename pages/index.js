import React from "react";

import Main from "../components/Main";

import Nav from "../components/nav";

export default function Homepage() {
  return (
    <div className="min-h-[90vh] w-full grid grid-cols-12">
      <Nav />
      <div className="grid col-span-9 ">
        <Main />
      </div>
    </div>
  );
}
