import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: [''],
    })
  }

  ngOnInit() { }

 

  submitForm() {
    var formData: any = new FormData();
    formData.append("name", this.form.value('name').value);

    this.http.post('http://73.19.65.35:3500/api/channel/rmarin', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}