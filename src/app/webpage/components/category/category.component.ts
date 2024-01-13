import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";

@Component({
    selector: 'app-category',
    standalone: true,
    templateUrl: './category.component.html',
    styleUrl: './category.component.css',
    imports: [NavigationComponent, FooterComponent]
})
export class CategoryComponent {

}
