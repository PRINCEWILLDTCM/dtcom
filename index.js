// ================================================================variables
var navMenu = document.querySelector('.nav-menu');
let menuItems = document.querySelector(".nav-menu-items");
var navSpans1 = document.getElementById('nav-span1')
var navSpans2 = document.getElementById('nav-span2')
var navSpans3 = document.getElementById('nav-span3')
 
menuItems.innerHTML =''
menuItems.classList.remove('nav-menu-items')

navMenu.addEventListener('click', function(){

if (menuItems.innerHTML == ''){
        menuItems.innerHTML = 
    `<div class="nav-menu-links">
        <a href="index.html" class="text-decoration-none">Home</a>
        <a href="#about-loction" class="text-decoration-none">About Me</a>
        <a href="#learn-more" class="text-decoration-none">Services</a>
        <a href="#cookies" class="text-decoration-none">CV</a>
        <a href="#cloudDepl" class="text-decoration-none">Newsletter</a>
        <a href="" class="text-decoration-none">Contact</a>
    </div>
    `
    menuItems.classList.add('nav-menu-items')
    navMenu.innerHTML = `<button id='times'>&times;</button>`
} else {
    menuItems.innerHTML = ''
    menuItems.classList.remove('nav-menu-items')
    navMenu.innerHTML = 
    `<span id="short-line-menu-one"></span>
        <span></span>
        <div id="menu-design">
            <span id="dot-menu-alt"></span>
            <span id="short-line-menu"></span>
        </div>
    `
}
})

// ===========================================================newletter
const inputText = document.querySelector('#input-text');
const inputEmail = document.querySelector('#input-email');
var subscribeBtn = document.querySelector('#subscribe-btn');
var errorEl = document.querySelector('#errorEl');
var newletterSection = document.getElementById('newsletter-section');

subscribeBtn.addEventListener('click', function(e){
    e.preventDefault()
    if (inputText.value == '' || inputEmail.value == '') {
        errorEl.innerHTML = '<p>Please enter feilds bellow</p>'
        
        setTimeout(() => {
            errorEl.innerHTML = ''
        }, 3000);
    } else{
        newletterSection.innerHTML = '<p id="success">YOU HAVE SUCCESSFULLY SUBSCRIBED TO OUR NEWSLETTER</p>'
        console.log(inputText.value);
        console.log(inputEmail.value);
    }
})

// ============================================================my cv
var learnMore = document.getElementById('learn-more');

learnMore.addEventListener('click', function(e){
    e.preventDefault()
    location.replace('cv.html');
})

// ====================================================cookies pop up
const cookiesContents = document.getElementById('cookies');


setTimeout(() => {
    cookiesContents.innerHTML = `<div id="cookies-content">
    <p>
    This website uses cookies to improve its features.
    by clicking ok means you have agreed to all cookies!
    <br>
    <br>
    <button onclick='cookies_btn()' id="cookies-btn">Ok</button>
    </p>
</div>`
}, 6000);

function cookies_btn() {
    cookiesContents.classList.add('hideCookies')

}

// =================================== NAV LINKS AT => MD =============================

// ============ NAV LNIKS VARIABLES ================================
var homeBtn = document.getElementById("home-btn");
var aboutBtn = document.getElementById("about-btn");
var serviceBtn = document.getElementById("service-btn");
var cvBtn = document.getElementById("cv-btn");
var homeBtn = document.getElementById("home-btn");
var newletterBtn = document.getElementById("newsletter-btn");
var contactBtn = document.getElementById("contact-btn");
var aboutSection = document.getElementById('about-section')

//===================== HOME BUTTON DISPLAY FUNCTION ===============
homeBtn.addEventListener('click', function(){
    location.replace('index.html')
})

//===================== ABOUT BUTTON DISPLAY FUNCTION ===============
aboutBtn.addEventListener('click', function(){
    location.replace("#about-loction")
    aboutBtn.style.color = '#0ef'
    serviceBtn.style.color = '#fafafa'
    homeBtn.style.color = '#fafafa'
    homeBtn.style.transition = '0.2s'
    aboutBtn.style.transition = '0.2s'
    cvBtn.style.color = '#fafafa'
    newletterBtn.style.transition = '0.2s'
    newletterBtn.style.color = '#fafafa'
})

//===================== SERVICE BUTTON DISPLAY FUNCTION ===============
serviceBtn.addEventListener('click', function(){
    location.replace('#learn-more')
    serviceBtn.style.color = '#0ef'
    homeBtn.style.color = '#fafafa'
    aboutBtn.style.color = '#fafafa'
    homeBtn.style.transition = '0.2s'
    aboutBtn.style.transition = '0.2s'
    serviceBtn.style.transition = '0.2s'
    cvBtn.style.color = '#fafafa'
    newletterBtn.style.color = '#fafafa'
    newletterBtn.style.transition = '0.2s'
})

//===================== CV BUTTON DISPLAY FUNCTION ===============
cvBtn.addEventListener('click', function(){
    location.replace('#cookies')
    cvBtn.style.color = '#0ef'
    serviceBtn.style.color = '#fafafa'
    homeBtn.style.color = '#fafafa'
    aboutBtn.style.color = '#fafafa'
    newletterBtn.style.color = '#fafafa'
    homeBtn.style.transition = '0.2s'
    aboutBtn.style.transition = '0.2s'
    cvBtn.style.transition = '0.2s'
    newletterBtn.style.transition = '0.2s'
    serviceBtn.style.transition = '0.2s'
})

//===================== NEWSLETTER BUTTON DISPLAY FUNCTION ===============
newletterBtn.addEventListener('click', function(){
    location.replace('#cloudDepl')
    newletterBtn.style.color = '#0ef'
    cvBtn.style.color = '#fafafa'
    serviceBtn.style.color = '#fafafa'
    homeBtn.style.color = '#fafafa'
    aboutBtn.style.color = '#fafafa'
    homeBtn.style.transition = '0.2s'
    aboutBtn.style.transition = '0.2s'
    cvBtn.style.transition = '0.2s'
    newletterBtn.style.transition = '0.2s'
    serviceBtn.style.transition = '0.2s'
})


