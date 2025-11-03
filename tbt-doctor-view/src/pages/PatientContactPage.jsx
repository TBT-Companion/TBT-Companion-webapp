import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/OSU_LOGO.png";
import TextMessage from "../components/TextMessage";

const PatientContactPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const patient = state?.patient; // ✅ received from Dashboard

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ⬅️ Back button handler
  const handleClick = () => {
    console.log("Navigating to dashboard page");
    navigate("/dashboard");
  };

  // 🔹 Fetch messages when patient changes
  useEffect(() => {
    if (!patient?._id) return;

    const fetchMessages = async () => {
      try {
        const idToken = localStorage.getItem("idToken");
        const res = await fetch(
          `http://localhost:3000/api/chat/messages/${patient._id}`,
          {
            headers: { Authorization: `Bearer ${idToken}` },
          }
        );
        if (!res.ok) throw new Error("Failed to load messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        console.error("Error fetching messages:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // 🟢 Initial fetch
    fetchMessages();

    // 🕒 Re-fetch every 5 seconds
    const interval = setInterval(fetchMessages, 5000);

    // 🧹 Cleanup on unmount
    return () => clearInterval(interval);
  }, [patient]);
  // 🔹 Send message
  const handleSend = async (content) => {
    if (!content.trim()) return;
    setMessages((prev) => [
      ...prev,
      { content, sender: "you", createdAt: new Date() },
    ]);

    const idToken = localStorage.getItem("idToken");
    await fetch("http://localhost:3000/api/chat/messages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        recipientId: patient._id,
        content,
        messageType: "text",
      }),
    });
  };

  return (
    <div className="min-w-fit">
      {/* Header */}
      <div className="flex flex-row overflow-x-auto">
        <img
          src={logo}
          alt="OSU Logo"
          width={96}
          height={72}
          className="pt-10 ml-6 pb-6"
        />
        <h1 className="text-[32px] font-bold pl-4 pt-12">TBT Care</h1>
      </div>

      {/* Back + Title */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-col ml-11">
          <button
            type="button"
            className="rounded-full bg-white py-3 mb-3 pl-11 pr-11 text-s font-semibold text-black hover:bg-[#A00B29] hover:text-white"
            onClick={handleClick}
          >
            ← Back Home
          </button>
          <h1 className="text-2xl font-bold pb-6">Messages:</h1>
        </div>
      </div>

      {/* Chat Container */}
      <div className="border border-[#D1D1D1] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.10)] rounded-[35px] ml-11 mr-11 pt-10 h-[80vh] flex flex-col">
        <div className="text-center mx-8 rounded-[28px] mb-4">
          <h1 className="text-[36px] font-bold">
            {patient?.displayName ||
              `${patient?.Patient?.first_name || ""} ${patient?.Patient?.last_name || ""}`.trim() ||
              "Unknown Patient"}
          </h1>
        </div>

        {/* Message List */}
        <div className="flex-1 mx-8 rounded-[28px] overflow-y-auto p-4 bg-[#F8F8F8]">
          {loading && <p>Loading messages...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading &&
            !error &&
            messages.map((msg) => (
              <div
                key={msg._id || Math.random()}
                className={`p-3 my-2 rounded-xl max-w-[70%] ${msg.senderId?._id === patient?._id
                    ? "bg-gray-200 text-black self-start"
                    : "bg-[#BA0C2F] text-white self-end ml-auto"
                  }`}
              >
                <strong>
                  {msg.senderId?._id === patient?._id ? "Patient: " : "You: "}
                </strong>
                {msg.content}
              </div>
            ))}
        </div>

        {/* Input (fixed at bottom of container) */}
        <div className="mx-8 mt-4 mb-6">
          <TextMessage onSend={handleSend} />
        </div>
      </div>

    </div>
  );
};

export default PatientContactPage;
