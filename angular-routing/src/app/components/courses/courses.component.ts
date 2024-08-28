import { Component , inject, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/models/course';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{

  coursesService = inject(CourseService);
  AllCourses: Course[] = []
  searchString !: string 

  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.searchString = this.activeRoute.snapshot.queryParams['search']
    console.log(this.searchString)

    if(this.searchString === undefined || this.searchString === '' ||  this.searchString === null){
      this.AllCourses = this.coursesService.courses
    }else{
      this.AllCourses = this.coursesService.courses.filter(x => x.title.toLowerCase().includes(this.searchString.toLowerCase()))
    }
  }

  constructor(){
    
  }

}
