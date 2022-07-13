import { Component, Input, OnInit } from '@angular/core';

interface CarouselImages{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-living-carousel',
  templateUrl: './living-carousel.component.html',
  styleUrls: ['./living-carousel.component.css']
})
export class LivingCarouselComponent implements OnInit {

  constructor() { }
  @Input() images: CarouselImages[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 4000; //default 4 second

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages();
    }
  }

  //changes slide in every 3 seconds
  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //sets index of image on dot/indicator click
  selectImage(index: number): void{
   this.selectedIndex = index; 
  } 

  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }else{
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}

