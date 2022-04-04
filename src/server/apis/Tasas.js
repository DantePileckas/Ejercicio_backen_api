import CustomError from '../errores/CustomError.js'

class Tasas {

    async getTasas(marca,importe) {
        let tasa;
        const fecha = new Date();

        const añoActual = fecha.getFullYear()%100;
        console.log(añoActual);

        const mesActual = fecha.getMonth() + 1; 
        console.log(mesActual);

        const hoy = fecha.getDate();
        console.log(hoy)


        switch (marca) {
            case 'VISA': {
                tasa = añoActual / mesActual; 
                importe += (tasa * importe) / 100;
                
            }
            break;
            
            case 'NARA':{
                tasa = hoy  * 0.5;
                importe += (tasa * importe) / 100;
            }
            break;
            case 'AMEX':{
                tasa = mesActual  * 0.1;
                importe += (tasa * importe) / 100;
            }
            break;
            
            
            default:
                console.log("Valor incorrecto: " + marca);
    
            }
            console.log("Marca: " + marca + ", importe aplicado con interés: " + importe);
            
            return tasa;
            
        }

}

export default Tasas