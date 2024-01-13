import { Component } from '@angular/core';
import { NavigationComponent } from "../../common-component/navigation/navigation.component";
import { FooterComponent } from "../../common-component/footer/footer.component";
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { error } from 'console';

@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    providers: [ProductService],
    styleUrls: ['./product.component.css', '../../../css/bootstrap.min.css'],
    imports: [NavigationComponent, FooterComponent, HttpClientModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class ProductComponent {
    loadDataRowIntoModal(selectedProduct: any) {
        console.log(selectedProduct)
        this.newProduct = { ...selectedProduct }
        this.selectedImageName = this.newProduct.image
        this.isModalOpen = true;
        this.addNewFlag = false;
    }
    sucessSave: boolean = false;
    failSave: any;

    closeFailSave() {
        this.failSave = false
    }

    closeSuccessSave() {
        this.sucessSave = false
    }



    ngOnInit(): void {
        //load categories to dropdown after open product component
        this.dataService.getAllCategories().subscribe(
            (data) => {
                this.categories = data
            }
        )


    }

    openAddProductModal() {
        this.newProduct = {
            title: '',
            price: 0,
            description: '',
            image: '',
            category: ''
        }
        
        this.selectedImageName = 'Choose file'
        this.isModalOpen = true
        // this.dataService.getAllCategories().subscribe(
        //     (data) => {
        //         this.categories = data
        //     }
        // )
        this.addNewFlag = true;

    }
    selectedImageName: any;
    onImageSelected(event: any) {
        const fileInput = event.target
        const selectedFile = fileInput.files[0];
        this.selectedImageName = selectedFile.name;
        this.newProduct.image = selectedFile.name;
    }
    newProduct: any = {
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    }
    categories: any;
    addNewFlag: boolean = true
    saveProduct() {

        if (this.addNewFlag) {
            console.log("Trường hợp add new")
            //logic get thông tin từ form và đưa vào cho API add new product
            this.dataService.addProduct(this.newProduct).subscribe(
                //Observable subcribe success and error

                //báo save thành công (Modal đẹp đẹp tí sử bootstrap 4)
                (response) => {
                    console.log(response)
                    this.sucessSave = true
                },
                //báo save thất bại nếu trả về lỗi
                (error) => {
                    console.log(error)
                    this.failSave = true
                }
            )
        } else {
            console.log("Trường hợp update")
            //logic get thông tin từ form và đưa vào cho API add new product
            this.dataService.updatePropductById(this.newProduct).subscribe(
                //Observable subcribe success and error

                //báo save thành công (Modal đẹp đẹp tí sử bootstrap 4)
                (response) => {
                    console.log(response)
                    this.sucessSave = true
                },
                //báo save thất bại nếu trả về lỗi
                (error) => {
                    console.log(error)
                    this.failSave = true
                }
            )
        }


        this.isModalOpen = false
        this.addNewFlag = true;
    }
    closeAddProductModal() {
        this.isModalOpen = false
    }
    products: any[] = [] //binding this data to HTML
    isModalOpen: boolean = false

    formSearch = {
        id: ""
    }

    constructor(private dataService: ProductService) { }

    //function calls after click search
    onSubmit() {
        this.products = []
        if (this.formSearch.id != "") {
            this.dataService.getProductById(this.formSearch.id).subscribe(
                (response) => { //dữ liệu trả về/response về từ API
                    this.products[0] = response // object
                }
            )
        } else {
            this.dataService.getProducts().subscribe(
                (response) => { //dữ liệu trả về/response về từ API
                    this.products = response
                }
            )
        }

    }

    isDeleteConfirmationModalOpen: boolean = false
    productIDToBeDeleted: string = ""

    confirmDelete(product: any) { // được gọi khi click vào button delete
        this.isDeleteConfirmationModalOpen = true
        this.productIDToBeDeleted = product.id
    }

    deleteProduct() { //được gọi khi click vào 'Yes' trên pop-up confirm delete
        this.dataService.deleteProduct(this.productIDToBeDeleted).subscribe(
            (response) => {
                console.log(response)
                alert("Successfully Deleted")
                this.isDeleteConfirmationModalOpen = false //đóng hộp thoại confirm delete
            }
        )
    }

    cancelDelete() {
        this.isDeleteConfirmationModalOpen = false //đóng pop-up/modal
    }


}
