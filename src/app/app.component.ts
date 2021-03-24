import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // userObj:any={
  //   fName: '',
  //   lName: '',
  //   eAddress: '',
  //   pswrd: '',
  //   id: ''
  //  }

  // saveAll:any =[]
  // getData(allData:any){
  //   console.log(allData);
  //   this.commonService.createUser(allData).subscribe((res)=>{
  //   this.getLatestUser();    
  //   })
  //  }
  //  getLatestUser(){
  //    this.commonService.getallUser().subscribe((response)=>{
  //      this.saveAll = response;
  //    })
  //  }
  //  del(user:any){
  //   this.commonService.deleteUser(user).subscribe(()=>{
  //     this.getLatestUser();
  //   })
  // }
  // edt(user:any){
  //   this.userObj= user;
  // }
}
