import React from 'react'

const Quantitysize = (props) => {
  return (
    <div>
    <label className="block text-xs font-medium text-gray-700">{props.label}</label>
    <input
      className="mt-1 block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      type="number"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
  )
}

export default Quantitysize;