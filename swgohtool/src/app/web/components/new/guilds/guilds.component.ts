import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Fetchnewservice } from 'src/app/core/newcore/fetchnewservice';

@Component({
  selector: 'app-guilds',
  templateUrl: './guilds.component.html',
  styleUrls: ['./guilds.component.scss']
})
export class GuildsComponent implements OnInit, OnDestroy {
  // Observable source for data
  datavalues_obs$: Observable<any> = this.fetchNew.datavalues_obs$;

  // Data properties
  allyCode: string | null = null;
  guildsLoaded = false;
  guilds: any[] = [];

  // Subscriptions
  private dataSubscription?: Subscription;
  private queryParamSubscription?: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fetchNew: Fetchnewservice
  ) { }

  ngOnInit(): void {
    this.guilds = [];

    this.subscribeToQueryParams();
    this.subscribeToDataValues();
  }

  ngOnDestroy(): void {
    this.dataSubscription?.unsubscribe();
    this.queryParamSubscription?.unsubscribe();
  }

  private subscribeToQueryParams(): void {
    this.queryParamSubscription = this.route.queryParams.subscribe(params => {
      const playerId = params['playerid'];
      if (playerId) {
        this.allyCode = playerId;
      }
    });
  }

  private subscribeToDataValues(): void {
    this.dataSubscription = this.datavalues_obs$.subscribe(async data => {
      if (!data?.guilds?.values) return;

      const incomingGuilds = data.guilds.values;

      if (this.guildsLoaded && this.guilds.length === incomingGuilds.length) {
        return;
      }

      this.guilds = [];
      this.guildsLoaded = true;

      for (const guild of incomingGuilds) {
        if (guild.enabled) {
          try {
            const generatedGuild = await this.fetchNew.generateGuild(guild.id);
            const exists = this.guilds.some(existing => existing.id === generatedGuild.id);

            if (!exists) {
              this.guilds.push(generatedGuild);
            }
          } catch (error) {
            console.error(`Failed to generate guild with ID ${guild.id}:`, error);
          }
        }
      }
    });
  }

  // Navigates to another player by ally code
  async changePlayer(selected: { ally_code: string }): Promise<void> {
    const link = `/?playerid=${selected.ally_code}`;
    await this.router.navigateByUrl(link);
  }

  // Utility ID generators
  generateButtonId(index: number): string {
    return `guilds-container-row-button-${index}`;
  }

  generateULId(index: number): string {
    return `guilds-container-row-button-ul-${index}`;
  }

  generateLIId(index: number): string {
    return `guilds-container-row-button-ul-li-${index}`;
  }

  generateLIButtonId(index: number): string {
    return `guilds-container-row-button-ul--li-button-${index}`;
  }

  trackByGuild(index: number, guild: any): string {
    return guild.data?.id ?? index; // or a unique guild identifier
  }

  trackByMember(index: number, member: any): string {
    return member.ally_code; // assuming ally_code is unique
  }
}