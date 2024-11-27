import { Component, HostListener } from '@angular/core';
import { categories } from './core/data/cats';
import { FetchmeService } from './core/utilities/fetchme.service';
//import legends from './core/data/gls'; 
import { Observable } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators }  from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Globals } from './core/globals';
import { Fetchnewservice } from './core/newcore/fetchnewservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Variables
  title = 'swgohtool';
  urlparams:any;
  ally_code:any;
  loading = false;

  //Subscriptions
  ships$:Observable<any> = this.fetchNew.ships;
  units$:Observable<any> = this.fetchNew.units;
  playerdata$:Observable<any>= this.fetchNew.playerdata;
  loaded$:Observable<any>= this.fetchNew.loaded;
  //legends$:Observable<any>= this.fetch.legends;
  //events$:Observable<any>= this.fetch.events;
  //eventslow$:Observable<any>= this.fetch.eventslow;
  //gls$:Observable<any>= this.fetch.gls;
  //evnts$:Observable<any>= this.fetch.evnts;
  //evntslw$:Observable<any>= this.fetch.evntslw;
  //guild$:Observable<any>= this.fetch.guild;
  //goodteams$:Observable<any>= this.fetch.goodteams;
  //goodteamslw$:Observable<any>= this.fetch.goodteamslw;
  //cpit$:Observable<any>= this.fetch.cpit;
  //cpitlw$:Observable<any>= this.fetch.cpitlw;
  error$:Observable<any>= this.fetchNew.error;

  //guild1$:Observable<any> = this.fetch.guild1;
  //cpitready$:Observable<any>= this.fetch.cpitready;
  //cpitready_counter$:Observable<any>= this.fetch.cpitready_counter;
  //cpitreadyclose$:Observable<any>= this.fetch.cpitreadyclose;
  //cpitready_counterclose$:Observable<any>= this.fetch.cpitready_counterclose;

 isFeddy = Globals.isFeddy;

  //Form
  checkoutForm:FormGroup = this.formBuilder.group({
    playerid: ''//'142367359','357182769'
  });

  //Form
  inputForm:FormGroup = this.formBuilder.group({
    hideCompleted: false,
    hidecompletedTable: false
  });


  //Subs
  _sub_router:any;

  public constructor(
    private fetch: FetchmeService,
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router,
    private fetchNew:Fetchnewservice
  ) {
      if(Globals.isFeddy){
        Globals.guild = Globals.feddy;
      }
      if(Globals.isDianogas){
        Globals.guild = Globals.dianogas;
      }
      if(Globals.isRooms){
        Globals.guild = Globals.rooms;
      }
      if(Globals.isScarberia){
        Globals.guild = Globals.scarberia;
      }
      this.inputForm.patchValue({
        hideCompleted: this.fetchNew.hidecompletedItemsValue,
        hidecompletedTable: this.fetchNew.hidecompletedValue
      });
 this.inputForm.valueChanges.subscribe(x=>{
  this.fetchNew.changeHideCompleted(x.hidecompletedTable);
  this.fetchNew.changeHideCompletedItems(x.hideCompleted);
  if(this.checkoutForm.controls['playerid'].value){
 this.fetchData();
  }
 // console.log(x);
});
  }

  //Initialisation
  async ngOnInit() {
    this._sub_router = this.route.queryParams.subscribe(async params => {
      this.urlparams = params;
      if (params['playerid']) {
        this.loading = true;
        this.checkoutForm.patchValue({ playerid: params['playerid'] });
        this.ally_code = params['playerid'];
        //await this.fetch.populatePlayer(this.checkoutForm.controls['playerid'].value);
       //this.fetch.changeLoaded(true);
        await this.fetchNew.populatePlayer(this.checkoutForm.controls['playerid'].value);
        this.loading = false;
      }
    });

    //Populate vars that have nothing to do with player
    this.loading = true;
    await this.fetchNew.populateJSON();

    //await this.fetchNew.populateGuild();
    //await this.fetch.populateGuild();
    //await this.fetch.populateShips();
    //await this.fetch.populateUnits();
    //await this.fetch.populateAbilities();
    this.loading = false;
  }

  //Remove subs on destroy
  ngOnDestroy(){
    if(this._sub_router){
      this._sub_router.unsubscribe();
    }
  }

  //Listen for keydown events. Especially on enter
  @HostListener('keydown', ['$event'])
  async fetchData1($event:KeyboardEvent){
    if ($event.key == "Enter" ){
      await this.fetchData();
    }
  }

  //Populate the player
  async fetchData() {
    if (this.urlparams['playerid'] != this.checkoutForm.controls['playerid'].value) {
      this.loading = true;
      this.checkoutForm.patchValue({ playerid: this.checkoutForm.controls['playerid'].value });
      let lnk = `/?playerid=${this.checkoutForm.controls['playerid'].value}`;
      this.router.navigateByUrl(lnk);
    } else {
      this.loading = true;
      //let player = await this.fetch.populatePlayer(this.checkoutForm.controls['playerid'].value);
      await this.fetchNew.populatePlayer(this.checkoutForm.controls['playerid'].value);
      this.loading = false;
    }
  }

  //Prevent form submission
  handleSubmit(e:any){
    e.preventDefault();
  }

  //Change player from the dropdown
  async changeplayer(lnd:any){
    let lnk = `/?playerid=${lnd.ally_code}`;
    this.router.navigateByUrl(lnk);

  }

  
}
