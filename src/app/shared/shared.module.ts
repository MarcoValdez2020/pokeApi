import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';

import { ToolbarModule } from 'primeng/toolbar';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';


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
    FloatLabelModule,

  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
