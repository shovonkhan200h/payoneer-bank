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
    const depositeNumber= getValue(`deposite-input`);
    spanTagUpdate(`currentDeposite`,depositeNumber)
    spanTagUpdate(`currentBalance`,depositeNumber)
    document.getElementById(`deposite-input`).value=``
    })
}

const spanTagUpdate=(id,depositeNumber)=>{
    const current= document.getElementById(id).innerText;
    const currentNumber= +current;
    const totalAmmount= currentNumber+depositeNumber;
    document.getElementById(id).innerText= totalAmmount;

}

const withdraw=()=>{
        document.getElementById(`withdraw`).addEventListener(`click`,()=>{
        const withdrawNumber= getValue(`withdraw-input`)
        spanTagUpdate(`withdraw-balance`,withdrawNumber)
        spanTagUpdate(`currentBalance`,-1*withdrawNumber)

    })
};

const getValue=(id)=>{
    let ammount= document.getElementById(id).value;
    const totalAmmount= +ammount;  
    return totalAmmount;
}


loginButton()
deposite()
withdraw()