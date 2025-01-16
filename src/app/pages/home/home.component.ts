import { Component } from '@angular/core';
import { ProductListComponent } from "../products/product-list/product-list.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent],
  template: `
    <section align="center" class="hero-section">
      <h2>Bienvenus sur ngDuka</h2>
      <h3>Une boutique en ligne pour le demo http client en Angular</h3>
      <input placeholder="Rechercher dans ngDuka" type="text" />
    </section>

    <app-product-list/>
  `,
  styles: `
  .hero-section{
    background: rgb(230, 121, 121);
    padding: 2rem;
}

input{
    width: 50vw;
    padding: 0.5rem;
    font-size: 1rem;
}
  `,
})
export default class HomeComponent {}
