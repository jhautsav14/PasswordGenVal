import React, { useState } from "react";
import PasswordGenerator from "./PasswordGenerator";
import PasswordValidator from "./PasswordValidator";

function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px", // Adjust for larger screens
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Password Generator and Validator
        </h1>
        <PasswordGenerator setGeneratedPassword={setGeneratedPassword} />
        <div
          style={{
            marginTop: "20px",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "20px",
          }}
        >
          <PasswordValidator generatedPassword={generatedPassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
