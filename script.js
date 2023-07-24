var screen = document.getElementById("screen");
lockscreen();
function lockscreen() {
    screen.innerHTML = `
    <div class="lockScreen"> 
        <div class="lockScreen1">
            <div class="time"> 
                <div id="time">13:12:12</div>
                <div id="day">Monday</div>
                <div id="date">12/04/2021</div>
            </div>
            <div class="lock"> <img src="image/lock.png" id="img1" alt=""></div>
        </div>
    </div>
    <div class="unLock">

    </div> `;
    setInterval(() => {
        lockScreenTime()
    }, 1000);
};


function lockScreenTime() {
    let time = document.getElementById("time");
    let day = document.getElementById("day");
    let date = document.getElementById("date");
    let dates = new Date();
    times = dates.toLocaleTimeString();
    dats = dates.toLocaleDateString();
    days = dates.getDay();
    let get_days = get_day(days);
    time.innerHTML = times;
    day.innerHTML = get_days;
    date.innerHTML = dats;

    function get_day(x) {
        switch (x) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }
}

var lock = document.querySelector(".lock");
let homeBTN = document.getElementById("homeBTN");
let lockScreen2 = document.querySelector(".lockScreen");
let unLock = document.querySelector(".unLock");

homeBTN.addEventListener("dblclick", start);
lock.addEventListener("dblclick", start);


function start() {
    lock.innerHTML = `<img src="image/open.png" id="img1" id="img2"  alt="">`;
    lock.classList += " lock1";

    setTimeout(() => {
        lockScreen2.classList += " lockScreen2"
    }, 400);
    unlockScreen();
    homeScreen();
    scroll();
}

function unlockScreen() {
    setTimeout(() => {
        unLock.style.top = '0px';
    }, 300);
    setInterval(() => {
        let a = new Date().getHours();
        if (a < 10) {
            document.getElementById("hr").innerHTML = "0" + a;
        } else {
            document.getElementById("hr").innerHTML = a;
        }
        let b = new Date().getMinutes();
        if (b < 10) {
            document.getElementById("min").innerHTML = "0"+b;
        }
        else{            
            document.getElementById("min").innerHTML = b;
        }
        let undays = new Date().getDay();
        document.getElementById("unday").innerHTML = get_day1(undays);
        document.getElementById("undate").innerHTML = new Date().toLocaleDateString();
        function get_day1(x) {
            switch (x) {
                case 0:
                    return 'Sun, ';
                case 1:
                    return 'Mon, ';
                case 2:
                    return 'Tue, ';
                case 3:
                    return 'Wed, ';
                case 4:
                    return 'Thu, ';
                case 5:
                    return 'Fri, ';
                case 6:
                    return 'Sat, ';
            }
        }
    }, 1000);
}

function homeScreen() {
    unLock.innerHTML = `
        <div class="HomeTab">
            <div class="mainhomeTab">
                <div class="tab_one">
                    <div class="time1">
                        <div id="hr"></div>
                        <div id="colne">:</div>
                        <div id="min"></div>
                    </div>
                    <div class="unday">
                        <div id="unday"></div>
                        <div id="undate"></div>
                    </div>
                    <div class="search">
                        <div class="voice">
                            <img src="image/voice.png">
                        </div>
                        <input type="text" id="google" placeholder="Search">
                        <div class="icon">
                            <img src="image/search.png">
                        </div>
                    </div>
                    <div class="home_row">
                        <div class="box"><img src="image/chrome.png" alt=""><span>chrome</spane></div>
                        <div class="box"><img src="image/insta.png" alt=""><span>Instagram</spane> </div>
                        <div class="box"><img src="image/play_store.png" alt=""><span>play store</spane> </div>
                        <div class="box"><img src="image/Google_Drive.png" alt=""><span>Drive</spane> </div>
                        <div class="box"><img src="image/google_pay.png" alt=""><span>google pay</spane> </div>
                        
                        <div class="box"><img src="image/Radio.png" alt=""><span>Radio</spane></div>
                        <div class="box"><img src="image/googlemaps.jpg" alt=""><span>Map</spane> </div>
                        <div class="box"><img src="image/photo.png" alt=""><span>Gallery</spane> </div>
                        <div class="box"><img src="image/Calculator.png" alt=""><span>Calculator</spane> </div>
                        <div class="box"><img src="image/camera.png" alt=""><span>Camera</spane> </div>
                        
                    </div>  
                </div>
                <div class="tab_two">
                <div class="box"><img src="image/call.png" alt=""><span>Call</spane> </div>
                <div class="box"><img src="image/clock.png" alt=""><span>Clock</spane> </div>
                <div class="box"><img src="image/clone.png" alt=""><span>Clone</spane> </div>
                <div class="box"><img src="image/compass.png" alt=""><span>Compass</spane> </div>
                <div class="box"><img src="image/Duty_World.png" alt=""><span>Duty World</spane> </div>
                
                <div class="box"><img src="image/facebook.png" alt=""><span>Facebook</spane> </div>
                <div class="box"><img src="image/freefire.png" alt=""><span>Free Fire</spane> </div>
                <div class="box"><img src="image/hachar.jpg" alt=""><span>Hachar</spane> </div>
                <div class="box"><img src="image/Hacker-icon.png" alt=""><span>blake Hat</spane> </div>
                <div class="box"><img src="image/Ludo_King.png" alt=""><span>Ludo King</spane> </div>
                
                <div class="box"><img src="image/music.png" alt=""><span>Music</spane> </div>
                <div class="box"><img src="image/phone_pe.png" alt=""><span>Phone Pay</spane> </div>
                <div class="box"><img src="image/photo.png" alt=""><span>Photo</spane> </div>
                <div class="box"><img src="image/pubg.png" alt=""><span>Pubg</spane> </div>
                <div class="box"><img src="image/python.png" alt=""><span>Python</spane> </div>
                
                <div class="box"><img src="image/Radio.png" alt=""><span>Radio</spane> </div>
                <div class="box"><img src="image/recording.png" alt=""><span>Recording</spane> </div>
                <div class="box"><img src="image/roaming.png" alt=""><span>ORoaming</spane> </div>
                <div class="box"><img src="image/Settings.png" alt=""><span>Settings</spane> </div>
                <div class="box"><img src="image/space.png" alt=""><span>Game Space</spane> </div>
                
                <div class="box"><img src="image/twitter.png" alt=""><span>Twitter</spane> </div>
                <div class="box"><img src="image/video.png" alt=""><span>Video</spane> </div>
                <div class="box"><img src="image/weather.png" alt=""><span>Weather</spane> </div>
                
                </div>
            </div>
            <div class="quickHome">
                <div class="do">
                    <div id="do1" class="doA"></div>
                    <div id="do2"></div>
                </div>
                <div class="home_tab">
                    <div class="box"><img src="image/call.png" alt=""> </div>
                    <div class="box"><img src="image/contact.png" alt=""> </div>                    
                    <div class="box"><img src="image/message.png" alt=""> </div>                    
                    <div class="box"><img src="image/files.png" alt=""> </div>                    
                    <div class="box"><img src="image/whatsapp.png" alt=""> </div>                       
                </div>
            </div>
        </div>
    `
}
function scroll() {
    let keys = {
        ArrowRight: false,
        Arrowleft: false,
    }
    let do1 = document.getElementById("do1")
    let do2 = document.getElementById("do2")
    let do3 = document.getElementById("do3")
    let tab_one = document.querySelector(".tab_one");
    let tab_two = document.querySelector(".tab_two");

    window.addEventListener("keydown", function (e) {
        e.preventDefault();
        console.log(e.key);
        keys[e.key = true];
        // kl                                                                                                                         ##         
        if (e.key == 'ArrowRight') {
            tab_one.style.left = "-100%";
            tab_two.style.left = "0px";
            do1.classList = "";
            do2.classList = "doA";
        }
        if (e.key == 'ArrowLeft') {
            tab_one.style.left = "0%";
            tab_two.style.left = "100%";
            do1.classList = "doA";
            do2.classList = "";
        }
    });
    window.addEventListener("keyup", function (e) {
        console.log(e.key);
        keys[e.key = false];
    });

    let homeBTN = document.getElementById("homeBTN");
    homeBTN.addEventListener('click', function () {
        tab_one.style.left = "0%";
        tab_two.style.left = "100%";
        do1.classList = "doA";
        do2.classList = "";
    });
}

