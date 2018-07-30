import { Component } from '@angular/core';

import {NgForm} from '@angular/forms';

//httpclient module for making requests
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ////create instances of service in order to use it (this is done through DI)?
  constructor(private data: DataService) { }

  title = 'ng6-proj';

  public open(event, item) {
    // alert('Open ' + item);
    // 
    // this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/`,
    // {
    //   name:'mark',
    //   age: 41
    // })
    // .subscribe(
    //   (data:any) => {
    //     console.log(data);
    //   }
    // )
    // 
  //   this.data.sendPost().subscribe(

  //     //arrow function : without parameters? or observable? ... binds users object to received data
  //     // data => this.users$ = data 

  //     //this doesn't work .... ???
  //     //console.log(data);

		// console.log('wtf');
  //   );

  }

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['first'].value);
    console.log('Name:' + userForm.controls['last'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);

    console.log('hello');
  }
}
