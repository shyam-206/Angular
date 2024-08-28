import { Component ,inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../../models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})

export class CourseDetailComponent implements OnInit , OnDestroy {

  selectedCourse ?: Course
  courseId !: Number

  courseService : CourseService = inject(CourseService)
  activeRoute : ActivatedRoute = inject(ActivatedRoute)
  paramMapObs : any

  ngOnInit(): void {
    //this.courseId = +this.activeRoute.snapshot.params['id']
    const id = this.activeRoute.snapshot.paramMap.get('id')
    console.log(id)

    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = +data['id']
    //   console.log(this.courseId)
    //   this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)
    // })

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +(data.get('id') || 0)
      this.selectedCourse = this.courseService.courses.find(course => course.id === this.courseId)
    })
  }

  ngOnDestroy(): void {
    this.paramMapObs.unsubscribe()
  }
}
