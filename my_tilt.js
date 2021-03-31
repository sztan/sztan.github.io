$(function () {
    VanillaTilt.init(document.querySelectorAll(".job_content .projet"), {
        max        : 10,
        speed      : 400,
        scale      : 1.2,
        glare      : true,
        "max-glare": .5,
    });
});