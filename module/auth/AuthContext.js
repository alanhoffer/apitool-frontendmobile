import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState, useEffect } from 'react';
import {BASE_URL} from '../variables/general';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {


    // State variables for the AuthContext
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);

    // State arrow functions for the AuthContext (Register, Login, Logout, Check if user is logged in)

    const register = (username, email, password, name, phone, city) => {

        setLoading(true);
        axios.post(`${BASE_URL}register`, {username, email, password, name, phone, city})
        .then(response => { 
            let userInfo = response.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
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
            let userInfo = response.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
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
            headers: {Authorization: `Bearer ${userInfo.access_token}`}
        }
        ).then (response => {
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setLoading(false);
        }).catch(error => {
            console.log(error);
            setLoading(false);
        });
    }

    const isLoggedIn = () => {
        try {
            setSplashLoading(true);
            AsyncStorage.getItem('userInfo').then(userInfo => {
                if(userInfo){
                    const response = JSON.parse(userInfo);
                    setUserInfo(response);
                    axios.get(`${BASE_URL}token`, {
                        headers: {Authorization: `Bearer ${response.access_token}`}
                    }).then(response => {
                        setSplashLoading(false);
                    }).catch(error => {
                        setSplashLoading(false);
                        setUserInfo({});
                        AsyncStorage.removeItem('userInfo');
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
        userInfo,
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