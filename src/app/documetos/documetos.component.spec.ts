import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumetosComponent } from './documetos.component';

describe('DocumetosComponent', () => {
  let component: DocumetosComponent;
  let fixture: ComponentFixture<DocumetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumetosComponent]
    });
    fixture = TestBed.createComponent(DocumetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
