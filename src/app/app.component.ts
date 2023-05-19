import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

// import * as alertify from 'alertifyjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: any;
  lineChart1 = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patient'
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Graph hai ',
      data: [20, 30, 21, 54, 212, 12, 43, 54, 65, 67, 98]
    } as any
    ]
  })
  lineChart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patient'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3, 6, 9, 17, 20, 5, 2, 16]
      } as any
    ]
  })
  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
    credits: {
      enabled: false,
    }, plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 2, color: '#eeeeee' },

          { name: 'HIV/AIDS', y: 2, color: '#393e46' },

          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 2, color: '#506ef9' },
        ],
      },
    ],
  })
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
