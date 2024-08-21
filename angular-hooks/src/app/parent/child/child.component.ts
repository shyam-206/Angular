import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('para') paraEle !: ElementRef
  @ContentChild(TestComponent) testEl !: TestComponent

  stylePara(){
    console.log(this.paraEle.nativeElement)
    console.log(this.testEl.name)
  }
}
