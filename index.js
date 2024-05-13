
document.querySelectorAll(".prism-container").forEach(el => {
    const childIcon = document.createElement("i");
    childIcon.className = "bi bi-clipboard copy-icon";
    childIcon.onclick = () => navigator.clipboard.writeText(el.innerText);
    el.appendChild(childIcon);
})