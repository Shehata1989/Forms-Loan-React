/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { UseRegContext } from "./Context/RegForm";

import { User } from "lucide-react";

const InputForm = ({ info }) => {
  // const {RegistrationForm} = UseRegContext()
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {info.label}
      </label>
      <div className="relative">
        {info.icon}
        <input
          type={info.type}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
          placeholder={info.placeholder}
          onChange={info.onchange}
        />
      </div>
    </>
  );
};

export default InputForm;
