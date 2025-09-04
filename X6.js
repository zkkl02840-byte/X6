document.getElementById("loginForm").addEventListener("submit", function(e) {
const name = document.getElementById("name").value.trim();
const classSelect = document.getElementById("class").value;
const section = document.getElementById("section").value;
 
if (!name || !classSelect || !section) {
alert("Please fill in all fields");
e.preventDefault();     
}
});