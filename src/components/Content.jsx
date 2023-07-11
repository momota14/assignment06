import { useState } from "react";

function Content() {
  const [value, setVal] = useState("");
  const [displayVal, setDisplayVal] = useState("");

  const handleSubmit = (e) => {
    if (value !== "") {
      e.preventDefault();
      setDisplayVal(value);
      e.target.reset();
    }
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmit} className="mx-auto w-full sm:w-[32rem] shadow-md rounded-lg">
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
            <textarea
              rows={4}
              className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 focus:outline-none"
              placeholder="Write here..."
              required=""
              defaultValue={""}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg   hover:bg-blue-800"
            >
              Display text
            </button>
          </div>
        </div>
      </form>

      {displayVal !== "" && (
        <div className="mx-auto w-full sm:w-[32rem]">
          <div className="w-full p-3 rounded-lg bg-white shadow-lg break-words ">
            <div className="font-semibold mb-2">Your Text : </div>
            <div className="text-gray-600">{displayVal}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
