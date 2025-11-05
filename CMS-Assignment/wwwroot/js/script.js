document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((sec, i) => {
        if (sec.querySelector(".-bottom-md, .-bottom-lg") && sections[i + 1]) {
            document.querySelector("footer").classList.add("reset-margin");
        }
    });
});