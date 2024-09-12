import React from "react";
const FileDownload = () => {
    const handleDownload = async () => {
        const fileUrl = 'https://raw.githubusercontent.com/github/gitignore/main/README.md';
        
        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'sample_readme.md'; 
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
          } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
          }
    };

    return (
        <div>
          <button onClick={handleDownload}>Download File</button>
        </div>
      );
};

export default FileDownload;