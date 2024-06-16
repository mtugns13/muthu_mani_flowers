import { InputText } from 'primereact/inputtext'

import { useEffect, useState } from "react"
import { sendSalesData } from '../Api_Call/ApiCall';
import "react-datepicker/dist/react-datepicker.css";
import { constructFrom, format } from 'date-fns';
import AddCustomer from './AddCustomer'
import Home from './Home'
import { getOutsand } from '../Api_Call/ApiCall';
function AddSalesBox(props) {


    const [sammangiKeera, setSammangiKeera] = useState(0);
    const [sammangiTrichy, setSammangiTrichy] = useState(0);
    const [panner, setPanner] = useState(0);
    const [malli, setMalli] = useState(0);
    const [arali, setArali] = useState(0);
    const [sendi, setSendi] = useState(0);
    const [sevvanthiYellow, setSevvanthiYellow] = useState(0);
    const [sevvanthiWhite, setSevvanthiWhite] = useState(0);
    const [mullai, setMullai] = useState(0);
    const [kanaga, setKanaga] = useState(0);
    const [samPrice, setSamPrice] = useState(0);
    const [samTricyPrice, setSamTricyPrice] = useState(0);
    const [pannerPrice, setPannerPrice] = useState(0);
    const [karattan, setKarattan] = useState(0);
    const [malliPrice, setMalliPrice] = useState(0);
    const [araliPrice, setAraliPrice] = useState(0);
    const [sendiPrice, setSendiPrice] = useState(0);
    const [sevvanthiYellowPrice, setSevvanthiYellowPricePrice] = useState(0);
    const [sevvanthiWhitePrice, setSevvanthiWhitePricePrice] = useState(0);
    const [mullaiPrice, setMullaiPrice] = useState(0);
    const [kanagaPrice, setKanagaPrice] = useState(0);
    const [karattanPrice, setKarattanPrice] = useState(0);
    const [pichiPoo, setPichiPoo] = useState(0);
    const [pichiPooPrice, setPichiPooPrice] = useState(0);
    const [pachai, setPachai] = useState(0);
    const [pachaiPrice, setPachaiPrice] = useState(0);
    const [appleRed, setAppleRed] = useState(0);
    const [appleRedPrice, setAppleRedPrice] = useState(0);
    const [appleYellowPrice, setAppleYellowPrice] = useState(0);
    const [appleYellow, setAppleYellow] = useState(0);
    const [koli, setKoli] = useState(0);
    const [koliPrice, setKoliPrice] = useState(0);
    const [others, setOthers] = useState(0)
    const [othersPrice, setOthersPrice] = useState(0)
    const [luggageExpense, setLuggageExpense] = useState(0)


    const [partydate, setPartyDate] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [salesDiff, setSalesDiff] = useState();
    const [collection, setCollection] = useState(0);
    const [outStanding, setOutStanding] = useState(0);

    // const sendData =()=>{

    //     props.getDatefrom(date);
    // }
    // const sep=()=>{
    //     props.m1(date);
    //     props.m2(date);
    // }

    useEffect(() => {
        getOutStanding()
    })
    const saveSalesData = () => {

        let payLoad = {
            "id": props.salesId !== null ? props.salesId : null,
            "custEntity": { "id": props.custId },
            // "actionDate": date.toLocaleDateString('en-ZA', options ),
            "actionDate": format(props.date, 'yyyy-MM-dd'),
            "kanaga": kanaga,
            "kanagaPrice": kanagaPrice,
            "mullai": mullai,
            "mullaiPrice": mullaiPrice,
            "sevvanthiWhite": sevvanthiWhite,
            "sevvanthiWhitePrice": sevvanthiWhitePrice,
            "sevvanthiYellow": sevvanthiYellow,
            "sevvanthiYelPrice": sevvanthiYellowPrice,
            "sendi": sendi,
            "sendiPrice": sendiPrice,
            "arali": arali,
            "araliPrice": araliPrice,
            "malli": malli,
            "malliPrice": malliPrice,
            "panner": panner,
            "pannerPrice": pannerPrice,
            "sammangiKeera": sammangiKeera,
            "samKeeraPrice": samPrice,
            "sammangiTrichy": sammangiTrichy,
            "samTricyPrice": samTricyPrice,
            "transactionType": props.transType,
            "karattan": karattan,
            "karattanPrice": karattanPrice,
            "pichiPoo": pichiPoo,
            "pichiPooPrice": pichiPooPrice,
            "pachai": pachai,
            "pachaiPrice": pachaiPrice,
            "appleRed": appleRed,
            "appleRedPrice": appleRedPrice,
            "appleYellow": appleYellow,
            "appleYellowPrice": appleYellowPrice,
            "collection": collection,
            "koli": koli,
            "koliPrice": koliPrice,
            "others": others,
            "othersPrice": othersPrice,
            "luggageExpense": luggageExpense,
            "totalSales": outstandingValue > 0 ? outstandingValue : 0,
            "outStanding": outStanding + (outstandingValue > 0 && outstandingValue) - (collection > 0 && collection)


        }

        sendSalesData(payLoad);
        // postCallWithoutReducer(url, payLoad, onSuccess, null)
        clearPayLoad();
    }
    const clearPayLoad = () => {

        setKanaga("");
        setKanagaPrice("");
        setMullai("");
        setMullaiPrice("");
        setSevvanthiWhite("");
        setSevvanthiWhitePricePrice("");
        setSevvanthiYellow("")
        setSevvanthiYellowPricePrice("")
        setSendi("")
        setSendiPrice("")
        setArali("")
        setAraliPrice("")
        setMalli("")
        setMalliPrice("")
        setPanner("")
        setPannerPrice("")
        setSammangiKeera("")
        setSamPrice("")
        setSammangiTrichy("")
        setSamTricyPrice("")
        setKarattan("")
        setKarattanPrice("")
        setPichiPoo("");
        setPichiPooPrice("")
        setPachai("");
        setPachaiPrice("");
        setAppleRed("");
        setAppleRedPrice("");
        setAppleYellow("");
        setAppleYellowPrice("");
        setCollection("");
        setOutStanding(0);
        setDate(new Date());
        setKoli("");
        setKoliPrice("");
        setOthers("");
        setOthersPrice("");
        setLuggageExpense("");
    }
    let varia;
    const getOutStanding = () => {
        if (props.custId) {
            let val = { "custId": props.custId };
            varia = getOutsand(val).then((e) => {
                if (e) {
                    setOutStanding(e.outStanding);
                    { console.log(e.outStanding) }
                } else {
                    setOutStanding(0);
                }
            });

            //  console.log("bef_varia");
            //  if(varia.outStanding){
            //   console.log("varia");
            //   varia.then((e)=>{
            //     setOutStanding(e.outStanding);
            //     { console.log(e.outStanding)}})
            //   }
        }
    }
    const price = '  Price';
    const outstandingValue = ((sammangiKeera * samPrice) + (sammangiTrichy * samTricyPrice) + (panner * pannerPrice) + (malli * malliPrice) + (arali * araliPrice) + (karattan * karattanPrice) + (sendi * sendiPrice) + (sevvanthiYellow * sevvanthiYellowPrice) + (sevvanthiWhite * sevvanthiWhitePrice) +
        (kanaga * kanagaPrice) + (mullai * mullaiPrice) + (pachai * pachaiPrice) + (pichiPoo * pichiPooPrice) + (appleYellow * appleYellowPrice) + (appleRed * appleRedPrice) + (koli * koliPrice) + (others * othersPrice) + (luggageExpense*1));


    return (<>

        {props.showAddData && <div >
            <p className='ipText' > Sammangi.Keera : <InputText type="number" value={sammangiKeera} onChange={(e) => setSammangiKeera(e.target.value)} placeholder="Enter kg" />
                {sammangiKeera > 0 && price}
                {sammangiKeera > 0 && <InputText value={samPrice} onChange={(e) => setSamPrice(e.target.value)} placeholder="Enter Price" />}   {(sammangiKeera * samPrice) > 0 ? (sammangiKeera * samPrice) : 0} </p>
            <p className='ipText' > Sammangi.Trichy : <InputText value={sammangiTrichy} onChange={(e) => setSammangiTrichy(e.target.value)} placeholder="Enter kg" />  {sammangiTrichy > 0 && price}
                {sammangiTrichy > 0 && <InputText value={samTricyPrice} onChange={(e) => setSamTricyPrice(e.target.value)} placeholder="Enter Price" />}  {(sammangiTrichy * samTricyPrice) > 0 ? (sammangiTrichy * samTricyPrice) : 0}</p>
            <p className='ipText' > Panner : <InputText value={panner} onChange={(e) => setPanner(e.target.value)} placeholder="Enter kg" />   {panner > 0 && price}
                {panner > 0 && <InputText value={pannerPrice} onChange={(e) => setPannerPrice(e.target.value)} placeholder="Enter Price" />}  {(panner * pannerPrice) > 0 ? (panner * pannerPrice) : 0} </p>
            <p className='ipText' > Malli : <InputText value={malli} onChange={(e) => setMalli(e.target.value)} placeholder="Enter kg" />   {malli > 0 && price}
                {malli > 0 && <InputText value={malliPrice} onChange={(e) => setMalliPrice(e.target.value)} placeholder="Enter Price" />}  {(malli * malliPrice) > 0 ? (malli * malliPrice) : 0}</p>
            <p className='ipText' >  Arali : <InputText value={arali} onChange={(e) => setArali(e.target.value)} placeholder="Enter kg" />   {arali > 0 && price}
                {arali > 0 && <InputText value={araliPrice} onChange={(e) => setAraliPrice(e.target.value)} placeholder="Enter Price" />} {(arali * araliPrice) > 0 ? (arali * araliPrice) : 0} </p>
            <p className='ipText' >  Sendi : <InputText value={sendi} onChange={(e) => setSendi(e.target.value)} placeholder="Enter kg" />   {sendi > 0 && price}
                {sendi > 0 && <InputText value={sendiPrice} onChange={(e) => setSendiPrice(e.target.value)} placeholder="Enter Price" />}  {(sendi * sendiPrice) > 0 ? (sendi * sendiPrice) : 0}</p>
            <p className='ipText' >  sevvanthiYellow : <InputText value={sevvanthiYellow} onChange={(e) => setSevvanthiYellow(e.target.value)} placeholder="Enter kg" />    {sevvanthiYellow > 0 && price}
                {sevvanthiYellow > 0 && <InputText value={sevvanthiYellowPrice} onChange={(e) => setSevvanthiYellowPricePrice(e.target.value)} placeholder="Enter Price" />} {(sevvanthiYellow * sevvanthiYellowPrice) > 0 ? (sevvanthiYellow * sevvanthiYellowPrice) : 0} </p>
            <p className='ipText' > sevvanthiWhite : <InputText value={sevvanthiWhite} onChange={(e) => setSevvanthiWhite(e.target.value)} placeholder="Enter kg" />   {sevvanthiWhite > 0 && price}
                {sevvanthiWhite > 0 && <InputText value={sevvanthiWhitePrice} onChange={(e) => setSevvanthiWhitePricePrice(e.target.value)} placeholder="Enter Price" />}  {(sevvanthiWhite * sevvanthiWhitePrice) > 0 ? (sevvanthiWhite * sevvanthiWhitePrice) : 0}</p>
            <p className='ipText' > Mullai : <InputText value={mullai} onChange={(e) => setMullai(e.target.value)} placeholder="Enter kg" />   {mullai > 0 && price}
                {mullai > 0 && <InputText value={mullaiPrice} onChange={(e) => setMullaiPrice(e.target.value)} placeholder="Enter Price" />}  {(mullai * mullaiPrice) > 0 ? (mullai * mullaiPrice) : 0}</p>
            <p className='ipText' >  Kanagambaram : <InputText value={kanaga} onChange={(e) => setKanaga(e.target.value)} placeholder="Enter kg" />    {kanaga > 0 && price}
                {kanaga > 0 && <InputText value={kanagaPrice} onChange={(e) => setKanagaPrice(e.target.value)} placeholder="Enter Price" />} {(kanaga * kanagaPrice) > 0 ? (kanaga * kanagaPrice) : 0} </p>
            <p className='ipText' >  Karattan : <InputText value={karattan} onChange={(e) => setKarattan(e.target.value)} placeholder="Enter kg" />    {karattan > 0 && price}
                {karattan > 0 && <InputText value={karattanPrice} onChange={(e) => setKarattanPrice(e.target.value)} placeholder="Enter Price" />} {(karattan * karattanPrice) > 0 ? (karattan * karattanPrice) : 0} </p>
            <p className='ipText' >  Pachai : <InputText value={pachai} onChange={(e) => setPachai(e.target.value)} placeholder="Enter kg" />    {pachai > 0 && price}
                {pachai > 0 && <InputText value={pachaiPrice} onChange={(e) => setPachaiPrice(e.target.value)} placeholder="Enter Price" />} {(pachai * pachaiPrice) > 0 ? (pachai * pachaiPrice) : 0} </p>
            <p className='ipText' >  PichiPoo : <InputText value={pichiPoo} onChange={(e) => setPichiPoo(e.target.value)} placeholder="Enter kg" />    {pichiPoo > 0 && price}
                {pichiPoo > 0 && <InputText value={pichiPooPrice} onChange={(e) => setPichiPooPrice(e.target.value)} placeholder="Enter Price" />} {(pichiPoo * pichiPooPrice) > 0 ? (pichiPoo * pichiPooPrice) : 0} </p>
            <p className='ipText' >  AppleYellow : <InputText value={appleYellow} onChange={(e) => setAppleYellow(e.target.value)} placeholder="Enter kg" />    {appleYellow > 0 && price}
                {appleYellow > 0 && <InputText value={appleYellowPrice} onChange={(e) => setAppleYellowPrice(e.target.value)} placeholder="Enter Price" />}   {(appleYellow * appleYellowPrice) > 0 ? (appleYellow * appleYellowPrice) : 0}</p>
            <p className='ipText' > AppleRed : <InputText value={appleRed} onChange={(e) => setAppleRed(e.target.value)} placeholder="Enter kg" />    {appleRed > 0 && price}
                {appleRed > 0 && <InputText value={appleRedPrice} onChange={(e) => setAppleRedPrice(e.target.value)} placeholder="Enter Price" />} {(appleRed * appleRedPrice) > 0 ? (appleRed * appleRedPrice) : 0} </p>
            <p className='ipText' >  Koli : <InputText value={koli} onChange={(e) => setKoli(e.target.value)} placeholder="Enter kg" />    {setKoli > 0 && price}
                {koli > 0 && <InputText value={koliPrice} onChange={(e) => setKoliPrice(e.target.value)} placeholder="Enter Price" />}   {(koli * koliPrice) > 0 ? (koli * koliPrice) : 0}</p>

            <p className='ipText' >  Others : <InputText value={others} onChange={(e) => setOthers(e.target.value)} placeholder="Enter kg" />    {setOthers > 0 && price}
                {others > 0 && <InputText value={othersPrice} onChange={(e) => setOthersPrice(e.target.value)} placeholder="Enter Price" />}   {(others * othersPrice) > 0 ? (others * othersPrice) : 0}</p>




            <p className='ipText' style={{ justifyContent: 'center' }} > Expences : <InputText value={luggageExpense} onChange={(e) => { setLuggageExpense(e.target.value); }} placeholder="Enter Collection Amount" />  </p>
            <p className='ipText' style={{ justifyContent: 'center' }} > Collection : <InputText value={collection} onChange={(e) => { setCollection(e.target.value); }} placeholder="Enter Collection Amount" />  </p>
            <p className='ipText' style={{ justifyContent: 'center' }}>  Outstanding : <InputText readOnly={true} value={outStanding + (outstandingValue > 0 && outstandingValue) - (collection > 0 && collection)} onChange={(e) => setOutStanding(outStanding + outstandingValue - (collection > 0 && collection))} placeholder={outStanding + outstandingValue - collection} />  </p>
            <p className='ipText' style={{ justifyContent: 'center' }}>  Total sales : <InputText readOnly={true} value={outstandingValue > 0 ? outstandingValue : 0} />  </p>

            {<button onClick={() => { setDate(props.date); saveSalesData() }}>  {"Save"}</button>}  {<button onClick={() => { clearPayLoad() }}>  {"clear"}</button>}
            {/* {sendData()} */}
            {/* { sep()} */}
        </div>}
    </>)
}

export default AddSalesBox;