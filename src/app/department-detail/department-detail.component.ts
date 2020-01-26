import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;

  constructor(private _route:ActivatedRoute, private router:Router) { }

  // ngOnInit() {
  //   let id = this._route.snapshot.params['id'];
  //   this.departmentId = id;
  // }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      let id = parseInt(params['id']);
      this.departmentId = id;
    });
  }

  goPrevious(){
    let  PreviousId = parseInt(this.departmentId) - 1;
    //this.router.navigate(['/departments', PreviousId])
    this.router.navigate([PreviousId], {relativeTo:this._route});
  }

  goNext(){
    let  nextId = parseInt(this.departmentId) + 1;
    //this.router.navigate(['/departments', nextId])
    this.router.navigate([nextId], {relativeTo:this._route});
  }

  gotoDepartment(){
    let  selectedId = this.departmentId?this.departmentId:null;
    //this.router.navigate(['/departments', {id:selectedId, random:"random"}])
    this.router.navigate(['../',{id:selectedId, random:"random"}], {relativeTo: this._route});
  }

}
