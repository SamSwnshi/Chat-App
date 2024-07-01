// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaSearchengin } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle border-transparent  text-white">
        <FaSearchengin className="text-lg" />
      </button>
    </form>
  );
};

export default SearchInput;
