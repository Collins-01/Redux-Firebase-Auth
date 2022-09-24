import {signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';
import auth from '../firebase_app';
export default class AuthService {
    static async login(email:string, password: string){
        const res = await signInWithEmailAndPassword(auth, email, password);
        return res;
    }
    static async register(email:string, password: string, name: string){
        const response = await createUserWithEmailAndPassword(auth, email, password);
        if(response.user){
          await updateProfile(response.user, {
                    displayName: name,
                });

                return response;
        }
        return null;
        
    }
    static async logOut(){
        try {
            await signOut(auth);
           return true; 
        } catch (error) {
            return false;
        }
    }
}