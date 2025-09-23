import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  submitting = false;
  message = '';

  private endpoint = 'https://formspree.io/f/movngwke'; // replace with your form id

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.http.post(this.endpoint, this.form.value).subscribe({
      next: () => { this.message = 'Message sent — thank you!'; this.form.reset(); this.submitting = false; },
      error: () => { this.message = 'Send failed. You can email me at tejas.gaikwad20177@gmail.com'; this.submitting = false; }
    });
  }
}
