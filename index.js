const loginButton=()=>{
    document.getElementById(`login`).addEventListener(`click`,()=>{
        let loginArea=document.getElementById(`login-area`)
        loginArea.style.display=`none`;
        let tranjectionArea = document.getElementById(`tran-id`);
        tranjectionArea.style.display  =`block`;
    })
}


const deposite=()=>{
    document.getElementById(`depositeBtn`).addEventListener(`click`, ()=>{
    let depositeAmount= document.getElementById(`deposite-input`).value;
    const depositeNumber= +depositeAmount;
    const currentDeposite= document.getElementById(`currentDeposite`).innerText;
    const currentDepositeNumber= +currentDeposite;
    const totalDeposite= depositeNumber+currentDepositeNumber;
    document.getElementById(`currentDeposite`).innerText= totalDeposite;
    document.getElementById(`deposite-input`).value=``
    })
}



loginButton()
deposite()
