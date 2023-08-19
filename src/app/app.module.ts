import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { DirectiveComponent } from './directive/directive.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './communication/input/input.component';
import { OutputComponent } from './communication/output/output.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortTextPipe } from './pipes/short-text.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    DirectiveComponent,
    TwoWayBindingComponent,
    InputComponent,
    OutputComponent,
    PipesComponent,
    ShortTextPipe,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
