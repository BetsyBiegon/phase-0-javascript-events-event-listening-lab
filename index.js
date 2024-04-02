function addingEventListener() {
    const input = document.getElementById('button');
  
    // Event listener setup
    function clickAlert() {
      alert('I was clicked!');
    }
  
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to set up the event listener
  addingEventListener();
  