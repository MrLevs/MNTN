"use strict"
//-------------------Scroll-----------------------
const scroll = document.querySelector('#scroll');
const content = document.querySelector('#content');
scroll.addEventListener('click', scrollDown);
function scrollDown(e) {
    e.preventDefault();
    let elemCord = content.getBoundingClientRect();
    let elemTop = Math.abs(elemCord.top - 150);
    scrollBy({
        top: elemTop,
        left: 0,
        behavior: 'smooth'
    });
}
//-------------------Parallax--------------------
window.onload = function() {
    const parallax = document.querySelector('#parallax');
    if(parallax) {
        const clouds = document.querySelector('#clouds');
        const mountain = document.querySelector('#mountain');
        const human = document.querySelector('#human');

        //Coefficient
        const forClouds = 40;
        const forMountain = 20;
        const forHuman = 10;

        //Speed Animation
        const speed = 0.05;

        let positionX = 0;
        let positionY = 0;
        let coordXprocent = 0;
        let coordYprocent = 0;

        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);

            //Style
            clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
            mountain.style.cssText = `transform: translate(${positionX / forMountain}%,${positionY / forMountain}%);`;
            human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', function(e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });

        // Parallax Scroll
        let thresholdSets = [];
        for (let i = 0; i <= 1.0; i += 0.005) {
            thresholdSets.push(i);
        }
        const callback = function () {
            const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
            setParallaxItemsStyle(scrollTopProcent);
        };
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets
        });

        observer.observe(content);

        function setParallaxItemsStyle(scrollTopProcent) {
            mountain.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 6}%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopProcent / 3}%);`;
        }
    }
}
