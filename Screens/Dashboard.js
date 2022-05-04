import { useContext, useEffect  } from 'react';
import { Text } from 'react-native';
import { Pressable } from 'react-native';
import { AuthContext } from '../module/auth/AuthContext';


export default function Dashboard({navigation}){
    const {userInfo, logout} = useContext(AuthContext);

    
    async function getData(){
        
        return fetch('http://192.168.1.169:80/users/' + userInfo.userid, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.access_token}`
            }
        }).then(response => response.json())
        .then(responseJson => {
            // console.log(responseJson);
        }
        ).catch(error => {
            console.log(error);
        }
        );
    }

    if (!userInfo.access_token) {
        navigation.navigate('LoginScreen');
    }
    else{
        useEffect (() => {
            getData(); 
        }
        , []);
    }


    return(
    <>
    <Text>My name, </Text>
    <Pressable onPress={logout}>
        <Text>I'm pressable!</Text>
    </Pressable>
    </>
    )
}