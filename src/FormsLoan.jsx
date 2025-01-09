/* eslint-disable react-hooks/exhaustive-deps */
import { User, Phone } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import InputForm from "./InputForm";
import InputFormSelect from "./InputFormSelect";
import { RegFormProvider } from "./Context/RegForm";
import InputFormCheck from "./InputFormCheck";
import PopUp from "./PopUp";

const FormsLoan = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("theme");
    const isDark =
      theme === "dark" ||
      (theme === null &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);
    return isDark;
  });

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    phoneNumber: "",
    role: "",
    conditions: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const validateForm = useCallback(() => {
    if (!formData.fullName) return "Full Name is required";
    if (!formData.username) return "User Name is required";
    if (!formData.phoneNumber) return "Phone Number is required";
    if (
      formData.phoneNumber.length < 10 ||
      formData.phoneNumber.length > 12
    )
      return "Phone Number must be between 10 and 12 characters";
    if (isNaN(formData.phoneNumber)) return "Phone Number must be numbers only";
    if (!formData.role) return "Role is required";
    if (!formData.conditions) return "You must agree to the terms and conditions";

    return "";
  }, [formData]);

  useEffect(() => {
    const error = validateForm();
    setErrorMessage(error);
  }, [formData, validateForm]);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    const error = validateForm();
    setErrorMessage(error);

    if (!error) {
      console.log("Form submitted successfully:", formData);
      // يمكن هنا إضافة أي إجراء إضافي عند نجاح النموذج
    }
  };

  return (
    <RegFormProvider value={{ formData }}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
            Registration Form
          </h1>

          {/* زر التبديل بين الوضعين */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="inline-block text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline transition duration-300"
            >
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          <form className="space-y-6">
            <InputForm
              info={{
                label: "Full Name",
                value: formData.fullName,
                icon: (
                  <User className="h-5 w-5 text-gray-400 dark:text-gray-500 absolute top-3 left-3" />
                ),
                type: "text",
                placeholder: "Enter Your Full Name",
                onchange: (e) =>
                  handleFieldChange("fullName", e.target.value),
              }}
            />
            <InputForm
              info={{
                label: "User Name",
                value: formData.username,
                icon: (
                  <User className="h-5 w-5 text-gray-400 dark:text-gray-500 absolute top-3 left-3" />
                ),
                type: "text",
                placeholder: "Enter Your User Name",
                onchange: (e) =>
                  handleFieldChange("username", e.target.value),
              }}
            />
            <InputForm
              info={{
                label: "Phone Number",
                value: formData.phoneNumber,
                icon: (
                  <Phone className="h-5 w-5 text-gray-400 dark:text-gray-500 absolute top-3 left-3" />
                ),
                type: "tel",
                placeholder: "Enter Your Phone Number",
                onchange: (e) =>
                  handleFieldChange("phoneNumber", e.target.value),
              }}
            />
            <InputFormSelect
              info={{
                label: "Role",
                value: formData.role,
                onchange: (e) =>
                  handleFieldChange("role", e.target.value),
              }}
            />
            <InputFormCheck
              info={{
                label: "I agree to the terms and conditions",
                checked: formData.conditions,
                type: "checkbox",
                onchange: (e) =>
                  handleFieldChange("conditions", e.target.checked),
              }}
            />
            <PopUp
              valid={!errorMessage}
              errorMessage={errorMessage}
              info={{ title: "Submit", type: "submit", onClick: handleSubmit }}
            />
          </form>
        </div>
      </div>
    </RegFormProvider>
  );
};

export default FormsLoan;
