import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-pug-sample-my',
  templateUrl: './my.component.pug',
})
export class MyComponent implements OnInit {

  constructor() { }

  private stripe: stripe.Stripe;

  async ngOnInit() {
    await this.loadStripe();

    this.stripe = Stripe('my-stripekey');
    this.stripe.elements({
      locale: 'auto',
    });
  }

  async loadStripe() {
    //in a real app, we'd load the stripe script here
    return new Promise((resolve => {
      setTimeout(resolve, 300);
    }))
  }
}
