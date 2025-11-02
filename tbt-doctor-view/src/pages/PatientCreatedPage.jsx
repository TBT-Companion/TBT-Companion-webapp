import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/OSU_LOGO.png"; // adjust the path if needed

const PatientCreatedPage = () => {
  const navigate = useNavigate();

  // Redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard"); // or whatever page you want
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* Header */}
      <div className="flex flex-row items-center w-full border-b border-gray-200 p-4">
        <img
          src={logo}
          alt="OSU Logo"
          className="w-20 h-auto ml-6"
        />
        <h1 className="text-3xl font-bold text-[#A00B29] ml-4">TBT Care</h1>
      </div>

      {/* Confirmation message */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Patient successfully created!
        </h2>

        <div role="status" aria-live="polite" className="mt-4">
          <div className="flex items-center space-x-4">
            <svg
              className="animate-spin h-10 w-10 text-[#A00B29]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>

            <div className="text-left">
              <div className="text-lg font-medium text-gray-700">Patient successfully created!</div>
              <div className="text-sm text-gray-500">Redirecting to dashboard...</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-2">
            <span
              className="h-2.5 w-2.5 bg-[#A00B29] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <span
              className="h-2.5 w-2.5 bg-[#A00B29] rounded-full animate-bounce"
              style={{ animationDelay: "0.12s" }}
            />
            <span
              className="h-2.5 w-2.5 bg-[#A00B29] rounded-full animate-bounce"
              style={{ animationDelay: "0.24s" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PatientCreatedPage;
