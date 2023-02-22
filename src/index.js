import React from "react";
import ReactDOM from "react-dom/client";
import {Saludar} from './Saludar';
import {Usuario} from './Saludar';
import PruebaExportDefault, {Nav} from './PruebaExportDefault';
import {Button} from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
 
 root.render(<>
<Button text='Click me'/>
<Button text=''/>
<Button text='Pay' name='Sandy'/>


 <Usuario nombre="Sandy" 
 estudiante={true}
 hobbies={{deporte: 'Nadar', arte: 'Dibujar', socialMedia: 'Twitter'}}/>

 </>);
 
