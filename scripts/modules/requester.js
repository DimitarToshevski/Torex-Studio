const basicUrl = 'https://baas.kinvey.com/';
const appKey = '/kid_ByC4Pz0wz/';
let authorization = "Basic dXNlcjp1c2Vy";
let requestData = function (collection, items, query, method) {
    if(method === 'POST') {
       authorization = 'Kinvey' + localStorage.getItem('authtoken');
    }
    return $.ajax
    ({
        type: method,
        url: basicUrl + collection + appKey + items + query,
        headers: {
            "Authorization": authorization
        },
        success: (data) => {
        },
        error: (err) => {
            toastr.error(err)
        }
    })
}
export { requestData }
