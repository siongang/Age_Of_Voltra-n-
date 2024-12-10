"use client";
import { useState } from "react";

export default function Home() {
  console.log("HI");
  const [file, setFile] = useState<File | null>(null);
  const [jsonData, setJsonData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [showNote, setShowNote] = useState(false); // State for showing Important Note

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && selectedFile.type === "application/json") {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const fileContent = reader.result as string;
          setJsonData(fileContent);
          setError(null);
        } catch (err) {
          setError("Failed to read the JSON file.");
          setJsonData(null);
        }
      };
      reader.readAsText(selectedFile);
      setFile(selectedFile);
    } else {
      setError("Please select a valid JSON file.");
    }
  };

  const handleGenerate = async () => {
    if (!jsonData) {
      setError("No JSON data to send.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log(jsonData);
      const response = await fetch("/api/py/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      setError("Failed to send data to the backend.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        fontFamily: "Helvetica, Arial, sans-serif",
        padding: "20px",
        color: "#333",
      }}
    >
      {/* Main Title */}
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#222",
          textAlign: "center",
          marginBottom: "40px",
          lineHeight: "1.3",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        Property Solutions
      </h1>

      {/* Parent Website Link */}
      {/* <a
        href="https://www.voltra.energy/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#4C51BF",
          fontSize: "1.2rem",
          textDecoration: "none",
          marginBottom: "30px",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0a3c77")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#4C51BF")}
      >
        Visit Voltra Energy Website
      </a> */}

      {/* Tabs for Solutions */}
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #4C51BF",
          marginBottom: "40px",
          width: "100%",
          maxWidth: "800px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        <div
          onClick={() => setActiveTab(1)}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "15px",
            cursor: "pointer",
            backgroundColor: activeTab === 1 ? "#4C51BF" : "#f5f5f5",
            color: activeTab === 1 ? "white" : "#333",
            fontWeight: activeTab === 1 ? "bold" : "normal",
            transition: "background-color 0.3s, transform 0.3s",
            transform: activeTab === 1 ? "scale(1.05)" : "scale(1)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          Solution 1: JSON Domain Extraction
        </div>
        {/* <div
          onClick={() => setActiveTab(2)}
          style={{
            flex: 1,
            textAlign: "center",
            padding: "15px",
            cursor: "pointer",
            backgroundColor: activeTab === 2 ? "#4C51BF" : "#f5f5f5",
            color: activeTab === 2 ? "white" : "#333",
            fontWeight: activeTab === 2 ? "bold" : "normal",
            transition: "background-color 0.3s, transform 0.3s",
            transform: activeTab === 2 ? "scale(1.05)" : "scale(1)",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
          Solution 2: TBD */}
        {/* </div> */}
      </div>

      {/* Solution 1: JSON Domain Extraction */}
      {activeTab === 1 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            maxWidth: "800px",
            textAlign: "center",
          }}
        >
          <section style={{ marginBottom: "50px" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Website Domain Finder
            </h3>
            <p>
              Upload a JSON file containing information about a property.
              We'll help you find the web domains of the companies that own
              these properties.
            </p>
          </section>

          {/* File Input and Important Note Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px", // Add spacing between input and button
              marginBottom: "40px",
            }}
          >
            {/* File Input */}
            <input
              type="file"
              accept=".json"
              onChange={handleFileChange}
              style={{
                padding: "15px",
                borderRadius: "8px",
                border: "2px solid #4C51BF",
                fontSize: "16px",
                width: "250px",
                textAlign: "center",
                transition: "0.3s",
              }}
            />

            {/* Important Note Button */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowNote(!showNote)}
                style={{
                  backgroundColor: "#4C51BF",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  fontSize: "16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                ℹ
              </button>
              {showNote && (
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    left: "50%",
                    transform: "translate(20%,-50%)",
                    backgroundColor: "#f9f9f9",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "20px",
                    width: "300px",
                    zIndex: 100,
                    textAlign: "left",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  <strong>JSON File Input Example:</strong>
                  <pre
                    style={{
                      backgroundColor: "#f5f5f5",
                      padding: "10px",
                      borderRadius: "5px",
                      overflowX: "auto",
                    }}
                  >
                    {"{city: 'Los Angeles', country: 'US', address: 'Santa Monica Boulevard, 10534'}"}
                    {"\n{city: 'New York', country: 'US', address: 'Broadway, 12345'}"}
                  </pre>
                  
                  <p>
                    Each location must be a separate root entry on its own line 
                    <em>(not separated by commas or enclosed in brackets)</em>. 
                    The JSON file must include an <strong>'address'</strong> field. 
                    Limit to <strong>100 locations</strong> to ensure processing completes within 60 seconds.
                  </p>
                </div>

              )}
            </div>
          </div>

          {/* Error message */}
          {error && (
            <p style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
              {error}
            </p>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              padding: "15px 40px",
              backgroundColor: "#4C51BF",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "18px",
              fontWeight: "600",
              transition: "background-color 0.3s, transform 0.3s",
              opacity: loading ? 0.6 : 1,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      )}

    </div>
  );
}
