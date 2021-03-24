import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl,FormGroup } from '@angular/forms';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

   show = false;
  constructor(private commonService: CommonService){}
  profileForm = new FormGroup({
    fullName: new FormControl(''),
    emailAddress: new FormControl(''),
    mobileNumber: new FormControl(''),
    guestAddress: new FormControl('')

  });
  
  onSubmit(){
     
     this.commonService.createGuest(this.profileForm.value).subscribe((response)=>{
      console.log(this.profileForm.value);
      this.show = true;
      this.profileForm.reset({});
     })
  }
  off(){
    this.show = false;
  }

  ngOnInit(): void {}
 
}
