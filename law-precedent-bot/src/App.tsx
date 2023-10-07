import { useState } from "react";
import AddqueryForm from "./components/addqueryform";
import Main from "./components/main";
import Loading from "./components/loading";
import Result from "./components/result";

interface Case {
  name: string;
  id: number;
}

export interface CrimeCategory {
  penalty: string;
  cases: Case[];
}

export interface CrimeCategories {
  [key: string]: CrimeCategory;
}

const cases: CrimeCategories = {
  murder: {
    penalty: "life imprisonment",
    cases: [
      {
        name: "John Smith Murder",
        id: 1,
      },
      {
        name: "Sarah Johnson Homicide",
        id: 2,
      },
    ],
  },
  "copyright infringement": {
    penalty: "5 years imprisonment",
    cases: [
      {
        name: "Tech Company A vs. Piracy Inc.",
        id: 3,
      },
      {
        name: "Artist B Copyright Violation",
        id: 4,
      },
    ],
  },
};

function App() {
  const [lawCases, setLawCases] = useState(cases);
  const [answer, setAnswer] = useState<CrimeCategory | string | null>(null);
  const [loading, setLoading] = useState<null | boolean>(null);
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-900">
      <Main>
        <AddqueryForm
          lawCases={lawCases}
          setAnswer={setAnswer}
          setLoading={setLoading}
        />
        {loading && <Loading />}
        {!loading && <Result answer={answer} />}
      </Main>
    </div>
  );
}

export default App;
