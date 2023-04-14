import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-img',
  templateUrl: './share-img.component.html',
  styleUrls: ['./share-img.component.scss']
})
export class ShareImgComponent implements OnInit {
  title!:string;
  description!:string;
  createDate!:Date;
  likes!:number;
  imageUrl!:string;

  ngOnInit() {
    this.title = "Pikachu";
    this.description = "Cute pokemon";
    this.createDate = new Date();
    this.likes = 99;
    this.imageUrl = "https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l500.jpg";
  }
}
