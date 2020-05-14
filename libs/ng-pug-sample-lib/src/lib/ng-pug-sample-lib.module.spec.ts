import { async, TestBed } from '@angular/core/testing';
import { NgPugSampleLibModule } from './ng-pug-sample-lib.module';

describe('NgPugSampleLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgPugSampleLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgPugSampleLibModule).toBeDefined();
  });
});
