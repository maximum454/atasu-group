@@include('./partials/jquery.min.js')
@@include('./partials/scrollreveal.min.js')
@@include('./partials/countUp.js')



$(function () {
    const countbar1 = new CountUp("countbar-1", 8000,{
        separator: '',
    });
    const countbar2 = new CountUp("countbar-2", 1500,{
        separator: '',
    });
    const countbar3 = new CountUp("countbar-3", 23,{
        separator: '',
    });

    ScrollReveal().reveal(".scroll-reveal", {
        delay: 300,
        interval: 200,
        distance: "25px",
        origin: "bottom",
    });

    ScrollReveal().reveal(".scroll-reveal-stats", {
        delay: 300,
        interval: 200,
        distance: "25px",
        origin: "bottom",
        afterReveal() {
            countbar1.start();
            countbar2.start();
            countbar3.start();
        },
    });
})
