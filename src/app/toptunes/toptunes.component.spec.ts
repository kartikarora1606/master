import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToptunesComponent } from './toptunes.component';

describe('ToptunesComponent', () => {
  let component: ToptunesComponent;
  let fixture: ComponentFixture<ToptunesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptunesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToptunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
