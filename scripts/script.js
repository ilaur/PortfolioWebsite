const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("click", () => {
    document.documentElement.getAttribute("data-bs-theme") == "dark"
        ? document.documentElement.setAttribute("data-bs-theme", "light")
        : document.documentElement.setAttribute("data-bs-theme", "dark");
});

new bootstrap.Tooltip(themeSwitch, {
    title: "Change Theme",
    placement: "bottom",
});
