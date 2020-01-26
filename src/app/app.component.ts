import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { TutorialsComponent} from './tutorials/tutorials.component';
import { EmployeeService } from './employee.service';
import {trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService],
  animations: [
    trigger('groupTrigger', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off=>on',[group([
        animate('4s ease-in', style({
          transform: 'rotate(90deg)'
        })),
        animate('2s ease-in', style({
          width: '50px'
        }))
      ])]),
      transition('on=>off',[group([
        animate('3s ease-in', style({
          transform: 'rotate(360deg)'
        })),
        animate('4s', style({
          opacity: 0
        }))
      ])])]),
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off<=>on', [animate('2s 3s ease-out', style({transform: 'rotate(360deg)'}))])
    ]),
    trigger('heightTrigger', [
      state('noHeight', style({
        height: 0
      })),
      state('fullHeight', style({
        height: '*'
      })),
      transition('noHeight<=>fullHeight', [animate('2s')])
    ]),
    trigger('flyInOut',[
      transition(':enter',[
        style({transform: 'translate(-100%)'}),
        animate('1s', keyframes([
          style({opacity: 0, transform:'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform:'translateX(15px)', offset: 0.3}),
          style({opacity: 1, transform:'translateX(0)', offset: 1.0})
        ]))
      ]),
      transition(':leave',[
        animate('1s', keyframes([
          style({opacity: 1, transform:'translateX(0)', offset: 0}),
          style({opacity: 1, transform:'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform:'translateX(100%)', offset: 1.0})
        ]))
      ]),
    ])

  ]

})
export class AppComponent implements OnInit {
  myName = "Brandon";
  room = {
    state : "on"
  }
  showDiv: boolean =  true;
  heightState:string = "fullHeight";
  userForm:FormGroup;
  constructor(private _formBuilder:FormBuilder){}

  ngOnInit(){
    this.userForm = this._formBuilder.group({
      name: ['Brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      email: [],
      address: this._formBuilder.group({
        street: [],
        city: [],
        postalcode: [null, Validators.pattern('^[1-9][0-9]{4}$')]
      })
    });
  }

  // userForm = new FormGroup({
  //   name: new FormControl(this.myName, [Validators.required,Validators.minLength(4),Validators.maxLength(10)]),
  //   email: new FormControl(),
  //   address: new FormGroup({
  //     street: new FormControl(),
  //     city: new FormControl(),
  //     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
  //   })
  // });
  toggleLights(){
    this.room.state = this.room.state === "on"?"off":"on";
  }

  onSubmit(){
    console.log(this.userForm.value);
  }

  animationStarted(event: any){
    console.log("Start Animation");
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
  }

  animationDone(event: any){
    console.log(event.fromState);
    console.log(event.toState);
    console.log(event.totalTime);
    console.log("End Animation");
  }

  toggleHeight(){
    this.heightState = this.heightState === "noHeight"?"fullHeight":"noHeight";
  }

  toggleDiv(){
    this.showDiv = this.showDiv?false: true;
  }
}
