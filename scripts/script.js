new bootstrap.Tooltip($("#themeSwitch"), {
    title: "Change Theme",
    placement: "bottom",
});

$("#themeSwitch").on("click", () => {
    $(document.documentElement).attr("data-bs-theme") == "dark"
        ? $(document.documentElement).attr("data-bs-theme", "light")
        : $(document.documentElement).attr("data-bs-theme", "dark");
});

let containerScrolling = true;
let switchDir = true;
const damp = 10;

setInterval(() => {
    if (!containerScrolling) {
        return;
    }
    const maxWidth = $(".card-container").width();
    $(".card-container").animate(
        {
            scrollLeft: switchDir ? maxWidth : -maxWidth,
        },
        maxWidth * damp
    );

    switchDir = !switchDir;
});

$(".card-container").on("mouseenter vmouseover", () => {
    containerScrolling = false;
    $(".card-container").stop(true);
});

$(".card-container").on("mouseleave vmouseout", () => {
    containerScrolling = true;
});
