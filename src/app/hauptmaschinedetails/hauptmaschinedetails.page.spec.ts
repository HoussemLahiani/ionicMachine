import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HauptmaschinedetailsPage } from './hauptmaschinedetails.page';

describe('HauptmaschinedetailsPage', () => {
  let component: HauptmaschinedetailsPage;
  let fixture: ComponentFixture<HauptmaschinedetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HauptmaschinedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HauptmaschinedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
