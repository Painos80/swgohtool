import { Component, Input } from '@angular/core';
//import { FetchmeService } from 'src/app/core/utilities/fetchme.service';
import { Observable } from 'rxjs';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-generalcategory',
  templateUrl: './generalcategory.component.html',
  styleUrls: ['./generalcategory.component.scss']
})
export class GeneralcategoryComponent {
  loaded$:Observable<any>= this.fetchNew.loaded;
  @Input() list:Observable<any> | undefined  ;
 
   public constructor(private fetchNew:Fetchnewservice,
    ){
   

 }
}
