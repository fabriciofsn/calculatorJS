class Calculator{
    constructor(){
        this.clickCapture();
        this.keyIdentifier();
        this.display.focus();
    }
    
    clickCapture(){
        this.display = document.querySelector('.display');
        
        addEventListener('click', (event) =>{
            if(event.target.classList.contains('btn-num')){
                this.display.value += event.target.innerText;  
            }else if(event.target.classList.contains('clean')){
                this.display.value = '';
            }else if(event.target.classList.contains('del')){
                this.display.value = this.display.value.slice(0, -1);
            }else if(event.target.classList.contains('eq')){
                const solveAccount = this.display.value;
                try{
                   this.display.value = eval(solveAccount);
                }catch(e){
                    const warning = document.querySelector('.warning');
                    const btnClose = document.querySelector('.closeWindow');
                    warning.classList.add('active');

                    btnClose.addEventListener('click', () =>{
                        warning.classList.remove('active');
                    })

                    this.clickOutside();
                }
            }
        })
    }

    clickOutside(){
        const html = document.documentElement;
        const warning = document.querySelector('.warning');

        html.addEventListener('click', (event) =>{
            if(event.target.contains(event.target)){
                warning.classList.remove('active');
            }        
        })
    }

    keyIdentifier(){
        addEventListener('keyup', (event) =>{
            if(event.keyCode === 13){
                this.display.value = eval(this.display.value);
            }
        })
    }
}

const dial = new Calculator();