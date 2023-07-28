import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterationComponent } from './Components/registeration/registeration.component';
import { ProductregisterComponent } from './productregister/productregister.component';
import { AuthGuard } from './Service/auth.guard';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "Registeration", component: RegisterationComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "edit/:id", component: UpdateComponent, canActivate: [AuthGuard] },
  { path: "Productregister", component: ProductregisterComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
