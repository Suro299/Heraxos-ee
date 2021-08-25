const load_div = document.getElementById("load_div");
const wi_fi_icon = document.getElementById("wi_fi_icon");


// Screens
const screen = document.getElementById("screen");

const block_screen = document.getElementById("block_screen");
const settings_app_screen = document.getElementById("settings_app_screen");
const wallpapers_screen = document.getElementById("wallpapers_screen");
const app_stor_app_screen = document.getElementById("app_stor_app_screen");
const pls_en_wi = document.getElementById("pls_en_wi");
const calc_screen = document.getElementById("calc_screen");

//Buttons
const home_button = document.getElementById("home_button");
const walpaper_button = document.getElementById("walpaper_button");
const get_button_calc = document.getElementById("get_button_calc");


// APPS
const app_div = document.getElementById("app_div");

const settings_app = document.getElementById("settings_app")
const app_store = document.getElementById("app_store");


// TUMB

let airpalne_mod = 0;
let wifi = 0;

// 0-OFF 1-ON
let tumb_of_on = 0;


// CALC APP 
const yot = document.getElementById("yot");
const ut = document.getElementById("ut");
const vec = document.getElementById("vec");
const inn = document.getElementById("inn");
const hing = document.getElementById("hing");
const chors = document.getElementById("chors");
const ereq = document.getElementById("ereq");
const erku = document.getElementById("erku");
const mek = document.getElementById("mek");
const gum = document.getElementById("gum");
const han = document.getElementById("han");
const bazm = document.getElementById("bazm");
const c = document.getElementById("c");
const hav = document.getElementById("hav");
const baj = document.getElementById("baj");
const ekr = document.getElementById("ekr");
const zro = document.getElementById("zro");


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
    pls_en_wi.style.display  = "none";
    calc_screen.style.display ="none"
}) ;


// APP CREATE

let calc_app_ce = document.createElement("div");

get_button_calc.addEventListener("click", ()  => {

    if (cal_app_ktc == 0) {

        calc_app_ce.innerHTML = `<div id="calc_app" class="apps_div calc_app"></div>`;

        app_div.appendChild(calc_app_ce);

        load_div.style.display = "flex"
        get_button_calc.style.display = "none"

        setTimeout(() => {
            get_button_calc.style.display = "flex"
            get_button_calc.innerText = "Delete";
            load_div.style.display = "none";
            cal_app_ktc = 1
        }, 1000);



    } else if (cal_app_ktc == 1) {

        app_div.removeChild(calc_app_ce);

        get_button_calc.innerText = "Get";
    
        cal_app_ktc = 0;
    }
})




//TUMB OFF-ON  Airplane Mod

airplane_mod_tumb.addEventListener("click", () =>  {
    if (airpalne_mod == 0) {

        airplane_mod_tumb.style.backgroundColor = "green";
        airplane_mod_tumb_cyc.style.marginLeft = "47%";

        airpalne_mod = 1

    } else if (airpalne_mod == 1) {

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        airpalne_mod  = 0
    }
})

//TUMB Wi_Fi

airplane_mod_tumb_2.addEventListener("click", () =>  {
    if (wifi == 0) {

        airplane_mod_tumb_2.style.backgroundColor = "green";
        airplane_mod_tumb_cyc_2.style.marginLeft = "47%";

        wi_fi_icon.style.display = "flex"

        wifi = 1

    } else if (wifi == 1) {

        airplane_mod_tumb_2.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc_2.style.marginLeft = "-4%";

        wi_fi_icon.style.display = "none"

        wifi  = 0
    }
})

// APP OPEN

settings_app.addEventListener("click", () => {
    settings_app_screen.style.display =  "flex"
});

calc_app_ce.addEventListener("click", () => {
    calc_screen.style.display = "flex"
}) 

app_store.addEventListener("click", () => {
    if (wifi == 1) {
        app_stor_app_screen.style.display = "flex"
    } else if(wifi == 0) {
        pls_en_wi.style.display = "flex"
    }
});


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


// CALCULATOR 

yot.addEventListener("click", () => {
    ekr.value += "7"
}) 

ut.addEventListener("click", () => {
    ekr.value += "8"
}) 

inn.addEventListener("click", () => {
    ekr.value += "9"
}) 

vec.addEventListener("click", () => {
    ekr.value += "6"
}) 

hing.addEventListener("click", () => {
    ekr.value += "5"
}) 

chors.addEventListener("click", () => {
    ekr.value += "4"
}) 

ereq.addEventListener("click", () => {
    ekr.value += "3"
}) 

erk.addEventListener("click", () => {
    ekr.value += "2"
})

mek.addEventListener("click", () => {
    ekr.value += "1"
})

zro.addEventListener("click", () => {
    ekr.value += "0"
})

gum.addEventListener("click", () => {
    ekr.value += "+"
})


han.addEventListener("click", () => {
    ekr.value += "-"
})


bazm.addEventListener("click", () => {
    ekr.value += "*"
})


baj.addEventListener("click", () => {
    ekr.value += "/"
})

hav.addEventListener("click", () => {
    ekr.value = eval(ekr.value)
})

c.addEventListener("click", () => {
    ekr.value = ""
})
