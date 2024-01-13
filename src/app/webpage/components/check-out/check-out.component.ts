import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";

@Component({
    selector: 'app-check-out',
    standalone: true,
    templateUrl: './check-out.component.html',
    styleUrls: ['./check-out.component.css','../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent]
})
export class CheckOutComponent {

}
