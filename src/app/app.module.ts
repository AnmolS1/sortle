import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { HintComponent } from './hint/hint.component';
import { GuessComponent } from './guess/guess.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileWorkDialog } from './menu/profile-work-dialog/profile-work-dialog.component';
import { ProfileViewDialog } from './menu/profile-view-dialog/profile-view-dialog.component';
import { DelAccDialog } from './menu/delacc-dialog/delacc-dialog.component';
import { GameOverDialog } from './game/game-over-dialog/gameoverdialog.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		GameComponent,
		StartComponent,
		HintComponent,
		GuessComponent,
		MenuComponent,
		ProfileWorkDialog,
		ProfileViewDialog,
		DelAccDialog,
		GameOverDialog,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,

		FlexLayoutModule,
		MatCardModule,
		MatListModule,
		MatDividerModule,
		MatToolbarModule,
		MatAutocompleteModule,
		MatInputModule,
		MatFormFieldModule,
		MatDialogTitle,
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
		MatIconModule,
		MatButtonModule,
		MatMenuModule,
		MatTabsModule,
		MatTableModule,
	],
	providers: [
		CookieService,
		provideAnimationsAsync(),
	],
	bootstrap: [AppComponent]
})
export class AppModule { }