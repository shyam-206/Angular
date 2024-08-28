import { Component ,inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  router : Router = inject(Router)
  activeRoute : ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 4.5);
  }

  navigateToCourses(){
    this.router.navigate(['courses'] , {relativeTo : this.activeRoute })
  }
}
