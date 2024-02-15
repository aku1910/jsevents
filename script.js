const Form = document.getElementById("myForm");
const Input = document.getElementById("name");
const SubmitButton = document.getElementById("submit");
const Ol = document.createElement("ol");
const RemoveAllButton = document.createElement("button");

Form.append(RemoveAllButton);
RemoveAllButton.textContent = "RemoveAll - ❌";
Form.append(Ol);

SubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (Input.value.trim() === "") {
        alert("Bos qala bilmez!!!");
        return;
    }

    const Li = document.createElement("li");
    const Remove = document.createElement("button");
    Ol.append(Li);
    Remove.textContent = "Remove - ❌";

    Remove.addEventListener("click", () => {
        Ol.removeChild(Li);
    });

    Li.textContent = Input.value;
    Li.appendChild(Remove);
    Input.value = "";

    Li.style.backgroundColor = "aqua";
    Li.style.padding = "10px";
    Li.style.marginBottom = "5px";
    Li.style.borderRadius = "4px";
    Li.style.display = "flex";
    Li.style.justifyContent = "space-between";
    Li.style.alignItems = "center";

    Remove.style.backgroundColor = "blue";
    Remove.style.color = "white";
    Remove.style.padding = "6px";
    Remove.style.border = "none";
    Remove.style.borderRadius = "4px";
});
RemoveAllButton.style.backgroundColor = "brown";
RemoveAllButton.style.color = "white";
RemoveAllButton.style.padding = "10px";
RemoveAllButton.style.border = "none";
RemoveAllButton.style.borderRadius = "4px";
RemoveAllButton.style.marginTop = "10px";
RemoveAllButton.style.marginRight = "10px";

RemoveAllButton.addEventListener("click", (e) => {
    e.preventDefault();
    while (Ol.firstChild) {
        Ol.removeChild(Ol.firstChild);
    }
});
SubmitButton.style.backgroundColor = "#5bc0de";
SubmitButton.style.color = "#fff";
SubmitButton.style.padding = "10px";
SubmitButton.style.border = "none";
SubmitButton.style.borderRadius = "4px";
SubmitButton.style.marginTop = "10px";
SubmitButton.style.cursor = "pointer";

