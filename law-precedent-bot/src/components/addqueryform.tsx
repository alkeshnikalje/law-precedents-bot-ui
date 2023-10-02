export default function AddqueryForm() {
  return (
    <form className="mb-20 flex flex-col rounded  p-6 md:flex-row">
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
          className="w-full rounded border bg-inherit px-3 py-2 text-white focus:outline-none  md:w-96"
        />
      </div>
      <button
        className="mb-6 mt-7 rounded bg-green-500 px-4 py-2 font-bold text-white md:w-24"
        type="submit"
      >
        Find
      </button>
    </form>
  );
}
