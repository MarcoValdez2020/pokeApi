import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    //angular modules
    CommonModule,
    FormsModule,

    //prime ng modules
    ToolbarModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,

  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
