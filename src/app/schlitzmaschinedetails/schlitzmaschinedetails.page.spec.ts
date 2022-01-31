import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchlitzmaschinedetailsPage } from './schlitzmaschinedetails.page';

describe('SchlitzmaschinedetailsPage', () => {
  let component: SchlitzmaschinedetailsPage;
  let fixture: ComponentFixture<SchlitzmaschinedetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchlitzmaschinedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchlitzmaschinedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
