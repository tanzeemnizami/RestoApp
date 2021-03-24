import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  show = false;
  editForm = new FormGroup({
    fullName: new FormControl(''),
    emailAddress: new FormControl(''),
    mobileNumber: new FormControl(''),
    guestAddress: new FormControl('')

  });
  constructor(private router:ActivatedRoute, private commonService:CommonService){}
  ngOnInit(): void {
    this.commonService.getCurrentGuest(this.router.snapshot.params.id).subscribe((response)=>{
    console.log("respone", response);
    this.editForm = new FormGroup({
      fullName: new FormControl(response.fullName),
      emailAddress: new FormControl(response.emailAddress),
      mobileNumber: new FormControl(response.mobileNumber),
      guestAddress: new FormControl(response.guestAddress)
  
    });
    })
  }
  fatchData(){
      console.log(this.editForm.value);
      this.commonService.updateGuest(this.router.snapshot.params.id,this.editForm.value).subscribe((response)=>{
        console.log(response);
        this.show = true;
        this.editForm.reset({});
      })
  }
  off(){
    this.show = false;
  }

}
