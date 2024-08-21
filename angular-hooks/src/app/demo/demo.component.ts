import { Component ,Input, Output, SimpleChanges, ViewChild ,ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  title : string = "Demo Component"
  @Input() message !: string 
  @ViewChild('temp') tempPara !: ElementRef 
  @ContentChild('temp') paraContent !: ElementRef

  constructor(){
    //console.log("Demo Component constructor is called")
    //console.log(this.title)
    //console.log(this.message)
  }

  ngOnInit(){
    // console.log("ngOnInit hook is called")
  }

  ngOnChanges(changes : SimpleChanges){
    //console.log("ngOnChanges hook is called") 
  }

  ngDoCheck(){
    //console.log("ngDoChecked Hook called")
    //console.log("ngDoCheck hook",this.paraContent)
  }

  ngAfterContentInit(){
    //console.log("ngAfterContentInit hook is called")
    //console.log('ngAfterContentInit hook',this.paraContent.nativeElement)
  }

  ngAfterContentChecked(){
    //console.log("ngAfterContentChecked hook is called")
    //console.log('ngAfterContentChecked hook',this.tempPara)
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit hook is called" )
    //console.log("ngAfterViewInit ",this.tempPara)
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked hook is called")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy hook is called")
  }

}
