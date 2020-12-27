import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-layout",
  template: `
    <main>
    <mat-sidenav-container fullscreen>

      <!-- Sidenav content -->
      <mat-sidenav mode="over" #drawer position="start" style="width: calc(100% - 25em); min-width: 15em">Sidenav content</mat-sidenav>

      <!-- Main content -->
      <mat-sidenav-content fxLayout="column">
          <mat-toolbar role="heading">
            <div fxLayout="row">
              <mat-icon mat-button aria-label="Side nav toggle icon" class="mr-3" fxHide.gt-xs="true" fxShow="true" (click)="drawer.toggle()" disableClose>menu</mat-icon>
              <a routerLink="/" style="text-decoration: none; font-size: x-small; display: grid;">
                <img src="./assets/icons/internet-banking.png" class="my-6" style="width: 44px; height: 44px" alt="icon">
              </a>
              <!-- <span fxLayout="row">
                <mat-icon></mat-icon>
                <div style="" class="p-0">Internt <br/>Banking</div>
              </span> -->
            </div>
            <div style="flex: auto"></div>
            <div fxLayout="row" fxLayoutAlign="end end" class="nav" fxHide.lt-sm="true">
              <a class="nav-link" routerLinkActive [routerLink]="['/pret-bancaire']"  routerLinkActive="active">
                <img src="./assets/icons/hand.png" style="width: 24px; heigth: 24px" alt="hand" class="mat-icon">
                <!-- <img src="./assets/icons/world.svg" style="width: 24px; heigth: 24px" alt="hand" class="mat-icon"> -->
                Prêt bancaire
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/inscription']"  routerLinkActive="active">
                <img src="./assets/icons/subsciption.png" style="width: 24px; heigth: 24px" alt="subsciption.png" class="mat-icon">
                Souscription
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/changement-devis']"  routerLinkActive="active">
                <img src="./assets/icons/money.png" style="width: 24px; heigth: 24px" alt="money" class="mat-icon">
                Changement devise
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/virement']"  routerLinkActive="active">
                <img src="./assets/icons/money-transfer.png" style="width: 24px; heigth: 24px" alt="money-transfer" class="mat-icon">
                Virement
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/recherche']"  routerLinkActive="active">
              <img src="./assets/icons/loupe.png" style="width: 24px; heigth: 24px" alt="loupe" class="mat-icon">
              Recherche
            </a>
            <a class="nav-link" routerLinkActive [routerLink]="['/a-propos']"  routerLinkActive="active">
              <img src="./assets/icons/earth.png" style="width: 24px; heigth: 24px" alt="earth" class="mat-icon">
              A propos
            </a>
            </div>
            <div class="m-1">
              <button mat-stroked-button routerLink="/admin" color="primary">Connexion</button>     
            </div>
          </mat-toolbar>

          <section style="padding: 5em 1rem 1rem">
            <router-outlet></router-outlet>
          </section>  

          <mat-toolbar fxFlexOffset="auto" fxLayout="column" style="hight: 100%" class="px-0">
              <div class="m-4"
                  style="width: 90%"
                  gdAreas="partenaire lien contact"
                  gdRows="auto"
                  gdGap="16px"
                  gdAreas.lt-sm="contact lien | partenaire partenaire"
                  gdRows.lt-sm="auto auto">
                  <div gdArea="partenaire">Partenaires</div>
                  <div gdArea="lien">Liens</div>
                  <div gdArea="contact">Contacts</div>
              </div>
              <div class="w-100 m-0 py-3 bg-primary" style="font-size: medium; text-align: center;">
                  <span>copyright &copy; 2020 <a [href]="'http://alfrednico.github.io/banque'">Internet banking</a> </span>
              </div>

              <!-- <div class="w-100 m-5 bg-primary" style="color:red; font-size: medium; text-align: center;">
              </div> -->
          </mat-toolbar>

        </mat-sidenav-content>
      </mat-sidenav-container>
    </main>
  `,
  styles: [`
    /* .mat-drawer-container[fullscreen] {
      /* bottom: 0 
      position: inherit;
    } */
    /* .mat-drawer-content {
      position: absolute;
      overflow: unset;
      width: 100%;
    } */
    /* .mat-drawer-content[_ngcontent-aof-c136] {
      position: unset;
      overflow: unset;
    } */
    mat-toolbar {
      background: white;
      &span{
        color: white;
      }
    }
    mat-toolbar[role="heading"] {
      height: 64px;
      position: fixed;
    }
    @media (max-width: 599px){
      .mat-toolbar-multiple-rows {
        min-height: auto;
      }
    }
    .nav {
      display:-ms-flexbox;
      display:flex;
      -ms-flex-wrap:wrap;
      flex-wrap:wrap;
      padding-left:0;
      margin-bottom:0;
      list-style:none;
      align-self: baseline;
    }
    .mat-toolbar-row, .mat-toolbar-single-row {
      height: auto;
    }
    .nav-link{ 
      /* display:block; */
      display: inline-grid;
      padding:.5rem .5rem;
      text-decoration:none;
      /* color:#565656;   */
      /* color: #6c757d; */
      font-size: small;
      /* padding: 0 10px 0 10px;   */
      margin: auto;  
    }
    .nav-link>img{
      opacity: 0.5;
    }
    .nav-link:focus,.nav-link:hover{
      /* text-decoration:none;
      background: red;
      top: 0; */
      color:#04a9da;
      background-color:#e1e3e5;
      border-color:#dee2e6 #dee2e6 #fff
    }
    .nav-link:visited,.nav-link:hover>img{
      background-color:#e1e3e5;
      border-color:#dee2e6 #dee2e6 #fff
    }
    /* .nav-link.disabled{
      color:#6c757d;
      pointer-events:none;
      cursor:default
    } */
    .active{
      color:#04a9da;
      opacity: 1;
      background-color:#fff;
      border-color:#dee2e6 #dee2e6 #fff
    }
    .active>img{
      filter:  hue-rotate(92deg);
    }
    
    .mat-icon{
      margin: auto;
    }
    .flex-column{-ms-flex-direction:column!important;flex-direction:column!important}
  `],
})
export class LayoutComponent implements OnInit {
  constructor(private matIconRegistry: MatIconRegistry,
             private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'computer',
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/computer.svg")
    ).addSvgIcon(
      'worldwide',
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/world.svg")
    );
  }

  ngOnInit(): void {
    console.log("value : ", this.getTimer());
  }

  getTimer = (): string => {
    return "Alfred Nico";
  };
}
