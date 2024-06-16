import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorlistComponent } from './warriorlist.component';

describe('WarriorlistComponent', () => {
  let component: WarriorlistComponent;
  let fixture: ComponentFixture<WarriorlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarriorlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WarriorlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
