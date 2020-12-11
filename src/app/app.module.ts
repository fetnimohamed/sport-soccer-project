import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { LogoComponent } from './component/logo/logo.component';
import { ItemComponent } from './component/item/item.component';
import { BolgComponent } from './component/bolg/bolg.component';
import { VideosComponent } from './component/videos/videos.component';
import { ResultsComponent } from './component/results/results.component';
import { NewsComponent } from './component/news/news.component';
import { WorldCupComponent } from './component/world-cup/world-cup.component';
import { BolgPageComponent } from './component/bolg-page/bolg-page.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { SingleBlogComponent } from './component/single-blog/single-blog.component';
import { PlayerComponent } from './component/player/player.component';
import { AdminComponent } from './component/admin/admin.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { MatchDetailsComponent } from './component/match-details/match-details.component';
import { MatchDisplayComponent } from './component/match-display/match-display.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AddTeamComponent } from './component/add-team/add-team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    LogoComponent,
    ItemComponent,
    BolgComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WorldCupComponent,
    BolgPageComponent,
    MatchesComponent,
    PlayersComponent,
    SingleBlogComponent,
    PlayerComponent,
    AdminComponent,
    SignupComponent,
    LoginComponent,
    AddMatchComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    EditMatchComponent,
    DisplayPlayerComponent,
    MatchDetailsComponent,
    MatchDisplayComponent,
    DisplayUserComponent,
    ReversePipe,
    AddTeamComponent,
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // InMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
