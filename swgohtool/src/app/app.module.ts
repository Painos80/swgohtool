import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerinfoComponent } from './web/components/playerinfo/playerinfo.component';
import { SwCardComponent } from './web/components/sw-card/sw-card.component';
import { LoadingComponent } from './web/components/loading/loading.component';
import { GeneralcategoryComponent } from './web/components/generalcategory/generalcategory.component';
import { ImageLogoComponent } from './web/components/image-logo/image-logo.component';
import { FooterComponent } from './web/main/footer/footer.component';
import { TabviewComponent } from './web/components/tabview/tabview.component';
import { AccordeonComponent } from './web/components/accordeon/accordeon.component';
import { OmicronComponent } from './web/components/omicron/omicron.component';
import { ModscoreComponent } from './web/components/new/modscore/modscore.component';
import { GuildsComponent } from './web/components/new/guilds/guilds.component';
import { NewitemComponent } from './web/components/new/newitem/newitem.component';
import { NewItemStatsComponent } from './web/components/new/new-item-stats/new-item-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerinfoComponent,
    SwCardComponent,
    LoadingComponent,
    GeneralcategoryComponent,
    ImageLogoComponent,
    FooterComponent,
    TabviewComponent,
    AccordeonComponent,
    OmicronComponent,
    ModscoreComponent,
    GuildsComponent,
    NewitemComponent,
    NewItemStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent], exports: [

  ]
})
export class AppModule { }
