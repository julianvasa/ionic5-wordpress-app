import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule, HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  providers: [HttpClientModule],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
