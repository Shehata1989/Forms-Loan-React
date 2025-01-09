/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const PopUp = ({ info, valid, errorMessage }) => {
  const showAlert = () => {
    MySwal.fire({
      icon: valid ? "success" : "error",
      title: valid ? "Success!" : "Oops...",
      text: errorMessage || "Operation successful",
      draggable: true,
    });
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        showAlert();
        info.onClick();
      }}
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
    >
      {info.title}
    </button>
  );
};

export default PopUp;
