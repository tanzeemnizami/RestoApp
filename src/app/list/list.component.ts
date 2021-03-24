import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private commonService: CommonService) { }
  show = false;
  allData:any=[]
  ngOnInit(): void {
    this.commonService.getGuest().subscribe((response)=>{
      this.allData = response;
     })
  }
  guestDelete(guest:any){
  this.commonService.deleteGuest(guest).subscribe(()=>{
    this.ngOnInit();
    this.show = true;
    console.log('hii this deleted')
  })
  }
  off(){
    this.show = false;
  }
}
