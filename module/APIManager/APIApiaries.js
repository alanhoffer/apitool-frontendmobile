export async function getApiaries(sessionInfo){
        
    return fetch(`http://192.168.1.169:80/apiaries`, {
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

export async function createApiary(sessionInfo, apiary){
    return fetch(`http://192.168.1.169:80/apiaries`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionInfo.access_token}`
        },
        body: JSON.stringify(apiary)
    }).then(response => response.json())
    .catch(error => {
        console.log(error);
    }
    );
}