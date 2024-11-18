import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="w-full py-2">
      <form className="flex gap-1" onSubmit={handleFormSubmit}>
        <input
          onChange={handleChange}
          className="w-full px-4 py-2 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          value={term}
          placeholder="Search..."
        />
        <button className="w-1/2 p-2 px-4 text-sm text-white rounded-md bg-stone-900">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
