import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavoritCarsComponent } from './my-favorit-cars.component';

describe('MyFavoritCarsComponent', () => {
  let component: MyFavoritCarsComponent;
  let fixture: ComponentFixture<MyFavoritCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFavoritCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFavoritCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
