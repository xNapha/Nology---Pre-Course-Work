const form = document.querySelector("form");
form.onsubmit = function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const comment = document.getElementById("comment").value;

  const newMsg = message(name, email, comment);

  let currentMsgs = [];
  if (window.sessionStorage.getItem("messages")) {
    currentMsgs = JSON.parse(window.sessionStorage.getItem("messages"));
  }
  currentMsgs.push(newMsg);

  window.sessionStorage.setItem("messages", JSON.stringify(currentMsgs));
  displayMsgs();
};

const message = (n, e, c) => {
  const name = n;
  const email = e;
  const comment = c;
  return { name, email, comment };
};

function displayMsgs() {
  let currentMsgs = [];
  if (window.sessionStorage.getItem("messages")) {
    currentMsgs = JSON.parse(window.sessionStorage.getItem("messages"));
  }

  let listMsgs = [];
  for (let i = 0; i < currentMsgs.length; i++) {
    let listMsg = "";
    let currentMsg = currentMsgs[i];
    listMsg += `<dt> ${currentMsg.name} | ${currentMsg.email}</dt>`;
    listMsg += `<dd> ${currentMsg.comment} </dd>`;
    listMsg += `<br/>`;
    listMsgs.push(listMsg);
  }
  const displayList = document.getElementById("currentMsgs");
  displayList.innerHTML = listMsgs.join("");
}
displayMsgs();

function deleteMsgs() {
  if (window.sessionStorage.getItem("messages")) {
    window.sessionStorage.removeItem("messages");
  }
  displayMsgs();
}
document.body.querySelector("#clear").setAttribute("onclick", "deleteMsgs()");
