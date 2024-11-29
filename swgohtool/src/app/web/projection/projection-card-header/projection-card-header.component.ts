import { Component, Input } from '@angular/core';
import { Calculations } from 'src/app/core/classes/calculations';

@Component({
  selector: 'app-projection-card-header',
  templateUrl: './projection-card-header.component.html',
  styleUrls: ['./projection-card-header.component.scss']
})
export class ProjectionCardHeaderComponent {
  @Input() ngClass:string | undefined;
  @Input() url:string | undefined;
  @Input() item:any | undefined;
  @Input() text:string | undefined;

  calc:Calculations = new Calculations();
}
