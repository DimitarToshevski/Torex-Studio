const basicUrl = 'https://baas.kinvey.com/';
const appKey = '/kid_ByC4Pz0wz/';
const appPostAuth = 'a2lkX0J5QzRQejB3ejpjZGJkZjA2MGE1ZDA0OWRlYTM3ZGRlOGI4MTViN2E4ZQ==';
let authorization = "Basic dXNlcjp1c2Vy";
let requestData = function (collection, items, query, method, reqBody) {
    if(method !== 'GET') {
       authorization = "Basic " + appPostAuth;
    }
    let req = {
        type: method,
        url: basicUrl + collection + appKey + items + query,
        headers: {
            "Authorization": authorization,
            'Content-Type': 'application/json'
        },
        data: reqBody,
        success: (data) => {
        },
        error: (err) => {
            toastr.error(err)
        }
    };
    return $.ajax(req)
};
export { requestData }
