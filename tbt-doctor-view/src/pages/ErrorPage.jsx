import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // takes user back to Sign In page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-[#BA0C2F] mb-4">
        Oops! You’re Not Allowed To Be Here
      </h1>
      <p className="text-gray-600 mb-8">
        Please sign in with the correct account to access this page.
      </p>
      <button
        onClick={handleGoBack}
        className="bg-[#BA0C2F] hover:bg-[#A00B29] text-white font-semibold px-6 py-2 rounded-lg shadow-md"
      >
        Back to Sign In
      </button>
    </div>
  );
}

export default ErrorPage;
