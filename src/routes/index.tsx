import {useState, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import { AppRoutes } from "./app.routes";
import { Loading } from '../components/Loading';
import { SignIn } from '../screens/SignIn';

export function Routes(){
    const [isLoading, setIsLoading] = useState(true);
    const [user,setUser] = useState<FirebaseAuthTypes.User>();
    
    useEffect(()=> {
        const subscriber = auth()
        .onAuthStateChanged(response => {
            setUser(response);
            setIsLoading(false);    
        });
        return subscriber;
    },[]);
    
    if(isLoading){
        return <Loading/>
    }

    return(
        <NavigationContainer>
            {user ? <AppRoutes/> : <SignIn/>}
        </NavigationContainer>
    )
}