import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ChatComponent } from './components/chat/chat.component';
import { NetworkComponent } from './components/network/network.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminComponent } from './components/admin-page/admin-page.component';
import { authGuard } from './services/auth/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'network', component: NetworkComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'notifications', component: NotificationsComponent },
    {
        path: 'admin', component: AdminComponent, canActivate: [authGuard]
    },
    {
        path: 'home', redirectTo: ''
    }
];
