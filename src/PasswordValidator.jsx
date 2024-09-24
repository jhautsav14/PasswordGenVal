import React, { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

export function PasswordValidator({ generatedPassword }) {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    if (generatedPassword) {
      setPassword(generatedPassword);
    }
  }, [generatedPassword]);

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  const validatePassword = (pwd) => {
    let newStrength = 0;
    const newFeedback = [];

    if (pwd.length >= 8) newStrength++;
    else newFeedback.push("Password should be at least 8 characters long");

    if (pwd.length >= 12) newStrength++;

    if (/[A-Z]/.test(pwd)) newStrength++;
    else newFeedback.push("Include at least one uppercase letter");

    if (/[a-z]/.test(pwd)) newStrength++;
    else newFeedback.push("Include at least one lowercase letter");

    if (/[0-9]/.test(pwd)) newStrength++;
    else newFeedback.push("Include at least one number");

    if (/[^A-Za-z0-9]/.test(pwd)) newStrength++;
    else newFeedback.push("Include at least one special character");

    if (pwd.length >= 16) newStrength++;

    setStrength(newStrength);
    setFeedback(newFeedback);
  };

  return (
    <div>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        <ShieldCheck /> Validate Password
      </h2>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password to validate"
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #e2e8f0",
          marginBottom: "20px",
        }}
      />
      <PasswordStrengthMeter strength={strength} />
      {feedback.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginBottom: "10px",
              color: "#333",
            }}
          >
            Suggestions:
          </h3>
          <ul style={{ paddingLeft: "20px" }}>
            {feedback.map((item, index) => (
              <li key={index} style={{ fontSize: "14px", color: "#4A5568" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PasswordValidator;
