var data;
function addNormal(data) {
  var a = `<h2 id="${data.heading
    .toLowerCase()
    .replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>
    <div class="searchItem">`;
  data.data.forEach((element) => {
    element.des = element.des.replace(/\n/g, "<br />");
    a += `<p>${element.des}</p>
        <code class="language-bash">
        <pre>$ ${element.com}</pre>
        <button class="copy-btn">
          <img src="./ASSETS/copy-icon.svg" alt="copy" />
        </button>
      </code>`;
  });
  a += "</div>";
  return a;
}
function addDes(data) {
  var a = `<h2 id="${data.heading
    .toLowerCase()
    .replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>`;
  data.des = data.des.replace(/\n/g, "<br />");
  a += `<div class="searchItem">
    <p>${data.des}</p>
  </div>`;
  return a;
}
function addSubHead(data) {
  var a = `<h2 id="${data.heading
    .toLowerCase()
    .replace(/\ /g, "-")}" class="searchItem">${data.heading}</h2>`;
  data.subHead.forEach((element) => {
    a += `<div class="searchItem">
        <h3>${element.head}</h3>`;
    element.data.forEach((ele) => {
      ele.des = ele.des.replace(/\n/g, "<br />");
      a += `<p>${ele.des}</p>
            <code class="language-bash">
            <pre>$ ${ele.com}</pre>
            <button class="copy-btn">
              <img src="./ASSETS/copy-icon.svg" alt="copy" />
            </button>
          </code>`;
    });
  });
  return a;
}
fetch("./ASSETS/code.json")
  .then((response) => response.json())
  .then((json) => {
    var container = document.querySelector("#list_search");
    data = json;
    json.forEach((element) => {
      if (element.des != undefined) {
        container.insertAdjacentHTML("beforeend", addDes(element));
      } else if (element.subHead != undefined) {
        container.insertAdjacentHTML("beforeend", addSubHead(element));
      } else {
        container.insertAdjacentHTML("beforeend", addNormal(element));
      }
    });
    
    var copyButton = document.querySelectorAll(".copy-btn");
    copyButton.forEach((btn) => {
      btn.addEventListener("click", () => {
        var code = btn.previousElementSibling.innerText;
        code = code.slice(2, code.length);
        navigator.clipboard.writeText(code);
        btn.classList.add("copied");
        setTimeout(function () {
          btn.classList.remove("copied");
        }, 800);
      });
    });
  });
