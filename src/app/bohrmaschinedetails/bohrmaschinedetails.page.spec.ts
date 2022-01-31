import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BohrmaschinedetailsPage } from './bohrmaschinedetails.page';

describe('BohrmaschinedetailsPage', () => {
  let component: BohrmaschinedetailsPage;
  let fixture: ComponentFixture<BohrmaschinedetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BohrmaschinedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BohrmaschinedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
