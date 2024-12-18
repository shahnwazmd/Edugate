import React from "react";

const PdfViewer = () => {
  const pdfUrl = "https://drive.google.com/file/d/1WFrpXNjHxX_GSnRKcSp3lk78zGBT784B/preview";

  return (
    <div className="pdf-viewer">
      <h2>View PDF</h2>
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        title="Google Drive PDF Viewer"
        frameBorder="0"
      />
    </div>
  );
};

export default PdfViewer;
