import React from 'react';

const Output = (props) => {
  return (
    <div className="p-8">
      {props.inputsData.map((item) => (
        <div key={item.id} className="mb-4 border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">{item.shoeName}</h2>
          <p className="text-gray-600 mb-2">{item.description}</p>
          <p className="text-indigo-600 font-semibold">${item.price}</p>
          <div className="mt-4">
            <button
              className={`mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.L === 0 && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={item.quantities.L === 0}
            >
              Buy Large ({item.quantities.L} available)
            </button>
            <button
              className={`mr-2 bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.M === 0 && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={item.quantities.M === 0}
            >
              Buy Medium ({item.quantities.M} available)
            </button>
            <button
              className={`bg-indigo-600 text-white px-4 py-2 rounded-lg focus:outline-none ${
                item.quantities.S === 0 && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={item.quantities.S === 0}
            >
              Buy Small ({item.quantities.S} available)
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Output;
