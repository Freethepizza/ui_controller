import {UIController,UIElement} from './controller/controller.js';


const ui_controller = new UIController(document.body);

/*MAIN SCREEN*/
const mainScreen = new UIElement("div");
const logo = new UIElement("img","./img/logo.png");
const renderCocinero = new UIElement("img","./img/renderCocinero.png");
const howToPlay = new UIElement("button","How to play");
const startButton = new UIElement("button","Start");
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
    padding:5%;
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
    z-index:2;
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
)


buttonGroup.addElement(basesButton,privacyButton);
mainScreen.addElement(logo,renderCocinero,howToPlay,startButton,prizesButton,top100Button,buttonGroup)


button.toggleElement(secondaryScreen);
secondaryButton.toggleElement(secondaryScreen);
thirdButton.toggleElement(thirdScreen);

secondaryScreen.addElement(secondaryButton);
thirdScreen.addElement(thirdButton);
ui_controller.add(mainScreen);
ui_controller.add(secondaryScreen,thirdScreen);
