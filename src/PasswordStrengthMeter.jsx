import React from "react";

// PasswordStrengthMeter component
export function PasswordStrengthMeter({ strength }) {
  const getColor = () => {
    if (strength <= 2) return "#f56565"; // Red color for Weak
    if (strength <= 4) return "#ecc94b"; // Yellow color for Moderate
    return "#48bb78"; // Green color for Strong
  };

  const getLabel = () => {
    if (strength <= 2) return "Weak";
    if (strength <= 4) return "Moderate";
    return "Strong";
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "5px",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "medium", color: "#333" }}>
          Password Strength
        </span>
        <span style={{ fontSize: "14px", fontWeight: "medium", color: "#333" }}>
          {getLabel()}
        </span>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#e2e8f0",
          borderRadius: "9999px",
          height: "10px",
        }}
      >
        <div
          style={{
            height: "10px",
            borderRadius: "9999px",
            backgroundColor: getColor(),
            width: `${(strength / 7) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default PasswordStrengthMeter;
