import { useEffect, useState } from 'react';
import { getPartyData, getOutsand, getOutsandPrev } from '../Api_Call/ApiCall';
import { Button } from "primereact/button"
import { InputText } from 'primereact/inputtext'
import { sendSalesData } from '../Api_Call/ApiCall';
import { constructFrom, format } from 'date-fns';


function SalesData(props) {
    const [date, setDate] = useState();
    const [propData, setPropData] = useState({});

    const [sammangiKeera, setSammangiKeera] = useState();
    const [sammangiTrichy, setSammangiTrichy] = useState();
    const [panner, setPanner] = useState();
    const [malli, setMalli] = useState();
    const [arali, setArali] = useState();
    const [sendi, setSendi] = useState();
    const [sevvanthiYellow, setSevvanthiYellow] = useState();
    const [sevvanthiWhite, setSevvanthiWhite] = useState();
    const [mullai, setMullai] = useState();
    const [kanaga, setKanaga] = useState();
    const [samPrice, setSamPrice] = useState();
    const [samTricyPrice, setSamTricyPrice] = useState();
    const [pannerPrice, setPannerPrice] = useState();
    const [karattan, setKarattan] = useState();
    const [malliPrice, setMalliPrice] = useState();
    const [araliPrice, setAraliPrice] = useState();
    const [sendiPrice, setSendiPrice] = useState();
    const [sevvanthiYellowPrice, setSevvanthiYellowPricePrice] = useState();
    const [sevvanthiWhitePrice, setSevvanthiWhitePricePrice] = useState();
    const [mullaiPrice, setMullaiPrice] = useState();
    const [kanagaPrice, setKanagaPrice] = useState();
    const [karattanPrice, setKarattanPrice] = useState();
    const [pichiPoo, setPichiPoo] = useState();
    const [pichiPooPrice, setPichiPooPrice] = useState();
    const [pachai, setPachai] = useState();
    const [pachaiPrice, setPachaiPrice] = useState();
    const [appleRed, setAppleRed] = useState();
    const [appleRedPrice, setAppleRedPrice] = useState();
    const [appleYellowPrice, setAppleYellowPrice] = useState();
    const [appleYellow, setAppleYellow] = useState();
    const [koli, setKoli] = useState(0);
    const [koliPrice, setKoliPrice] = useState(0);
    const [others, setOthers] = useState(0)
    const [othersPrice, setOthersPrice] = useState(0)
    const [luggageExpense, setLuggageExpense] = useState(0)

    const [salesId, setSalesId] = useState(new Date());
    const [selectedCust, setSelectedCust] = useState();
    const [collection, setCollection] = useState();
    const [outStanding, setOutStanding] = useState();
    const [showEdit, setShowEdit] = useState(false);
    const [transactionType, setTransType] = useState("sales")



    let dates;
    const extractDate = () => {
        // setPropData(props)
        dates = props.dateSelected;
        console.log("date ==" + dates)

    }
    useEffect(() => {
        if (propData) {
            let data = propData;
            setSalesId(data.id);
            setPichiPoo(data.pichiPoo)
            setPichiPooPrice(data.pichiPooPrice)

            setSelectedCust(props.custId);
            setKanaga(data.kanaga);
            setKanagaPrice(data.kanagaPrice);
            setMullai(data.mullai);
            setMullaiPrice(data.mullaiPrice);
            setSevvanthiWhite(data.sevvanthiWhite);
            setSevvanthiWhitePricePrice(data.sevvanthiWhitePrice);
            setSevvanthiYellow(data.sevvanthiYellow)
            setSevvanthiYellowPricePrice(data.sevvanthiYelPrice)
            setSendi(data.sendi)
            setSendiPrice(data.sendiPrice)
            setArali(data.arali)
            setAraliPrice(data.araliPrice)
            setMalli(data.malli)
            setMalliPrice(data.malliPrice)
            setPanner(data.panner)
            setPannerPrice(data.pannerPrice)
            setSammangiKeera(data.sammangiKeera)
            setSamPrice(data.samKeeraPrice)
            setSammangiTrichy(data.sammangiTrichy)
            setSamTricyPrice(data.samTricyPrice)
            setKarattan(data.karattan)
            setKarattanPrice(data.karattanPrice)
            setPachai(data.pachai);
            setPachaiPrice(data.pachaiPrice);
            setAppleRed(data.appleRed);
            setAppleRedPrice(data.appleRedPrice);
            setAppleYellow(data.appleYellow);
            setAppleYellowPrice(data.appleYellowPrice);
            setCollection(data.collection);
            setOutStanding(data.outStanding);
            setTransType(data.transactionType);
            setKoli(data.koli);
            setKoliPrice(data.koliPrice);
            setOthers(data.others);
            setOthersPrice(data.othersPrice);
            setLuggageExpense(data.luggageExpense);
            setOutStanding(data.outStanding);
            setCollection(data.collection);
        }
    }, [propData])

    const getData = async () => {
        setShowEdit(false);
        console.log("fetch cust data")
        let val = {
            "custId": props.custId,
            "datt": dates
        }
        let dat = await getPartyData(val);
        console.log(dat)
        setPropData(dat)
    }
    const editData = () => {
        getPreviousOutStanding()
        setShowEdit(true);
        return
    }

    useEffect(() => {
    })


    let varia;
    const getOutStanding = () => {
        dates = props.dateSelected
        if (props.custId) {
            let val = { "custId": props.custId };
            // varia = getOutsand(val).then((e) => {
            //     if (e) {
            //         setOutStanding(e.outStanding);
            //         { console.log(e.outStanding) }
            //     } else {
            //         setOutStanding(0);
            //     }
            // });
        }
    }

    let variable=0.0;
    const getPreviousOutStanding = () => {
        if (props.custId) {
            dates = props.dateSelected
            let val = { "custId": props.custId,
                        "date": dates };
            varia = getOutsandPrev(val).then((e) => {
                if (e) {
                    setOutStanding(e.outStanding);
                    { console.log(e.outStanding) }
                } else {
                    setOutStanding(0);
                }
            });
        }
    }

    const price = "Price :"
    const outstandingValue = ((sammangiKeera * samPrice) + (sammangiTrichy * samTricyPrice) + (panner * pannerPrice) + (malli * malliPrice) + (arali * araliPrice) + (karattan * karattanPrice) + (sendi * sendiPrice) + (sevvanthiYellow * sevvanthiYellowPrice) + (sevvanthiWhite * sevvanthiWhitePrice) +
        (kanaga * kanagaPrice) + (mullai * mullaiPrice) + (pachai * pachaiPrice) + (pichiPoo * pichiPooPrice) + (appleYellow * appleYellowPrice) + (appleRed * appleRedPrice) + (koli * koliPrice) + (others * othersPrice) + (luggageExpense*1));
const out= "";
    const saveSalesData = () => {

        let payLoad = {
            "id": salesId !== null ? salesId : null,
            "custEntity": { "id": props.custId },
            // "actionDate": date.toLocaleDateString('en-ZA', options ),
            "actionDate": dates,
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
            "transactionType": transactionType,
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
            "outStanding": variable,
            "koli": koli,
            "koliPrice": koliPrice,
            "others": others,
            "othersPrice": othersPrice,
            "luggageExpense": luggageExpense


        }

        sendSalesData(payLoad);
        clearPayLoad();
        // postCallWithoutReducer(url, payLoad, onSuccess, null)
    }
    const clearPayLoad = () => {
        setSalesId("");
        setSelectedCust("");
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


    return (
        <>
            {extractDate()}
            <Button onClick={() => { setOutStanding(0); getData() }
            }>  {"Fetch Cust Data"}
            </Button>
            <Button onClick={() => { editData() }
            }>  {"Edit Customer Sales"}
            </Button>

            {!showEdit && < div className='ipText2'>
                {sammangiKeera !== 0 && <> SammangiKeera : {sammangiKeera} Price: {samPrice} Total :{sammangiKeera * samPrice > 0 && sammangiKeera * samPrice}</>}
                {sammangiTrichy !== 0 && <><br />  sammangiTrichy : {sammangiTrichy} Price: {samTricyPrice} Total :{(sammangiTrichy * samTricyPrice) > 0 && sammangiTrichy * samTricyPrice}</>}
                {panner !== 0 && <><br />  panner : {panner} Price: {pannerPrice} Total :{panner * pannerPrice > 0 && panner * pannerPrice}</>}
                {malli !== 0 && <><br />  malli : {malli} Price: {malliPrice} Total :{malli * malliPrice > 0 && malli * malliPrice}</>}
                {arali !== 0 && <><br />  arali : {arali} Price: {araliPrice} Total :{arali * araliPrice > 0 && arali * araliPrice}</>}
                {sendi != 0 && <><br />  sendi : {sendi} Price: {sendiPrice} Total :{sendi * sendiPrice > 0 && sendi * sendiPrice}</>}
                {sevvanthiYellow !== 0 && <><br />  sevvanthiYellow : {sevvanthiYellow} Price: {sevvanthiYellowPrice} Total :{sevvanthiYellow * sevvanthiYellowPrice > 0 && sevvanthiYellow * sevvanthiYellowPrice}</>}
                {sevvanthiWhite !== 0 && <><br />  sevvanthiWhite : {sevvanthiWhite} Price: {sevvanthiWhitePrice} Total :{sevvanthiWhite * sevvanthiWhitePrice > 0 && sevvanthiWhite * sevvanthiWhitePrice}</>}
                {mullai !== 0 && <><br />  mullai : {mullai} Price: {mullaiPrice} Total :{mullai * mullaiPrice > 0 && mullai * mullaiPrice}</>}
                {kanaga !== 0 && <><br />  kanaga : {kanaga} Price: {kanagaPrice} Total :{kanaga * kanagaPrice > 0 && kanaga * kanagaPrice}</>}
                {karattan !== 0 && <><br />  karattan : {karattan} Price: {karattanPrice} Total :{karattan * karattanPrice > 0 && karattan * karattanPrice}</>}
                {pachai !== 0 && <><br />  pachai : {pachai} Price: {pachaiPrice} Total :{pachai * pachaiPrice > 0 && pachai * pachaiPrice}</>}
                {pichiPoo !== 0 && <><br />  pichiPoo : {pichiPoo} Price: {pichiPooPrice} Total :{pichiPoo * pichiPooPrice > 0 && pichiPoo * pichiPooPrice}</>}
                {appleYellow !== 0 && <><br />  appleYellow : {appleYellow} Price: {appleYellowPrice} Total :{appleYellow * appleYellowPrice > 0 && appleYellow * appleYellowPrice}</>}
                {appleRed !== 0 && <><br />  appleRed : {appleRed} Price: {appleRedPrice} Total :{appleRed * appleRedPrice > 0 && appleRed * appleRedPrice}</>}
                {koli !== 0 && <><br />  Koli : {koli} Price: {koliPrice} Total :{koli * koliPrice > 0 && koli * koliPrice}</>}
                {others !== 0 && <><br />  Others : {others} Price: {othersPrice} Total :{others * othersPrice > 0 && others * othersPrice}</>}
                {luggageExpense !== 0 && <><br />  LuggageExpense : {luggageExpense} Total :{luggageExpense > 0 && luggageExpense}</>}
               
                <br />
                Collection : {collection}<br />
                Outstanding :{outStanding}<br />
                Total Values : {outstandingValue > 0 ? outstandingValue : 0}
            </div>}
            {showEdit && <div>
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
                <p className='ipText' style={{ justifyContent: 'center' }}>  Outstanding : <InputText readOnly={true} value={outStanding + (outstandingValue > 0 && outstandingValue) - (collection > 0 && collection)}
                 onChange={variable=(outStanding + (outstandingValue > 0 && outstandingValue) - (collection > 0 && collection))} placeholder={outStanding + outstandingValue - collection} />  </p>
                <p className='ipText' style={{ justifyContent: 'center' }}>  Total sales : <InputText readOnly={true} value={outstandingValue > 0 ? outstandingValue : 0} />  </p>

                {<button onClick={() => {saveSalesData(); }}>  {"Save"}</button>}

            </div>}

        </>
    )
}

export default SalesData;