import React from 'react';
import { saveAs } from 'file-saver';

const DownloadCVButton = () => {
  const handleDownload = () => {
    // Replace 'your-cv.pdf' with the path to your CV file
    const filePath = 'Mariam Safaouicv.pdf';
    saveAs(filePath, 'your-cv.pdf');
  };

  return (
    <button onClick={handleDownload}>Download CV</button>
  );
};

export default DownloadCVButton;
