import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  imports: [RouterLink],
  template: `
    <header class="toolbar-container">
      <div class="toolbar max-width">
        <a routerLink="/"> <h2>NgDuka</h2> </a>
        <div class="card-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path
            d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
          />
        </svg>
        <span>Panier(0)</span>
        </div>
      </div>
    </header>
  `,
  styles: `
.toolbar-container{
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
  padding: 0 1rem;
  border-bottom: 1px solid #e4e4e4;
}
.toolbar{
    height: 48px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card-container{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
}
  `,
})
export class ToolbarComponent {}
