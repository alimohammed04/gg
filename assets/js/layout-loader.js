function loadComponent(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (id === "header") {
                document.querySelector(".bars").onclick = function () {
                    document.querySelector(".bars>span:nth-child(1)").classList.toggle("bar1");
                    document.querySelector(".bars>span:nth-child(2)").classList.toggle("bar2");
                    document.querySelector(".bars>span:nth-child(3)").classList.toggle("bar3");
                    if (document.querySelector(".links").style.top === "100%") {
                        document.querySelector(".links").style.top = "-100%";
                        document.querySelector(".links").style.zIndex = "-1";
                        document.querySelector(".links").style.opacity = "0";
                    }
                    else {
                        document.querySelector(".links").style.top = "100%";
                        document.querySelector(".links").style.zIndex = "1";
                        document.querySelector(".links").style.opacity = "100";

                    }
                };

            }
        })
        .catch(error => console.error("Error in load ", file, error));
}


document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "/components/header.html");
    loadComponent("footer", "/components/footer.html");
});
