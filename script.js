function startHack() {
  const username = document.getElementById("username").value;
  const output = document.getElementById("output");

  if (!username) {
    output.innerHTML = "Please enter a username...";
    return;
  }

  output.innerHTML = "Connecting to Instagram servers...<br>";
  setTimeout(() => {
    output.innerHTML += "Fetching data for @" + username + "...<br>";
    setTimeout(() => {
      output.innerHTML += "Decrypting password...<br>";
      setTimeout(() => {
        output.innerHTML += `<strong>Password Found: </strong> 🤫 <br>`;
        setTimeout(() => {
          output.innerHTML += `<br><span style="color:red;">😂 You've been pranked! This is just a joke by Abdirahman.hc – no accounts were harmed.</span>`;
        }, 1500);
      }, 2000);
    }, 2000);
  }, 1500);
}
