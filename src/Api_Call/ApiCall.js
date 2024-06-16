import { getCallWithoutReducer, postCallWithoutReducer } from './ApiConfig'
import { format } from 'date-fns';
import Home from '../home_page/Home'

export function getData(val) {
    const url = baseUrl+"getAllCustomerDetails"
    val = getCallWithoutReducer(url, null, onSuccessGetData, onError)
    return val;
}

export const baseUrl="http://localhost:8810/";


export const onSuccessGetData = (res) => {
    let datas = (res.data.data)
    return datas
}

export const onError = (res) => {
    let _data = (res.data.data)
    console.log(res.data.data)
    return _data;
}


export const sendSalesData = (payload) => {
    const url = baseUrl+"addSales"
    postCallWithoutReducer(url, payload, onSuccessGetData, onSuccessGetData, null)
}


export function getDaySalesDiff(dat) {
    const url = baseUrl+"salesData?date=" + format(dat, 'yyyy-MM-dd');
    console.log("res")
    let val = getCallWithoutReducer(url, null, onSuccessGetData, onSuccessGetData)
    return val
}
let val;
export function getOutsandPrev(dat) {
    const url = baseUrl+"getPreviousOutStanding?date="+format(dat.date, 'yyyy-MM-dd')+"&id=" +dat.custId;
    console.log("res")
    val = getCallWithoutReducer(url, null, onSuccessGetData, onSuccessGetData).then(e => {

        val = e;
        return e
    })
    return val;
}


export function getOutsand(dat) {
    let val;
    const url = baseUrl+"getOutStanding?id="+dat.custId;
    console.log("res")
    val = getCallWithoutReducer(url, null, onSuccessGetData, onSuccessGetData).then(e => {

        val = e;
        return e
    })
    return val;
}

export function getPartyData(dat) {
    console.log("res")
    if (dat.custId && dat.datt) {
        let url =baseUrl+"getCustomerDetails?id=" + dat.custId + "&date=" + format(dat.datt, 'yyyy-MM-dd');

        console.log("res")
        dat = getCallWithoutReducer(url, null, onSuccessGetData)
        return dat;
    }
}

export function addExpenses(dat) {
    console.log("res")
    if (dat) {
        let url = baseUrl+"addExpences?date=" + format(dat.date, 'yyyy-MM-dd');

        console.log("res")
        dat = postCallWithoutReducer(url, dat, onSuccessGetData, onSuccessGetData, null)
        return dat;
    }
}

export function viewExpenses(dat) {
    console.log("res")
    if (dat) {
        let url = baseUrl+"getExpences?date=" + format(dat.date, 'yyyy-MM-dd');

        console.log("res")
        dat = getCallWithoutReducer(url, dat, onSuccessGetData, onSuccessGetData, null)
        return dat;
    }
}

export function saveCustomerData(val) {
    const url = baseUrl+"addCustomer"
    let payLoad = {
        "shopName": val.shopName,
        "customerMobileNo": val.mobileNumber,
        "address": val.address
    }
   let valu = getData();
    postCallWithoutReducer(url, payLoad, onSuccessGetData, onSuccessGetData, null)
    return valu;
}

export function getProfit(dat) {
    console.log("res")
    if (dat) {
        let url = baseUrl+"getProfit?date=" + format(dat, 'yyyy-MM-dd');

        console.log("res")
        dat = getCallWithoutReducer(url, null, onSuccessGetData)
        return dat;
    }
}
