import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer>
      <div class="footer-container max-width">
        <div class="left-container">
          <div>
            <p><b>PRODUITS</b></p>
            <a routerLink="/products/electronics">Electronique </a>
            <a routerLink="/products/jewelery">Electronique </a>
            <a routerLink="/products/men's clothing">Electronique </a>
            <a routerLink="/products/women's clothing">Electronique </a>
          </div>
          <div>
            <p><b>LIENS</b></p>
            <a href="https://youtu.be/hiTGJtfPIdy" target="blank"
              >Tutorial YouTube</a
            >
            <a href="https://youtu.be/hiTGJtfPIdy" target="blank"
              >Tutorial YouTube</a
            >
            <a href="https://youtu.be/hiTGJtfPIdy" target="blank"
              >Tutorial YouTube</a
            >
          </div>
        </div>

        <p>
          <b>ngDuka {{ date.getFullYear() }} </b>
          Développé par Toussaint, propulsé par malakisi
        </p>
      </div>
    </footer>
  `,
  styles: `
  footer{
    background: #e4e4e4;
}
.footer-container{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 2rem;
    flex-wrap: wrap;
}
.left-container{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;

    a{
        display: block;
        margin: 0.5rem 0;
    }
}
  `,
})
export class FooterComponent {
  date = new Date()
}
