function sendMessage(event) {
  event.preventDefault();
  alert("Message sent! We’ll get back to you soon.");
}

function search() {
  const query = document.getElementById("searchBox").value;
  alert("You searched for: " + query);
}

function clearSearch() {
  document.getElementById("searchBox").value = "";
}