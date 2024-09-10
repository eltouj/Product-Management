import { Component, AfterViewInit, Renderer2, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ClientServiceService } from 'src/app/services/client/client-service.service';
import { SharedserviceService } from 'src/app/sharedservice.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./style.css']
})
export class AppSideLoginComponent implements AfterViewInit, OnInit {

  commandes: any;
  users: any = '';

  constructor(
    public _shared: ClientServiceService,
    private renderer: Renderer2,
    public shared: SharedserviceService,
    private router: Router,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  isSignUp = true;
  
  ngOnInit(): void {
    this.shared.get_commande().subscribe(
      (data) => {
        this.commandes = data;
        this.users = this.commandes.users;
        console.log('users:', this.users);
      },
      (error) => {
        console.error('Error fetching commandes:', error);
      }
    );
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
    console.log("Form toggled. isSignUp:", this.isSignUp);
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('ngAfterViewInit called'); // Added log
      setTimeout(() => {
        this.initToggleButtons();
      }, 0);
    }
  }

  initToggleButtons() {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    console.log('Elements:', { container, registerBtn, loginBtn }); 

    if (container && registerBtn && loginBtn) {
      this.renderer.listen(registerBtn, 'click', () => {
        this.renderer.addClass(container, 'active');
        console.log("Register button clicked");
      });

      this.renderer.listen(loginBtn, 'click', () => {
        this.renderer.removeClass(container, 'active');
        console.log("Login button clicked");
      });

      console.log("Event listeners added"); 
    } else {
      console.error('Elements not found:', { container, registerBtn, loginBtn });
    }
  }

  client: any = {
    email: '',
    name: '',
    password: ''
  };

  login1: any = {
    email: '',
    password: ''
  };

  erreur=''
  ajout() {
    this.erreur=''
    console.log("i m here")
    if (this.client.email.length < 10 || !(/[a-zA-Z]/).test(this.client.email[0])) {
      this.erreur = 'Enter a valid Email';

    } 
    else if (!this.client.email.includes("@gmail.com")) {
      this.erreur = 'Enter a valid Email';

    }
    else if (this.client.name.length < 2 || !(/[a-zA-Z]/).test(this.client.name[0])) {
      this.erreur = 'Enter a valid Name';
 
    } 
    else if (this.client.password.length < 6 || !(/[a-zA-Z]/).test(this.client.name)) {
      this.erreur = 'Enter a valid Password';

    } 
    else {
  
      for (let user of this.users) { 
        if (user.email === this.client.email) {
          this.erreur = 'Email already exists';
          console.log(user.email)
          break; 
        }}
      }

    if (this.erreur==''){
    this._shared.create_new_client(this.client).subscribe(res => {
      console.log(res);
      window.location.reload();
    });
    this.client.name = '';
    this.client.email = '';
    this.client.password = '';
  }

}
  

  etat=''
  submit() {
    for (let user of this.users) { 
      
      if (user.email === this.login1.email && user.password === this.login1.password) {
        
        this.router.navigate(['/']);
        this.shared.client.name=user.name;
        this.shared.client.id=user.id;
        return;
      }
    }
    this.etat='Verify your informations !'
    console.error('Login failed');
    

  }
  login(): void {
    this.authService.login(this.login1.email, this.login1.password);
  }
  
}
