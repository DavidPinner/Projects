/**
 * @version 3.0.0
 * @author Dave Pinner
 * @license MIT
 */


class EasyHTTP {
    // make http GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json()
        return resData;
    }

    // make http post request
    async post(url, data) {
        
        const response =  await fetch(url, {
                            method: 'POST',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            body: JSON.stringify(data)
                            });

        const resData = await response.json()
            return resData;
    }

    // make http put request
    async put(url, data) {
        
        const response =  await fetch(url, {
                          method: 'PUT',
                          headers: {
                              'Content-type': 'application/json'
                          },
                          body: JSON.stringify(data)
                          });

        const resData = await response.json()
        return resData;
    }

    // make http delete request
    async delete(url) {
        
        const response = await fetch(url, {
                         method: 'delete',
                         headers: {
                             'Content-type': 'application/json'
                         }
                         });
        const resData = await 'resource delete';
        return resData; 
    }

    
    


}