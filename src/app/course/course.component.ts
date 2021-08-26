import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = [
    {'id':1, 'name':'Learn Angular', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, hic officiis voluptas nihil voluptates dolorum cum!', 'image':'../../assets/angular.jpg'},
    {'id':2, 'name':'Learn React', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, hic officiis voluptas nihil voluptates dolorum cum!', 'image':'../../assets/react.png'},
    {'id':3, 'name':'Learn TypeScript', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, hic officiis voluptas nihil voluptates dolorum cum!', 'image':'../../assets/typescript.png'},
    {'id':4, 'name':'Learn NodeJS', 'description': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, hic officiis voluptas nihil voluptates dolorum cum!', 'image':'../../assets/nodejs.png'}
  ]

}
