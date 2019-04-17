class DriverCarousel {
    constructor(element){
        this.element = element;
        console.log(this.element); 
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.data = this.element.dataset.img; 
        console.log(this.data); 

        // console.log(this.image); 
        // this.data = this.images.dataset.img;
        // console.log(this.data); 


        // this.driverImages = this.images.dataset.img;
        // console.log(driverImages);


        // console.log(this.images);
        // this.driverImages = images.dataset.driver; 
        // this.currentIndex = 0;
        // this.driverImages[0].style.display = 'block';
        this.leftButton.addEventListener('click', () => {this.leftButtonClick()})
        this.rightButton.addEventListener('click', () => { this.rightButtonClick() })
    }

    leftButtonClick(){
        this.driverImages[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.driverImages.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.driverImages[this.currentIndex].style.display = 'block'
    }

    rightButtonClick(){
        this.driverImages[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.driverImages.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.driverImages[this.currentIndex].style.display = 'block'
    }
}

let driverCarousel = document.querySelector('.driver-carousel');
driverCarousel = new DriverCarousel(driverCarousel);
// console.log(driverCarousel);