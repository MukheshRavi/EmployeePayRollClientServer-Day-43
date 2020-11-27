function makeServiceCall(methodType, url, async = true, data = null) 
{
    return new Promise(function (resolve, reject) 
    {
       var xhr = new XMLHttpRequest();
       console.log(methodType+" request sent to the server");
       xhr.onreadystatechange = function()
        {
            if (xhr.readyState === 4) 
            {
                if (xhr.status === 200 || xhr.status === 201)
                {
                    resolve(xhr.responseText);
                } 
                else if (xhr.status >= 400) 
                {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                     });
                }
            }
        }
        xhr.open(methodType, url, async);
        if (data) 
        {
            console.log(JSON.stringify(data));
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data));
        } 
        else xhr.send();
    
    });
 }