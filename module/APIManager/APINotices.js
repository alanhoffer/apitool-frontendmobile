export async function getNotices(sessionInfo){
        
    return fetch('http://192.168.1.169:80/notice', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionInfo.access_token}`
        }
    }).then(response => response.json())
    .then(responseJson => { return responseJson })
    .catch(error => {
        console.log(error);
    }
    );
}