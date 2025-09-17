import { HttpHeaders } from "@angular/common/http";

export class HelperHeaders {

         headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
            .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 
     //headers = new HttpHeaders()
          //.set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
            //.set('Access-Control-Allow-Origin', '*')
            //.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            
}
