axios({
    url: url,
    method: "GET",
    params: paramsdata,
    //响应头
    headers: {
       "Access-Control-Allow-Origin": "*",
    },
    }).then(function (res) {
       console.log("返回的结果", res.data);
    });
