import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { BolgComponent } from './component/bolg/bolg.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomeComponent } from './component/home/home.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayersComponent } from './component/players/players.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { DisplayPlayerComponent } from './component/display-player/display-player.component';
import { MatchDetailsComponent } from './component/match-details/match-details.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { AddTeamComponent } from './component/add-team/add-team.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'contact', component: ContactComponent },
{ path: "blog", component: BolgComponent },
{ path: "matches", component: MatchesComponent },
{ path: "players", component: PlayersComponent },
{ path: "Admin", component: AdminComponent },
{ path: "signup", component: SignupComponent },
{ path: "Edit-player", component: EditPlayerComponent },
{ path: "Add-match", component: AddMatchComponent },
{ path: "Add-match/:id", component: AddMatchComponent },
{ path: "Edit-match", component: EditMatchComponent },
  { path: "Add-team", component: AddTeamComponent},
{ path: "Edit-player/:id", component: EditPlayerComponent },
{ path: "diplay-player/:id", component: DisplayPlayerComponent },
{ path: "diplayUser/:id", component: DisplayUserComponent },
{ path: "match-details/:id", component: MatchDetailsComponent },
{ path: "login", component: LoginComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
