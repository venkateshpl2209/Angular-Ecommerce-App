import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header-component/header-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: ` <app-header-component class="z-10" />
    <div class="h-[calc(100%-64px)] overflow-auto elevated">
      <router-outlet />
    </div>`,
  styles: [],
})
export class App {}
