import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const SocialLogin = ({ title }) => {
  const { googleSignUp, githubSignUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";

  // Google SingUp
  const handelGoogleSingUp = async () => {
    try {
      setError("");
      setLoading(true);
      await googleSignUp();
      history.push(redirect_url);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="text-center text-2xl">
      <h1 className="uppercase border-b-2 border-gray-300 py-2">
        Or {title} with
      </h1>
      {error && <span className="text-red-600 text-center py-2">{error}</span>}
      <div className="text-2xl flex gap-6 py-4 justify-center items-center">
        <button
          onClick={handelGoogleSingUp}
          className="text-white px-2 py-2 bg-primary rounded-md shadow-lg"
        >
          <i className="fab fa-google ml-2"></i>
          <span> Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
