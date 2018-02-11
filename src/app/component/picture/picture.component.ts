import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  @ViewChild('fileInput') fileInput;

  imageData: any;
  isImageSelected = false;

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }
  readUrl(event) {
    if (event.target.files && event.target.files[0]) {
      this.isImageSelected = true;
      const reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageData = event.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
