/** 
 * This file shows the hidden elements when the 
 * content is on screen !!!
 * 
 * This is used in multiple html files:
 * index.html
 * SheetMusic.html
 * 
 */

// (set class to hidden to activate)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));