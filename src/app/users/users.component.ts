import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
//animations
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
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
