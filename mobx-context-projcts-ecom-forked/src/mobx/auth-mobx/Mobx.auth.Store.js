import { action, makeAutoObservable, makeObservable, observable } from "mobx";
// import { authService } from "../../servieces/auth/authenticationServiece"

class AuthStore {

    authenticated =  this.getAccessToken() !== null;
   api
    constructor(api) {
       makeAutoObservable(this)
      //  this.startInterval()
      this.api=api
    }


    mobxLogin =async(name, pass)=> {
    const r = await this.api.loginApi(name, pass);
    localStorage.setItem("access_token", r.access_token);
    this.setAuthenticated(true);
  }

  setAuthenticated =(auth)=>{
    this.authenticated=auth
   }

 

   getAccessToken() {
    return localStorage.getItem("access_token");
  }

  isAuthenticated() {
    return this.authenticated;
  }
  

}
export default  AuthStore;