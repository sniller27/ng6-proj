import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
//animations
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { fadeInAnimation } from '../animations/fadein';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersComponent implements OnInit {

  //an object called user
  users$: Object;
  
  ////create instances of service in order to use it (this is done through DI)?
  constructor(private data: DataService) { }

  //ngOnInit is lifecycle hook
  ngOnInit() {
  	//subscribing to getUsers (observable?)
    this.data.getUsers().subscribe(

      //arrow function : without parameters? or observable? ... binds users object to received data
      data => this.users$ = data 

      //this doesn't work .... ???
      //console.log(data);

		// console.log('wtf');
    );


  }

}
