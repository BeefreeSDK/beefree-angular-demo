import { Component } from '@angular/core';
import { BeefreeEditor } from './beefree-editor/beefree-editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeefreeEditor],
  template: `
    <div class="app">
      <header class="header">
        <h1>Beefree Angular Demo</h1>
        <a href="https://docs.beefree.io" target="_blank">
          <button class="docs-button">View Documentation</button>
        </a>
      </header>
      <app-beefree-editor />
    </div>
  `,
  styles: `
    .app {
      font-family: system-ui, sans-serif;
      padding: 2rem;
      text-align: center;
    }
    .header {
      margin-bottom: 2rem;
    }
    .docs-button {
      padding: 0.75rem 1.5rem;
      background: #3f51b5;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
      transition: background 0.2s;

      &:hover {
        background: #303f9f;
      }
    }
  `
})
export class App {}
