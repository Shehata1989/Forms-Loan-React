/* eslint-disable react/prop-types */


const InputFormSelect = ({info}) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {info.label}
      </label>
      <select
        className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
        value={info.value}
        onChange={info.onchange}
      >
        <option value="">Select a role</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
      </select>
    </>
  );
};

export default InputFormSelect;
