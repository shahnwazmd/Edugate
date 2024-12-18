import React from "react";

const PdfViewer = () => {
  // Array of PDF links (modify these links as per your requirement)
  const pdfUrls = [
    "https://drive.google.com/file/d/1WFrpXNjHxX_GSnRKcSp3lk78zGBT784B/preview",
    "https://drive.google.com/file/d/11Heh4zHsLLrf80lShmgRFoppbUNQU8nN/preview
  ];

  return (
    <div className="pdf-viewer">
      <h2>View PDFs</h2>
      {pdfUrls.map((url, index) => (
        <div key={index} className="pdf-container">
          <h3>PDF {index + 1}</h3>
          <iframe
            src={url}
            width="100%"
            height="600px"
            title={`Google Drive PDF Viewer ${index + 1}`}
            frameBorder="0"
          />
        </div>
      ))}
    </div>
  );
};

export default PdfViewer;
