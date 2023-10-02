import { useState } from "react";
import AddqueryForm from "./components/addqueryform";
import Main from "./components/main";
import Loading from "./components/loading";

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <Main>
        <AddqueryForm />
        <Loading />
      </Main>
    </div>
  );
}

export default App;
