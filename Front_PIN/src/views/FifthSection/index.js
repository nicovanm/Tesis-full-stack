// useState
import React, {useState} from "react";
// API
import axios from "axios";
import Form from "./form.js";
import './index.css'

// Props is property
function FifthSection(props){

    const [showAlert, setShowAlert] = useState(false)

    // First is the state, and setDate is to update 
    const [Data, setData] = useState ({name:'', email:'', phone:'', message:''})
    
    // Condition for button
    const disable = (!Data.name.length || !Data.email.length || !Data.phone.length || !Data.message.length) || !emailIsCorrect(Data.email) === true || !phoneIsCorrect(Data.phone) === true || !nameIsCorrect(Data.name) === true;

    // Event function
    function handleChangeName (event){
        const newData = {...Data}
        newData.name = event.target.value
        setData(newData)
        setShowAlert(false)
        const check_name = Data.name
        var nameCorrect = nameIsCorrect(check_name)
        if(nameCorrect == true){
            return true;
        }
        else{
            return false;
        }
    }

    function nameIsCorrect(check_name){
        var nameIsValid = check_name
        const letters = [" ", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z", "á", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"]
        var count = 0
        for(var i in nameIsValid){
            const letter = nameIsValid[i]
            if(letters.includes(letter)){
                // console.log("Its ok")
            }
            else{
                count = count + 1
            } 
        }
        if(count > 0){
            return false
        }
        else{
            return true
        }   
    }

    function handleChangeEmail (event){
        setData({...Data, email: event.target.value})
        //To confirm the mail, if it's wrong the button won't be avaible
        const check_email = Data.email
        var emailCorrect = emailIsCorrect(check_email)
        if(emailCorrect == true){
            return true;
        }
        else{
            return false;
        }
    }
    
    function emailIsCorrect(check_email){
        var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var isValid = expReg.test(check_email);
        if(isValid == true){
            return true;
        }
        else{
            return false;
        }
    }

    function handleChangePhone (event){
        setData({...Data, phone: event.target.value})
        // To confirm the phono, if it's wrong the button won't be avaible (negative)
        const check_phone = Data.phone
        var phoneCorrect = phoneIsCorrect(check_phone)
        if(phoneCorrect == true){
            return true;
        }
        else{
            return false;
        }
    }

    function phoneIsCorrect(check_phone){
        var isValid = check_phone
        if(isValid >= 0){
            return true;
        }
        else{
            return false;
        }
    }

    function handleChangeMessage (event){
        setData({...Data, message: event.target.value})
    }
    
    function handleSend(event){
        // console.log("click") -----> testCheck
        // console.log(Data) -----> testCheck
        event.preventDefault()
        // API post
        axios.post("https://back-end-pin.herokuapp.com/api/save-form",Data)
        // Answer
        .then(response=>{
            console.log(response)
            setShowAlert(true)
            setData({name:'', email:'', phone:'', message:''})
            //If I want to show an alert message, but the software has ShowAlert function.
            // alert(response.data.status)

        }).catch(err=>{
            console.log(err)
        })
    }


    return(
        <section id="contact">
            <div id="divFifthSection">
            </div>
            <div id="fifthDivConteiner">
                <div id="fifthSectionTittles">
                    <h1 id="fifthSectionFirstTittle">Get in touch</h1>
                    <h1 id="fifthSectionSecondTittle">We are hiring!</h1>
                </div>
                <div id="formDiv">
                    {/* Call Form */}
                    <Form disable={disable} Data={Data} handleSend={handleSend} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} handleChangeEmail={handleChangeEmail} handleChangeMessage={handleChangeMessage}/>
                    {showAlert && <div className="alert alert-success">Mensaje enviado correctamente</div>}
                </div>
            </div>
            <div id="footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted" id="pFooter">&copy; 2020 © All rights reserved.</p>
                <a img='./imagenes/footer-logo.png' id="footerImage"></a>
                </footer>
            </div>
        </section>
    )
}

export default FifthSection;