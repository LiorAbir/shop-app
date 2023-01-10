import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';
import { ImgUploadService } from 'src/app/services/img-upload-service/img-upload.service';

@Component({
  selector: 'add-img',
  templateUrl: './add-img.component.html',
  styleUrls: ['./add-img.component.scss'],
})
export class AddImgComponent implements OnInit {
  constructor(private ImgUploadService: ImgUploadService) {}

  @Output() onUploadImg = new EventEmitter<string>();

  ngOnInit(): void {}

  handleFile(ev: any) {
    const file = ev.target.files[0];
    // console.log(file);

    this.uploadFile(file);
  }

  async uploadFile(file: object) {
    const res = await this.ImgUploadService.uploadImg(file);
    this.onUploadImg.emit(res.url);
  }
}
