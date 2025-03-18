/* eslint-disable react/prop-types */


const InputFormCheck = ({info}) => {
  return (
    <>
      {/* Checkbox */}
      <div className="flex items-center">
        <input
        
          type={info.type}
          id="agreement"
          className="h-4 w-4 accent-indigo-500 hover:accent-indigo-600 text-indigo-600 dark:text-indigo-500 focus:ring-indigo-500 border-gray-300 dark:border-gray-600 rounded transition-all duration-300"
          checked={info.checked}
          onChange={info.onchange}
        />
        <label
          htmlFor="agreement"
          className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
        >
          {info.label}
        </label>
      </div>
    </>
  );
};

export default InputFormCheck;
