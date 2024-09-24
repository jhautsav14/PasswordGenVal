import React, { useState } from "react";
import { Lock } from "lucide-react";

export function PasswordGenerator({ setGeneratedPassword }) {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

  const generatePassword = () => {
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialChars) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setGeneratedPassword(password);
  };

  return (
    <div style={{ marginBottom: "20px", padding: "20px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#333",
        }}
      >
        <Lock /> Generate Password
      </h2>
      <div style={{ marginBottom: "10px" }}>
        <label
          style={{
            fontSize: "14px",
            fontWeight: "medium",
            marginRight: "10px",
            color: "#555",
          }}
        >
          Password Length: {length}
        </label>
        <input
          type="range"
          min="8"
          max="64"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{ width: "100%", cursor: "pointer" }}
        />
      </div>
      {[
        {
          label: "Include Uppercase",
          state: includeUppercase,
          setter: setIncludeUppercase,
        },
        {
          label: "Include Lowercase",
          state: includeLowercase,
          setter: setIncludeLowercase,
        },
        {
          label: "Include Numbers",
          state: includeNumbers,
          setter: setIncludeNumbers,
        },
        {
          label: "Include Special Characters",
          state: includeSpecialChars,
          setter: setIncludeSpecialChars,
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "#555" }}>{item.label}</span>
          <input
            type="checkbox"
            checked={item.state}
            onChange={() => item.setter(!item.state)}
          />
        </div>
      ))}
      <button
        onClick={generatePassword}
        style={{
          backgroundColor: "#333",
          color: "#ffffff",
          padding: "10px",
          borderRadius: "5px",
          width: "100%",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#444")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#333")}
      >
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
