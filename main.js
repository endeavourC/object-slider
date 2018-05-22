const slider = {
    imagesLength: $('.gallery').find('div').length,
    image: $('.slider').find('img'),
    sliderPopUp: $('.slider'),
    animateDuration: 700,
    currentImage: null,

    showSlider: function (e) {
        this.sliderPopUp.fadeIn(400);
        this.currentImage = e.target.dataset.value;
        this.image.eq(this.currentImage).fadeIn(400).siblings('img').fadeOut(400);

    },

    hideSlider: function () {
        this.sliderPopUp.fadeOut(400);
        this.image.fadeOut(400);

    },
    rightArrow: function () {
        this.currentImage++;
        if (this.currentImage === this.imagesLength) {
            this.currentImage = 0;
        }
        this.image.eq(this.currentImage).fadeIn(400).siblings('img').fadeOut(400);
    },
    leftArrow: function () {
        this.currentImage--;
        if (this.currentImage === -1) {
            this.currentImage = this.imagesLength - 1;
        }
        this.image.eq(this.currentImage).fadeIn(400).siblings('img').fadeOut(400);
    },
    startSlider: function () {
        $('.gallery div').on('click', this.showSlider.bind(this));
        $('.fa-times-circle').on('click', this.hideSlider.bind(this));
        $('.fa-arrow-circle-right').on('click', this.rightArrow.bind(this));
        $('.fa-arrow-circle-left').on('click', this.leftArrow.bind(this));
    }
};
slider.startSlider();
