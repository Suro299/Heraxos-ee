
// Screens
const screen = document.getElementById("screen");

const block_screen = document.getElementById("block_screen");
const settings_app_screen = document.getElementById("settings_app_screen");
const wallpapers_screen = document.getElementById("wallpapers_screen");
const app_stor_app_screen = document.getElementById("app_stor_app_screen");

//Buttons
const home_button = document.getElementById("home_button");
const walpaper_button = document.getElementById("walpaper_button");
const get_button_calc = document.getElementById("get_button_calc");


// APPS
const app_div = document.getElementById("app_div");

const settings_app = document.getElementById("settings_app")
const app_store = document.getElementById("app_store");


// TUMB
const airplane_mod_tumb = document.getElementById("airplane_mod_tumb");
const airplane_mod_tumb_cyc = document.getElementById("airplane_mod_tumb_cyc");
// 0-OFF 1-ON
let tumb_of_on = 0;



// CALCK APP KA TE CHE

let cal_app_ktc = 0;

// WALLPAPERS
const wallpaper_1 = document.getElementById("wallpaper_1");
const wallpaper_2  = document.getElementById("wallpaper_2");
const wallpaper_3  = document.getElementById("wallpaper_3");
const wallpaper_4  = document.getElementById("wallpaper_4");
const wallpaper_5  = document.getElementById("wallpaper_5");
const wallpaper_6  = document.getElementById("wallpaper_6");


let time_div_block_screen = document.getElementById("time_div_block_screen");
let time_div_header = document.getElementById("time_div_header");

let scr_block_or = 1;


setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();

    if (m <= 9) {
        m = "0" + m
    }

    time_div_block_screen.innerText = h + ":" + m;

    time_div_header.innerText = h + ":" + m;



    
}, 1000);


home_button.addEventListener("click", () => {
    if (scr_block_or == 1) {
        block_screen.style.transform = "translateY(-150%)"
    }

    settings_app_screen.style.display = "none";
    wallpapers_screen.style.display = 'none';
    app_stor_app_screen.style.display = "none";
}) ;

// APP OPEN

settings_app.addEventListener("click", () => {
    settings_app_screen.style.display =  "flex"
});

app_store.addEventListener("click", () => {
    app_stor_app_screen.style.display = "flex"
});


// APP CREATE

let calc_app_ce = document.createElement("div");

get_button_calc.addEventListener("click", ()  => {

    if (cal_app_ktc == 0) {

        calc_app_ce.innerHTML = `<div id="calc_app" class="apps_div calc_app"></div>`;

        app_div.appendChild(calc_app_ce);

        get_button_calc.innerText = "Delete";

        cal_app_ktc = 1

    } else if (cal_app_ktc == 1) {

        app_div.removeChild(calc_app_ce);

        get_button_calc.innerText = "Get";
    
        cal_app_ktc = 0;
    }
})

cal_app_ktc

//TUMB OFF-ON

airplane_mod_tumb.addEventListener("click", () =>  {
    if (tumb_of_on == 0) {

        airplane_mod_tumb.style.backgroundColor = "green";
        airplane_mod_tumb_cyc.style.marginLeft = "47%";

        tumb_of_on = 1

    } else if (tumb_of_on == 1) {

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        tumb_of_on  = 0
    }
})


// WALLPERS

walpaper_button.addEventListener("click", () => {
    wallpapers_screen.style.display =  "flex"
})

wallpaper_1.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_1.jpg)"
    screen.style.backgroundSize = "100% 130%";
})

wallpaper_2.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_2.png)"
    screen.style.backgroundSize = "100% 130%"
})

wallpaper_3.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_3.jpg)"
    screen.style.backgroundSize = "100% 130%"
})

wallpaper_4.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_4.jpg)"
    screen.style.backgroundSize = "100% 130%"
})

wallpaper_5.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_5.jpg)"
    screen.style.backgroundSize = "100% 130%"
})

wallpaper_6.addEventListener("click", () => {
    screen.style.backgroundImage = "url(./img/Wallpers/wallper_6.jpg)"
    screen.style.backgroundSize = "100% 130%"
})

