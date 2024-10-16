@tailwind base;
@tailwind components;
@tailwind utilities;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--txt);
}

html,
body {
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.light-theme {
    --background: url("https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg");
    --primary: #F8FAFC;
    --secondary: #0F172A;
    --txt: black;
    --heading: rgb(118, 49, 255);
    --btn-color: #fff;
    --btn-background: rgb(118, 49, 255);
    --search-background: #000;
    --c: rgb(118, 49, 255);
    --hover_bg_change: backdrop-filter:6px;
}

.dark-theme {
    --background: url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg");
    --primary: rgb(30, 41, 59);
    --secondary: #D5DDF0;
    --txt: #fff;
    --heading: #b72df8;
    --btn-color: #000;
    --btn-background: #7325e7;
    /*  --search-background: #18181b; */
}

body {
    background: var(--background);
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    width: 100% !important;
}

nav {
    height: 70px;
    backdrop-filter: blur(4px);
    border-bottom: 0.1px solid grey;
}

.heading {
    color: var(--heading);
}

nav ul {
    min-width: 378px;
}

.dropdown-li {
    position: relative;
}

ul li ul {
    visibility: hidden;
    opacity: 0;
    position:fixed;
   margin-top: 20px;
    display: none;
    background: var(--primary);
}

.show-dropdown {
    visibility: visible;
    opacity: 1;
    display: block;
    min-width: 250px;
    text-align: left;
    padding-top: 20px;
    box-shadow: 0px 3px 5px -1px var(--heading);
}

.down-arrow-icon {
    height: 16px;
    width: 16px;
    padding-top: 2px;
    transition: 0.2s ease-in-out;
}

.down-arrow-icon>path {
    color: var(--heading) !important;
}

.down-arrow-icon-active {
    transform: rotate(-180deg);
}

.dropdown {
    min-height: 10vh;
    height: 50vh;
    overflow: auto;
    top: 30px;
}

ul li ul li {
    clear: both;
    width: 100%;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    border-style: none;
}

ul li ul li a:hover {
    padding-left: 10px;
    border-left: 2px solid black;
    transition: all 0.3s ease;
}

.flags {
    height: 30px;
    width: 30px;
}

.ham-burger {
    display: none;
    z-index: -100;
    cursor: pointer;
}

.ham-burger:hover {
    cursor: pointer;
}

.ham-open .line-1 {

    transform: translateY(8px) rotate(45deg);
}


.ham-open .line-2 {
    width: 0;
}

.ham-open .line-3 {

    transform: translateY(-7px) rotate(-45deg);
}

.lines {
    width: 30px;
    height: 3px;
    background: var(--heading);
    display: block;
    margin: 5px 0;
    transition: transform 1s, width 0.5s;
}

.checkbox {
    opacity: 0;
    position: absolute;
}

.checkbox-label {
    background-color: #111;
    width: 50px;
    height: 26px;
    border-radius: 50px;
    position: relative;
    padding: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.fa-moon {
    color: rgb(118, 49, 255);
}

.fa-sun {
    color: rgb(118, 49, 255);
}


.checkbox-label .ball {
    background-color: #fff;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
}

.checkbox:checked+.checkbox-label .ball {
    transform: translateX(24px);
}

.search-box {
    background: var(--primary);
    height: 50px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.search-box:focus {
    outline: none;
    border: 2px solid var(--btn-background);
}

.btn {
    background-color: var(--heading);
    color: var(--btn-color);
    width: 130.51px;
    height: 50px;
    border-top-right-radius: 4px;
    margin-left: -2px;
    border-bottom-right-radius: 4px;
}

.pagination-btn {
    background-color: var(--heading);
    color: var(--btn-color);
    width: 130.51px;
    height: 50px;
    font-weight: 900px;
    border-radius: 34px;
}

.everything-card {
    width: 400px;
    height: 500px;
    overflow: hidden;
    border-radius: 15px;
    box-shadow:
        0 4px 20px rgba(0, 0, 0, 0.3),
        /* Soft shadow */
        0 10px 30px rgba(0, 0, 0, 0.2);
    /* Stronger shadow */
    transition: transform 0.2s;
    /* Smooth scaling on hover */
}




.everything-card:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
    background: var(--primary);
    box-shadow: 0 0 11px grey;
}

.everything-card-img {
    width: 270px;
    height: 170px;
    border-radius: 10px;
}

.title {
    font-family: "Freeman", sans-serif;
    font-weight: 400;
    font-size: 22px;
}

footer {
    color: var(--btn-color);
    background: var(--heading);
}

/* Loader */
.loader-container {
    height: 100vh;
    padding: 0;
    align-items: center;
}

.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    color: var(--heading);
    background: radial-gradient(farthest-side, currentColor calc(100% - 6px), #0000 calc(100% - 5px) 0);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 13px), #000 calc(100% - 12px));
    border-radius: 50%;
    animation: l19 2s infinite linear;
}

.loader::before,
.loader::after {
    content: "";
    grid-area: 1/1;
    background:
        linear-gradient(currentColor 0 0) center,
        linear-gradient(currentColor 0 0) center;
    background-size: 100% 10px, 10px 100%;
    background-repeat: no-repeat;
}

.loader::after {
    transform: rotate(45deg);
}

@keyframes l19 {
    100% {
        transform: rotate(1turn)
    }
}

/* Responsive styles */
@media (max-width: 1024px) {
    .cards {
        place-items: center;
    }
}

@media (max-width: 724px) {
    .cards {
        place-items: center;

    }
}

@media only screen and (min-width: 640px) and (max-width: 689px) {
    nav {
        justify-content: space-between !important;
        padding: 0 0% !important;
    }

    nav ul {
        margin: 2px;
    }

    .top-title {
        position: fixed;
    }
}

@media (max-width: 689px) {
    .btn {
        width: 80px;
        height: 40px;
    }

    .search-box {
        height: 39px;
        width: 40%;
    }

    .ham-burger {
        display: block;
    }

    nav ul {
        display: none;
        flex-direction: column;
        position: static;
        top: 0px;
        right: 0;
        width: 50%;
        height: 100vh;
        background-color: var(--primary);
        z-index: 100;
        padding: 25% 10%;
        transition: 0.3s;
    }

    nav ul.active {
        left: 10;
        display: flex;
    }


    .everything-card {
        width: 350px;
    }
}

@media (max-width: 480px) {
    .everything-card {
        width: 95%;
    }
}

img {
    max-width: 100%;
    height: auto;
}

.footer {
    background-color: rgba(255, 255, 255, 0.1);
    /* Navy blue with 50% opacity */
    color: white;

    padding: 1rem;
    font-size: 16px;
    text-align: center;

}


.button {
    color: white;

    transition: border-color 0.3s;
    background-color: rgb(118, 49, 255);
}

.notes {
    margin: 3rem;
    background-color: rgb(118, 49, 255);
    color: white;
}

.notes:hover {
    background-color: rgb(160, 116, 249);
    margin: 2.5px;
}

.button:hover {
    background-color: transparent;
    border: 1px solid rgb(118, 49, 255);
    color: rgb(118, 49, 255);
}

.changeonHover {
    padding: 6px;
}

.changeonHover:hover {
    color: white;
    background-color: rgb(118, 49, 255);
    border-radius: 4px;
}

.pagination-btn:hover {
    background-color: rgb(80, 5, 231);
    margin: 1px;
}


.unsuccess {
    margin: 40px;
    color: red;

}

.successMsg {
    color: green;
}

.unsuccessMsg {
    color: red;
}
