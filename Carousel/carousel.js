class Carousel {
    constructor(element){
        this.element = element;
        // console.log(this.element); 
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.container = element.querySelector('.carousel-container');
        this.containerHidden = element.querySelector('.carousel-hidden');
        this.slides = Array.from(element.querySelectorAll('.slide'));
        this.currentIndex = 0;

        // Grabbing first slide
        const firstSlide= this.slides[0]; 

        // Appending to the carousel container
        this.container.append(firstSlide); 

        // Adding event listener for left 
        this.leftButton.addEventListener('click', () => this.leftButtonClick())

        this.rightButton.addEventListener('click', () => this.rightButtonClick())

    }
    
    leftButtonClick() {
        // Hide the old slide 
        // Put old slide object into variable
        const oldSlide = this.slides[this.currentIndex];
        // Append old slide to hidden container 
        this.containerHidden.append(oldSlide);
        // Change current index, wrapping below 0  
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.slides.length - 1;
        }
        // Display the new slide 
        const newSlide = this.slides[this.currentIndex]; 
        // Append to visible container
        this.container.append(newSlide); 
    }

    // Carousel methods 
    rightButtonClick() {
        // Hide the old slide 
        // Put old slide object into variable
        const oldSlide = this.slides[this.currentIndex];
        // Append old slide to hidden container 
        this.containerHidden.append(oldSlide);
        // Change current index, wrapping below 0  
        this.currentIndex++;
        if(this.currentIndex >= this.slides.length){
            this.currentIndex = 0;
        }
        // Display the new slide 
        const newSlide = this.slides[this.currentIndex]; 
        // Append to visible container
        this.container.append(newSlide); 
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
// console.log(carousel);
