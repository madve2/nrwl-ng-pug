import { createHostFactory, SpectatorHost } from '@ngneat/spectator/jest';
import { fakeAsync, tick } from '@angular/core/testing';
import { MyComponent } from './my.component';
import { NgPugSampleLibModule } from '@ng-pug-sample/ng-pug-sample-lib';

describe('MyComponent', () => {
  const elements = jest.fn();

  const stripeSpy = ((<any>window).Stripe = jest.fn(() => ({
    elements,
  })));

  let spectator: SpectatorHost<MyComponent>;

  const createHost = createHostFactory({
    component: MyComponent,
    declareComponent: false,
    imports: [NgPugSampleLibModule],
  });

  it('should load Stripe elements', fakeAsync(() => {
    spectator = createHost(`<ng-pug-sample-my></ng-pug-sample-my>`);

    // we'd mock the loading of the stripe script here, but
    // since the component doesn't actually do that now,
    // just call tick()
    tick(301);
    expect(stripeSpy).toHaveBeenCalledWith('my-stripekey');
    expect(elements).toHaveBeenCalledWith((<any>expect).objectContaining({ locale: 'auto' }));
  }));
});
