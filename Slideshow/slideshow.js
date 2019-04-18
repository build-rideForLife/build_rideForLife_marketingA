class Carousel {
    constructor(element){
        this.element = element;
        // console.log(this.element); 
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        
        // console.log(this.images); 
        // this.DriverImages = this.images.dataset.img; 
        // this.data = this.element.dataset.img; 
        // console.log(this.data); 

        // console.log(this.image); 
        // this.data = this.images.dataset.img;
        // console.log(this.data); 


        
         this.currentIndex = 0;
         this.images[0].style.display = 'block';
         this.leftButton.addEventListener('click', () => {this.leftButtonClick()})
         this.rightButton.addEventListener('click', () => { this.rightButtonClick() })
    }

    leftButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    rightButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
//  console.log(Carousel);