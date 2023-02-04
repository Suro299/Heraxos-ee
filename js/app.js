const load_div = document.getElementById("load_div");
const wi_fi_icon = document.getElementById("wi_fi_icon");
const airplan_mod_icon= document.getElementById("airplan_mod_icon");
const bltm_mod_icon = document.getElementById("bltm_mod_icon")
const cell_icon = document.getElementById("cell_icon")
const her_div = document.getElementById("her_div")
const loading_div = document.getElementById("loading_div")


// NAST DIV
const nast_div_window = document.getElementById("nast_div_window")
const st_nast_div_id = document.getElementById("st_nast_div_id")
const nast_div_bac_inp_col_1 = document.getElementById("nast_div_bac_inp_col_1")
const nast_div_bac_inp_col_2 = document.getElementById("nast_div_bac_inp_col_2")
const nast_div_but_ap = document.getElementById("nast_div_but_ap")
const nast_div_but_res = document.getElementById("nast_div_but_res")
const nast_div_bac_stroke_col = document.getElementById("nast_div_bac_stroke_col")
const nast_div_bac_stroke_siz = document.getElementById("nast_div_bac_stroke_siz")



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
const get_button_calc = document.getElementById("get_button_calc");
const en_wi_fi_set_but = document.getElementById("en_wi_fi_set_but");
const back_sett_but = document.getElementById("back_sett_but");

//Settings Buttons
const walpaper_button = document.getElementById("walpaper_button");
const set_general_button= document.getElementById("set_general_button");
const set_accessibility_button = document.getElementById("set_accessibility_button");
const set_privacy_button = document.getElementById("set_privacy_button");


// APPS
const app_div = document.getElementById("app_div");
const settings_app = document.getElementById("settings_app")
const app_store = document.getElementById("app_store");


// TUMB

let airpalne_mod = 0;
let wifi_mod = 0;
let blt_mod = 0;
let cell_mod = 0;

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



// time
loading_div.style.display = "flex"
loading() 

setInterval(() => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();

    if (m <= 9) {
        m = "0" + m
    }

    if (h >= 0 && h <= 9) {
        h = "0" + h
    }

    time_div_block_screen.innerText = h + ":" + m;

    time_div_header.innerText = h + ":" + m;
}, 1000);


function loading() {
    if (time_div_block_screen.innerHTML ==  "") {

        setTimeout(() => {
            loading()
            console.log("asd")
        }, 10);
    }
    else {
        
        loading_div.style.marginTop = "200vh"
        console.log("asaaaaaaaaa")
        setTimeout(() => {
            loading_div.style.display = "none"
        }, 500)
    }
}



 

//  NAST DIV
st_nast_div_id.addEventListener("click", () => {
    if (st_nast_div_id.innerText == "Settings") {
        nast_div_window.style.left = "1%";
        st_nast_div_id.innerText = "Back"
    }

    else if (st_nast_div_id.innerText == "Back") {
        nast_div_window.style.left = "-20%";
        st_nast_div_id.innerText = "Settings"
    }
})


nast_div_but_res.addEventListener("click" , () => {

    nast_div_bac_inp_col_1.value = "#000000"
    nast_div_bac_inp_col_2.value = "#250945"
    nast_div_bac_stroke_siz.value = 25
    nast_div_bac_stroke_col.value = "#323581"

    document.body.style.background = `linear-gradient(130deg, #000000, #250945)`
    her_div.style.boxShadow = `0px 0px 25px #323581`

})

nast_div_but_ap.addEventListener("click" , () => {
    document.body.style.background = `linear-gradient(130deg, ${nast_div_bac_inp_col_1.value}, ${nast_div_bac_inp_col_2.value})`
    let siz = 25

    if (nast_div_bac_stroke_siz.value <= 0) {
        siz = 0
        nast_div_bac_stroke_siz.value = 0
    }
    else if (nast_div_bac_stroke_siz.value >= 100) {
        siz = 100
        nast_div_bac_stroke_siz.value = 100

    }
    else {
        siz = nast_div_bac_stroke_siz.value
    }

    her_div.style.boxShadow = `0px 0px ${siz}px ${nast_div_bac_stroke_col.value}`

    
})


// on scr
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


// CACLC CREATE
let calc_app_ce = document.createElement("div");

get_button_calc.addEventListener("click", ()  => {

    if (cal_app_ktc == 0) {

        calc_app_ce.innerHTML = `<div id="calc_app" class="apps_div calc_app"> <h1> Calculator </h1>  </div>`;

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




en_wi_fi_set_but.addEventListener("click", () => {

    pls_en_wi.style.display ="none";
    settings_app_screen.style.display = "flex";
   
})



//TUMB OFF-ON Bluetooth MOD

blt_mod_tumb.addEventListener("click", () => {
    if(blt_mod == 0) {
        blt_mod_tumb.style.backgroundColor = "green";
        blt_mod_tumb_cyc.style.marginLeft = "47%";

        blt_mod = 1

        bltm_mod_icon.style.display = "flex";

    } else if (blt_mod == 1) {

        blt_mod_tumb.style.backgroundColor = "#404040";
        blt_mod_tumb_cyc.style.marginLeft = "-4%";

        blt_mod  = 0

        bltm_mod_icon.style.display = "none";

        
    }
})

// //TUMB OFF-ON Cell Mod

cell_mod_tumb.addEventListener("click", () => {
    if(cell_mod == 0) {
        cell_mod_tumb.style.backgroundColor = "green";
        cell_mod_tumb_cyc.style.marginLeft = "47%";

        cell_mod = 1

        cell_icon.style.display = "flex";

        //Wi-Fi OFF

        wi_fi_mod_tumb.style.backgroundColor = "#404040";
        wi_fi_mod_tumb_cyc.style.marginLeft = "-4%";
  
        wi_fi_icon.style.display = "none"
  
        wifi_mod  = 0

        //Airplan Mod OFF

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        airpalne_mod  = 0

        airplan_mod_icon.style.display = "none";

    } else if (cell_mod == 1) {

        cell_mod_tumb.style.backgroundColor = "#404040";
        cell_mod_tumb_cyc.style.marginLeft = "-4%";

        cell_mod  = 0

        cell_icon.style.display = "none";

        
    }
})

//TUMB OFF-ON  Airplane Mod

airplane_mod_tumb.addEventListener("click", () =>  {
    if (airpalne_mod == 0) {

        airplane_mod_tumb.style.backgroundColor = "green";
        airplane_mod_tumb_cyc.style.marginLeft = "47%";

        airpalne_mod = 1

        airplan_mod_icon.style.display = "flex";

        //wifi off

        wi_fi_mod_tumb.style.backgroundColor = "#404040";
        wi_fi_mod_tumb_cyc.style.marginLeft = "-4%";

        wi_fi_icon.style.display = "none"

        wifi_mod  = 0

        //Cell Mod OFF

        cell_mod_tumb.style.backgroundColor = "#404040";
        cell_mod_tumb_cyc.style.marginLeft = "-4%";

        cell_mod  = 0

        cell_icon.style.display = "none";

        //Bluetooth Mod OFF

        blt_mod_tumb.style.backgroundColor = "#404040";
        blt_mod_tumb_cyc.style.marginLeft = "-4%";

        blt_mod  = 0

        bltm_mod_icon.style.display = "none";

    } else if (airpalne_mod == 1) {

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        airpalne_mod  = 0

        airplan_mod_icon.style.display = "none";

        
    }
})

//TUMB Wi_Fi

wi_fi_mod_tumb.addEventListener("click", () =>  {
    if (wifi_mod == 0) {

        wi_fi_mod_tumb.style.backgroundColor = "green";
        wi_fi_mod_tumb_cyc.style.marginLeft = "47%";

        wi_fi_icon.style.display = "flex"

        wifi_mod = 1

        //Airplan Mod Off

        airplane_mod_tumb.style.backgroundColor = "#404040";
        airplane_mod_tumb_cyc.style.marginLeft = "-4%";

        airpalne_mod  = 0

        airplan_mod_icon.style.display = "none";

        //Cell Mod OFF

        cell_mod_tumb.style.backgroundColor = "#404040";
        cell_mod_tumb_cyc.style.marginLeft = "-4%";

        cell_mod  = 0

        cell_icon.style.display = "none";

    } else if (wifi_mod == 1) {

        wi_fi_mod_tumb.style.backgroundColor = "#404040";
        wi_fi_mod_tumb_cyc.style.marginLeft = "-4%";

        wi_fi_icon.style.display = "none"

        wifi_mod  = 0
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
    if (wifi_mod == 1 || cell_mod == 1) {
        app_stor_app_screen.style.display = "flex"
    } else if(wifi_mod == 0 && cell_mod == 0) {
        pls_en_wi.style.display = "flex"
    }
});


//Settings Tabs Open

walpaper_button.addEventListener("click", () => {
    wallpapers_screen.style.display =  "flex"
})

set_general_button.addEventListener("click", () => {
    alert("Hl@ Chem are")
})
set_accessibility_button.addEventListener("click", () => {
    alert("Hl@ Chem are")
})

set_privacy_button.addEventListener("click", () => {
    alert("Hl@ Chem are")
})



// WALLPERS

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



//WALLPAPERS CLOSE BUT

back_sett_but.addEventListener("click", () => {
    wallpapers_screen.style.display = "none"
    settings_app_screen.style.display = "flex"
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


