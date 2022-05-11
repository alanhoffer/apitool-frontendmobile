export async function getUser(sessionInfo){
        
    return fetch('http://192.168.1.169:80/users/' + sessionInfo.userid, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionInfo.access_token}`
        }
    }).then(response => response.json())
    .catch(error => {
        console.log(error);
    }
    );
}