import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Schlitzmaschine1Page } from './schlitzmaschine1.page';

describe('Schlitzmaschine1Page', () => {
  let component: Schlitzmaschine1Page;
  let fixture: ComponentFixture<Schlitzmaschine1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Schlitzmaschine1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Schlitzmaschine1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
