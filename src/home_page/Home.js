import { Button } from "primereact/button"
import { getData, getDaySalesDiff, addExpenses, getProfit, saveCustomerData , viewExpenses,generateReportApi} from "../Api_Call/ApiCall"
import './Home.css'
import Select from 'react-select'
import { useEffect, useState } from "react"
import { InputText } from 'primereact/inputtext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSales from "./AddSales"
import { format } from 'date-fns';
import AddCustomer from "./AddCustomer"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HomePage(props) {
    const [allCustData, setAllCustData] = useState([]);
    const [showSelect, setShowSelect] = useState(false);
    const [selectedButton, setSelectedButton] = useState("");
    const [showCust, setShowCust] = useState(false);
    const [showAddData, setShowAddData] = useState(false);
    const [showGetData, setShowGetData] = useState(false);
    const [shopName, setShopName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [address, setAddress] = useState("");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [custId, setCustId] = useState();
    const [selectedCust, setSelectedCust] = useState("");
    const [date, setDate] = useState(new Date());
    const [transType, setTransType] = useState("sales");
    const [salesDiff, setSalesDiff] = useState();
    const [showSalesDiff, setShowSalesDiff] = useState(false);
    const [petrol, setPetrol] = useState();
    const [luggage, setLuggage] = useState();
    const [profit, setProfit] = useState({});
    const [luggageKeera, setLuggageKeera] = useState();
    const [salary, setSalary] = useState();
    const [shwoExpenseData, setShwoExpenseData] = useState(false);
    const [otherExpense, setOtherExpense] = useState();
    const [showProfit, setShowProfit] = useState(false);
    const [expId, setExpId] = useState(false);


    function compName() {
        return "Muthu Mani Flowers - Pattukkottai"
    }

    const getAllCustDatafromDb = async () => {
        let val;
        val = await getData(val)
        setAllCustData(val)
        console.log(val);
    }


    const addCustClick = () => {
        setShowSelect(showSelect === false ? true : true);
        console.log(allCustData);
    }

    const setSendData = () => {
        let val = {
            "shopName": shopName,
            "mobileNumber": mobileNumber,
            "address": address
        }
        saveCustomerData(val)

        setTimeout(() => {
            setButtonDisabled(false);
        }, 5000);
        setMobileNumber("")
        setAddress("")
        setShopName("")

    }

    const processSelected = (val) => {
        setSelectedCust(val.shopName)

        console.log(val.id)
        allCustData.map((obj => {
            if (val.shopName === obj.shopName) {
                setCustId(obj.id);
                if (val.shopName.toLowerCase().includes("purchase")) {
                    setTransType("purchase")
                } else if (val.shopName.toLowerCase().includes("expense")) {
                    setTransType("expense")
                } else {
                    setTransType("sales")
                }
            }
        }))
    }

    let vari;
    const getSlaesData = async () => {

        vari = await getDaySalesDiff(date);


        console.log(vari);
        setSalesDiff(vari);
        return vari;
    }
    const addExpense = () => {
        let res;
        let val = {
            "expense_id":expId?expId:null,
            "petrol": petrol,
            "salary": salary,
            "luggage": luggage,
            "luggageKeera": luggageKeera,
            "date": format(date, 'yyyy-MM-dd'),
            "otherExpense": otherExpense
        }

        res = addExpenses(val)
        console.log(res);

    }

    const generateReport=()=>{
       generateReportApi();
    }

    const viewExpense = async () => {
        let res;
        let val = {
            "date": format(date, 'yyyy-MM-dd'),
        }

        res = await viewExpenses(val)
        console.log(res);
        setExpId(res.expense_id);
        setPetrol(res.petrol)
        setSalary(res.salary)
        setLuggage(res.luggage)
        setLuggageKeera(res.luggageKeera)

        setOtherExpense(res.otherExpense)

    }

    const clearExpense = () => {
        setExpId("");
        setPetrol("")
        setSalary("")
        setLuggage("")
        setLuggageKeera("")

        setOtherExpense("")
    }

    // const m1hii =(val)=>{
    //     console.log(val)
    // }

    // const m2hii =(val)=>{
    //     console.log(val)
    // }
    // const setSelectedDate = (date)=>{
    //     setDate(date);
    // }



    const getPnl = async (dat) => {
        console.log("fetch pnl")
        if (dat) {
            let dats = await getProfit(dat);
            console.log(dats);
            setProfit(dats);
            console.log(dats && dats.totalProfit);
        }
    }

    const notify = () => {
        toast("Customer Added Successfully", {
            position: "top-left",
        });
    }


    const buttons = () => {

        return <>
            <div className="Buttons">
                <Button className={selectedButton === "1" ? "active" : "abc"} id="1" onClick={(e) => {
                    setShowSelect(false); setShowSalesDiff(false)
                    setSelectedButton(e.target.id); setShowCust(!showCust);
                    setShwoExpenseData(false); setShowProfit(false)
                }}>  {"Add Customer"} </Button>
                <Button className={selectedButton === "2" ? "active" : "abc"} id="2" onClick={(e) => { addCustClick(); getAllCustDatafromDb(); setSelectedButton(e.target.id); setShowCust(false); setShowAddData(true); setShowGetData(false); setShwoExpenseData(false); setShowSalesDiff(false); setShowProfit(false) }} >  {"Add Sales Data"}  </Button>
                <Button className={selectedButton === "3" ? "active" : "abc"} id="3" onClick={(e) => { setSelectedButton(e.target.id); setShowCust(false); setShowAddData(false); setShowGetData(false); setShowSalesDiff(false); setShwoExpenseData(true); setShowSelect(true); setShowProfit(false) }}  >  {"Add Expense"}  </Button>
                <Button className={selectedButton === "4" ? "active" : "abc"} id="4" onClick={(e) => { addCustClick(); getAllCustDatafromDb(); setSelectedButton(e.target.id); setShowCust(false); setShowAddData(false); setShowGetData(true); setShwoExpenseData(false); setShowSalesDiff(false); setShowProfit(false) }} >  {"View Sales/Purchase"} </Button>
                <Button className={selectedButton === "5" ? "active" : "abc"} id="5" onClick={(e) => { setSelectedButton(e.target.id); setShowCust(false); setShowAddData(false); setShowGetData(false); getSlaesData(); setShowSalesDiff(true); setShwoExpenseData(false); setShowProfit(false); setShowSelect(false); }}>  {"Sales for the day"} </Button>
                <Button className={selectedButton === "6" ? "active" : "abc"} id="6" onClick={(e) => { setSelectedButton(e.target.id); setShowCust(false); setShowAddData(false); setShowGetData(false); setShowSalesDiff(false); setShwoExpenseData(false); setShowSelect(true); setShowProfit(true); setShowSelect(true); }}>  {"P&L for the day"} </Button>
            </div>
            {showCust && <div> <div className="ipText" >
                <p className="ipText" style={{ justifyContent: 'left' }} > Shop Name :</p> <InputText className="ipText1" onChange={(e) => setShopName(e.target.value)} placeholder="Enter Shop Name" />
                <p className="ipText" style={{ justifyContent: 'left' }}>Mobile Number : </p><InputText className="ipText1" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter Mobile Number" />
                <p className="ipText" style={{ justifyContent: 'left' }}>Address       : </p><InputText className="ipText1" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
                <ToastContainer />
            </div>
                <Button disabled={isButtonDisabled} className="abc" onClick={() => {
                    setSendData();
                    setButtonDisabled(true); notify();
                }
                }>  {"Save"}
                </Button>   </div>}
            {showSelect && <div>
                <Select className="sele"
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                            ...theme.colors,
                            text: 'orangered',
                            primary25: 'green',
                            primary: 'grey',
                        },
                    })}
                    isSearchable={true}
                    options={allCustData}
                    getOptionLabel={(data) => data.shopName}
                    getOptionValue={(data) => data.id}
                    //value={selectedCust}
                    onChange={(opt => { processSelected(opt); })}
                    maxMenuHeight={150}

                />
                <p className='ipText' >Date :  <DatePicker selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => { setDate(date); getPnl(date); }} /> </p>
                <AddSales selectedCust={selectedCust}
                    transType={transType} custId={custId} date={date} showAddData={showAddData} />
                {/* getDatefrom = {setSelectedDate}  */}
                {/* m1={m1hii} m2={m2hii}/> */}
                {showGetData && <AddCustomer custId={custId} dateSelected={date} />}
            </div>}
            {showSalesDiff && <>
                {salesDiff &&
                    <div className='ipText2'>
                        <p className='ipText' >Date :  <DatePicker selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => { setDate(date); getPnl(date); }} /> </p>
                        SammangiKeera : {salesDiff.sammangiKeera} <br />
                        SammangiTrichy : {salesDiff.sammangiTrichy}<br />
                        panner: {salesDiff.panner}<br />
                        malli:{salesDiff.malli}<br />
                        arali:{salesDiff.arali}<br />
                        sendi:{salesDiff.sendi}<br />
                        sevvanthiYellow:{salesDiff.sevvanthiYellow}<br />
                        sevvanthiWhite :{salesDiff.sevvanthiWhite}<br />
                        mullai : {salesDiff.mullai}<br />
                        kanaga :{salesDiff.kanaga}<br />
                        karattan : {salesDiff.karattan}<br />
                        pachai :{salesDiff.pachai}<br />
                        pichiPoo : {salesDiff.pichiPoo}<br />
                        appleYellow :{salesDiff.appleYellow}<br />
                        kozhi : {salesDiff.koli}<br />
                        appleRed : {salesDiff.appleRed}<br />
                        Others : {salesDiff.others}<br />
                        Todays Collection : {salesDiff.daysCollection}
                    </div>
                }</>}
            {shwoExpenseData && <div className='ipText2'>
                {/* <p className='ipText' >Date :  <DatePicker selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => { setDate(date) }} /> </p> */}
                Petrol: <InputText value={petrol} onChange={(e) => setPetrol(e.target.value)} placeholder="Enter Amount" />
                Luggage: <InputText value={luggage} onChange={(e) => setLuggage(e.target.value)} placeholder="Enter Amount" />
                Luggage Keeramangalam : <InputText value={luggageKeera} onChange={(e) => setLuggageKeera(e.target.value)} placeholder="Enter Amount" />
                Salary: <InputText value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter Amount" />
                Other Expense: <InputText value={otherExpense} onChange={(e) => setOtherExpense(e.target.value)} placeholder="Enter Amount" />
                <br />
                <Button className='button' onClick={(e) => {
                    addExpense(); clearExpense();
                }}>  {"Add Expenses"} </Button>
                <Button className='button' onClick={(e) => {
                    viewExpense();clearExpense();
                }}>  {"View Expenses"} </Button>
                <Button className='button' onClick={(e) => {
                    clearExpense();
                }}>  {"Clear Expenses"} </Button>
            </div>
            }
            <>{showProfit && <div>
                Profit : {profit ? profit.totalProfit : "Loading"} <br></br>
                TotalSales w.o exceptional cust : {profit ? profit.totalSales : "Loading"}
                <br></br>
                <Button className='button' onClick={(e) => {
                    generateReport();
                }}>  {"Generate Excel Report"} </Button>
            </div>}
            </>
        </>
    }
    
    useEffect(() => {
        { compName() }
        { buttons() }
    })

    return (<>
        {compName()}
        {buttons()}


    </>)
}


export default HomePage;