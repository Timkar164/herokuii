import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ii-hack';
  imageError: string;
  isFirstStepOpened: boolean = false;
  isSecondStepOpened: boolean = false;
  isThirdStepOpened: boolean;
  loader: boolean = false;
  isFactorsChecked: boolean = false;
  isFactor1Checked: boolean = false;
  isFactor2Checked: boolean = false;
  isFactor3Checked: boolean = false;
  isFactor4Checked: boolean = false;
  isFactor5Checked: boolean = false;
  isFactor6Checked: boolean = false;
  isFactor7Checked: boolean = false;
  isFactor8Checked: boolean = false;
  isFactor9Checked: boolean = false;
  isFactor10Checked: boolean = false;
  isFactor11Checked: boolean = false;
  isFactor12Checked: boolean = false;
  file:any;
  isTypeCheck: boolean = false;
  isFileLoaded: boolean = false;
  isCheckYes: boolean = false;
  isCheckNo: boolean = false;

  isImageSaved: boolean;
  cardImageBase64: string;
  ngOnInit(){
    this.isThirdStepOpened = false;
  }
  fileChangeEvent(fileInput: any) {
    this.isFileLoaded = true;
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg', 'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpg',
        'image/jpeg',
        'application/pdf',
        'image/png',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        const max_height = 15200;
        const max_width = 25600;

        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };
        
        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

removeImage() {
    this.cardImageBase64 = null;
    this.isImageSaved = false;
}

changeFirstStep(){
  this.isFirstStepOpened = true;
}

changeThirdStep(){
  this.isThirdStepOpened = true;
}

changeSecondStep() {
  let myVar = setTimeout(this.change2ndStep, 7000);
}

selectType(){
  this.isTypeCheck = true;
}

 change2ndStep() {
  this.isFileLoaded =true;
  this.isSecondStepOpened = true;
}
fileChanged(e) {
    this.file = e.target.files[0];
    this.selectType();
}

factor1Check(){
  this.isFactor1Checked = true;
  this.isFactorsChecked = true;
}
factor2Check(){
  this.isFactor2Checked = true;
  this.isFactorsChecked = true;
}
factor3Check(){
  this.isFactor3Checked = true;
  this.isFactorsChecked = true;
}
factor4Check(){
  this.isFactor4Checked = true;
  this.isFactorsChecked = true;
}
factor5Check(){
  this.isFactor5Checked = true;
  this.isFactorsChecked = true;
}
factor6Check(){
  this.isFactor6Checked = true;
  this.isFactorsChecked = true;
}
factor7Check(){
  this.isFactor7Checked = true;
  this.isFactorsChecked = true;
}
factor8Check(){
  this.isFactor8Checked = true;
  this.isFactorsChecked = true;
}
factor9Check(){
  this.isFactor9Checked = true;
  this.isFactorsChecked = true;
}
factor10Check(){
  this.isFactor10Checked = true;
  this.isFactorsChecked = true;
}
factor11Check(){
  this.isFactor11Checked = true;
  this.isFactorsChecked = true;
}
factor12Check(){
  this.isFactor12Checked = true;
  this.isFactorsChecked = true;
}

isStepThirdOpened(){
  this.loader = true;
  let promise = new Promise(resolve => {
    setTimeout(() => {resolve("done!"); this.isThirdStepOpened = true; this.loader = false}, 3000);
  });
  promise.then();
  

}

isCheckAgree(){
  this.isCheckYes = true;
  this.isCheckNo = false;
}
isCheckNotAgree(){
  this.isCheckNo = true;
  this.isCheckYes = false;
}

loadFile(){
}
}

