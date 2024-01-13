import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvertcurrencyService } from './convertcurrency.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-convertcurrency',
    standalone: true,
    providers: [ConvertcurrencyService],
    templateUrl: './convertcurrency.component.html',
    styleUrls: ['./convertcurrency.component.css', '../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule]
})
export class ConvertcurrencyComponent {
    formCurrency: any = {
        inputmoney: 0
    }

    constructor(private convertcurrencyService: ConvertcurrencyService) {
    }

    currencyConvertChange(){
        console.log('Sự kiện change được gọi đến')
        this.convertcurrencyService.getExrateList().subscribe(
            (data) => {
                console.log(data)
                console.log(data.TravelerinformationResponse.travelers.Travelerinformation[0])
            },
            (error) => {
                console.log(error)
            }
        )
    }

}
