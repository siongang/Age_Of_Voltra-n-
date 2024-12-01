"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [jsonData, setJsonData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(1); // Track active tab state

  // Handle file input
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile && selectedFile.type === "application/json") {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const fileContent = reader.result as string;
          setJsonData(fileContent); // Store raw file content
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

  // Handle Generate button click
  const handleGenerate = async () => {
    if (!jsonData) {
      setError("No JSON data to send.");
      return;
    }

    setLoading(true);
    setError(null);
    // deleted localhost8000
    try {
      const response = await fetch("https://age-of-voltra-n.vercel.app/api/py/your-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData, // Send raw JSON data as a string
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Get the CSV file as a blob from the response
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a download link and trigger it
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";  // Set the filename
      document.body.appendChild(a);
      a.click();
      a.remove();

    } catch (err) {
      setError("Failed to send data to the backend.");
      console.error("Error:", err); // Log any errors
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
          marginBottom: "40px",  // Increased vertical spacing
          lineHeight: "1.3",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        Age of Voltra(n) Energy
      </h1>

      {/* Parent Website Link */}
      <a
        href="https://www.voltra.energy/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#4C51BF",
          fontSize: "1.2rem",
          textDecoration: "none",
          marginBottom: "30px",  // Increased vertical spacing
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0a3c77")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#4C51BF")}
      >
        Visit Voltra Energy Website
      </a>

      {/* Tabs for Solutions */}
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #4C51BF",
          marginBottom: "40px",  // Increased vertical spacing
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
        <div
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
          Solution 2: TBD
        </div>
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
          <section style={{ marginBottom: "50px" }}>  {/* Increased vertical spacing */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              JSON Domain Extraction
            </h3>
            <p>
              Upload a JSON file containing information about charging stations.
              We'll help you extract the web domains of the companies that own
              these stations.
            </p>
          </section>

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
              marginBottom: "40px",
              transition: "0.3s",
            }}
          />

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

      {/* Solution 2 (Placeholder for now) */}
      {activeTab === 2 && (
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
          <section style={{ marginBottom: "50px" }}>  {/* Increased vertical spacing */}
            <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Solution 2: TBD
            </h3>
            <p>Stay tuned for the second solution coming soon.</p>
          </section>
        </div>
      )}
    </div>
  );
}
