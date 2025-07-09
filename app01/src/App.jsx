import React from "react";
import SecaoDiferenciais from "./components/sections/SecaoDiferenciais/SecaoDiferenciais";
import SecaoLugares from "./components/sections/SecaoLugares.jsx/SecaoLugares";
import SecaoFeedbacks from "./components/sections/SecaoFeedbacks/SecaoFeedbacks";

export default function App() {
  return (
    <>
      <SecaoDiferenciais />
      <SecaoLugares />
      <SecaoFeedbacks />
    </>
  )
}