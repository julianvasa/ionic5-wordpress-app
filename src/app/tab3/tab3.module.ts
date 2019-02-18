import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,HttpClientModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  providers: [HttpClientModule],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
