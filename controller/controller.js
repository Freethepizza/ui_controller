var css = `
@font-face {
    font-family: 'knockout';
    src:  url('shared/knockout.otf') format('opentype')
}
@font-face {
    font-family: 'nunito';
    src:  url('shared/nunito.ttf') format('truetype')
}
*{margin: 0;padding: 0;}
.hidden{
    display: none!important;
}
`,
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');
head.appendChild(style);
style.appendChild(document.createTextNode(css));


export class UIController{
    constructor(body){
        this.body = body;
        this.mainElement = document.createElement("div");
        this.onCreate();
    }
    onCreate(){
        this.body.appendChild(this.mainElement);
        return this.mainElement;
    }
    add(param){
        for(var i = 0; i<arguments.length;i++){
            this.mainElement.appendChild(arguments[i].element)
        }
    }
    child(){
        console.log(this.mainElement.childNodes)
    }


}

export class UIElement{
    constructor(element, text){
        this.element = document.createElement(element);
        this.text = text;
        this.innerText = document.createTextNode(text)
        this.onCreate()
        
    }
    onCreate(){
        if(this.text != null){
            this.element.appendChild(this.innerText)
        }else{
            this.element.innerText = '';
        }
        switch(this.element.nodeName){
            case "BUTTON":
                //console.log("its a button");
                this.element.style = `
                padding:8px 8px 8px 8px;
                `;
                break;
            case "DIV":
                //console.log('its a div')
                break;
            case "IMG":
                this.element.src = this.innerText.data;
        }
    }
    hideElement(element){
        this.element.addEventListener("click",()=>{
            element.element.classList.add('hidden');
        })
    }
    toggleElement(element){
        this.element.addEventListener("click", ()=>{
            if(element.element.classList.contains('hidden')){
                element.element.classList.remove('hidden');
            }else{
                element.element.classList.add('hidden');
            }
        })
    }
    trigger(time,func){
        this.element.addEventListener("click", ()=>{
            if(arguments.length === 1){
                arguments[0]()
           }else if(arguments.length ===2){
                setTimeout(() => {
                    arguments[1]()
            }, arguments[0]);
           }
        })   
    }
    addStyle(s){
        this.element.style.cssText += s;
    }
    addElement(){
        for(var i = 0; i<arguments.length;i++){
            this.element.appendChild(arguments[i].element)
        }
    }
}
