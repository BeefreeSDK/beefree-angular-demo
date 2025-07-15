import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import BeefreeSDK from '@beefree.io/sdk';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beefree-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beefree-editor.html',
  styles: `
    .editor-container {
      height: 600px;
      width: 90%;
      margin: 20px auto;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
  `
})
export class BeefreeEditor implements OnInit {
  @ViewChild('editorContainer', { static: true })
  editorContainer!: ElementRef;

  async ngOnInit() {
    try {
      const token = await this.getAuthToken(); // Returns full token object

      const bee = new BeefreeSDK(token); // Use the whole object

      await bee.start(
        {
          container: 'beefree-angular-demo',
          language: 'en-US',
          onSave: (pageJson: string, pageHtml: string, ampHtml: string | null, templateVersion: number, language: string | null) => {
            console.log('Saved!', { pageJson, pageHtml, ampHtml, templateVersion, language });
          },
          onError: (error: unknown) => {
            console.error('Beefree error:', error);
          }
        },
        {} // Empty template for starting fresh
      );
    } catch (error) {
      console.error('Beefree initialization failed:', error);
    }
  }

  private async getAuthToken(): Promise<any> {
    const response = await fetch('http://localhost:3001/proxy/bee-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uid: 'demo-user' })
    });
    return await response.json(); // Returns full token object
  }
}
