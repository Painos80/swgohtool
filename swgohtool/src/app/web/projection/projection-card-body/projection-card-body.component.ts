import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projection-card-body',
  templateUrl: './projection-card-body.component.html',
  styleUrls: ['./projection-card-body.component.scss']
})
export class ProjectionCardBodyComponent {
  @Input() showTable:boolean | undefined;
  @Input() maxheight:boolean | undefined;

style={"overflow-x": 'auto'};
stylemax={"overflow-x": 'auto',"max-height": '400px'};

ngOnInit(){
  if(this.maxheight){
    this.style = this.stylemax;
  }
}

}
