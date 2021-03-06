import {UIController,UIElement} from './controller/controller.js';


const ui_controller = new UIController(document.body);

/*MAIN SCREEN*/
const mainScreen = new UIElement("div");
const logo = new UIElement("img","./img/logo.png");
const renderCocinero = new UIElement("img","./img/renderCocinero.png");
const howToPlay = new UIElement("button","How to play");
const startButton = new UIElement("button","START");
const prizesButton = new UIElement("button","Premios y bases");
const top100Button = new UIElement("button","Top 100 ranking");
const buttonGroup = new UIElement("div");
const basesButton = new UIElement("button","Bases");
const privacyButton = new UIElement("button","Privacidad");
/*MAIN SCREEN*/
const secondaryButton = new UIElement("button", "Toggle_Second");
const secondaryScreen = new UIElement("div");
const thirdButton = new UIElement("button","Toggle_Third")
const thirdScreen = new UIElement("div");
const button = new UIElement("button", "Toggle");




mainScreen.addStyle(`
    position:absolute;
    display:flex;
    box-sizing:border-box;
    padding:8%;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    height:-webkit-fill-available;
    background-image:url('./img/pattern.png');
    z-index:3;
    `
);
secondaryScreen.addStyle(
    `
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:-webkit-fill-available;
    background-color:green;
    z-index:4;
    `
);

thirdScreen.addStyle(`
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:-webkit-fill-available;
    background-color:yellow; 
    z-index:1;
    `
);

logo.addStyle(
    `
    width:20vh;
    max-width:30%;
    `
);

renderCocinero.addStyle(
    `
    width:50vh;
    max-width:90%;
    `
);

buttonGroup.addStyle(
    `
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-between
    `
);



howToPlay.addStyle(
    `
    font-family:'nunito';
    border:1px solid #ccc;
    border-radius: 5px;
    outline:none;
    width:180px;
    color: #333;
    background-color:#FFB600;
    `
);

prizesButton.addStyle(
    `
    font-family:'nunito';
    width:180px;
    background-color: #6C6C6C;
    color: #fff;
    border:1px solid #ccc;
    border-radius: 5px;
    `
);

top100Button.addStyle(
    `
    font-family:'nunito';
    width:180px;
    border:1px solid #ccc;
    border-radius: 5px;
    background-color: #7B61FF;
    color: #fff;
    `
);

startButton.addStyle(
    `
    font-family:'knockout';
    width:180px;
    height:72px;
    border:none;
    color:#fff;
    font-size:28px;
    background-image:url('./img/base-bt.svg');
    background-size:cover;
    background-repeat:no-repeat;
    background-color:transparent;
    `
)

basesButton.addStyle(
`
    font-family:'nunito';
    border:1px solid #ccc;
    border-radius: 5px;
    background-color: #E5E5E5;
    width:45%;
`
);

privacyButton.addStyle(
    `
    font-family:'nunito';
    border:1px solid #ccc;
    border-radius: 5px;
    background-color: #E5E5E5;
    width:50%;
    `
);




mainScreen.addElement(logo,renderCocinero,howToPlay,startButton,prizesButton,top100Button,buttonGroup)
buttonGroup.addElement(basesButton,privacyButton);

button.toggleElement(secondaryScreen);
secondaryButton.toggleElement(secondaryScreen);
thirdButton.toggleElement(thirdScreen);

secondaryScreen.addElement(secondaryButton);
thirdScreen.addElement(thirdButton);
ui_controller.add(mainScreen);

startButton.trigger(()=>{
ui_controller.add(secondaryScreen);
startButton.toggleElement(secondaryScreen);
})
