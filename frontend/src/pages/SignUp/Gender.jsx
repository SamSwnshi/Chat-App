// eslint-disable-next-line no-unused-vars
import React from "react";

const Gender = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-2 ">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-200">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-200">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gender;
