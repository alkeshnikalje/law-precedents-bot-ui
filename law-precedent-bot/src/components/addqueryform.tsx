import React, { useState } from "react";
import { CrimeCategories, CrimeCategory } from "../App";
type PropTypes = {
  lawCases: CrimeCategories;
  setAnswer: React.Dispatch<
    React.SetStateAction<CrimeCategory | string | null>
  >;
  setLoading: React.Dispatch<React.SetStateAction<boolean | null>>;
};
export default function AddqueryForm(props: PropTypes) {
  const [query, setQuery] = useState("");
  const handleOnsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.setLoading(true);
    for (let key in props.lawCases) {
      if (key.includes(query)) {
        props.setAnswer(props.lawCases[key]);
        props.setLoading(false);
        return;
      }
    }
    props.setLoading(false);
    props.setAnswer("cases not found");
  };
  return (
    <form
      className="flex flex-col rounded  p-6 md:flex-row"
      onSubmit={handleOnsubmit}
    >
      <div className="mb-4 flex-grow md:mr-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="queryInput"
        >
          Enter your query:
        </label>
        <input
          id="queryInput"
          type="text"
          className="w-full rounded border bg-inherit px-3 py-2 text-white focus:outline-none md:w-96"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button
        className="mb-4 mt-7 rounded bg-green-500 px-3 py-1 font-bold text-white md:w-24"
        type="submit"
      >
        Find
      </button>
    </form>
  );
}
