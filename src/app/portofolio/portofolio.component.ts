import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent {
  targetImg:any='';
  currentIndex:number=0;
  showDetail($event:any):void{
    let Imgs:any[]=Array.from(document.querySelectorAll('.pro img'));
    this.targetImg=$event.target.previousElementSibling;
    this.currentIndex=Imgs.indexOf(this.targetImg);
    let target:string=this.targetImg.getAttribute('src');
    let detailImg:any=document.querySelector('.detail .innerDetail img');
    detailImg.setAttribute('src',target)
    let detailSec:any=document.querySelector('.detail');
    detailSec.classList.remove('d-none');
  }
  hideDetail():void{
    let detailSec:any=document.querySelector('.detail');
    detailSec.classList.add('d-none');
  }
  nextImg():void{
    this.currentIndex++;
    if(this.currentIndex>5){
      this.currentIndex=0;
    }
    let Imgs:any[]=Array.from(document.querySelectorAll('.pro img'));
    let nextIndex:number=this.currentIndex
    let detailImg:any=Imgs[nextIndex];
    let DetailImg:any=document.querySelector('.detail .innerDetail img');
    DetailImg.setAttribute('src',detailImg.getAttribute('src'));
  }
  preImg():void{
    this.currentIndex--;
    if(this.currentIndex<0){
      this.currentIndex=5;
    }
    let Imgs:any[]=Array.from(document.querySelectorAll('.pro img'));
    let nextIndex:number=this.currentIndex
    let detailImg:any=Imgs[nextIndex];
    let DetailImg:any=document.querySelector('.detail .innerDetail img');
    DetailImg.setAttribute('src',detailImg.getAttribute('src'));
  }
}
