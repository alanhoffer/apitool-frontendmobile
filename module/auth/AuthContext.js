import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState, useEffect } from 'react';
import {BASE_URL} from '../Variables/general';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    // State variables for the AuthContext
    const [sessionInfo, setSessionInfo] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    // State arrow functions for the AuthContext (Register, Login, Logout, Check if user is logged in)

    const register = (username, email, password, name, phone, city) => {

        setLoading(true);
        axios.post(`${BASE_URL}register`, {username, email, password, name, phone, city})
        .then(response => { 
            let sessionInfo = response.data;
            setSessionInfo(sessionInfo);
            AsyncStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        }); 
    };

    const login = (username, password) => {
        setLoading(true);
        axios.post(`${BASE_URL}login`, {username, password})
        .then(response => {
            let sessionInfo = response.data;
            setSessionInfo(sessionInfo);
            AsyncStorage.setItem('sessionInfo', JSON.stringify(sessionInfo));
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
    };

    const logout = () => {
        setLoading(true);
        axios.post (`${BASE_URL}logout`, {},
        {
            headers: {Authorization: `Bearer ${sessionInfo.access_token}`}
        }
        ).then (response => {
            AsyncStorage.removeItem('sessionInfo');
            setSessionInfo({});
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    const isLoggedIn = () => {
        try {
            setSplashLoading(true);
            AsyncStorage.getItem('sessionInfo').then(sessionInfo => {
                if(sessionInfo){
                    const response = JSON.parse(sessionInfo);
                    setSessionInfo(response);
                    axios.get(`${BASE_URL}token`, {
                        headers: {Authorization: `Bearer ${response.access_token}`}
                    }).then(response => {
                        setSplashLoading(false);
                    }).catch(error => {
                        setSplashLoading(false);
                        setSessionInfo({});
                        AsyncStorage.removeItem('sessionInfo');
                    }
                    );
                    setSplashLoading(false);
                }
                else{
                    setSplashLoading(false);
                }
            });

           
        }
        catch (error) {
            console.log(error);
            setSplashLoading(false);
        }
    }

    // Check if is logged every time the component is loaded
    useEffect(() => {
        isLoggedIn();
    }, []);
    

    // Return the AuthContext with the state variables and arrow functions
    return(
    <AuthContext.Provider value={{
        isLoading,
        sessionInfo,
        splashLoading,
        register,
        login,
        logout,
    }}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthContext;