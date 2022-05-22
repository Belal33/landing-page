/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
/* our Variables of  html elmenets*/
let ul = document.querySelector("#navbar__list");
let allSections = document.querySelectorAll("section");
//  allLis = unordered list items

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; allSections.length > i; i++){
    let myLi = document.createElement('li');
    myLi.className = 'menu__link';
    myLi.innerText = `${allSections[i].getAttribute('data-nav')}`;
    // Build menu 
    ul.appendChild(myLi);
};
let allLis = document.querySelectorAll('li');


/* Add class 'your-active-class' to section 
and class'active' to item list
when near top of viewport*/

function addActiveScroll() {
    for (let i = 0; allSections.length > i; i++) {
        let secHead = allSections[i].getBoundingClientRect().top;
        let secbottom = allSections[i].getBoundingClientRect().bottom;
        allSections[i].classList.remove('your-active-class');
        allLis[i].classList.remove('active');
        if (secHead > -100 && secHead < 535   ) {
            // Set sections as active
            allSections[i].classList.add('your-active-class');
            allLis[i].classList.add('active');
        };
    };
}
window.addEventListener('scroll', addActiveScroll);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/



// Scroll to section on link click
for (let i = 0; allLis.length > i; i++) {
    allLis[i].onclick = function () {
        for (let j = 0; allLis > j; j++){
            allLis[j].classList.remove('active');
            allSections[j].classList.remove('your-active-class');
        };
        // Set sections as active
        allLis[i].classList.add('active');
        allSections[i].classList.add('your-active-class');
        allSections[i].scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
        });
    };
};



