'use client';

import { useState } from 'react';

export const Counter = () => {
  const [numState, setNumState] = useState(0);

  const addNumber = () => {
    setNumState(numState + 1);
  };
  const deleteNumber = () => {
    setNumState(numState - 1);
  };
  const Reset = () => {
    setNumState(0);
  };

  return (

    <div className="h-screen w-full bg-primary-500 flex items-center justify-center">
      <div>
        <div className="w-96 p-6 shadow-lg shadow-primary-800 bg-secondary-100 rounded-md ">
          <h3 className="p-14 flex justify-center items-center">Try this Counter</h3>
          <p className=" font-bold text-[120px] text-primary-700 p-10 flex justify-center items-center">{numState}</p>

          <div className="flex flex-row gap-10 justify-center items-center p-10">
            <button onClick={addNumber} className="  shadow-lg shadow-primary-200 border-2 rounded-lg p-4 text-primary-500 text-[20px] hover: pointer  shadow-slate-900"> + </button>
            <button onClick={deleteNumber} className="   shadow-lg shadow-primary-200 border-2 rounded-lg p-4 text-primary-500 text-[20px]   hover: pointer shadow-slate-900"> - </button>
          </div>
          <div className="flex justify-center items-center">
            <button onClick={Reset} className=" flex justify-center items-center rounded-md bg-primary-600 p-4 text-primary-50">Reset</button>
          </div>
        </div>
      </div>
    </div>

  );
};
