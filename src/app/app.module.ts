import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccueilComponent } from './accueil/accueil.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {AuthService} from './services/auth.service';
import {AuthGuardService} from './services/auth-guard.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CheckboxModule, ButtonsModule, InputsModule, IconsModule } from 'angular-bootstrap-md';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { NavbarModule, DropdownModule } from 'angular-bootstrap-md';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreationOuvrierComponent } from './creation-ouvrier/creation-ouvrier.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './accueil/admin/admin.component';
import { SecretaireComponent } from './accueil/secretaire/secretaire.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTooltipModule,
} from '@angular/material';

import { FullscreenService } from './accueil/secretaire/fullscreen.service';

import {

} from '@angular/material';
import { SoftComponent } from './categories/soft/soft.component';
import { BiereComponent } from './categories/biere/biere.component';
import { AperitifComponent } from './categories/aperitif/aperitif.component';
import { CocktailSansAlcoolComponent } from './categories/cocktail-sans-alcool/cocktail-sans-alcool.component';
import { CocktailAvecAlcoolComponent } from './categories/cocktail-avec-alcool/cocktail-avec-alcool.component';
import { Fullscreen1Component } from './accueil/secretaire/fullscreen1/fullscreen1.component';




const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'accueil/admin', component: AdminComponent },
  { path: 'accueil/secretaire', component: SecretaireComponent},
  { path: 'categories/soft', component: SoftComponent },
  { path: 'categories/biere', component: BiereComponent },
  { path: 'categories/aperitif', component: AperitifComponent },
  { path: 'categories/cocktailsansalcool', component: CocktailSansAlcoolComponent },
  { path: 'categories/cocktailavecalcool', component: CocktailAvecAlcoolComponent },
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/signin' }

];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    CreationOuvrierComponent,
    NavbarComponent,
    AdminComponent,
    SecretaireComponent,
    SoftComponent,
    BiereComponent,
    AperitifComponent,
    CocktailSansAlcoolComponent,
    CocktailAvecAlcoolComponent,
    Fullscreen1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    WavesModule.forRoot(),
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    CheckboxModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    MatMenuModule,
    NavbarModule,
    DropdownModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule
  ],
  providers: [AuthService, AuthGuardService, FullscreenService],
  bootstrap: [AppComponent]
})
export class AppModule {}
