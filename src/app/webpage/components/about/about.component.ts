import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css','../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent]
})
export class AboutComponent {

}
