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

  constructor(private pictureService: PictureService) { }

  ngOnInit() {
  }

  upload() {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
      formData.append("image", fileBrowser.files[0]);
      this.pictureService.upload(formData).subscribe(res => {
        console.log(res)
      });
    }
  }

}
