import { Component, OnInit } from '@angular/core';
// import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'relearn';
  // states: Array<String> = ['kathmandu', 'lalitpur ', 'bhaktapur'];
  // user = { 'fname': 'anish', 'lname': 'pokharel' };
  // isEdit: boolean = false;
  // students = [{
  //   Fullname: 'asdfasdf',
  //   Email: 'test@gmail.com',
  //   ContactNo: '9879877',
  //   IsPaid: true,
  //   isEdit: false
  // }, {
  //   Fullname: '324234',
  //   Email: 'data1@gmail.com',
  //   ContactNo: '567567',
  //   IsPaid: true,
  //   isEdit: false
  // }, {
  //   Fullname: 'hjkl',
  //   Email: 'stdf2@gmail.com',
  //   ContactNo: '123123',
  //   IsPaid: true,
  //   isEdit: false
  // }]


  // nayaStudent = {
  //   Fullname: '',
  //   Email: '',
  //   ContactNo: '',
  //   IsPaid: false,
  //   isEdit: true

  // }
  // // people: string[] = []
  // // nameho!: string;
  // // phoneho!: string;
  // // emailho!: string;



  // variable user and some default values
  constructor() { }



  ngOnInit() {

  }


  //   // calling it with method and passing the myForm as Parameters
  //   submitHandler(myForm: any) {
  //     console.log(myForm);

  //     alertify.alert(" you clicked")
  //     // console.log(this.user);
  //     // console.log("Form value is ", myForm.value)
  //   }
  //   addDo() {
  //     this.students.push(this.nayaStudent);
  //     this.nayaStudent = {
  //       Fullname: '',
  //       Email: '',
  //       ContactNo: '',
  //       IsPaid: false,
  //       isEdit: false
  //     }
  //   }

  //   // editStudent(student: any) {
  //   //   if (student.isEdited) {
  //   //     alertify.alert('cannot be edited again ');
  //   //     return;
  //   //   }
  //   //   alertify.confirm('are you sure to edit ', () => {
  //   //     student.isEdited = true;
  //   //     this.nayaStudent = student;
  //   //   }
  //   //   )}


  //   editStudent(student: any,) {
  //     student.isEdit = true;



  //   }

  //   deleteStudent(index: number) {
  //     alertify.confirm('Are You sure to delete', () => {
  //       this.students.splice(index, 1);
  //       alertify.alert("items is deleted");

  //     }, () => {
  //       alertify.alert('you clicked cancel ')
  //     });

  //   }

  // }

}
