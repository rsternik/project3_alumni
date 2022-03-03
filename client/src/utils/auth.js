// Imports
import decode from 'jwt-decode';

// Class
class AuthService {
  getProfile() {
    return decode(this.getToken());
  }
  // Status logged in
  loggedIn() {
    const token = this.getToken();
    // If token hasn't expired, return `true`
    return token && !this.isTokenExpired(token) ? true : false;
  }
  // Expired token 
  isTokenExpired(token) {
    // Token Expiration Check
    const decoded = decode(token);
    // If token is expired return true
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token has not expired,  return `false`
    return false;
  }
  // Get Token
  getToken() {
    return localStorage.getItem('id_token');
  }
  // Login
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
  // Logout
  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
  }
}

export default new AuthService();
