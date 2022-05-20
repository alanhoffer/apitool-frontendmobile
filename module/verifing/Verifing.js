import {EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX, NAMESURNAME_REGEX, PHONE_REGEX, CITY_REGEX} from '../Variables/regex';

export function email(email) {

    if (EMAIL_REGEX.test(email) === false) {
      return false;
    }
    return true;
  }

export function password(password){
    
    if(PASSWORD_REGEX.test(password) === false){
        return false;
    }   
    return true;
}

export function username(username){

    if(USERNAME_REGEX.test(username) === false){
        return false;
    }
    return true;
}

export function name(name){

    if(NAMESURNAME_REGEX.test(name) === false){
        return false;
    }
    return true;
}

export function phone(phone){
    
    if(PHONE_REGEX.test(phone) === false){
        return false;
    }
    return true;
}

export function city(city){

    if(CITY_REGEX.test(city) === false){
        return false;
    }
    return true;
}