import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MainStore } from 'src/app/Store/main-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'savecash-frontend';
  themeSelection: boolean = false

    constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private mainStore : MainStore){
    this.mainStore.getThemeName().subscribe(v => {
      if(v){
        this.addDynamicStyles(v)
      }
    })
  }


  ngOnInit(): void {

  }

  addDynamicStyles(value: string) {
    const link = this.renderer.createElement('link');
    const theme = value === 'light' ? 'src/theme-md-light-purple.css' : 'src/theme-md-deep-purple.css'
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', theme);
    this.renderer.appendChild(this.document.head, link);
  }

}
