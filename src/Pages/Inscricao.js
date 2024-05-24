import React, {useState} from 'react'
import InscricaoForm from '../Components/InscricaoForm'
import InscricaoList from '../Components/InscricaoList'
import Footer from '../Components/Footer'



function FormInscricao(){
    const [refresh, setRefresh] = useState(false)
    return(
        <div>
            <InscricaoForm setRefresh={setRefresh}/>
            <InscricaoList refresh={refresh} setRefresh={setRefresh}/>
            <Footer/>
        </div>
    )
}
export default FormInscricao