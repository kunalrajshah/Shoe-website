import React from "react";

const ShoeDescPriceInput = (props) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <input
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-start"
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </>
  );
};

export default ShoeDescPriceInput;
