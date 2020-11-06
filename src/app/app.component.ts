import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Bienvenue dnas notre application to {{title}}!
      </h1>
    </div>
    <h2>Nous pouvons vous aidez: </h2>
    <input type="checkbox">
    <label>Recevoir une offre?</label>
    <button aria-label="screen reader only label">clique me !</button>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'prêt banqaire';
}
