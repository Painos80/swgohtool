import { Component } from '@angular/core';
import { Globals } from 'src/app/core/globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isFeddy = Globals.isFeddy;

}
