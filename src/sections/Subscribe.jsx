import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import SubscribePage from "../assets/Subscribe.png";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(300);

  useEffect(() => {
    let interval;

    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [otpSent, timer]);

  const handleSubscribe = async (e) => {
    if (e) e.preventDefault();

    if (!email) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
        "https://saaslanding02.onrender.com/api/subscribe",
        {
          email,
        }
      );

      toast.success(res.data.message);

      setOtpSent(true);
      setTimer(300);
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Failed to send OTP"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("OTP is required");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post(
      "https://saaslanding02.onrender.com/api/verify-otp",
        {
          email,
          otp,
        }
      );

      toast.success(res.data.message);

      setEmail("");
      setOtp("");
      setOtpSent(false);
      setTimer(300);
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "OTP verification failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <h2 className="text-center mb-5 text-6xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Subscribe
        </span>
      </h2>

      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-5">
        <div className="flex justify-center">
          <img
            src={SubscribePage}
            alt="Subscribe"
            className="w-auto h-auto object-contain"
          />
        </div>

        <div className="text-center mt-2">
          <h1 className="text-xl font-bold text-gray-800">
            Stay Updated, Subscribe Now!
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Get exclusive updates, insider tips, and early access directly in
            your inbox.
          </p>
        </div>

        {otpSent && timer > 0 && (
          <p className="text-center text-sm font-medium text-orange-500 mt-3">
            OTP expires in {minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        )}

        {!otpSent ? (
          <form onSubmit={handleSubscribe} className="mt-5 space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg disabled:opacity-50"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleVerifyOTP}
            className="mt-5 space-y-3"
          >
            <div className="bg-gray-100 p-3 rounded-lg text-center">
              <p className="text-sm text-gray-600">
                OTP sent to
              </p>

              <p className="font-semibold text-gray-800">
                {email}
              </p>
            </div>

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value)
              }
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            {timer === 0 && (
              <button
                type="button"
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
              >
                {loading
                  ? "Sending..."
                  : "Resend OTP"}
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                setOtpSent(false);
                setOtp("");
                setTimer(300);
              }}
              className="w-full border border-gray-300 py-3 rounded-lg"
            >
              Change Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
