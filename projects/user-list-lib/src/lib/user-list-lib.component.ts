import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-user-list-lib',
  template: `
   <lib-user userType={{userType}}></lib-user>
  `,
  styles: [
  ]
})
export class UserListLibComponent implements OnInit {

  constructor() { }
  @Input() userType: string;
  ngOnInit(): void {
  }

}
