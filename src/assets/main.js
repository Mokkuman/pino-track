document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('[data-drawer-toggle="separator-sidebar"]');
    const sidebar = document.getElementById('separator-sidebar');

    const back_btn = document.querySelector('[data-drawer-hide="separator-sidebar"]');


    button.addEventListener('click', function () {
        sidebar.classList.toggle('-translate-x-full');
    });

    back_btn.addEventListener('click', function(){
        console.log("atras");
        sidebar.classList.toggle('-translate-x-full');
    })
});