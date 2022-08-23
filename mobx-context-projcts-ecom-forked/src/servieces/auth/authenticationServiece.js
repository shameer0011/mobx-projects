const API_URL =' http://localhost:3000'


export class AuthService {
   loginApi=async(email, password)=> {
    // console.log(email, password);
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({email, password}),
    });

    const parsedResponse = await response.json();
    // console.log(parsedResponse, "22");
    if (!response.ok) {
      throw new Error(parsedResponse);
    }

    return parsedResponse;
  }
}
// export const authService = new AuthService();


// this only gpoing to MOBX STORE