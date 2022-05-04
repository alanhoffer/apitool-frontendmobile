const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const PASSWORD_REGEX =  /^[A-Za-z0-9]\w{7,}$/;


const USERNAME_REGEX =  /^[A-Za-z0-9]\w{7,}$/;


const NAMESURNAME_REGEX =  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;


const PHONE_REGEX =  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;


const CITY_REGEX =  /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;


export {EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX, NAMESURNAME_REGEX, PHONE_REGEX, CITY_REGEX};