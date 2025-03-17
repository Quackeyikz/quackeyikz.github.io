const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('file-input');

// Utility function to prevent default browser behavior
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Preventing default browser behavior when dragging a file over the container
dropArea.addEventListener('dragover', preventDefaults);
dropArea.addEventListener('dragenter', preventDefaults);
dropArea.addEventListener('dragleave', preventDefaults);

// Handling dropping files into the area
dropArea.addEventListener('drop', handleDrop);


function handleDrop(e) {
    e.preventDefault();
  
    // Getting the list of dragged files
    const files = e.dataTransfer.files;
  
    // Checking if there are any files
    if (files.length) {
      // Assigning the files to the hidden input from the first step
      fileInput.files = files;
  
      // Processing the files for previews (next step)
      handleFiles(files);
    }
  }