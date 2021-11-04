import {RouterModule,Routes} from '@angular/router';
import {
	TestappComponent,
/*	FruitproductsComponent,
	FruitbannerComponent,
	FruitbannerboxComponent,
	FruitcestaComponent,
	FruitfooterComponent,
	FruittopbarComponent,
	FruitcartComponent,*/
	PagoComponent,
	PrincipalComponent,
	BannerComponent,
	BestsellerComponent,
	DiscountComponent,
	FooterComponent,
	MostwantedComponent,
	SliderComponent,
	TopComponent,
	ShadishopComponent,
	ShopComponent,
	ContactComponent,
	AboutComponent

	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',component:PrincipalComponent},
	{path:'banner',component:BannerComponent},
	{path:'bestseller',component:BestsellerComponent},
	{path:'discount',component:DiscountComponent},
	{path:'footer',component:FooterComponent},
	{path:'mostwanted',component:MostwantedComponent},
	{path:'slider',component:SliderComponent},
	{path:'top',component:TopComponent},
	{path:'shadishop',component:ShadishopComponent},
	{path:'shop',component:ShopComponent},
	{path:'contact',component:ContactComponent},
	{path:'about',component:AboutComponent},
/*	{path:'fruittopbar',component:FruittopbarComponent},
	{path:'fruitproducts',component:FruitproductsComponent},
	{path:'fruitbanner',component:FruitbannerComponent},
	{path:'fruitbannerbox',component:FruitbannerboxComponent},
	{path:'fruitcesta',component:FruitcestaComponent},
	{path:'fruitfooter',component:FruitfooterComponent},
	{path:'fruitcart',component:FruitcartComponent},*/
	{path:'pago',component:PagoComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

