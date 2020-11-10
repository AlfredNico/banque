import { Component, OnInit } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-layout",
  template: `
    <main>
    <mat-sidenav-container fullscreen>
      <mat-sidenav-content fxLayout="column">
          <mat-toolbar role="heading">
            <div>
                <a routerLink="/" style="text-decoration: none; font-size: x-small; display: grid;">
                  <img src="./assets/icons/internet-banking (1).png" class="my-6" style="width: 50px; height: 50px" alt="icon">
                  <!-- <p style="font-size: xx-small" class="my-0">Internet Banking</p> -->
                  <!-- <span >Internet Banking</span> -->
                </a>
            </div>
            <div style="flex: auto"></div>
            <div fxLayout="row" fxLayoutAlign="end end" class="nav" fxHide.lt-sm="true">
              <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
                <img src="./assets/icons/hand.png" style="width: 24px; heigth: 24px" alt="hand" class="mat-icon">
                Prêt bancaire
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
                <img src="./assets/icons/subsciption.png" style="width: 24px; heigth: 24px" alt="subsciption.png" class="mat-icon">
                Souscription
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
                <img src="./assets/icons/money.png" style="width: 24px; heigth: 24px" alt="money" class="mat-icon">
                Changement devise
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
                <img src="./assets/icons/money-transfer.png" style="width: 24px; heigth: 24px" alt="money-transfer" class="mat-icon">
                Virement
              </a>
              <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
              <img src="./assets/icons/loupe.png" style="width: 24px; heigth: 24px" alt="loupe" class="mat-icon">
              Recherche
            </a>
            <a class="nav-link" routerLinkActive [routerLink]="['/materials']"  routerLinkActive="active">
              <img src="./assets/icons/earth.png" style="width: 24px; heigth: 24px" alt="earth" class="mat-icon">
              A propos
            </a>
            </div>
            <div class="m-1">
              <button mat-stroked-button color="primary">Connexion</button>     
            </div>
          </mat-toolbar>

          <router-outlet></router-outlet>

          <mat-toolbar fxFlexOffset="auto">
            <div class="my-3"
                gdAreas="partenaire lien contact"
                gdRows="auto"
                gdGap="16px"
                gdAreas.lt-sm="contact lien | partenaire partenaire"
                gdRows.lt-sm="auto auto"
                >
                <div gdArea="partenaire">Partenaire</div>
                <div gdArea="lien">Line</div>
                <div gdArea="contact">Contacts</div>
            </div>
            <mat-toolbar-row class="bg-info"> 
              <div style="color:red; font-size: medium; text-align: center" class="w-100 m-3">
                <span>copyright &copy; 2020 <a [href]="'http://alfrednico.github.io/banque'">Internet banking</a> </span>
              </div>
            </mat-toolbar-row>
          </mat-toolbar>

        </mat-sidenav-content>
      </mat-sidenav-container>
    </main>
  `,
  styles: [`
    mat-toolbar {
      background: white;
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
    .nav-link{ 
      /* display:block; */
      display: inline-grid;
      padding:.5rem .5rem;
      text-decoration:none;
      /* color:#6c757d;   */
      color: #6c757d;
      font-size: small;
      /* padding: 0 10px 0 10px;   */
      margin: auto;  
    }
    .nav-link:focus,.nav-link:hover{
      /* text-decoration:none;
      background: red;
      top: 0; */
      color:#202325;
      background-color:#e1e3e5;
      border-color:#dee2e6 #dee2e6 #fff
    }
    /* .nav-link.disabled{
      color:#6c757d;
      pointer-events:none;
      cursor:default
    } */
    .active{
      color:#495057;
      background-color:#fff;
      border-color:#dee2e6 #dee2e6 #fff
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
