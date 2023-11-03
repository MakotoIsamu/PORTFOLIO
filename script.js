
productPageHeadings();


function productPageHeadings(){
    // Select all elements with the class "elem"
    const elemElements = document.querySelectorAll('.elem');

    // Loop through each "elem" element and add mouseenter event listeners
    elemElements.forEach((elem) => {
        const textElement = elem.querySelector('.text');
        elem.addEventListener('mouseenter', () => {
            // Use GSAP to animate the text element
            gsap.to(textElement, {
                opacity: 0.5,
                x: 50, // Translate 50px on the X-axis
                duration: 0.3, // Duration of the animation
            });
        });

        elem.addEventListener('mouseleave', () => {
            // Reset the animation when the mouse leaves the element
            gsap.to(textElement, {
                opacity: 1, // Reset opacity
                x: 0, // Reset X-axis translation
                duration: 0.3,
            });
        });
    });

}

gsap.to('.hehehe',{
    transform: 'translateX(-100%)',
    fontWeight: 300,
    scrollTrigger: {
        trigger: '.about',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -200%',
        scrub: 3,
        pin: true
    }
})

function animateHeroSection() {
    // Create a GSAP timeline for the animations
    const tl = gsap.timeline();

    tl.from('nav span , .rightnav_img', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3
      });
  
    // Animation for the first name element
    tl.from('#firstName h1', {
      y: -50,
      opacity: 0,
      duration: 0.8,
    });
  
    // Animation for the last name and location elements
    tl.from('#lastName h1, #lastName h5', {
      x: 100,
      opacity: 0,
      duration: 0.8,
    });
  
    // Animation for the availability elements
    tl.from('#availability h4', {
      y: 20,
      opacity: 0,
      duration: 0.6,
    });
  
    // Animation for the "home_footer" elements
    tl.from('#home_footer p , .home_footer_img', {
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2, // Add a stagger effect
    });
  
    // Add a ScrollTrigger to trigger the animation when the hero section is in view
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top 80%", // Adjust this start point as needed
      end: "center center", // Adjust this end point as needed
      animation: tl,
    });
  }
  
  animateHeroSection();

  function animateProjectsSection() {
    // Create a GSAP timeline for the animations
    const tl = gsap.timeline();
  
    // Define the elements to animate
    const elements = document.querySelectorAll(".elem");
  
    // Animation for elements coming from the left
    elements.forEach((elem, index) => {
      const direction = index % 2 === 0 ? -1 : 1; // Alternate left and right
  
      tl.from(elem, {
        x: 1000 * direction,
        opacity: 0,
        duration: 0.8,
        delay: 0.3 * index,
      });
    });
  
    // Add a ScrollTrigger to trigger the animation
    ScrollTrigger.create({
      trigger: ".projects",
      start: "top 80%", // Adjust this start point as needed
      end: "center center", // Adjust this end point as needed
      animation: tl,
      toggleActions: "play none none none",
    });
  }
  
  animateProjectsSection();

  