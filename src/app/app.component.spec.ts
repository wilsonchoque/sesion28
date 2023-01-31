import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });


  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('wilson@gmail.com')
    password.setValue('123456')

    expect(app.formLogin.valid).toBeTruthy();

 
  });
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Login'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Login');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Login');
  });
  

  
});
