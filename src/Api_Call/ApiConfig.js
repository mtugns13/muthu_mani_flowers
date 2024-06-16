import axios from "axios"


export function getCallWithoutReducer(url, inputJson, onSuccss, onError){
    return (
        axios.get(url,{
            params : inputJson,
            headers:{
                'Content-Type' : "application/json",
                'Accept':"application/json"
            }
        }).then((res)=>{
             onSuccss(res)
             return (res.data.data)
        })
    )}
    

    export function postCallWithoutReducer(url, inputJson, onSuccess, onError, params){
        return (
            axios.post(url,inputJson, {
                params : params,
                headers:{
                    'Content-Type' : "application/json",
                    'Accept':"application/json"
                }
            }).then((res)=>{
                 onSuccess(res) 
            })
        )}