// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o 
// usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen 
// un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o 
// características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.


let auto = [ 
    {
        
        marca:"CHEVROLET",
        referencia:"CAPTIVA",
        diseñoexterior:"Presenta un diseño aerodinámico y elegante con líneas fluidas. Puede venir con faros delanteros estilizados, luces traseras LED y parrilla distintiva de la marca.",
        espaciointerior:"Como SUV de tamaño mediano, la Captiva ofrece un amplio espacio para los pasajeros y el equipaje. Puede acomodar a cinco o siete pasajeros, dependiendo de la configuración de asientos.",
        
     },{
        marca:"CHEVROLET",
        referencia:"TRACKER",
        diseñoexterior:"La Chevrolet Tracker presenta un diseño moderno y versátil que la hace destacar en su categoría de SUV compacta. Suele tener líneas aerodinámicas y elegantes, con detalles estilizados que le brindan una apariencia atractiva. Puede contar con elementos distintivos de la marca Chevrolet, como la parrilla de doble puerto y faros LED o halógenos, dependiendo de la versión y equipamiento.",
        espaciointerior:"El interior de la Chevrolet Tracker está diseñado para ofrecer un ambiente cómodo y espacioso para sus ocupantes. A pesar de ser una SUV compacta, proporciona un amplio espacio para los pasajeros en las plazas delanteras y traseras. Además, puede tener una configuración de asientos que permite acomodar a cinco pasajeros.",
    
     },{

        marca:"MAZDA",
        referencia:"CX-30",
        diseñoexterior:"La Mazda CX-30 tiene un diseño exterior distintivo y moderno que combina elementos de una SUV compacta con líneas elegantes y deportivas. La CX-30 puede contar con faros LED estilizados y una parrilla frontal que refleja la identidad de la marca. Además, suele tener líneas suaves y bien definidas que contribuyen a una apariencia sofisticada y atractiva.",
        espaciointerior:"A pesar de ser una SUV compacta, la Mazda CX-30 ofrece un interior espacioso y cómodo tanto para el conductor como para los pasajeros. Los asientos están diseñados para brindar buen soporte y comodidad en trayectos largos. Dependiendo de la configuración de asientos, la CX-30 puede acomodar cómodamente a cuatro o cinco pasajeros. También ofrece una generosa capacidad de carga en el maletero, lo que permite transportar equipaje y objetos con facilidad.",

     },{

        marca:"MAZDA",
        referencia:"323",
        diseñoexterior:"A lo largo de sus generaciones, el Mazda 323 ha presentado un diseño exterior clásico y funcional. En general, se caracteriza por líneas simples y limpias que le dan un aspecto agradable y sin excesos. Puede tener una parrilla frontal de estilo distintivo de la marca Mazda y faros delanteros bien integrados en el diseño.",
        espaciointerior:"El Mazda 323 ha ofrecido un espacio interior adecuado para un sedán o hatchback compacto. Dependiendo de la versión y la generación, el vehículo puede acomodar cómodamente a cuatro o cinco pasajeros. Los asientos suelen ser cómodos y brindan buen soporte. Además, el vehículo puede tener un maletero de tamaño razonable que proporciona suficiente capacidad de carga para llevar equipaje y objetos básicos.",

     },{

        marca:"RENAULT",
        referencia:"LOGAN",
        diseñoexterior:"El Renault Logan se caracteriza por un diseño exterior sencillo y funcional, enfocado en la practicidad y la eficiencia. A lo largo de sus diferentes generaciones, ha presentado líneas rectas y limpias, lo que le da una apariencia sobria y moderna. Puede contar con una parrilla frontal característica de la marca Renault y faros delanteros bien integrados en el diseño",
        espaciointerior:"Una de las principales ventajas del Renault Logan es su amplio espacio interior. Se destaca por ofrecer un generoso espacio para los pasajeros tanto en las plazas delanteras como en las traseras. Esto lo convierte en un vehículo cómodo para los ocupantes, especialmente en trayectos largos. Además, el Renault Logan suele ofrecer un maletero de tamaño considerable, proporcionando una capacidad de carga adecuada para equipaje y objetos diversos.",

     },{

        marca:"RENAULT",
        referencia:"SANDERO",
        diseñoexterior:"El Renault Sandero presenta un diseño exterior moderno y atractivo. A lo largo de sus diferentes generaciones, ha evolucionado para incorporar líneas más suaves y dinámicas, lo que le da una apariencia fresca y actualizada. Puede contar con detalles estilizados en la parrilla frontal y faros delanteros que reflejan el lenguaje de diseño de la marca Renault.",
        espaciointerior:"El Renault Sandero se destaca por ofrecer un amplio espacio interior, lo que lo convierte en un automóvil cómodo y práctico para los pasajeros. Las plazas delanteras y traseras proporcionan suficiente espacio para que los ocupantes se sientan cómodos, incluso en trayectos largos. Además, el vehículo ofrece un maletero de tamaño adecuado para una SUV compacta, permitiendo llevar equipaje y objetos con facilidad.",

     }
    ]

alert("🚗 BIENVENIDO A VenXtucarro 🚗")



let marca=prompt("¿Que marca de autos de interesa?\n1. Chevrolet -- 2. Mazda -- 3. Renault")

function concesionario(){

switch(marca){

case "1":{
        let referencias=prompt("En este momento tenemos 2 opciones de CHEVROLET diponibles:\n 1. Chevrolet Captiva --- 2. Chevrolet Tracker")

        switch(referencias){

            case "1":{

                alert(`${auto[0].marca}\n${auto[0].referencia}\n\n${auto[0].diseñoexterior}\n\n${auto[0].espaciointerior}`)
               
                let eleccion="h";
                
                while(eleccion!=="Si" && eleccion!=="No"){

                let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
                if(eleccion=="Si"){
                    
                    alert(`Te entregamos las llaves de tu ${auto[0].marca} ${auto[0].referencia}, disfrutala :)`)
                break    
                    
                }else if(eleccion!=="Si" && eleccion!=="No"){

                    alert("Valor invalido")
                }else if(eleccion=="No"){



                    alert("Esta bien, vuelve cuando quieras :)"); 
                    break
                }
            
            }  
                
                break
            }case "2":{

                alert(`${auto[1].marca}\n${auto[1].referencia}\n\n${auto[1].diseñoexterior}\n\n${auto[1].espaciointerior}`)

                let eleccion="h";
                
                while(eleccion!=="Si" && eleccion!=="No"){

                let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
                if(eleccion=="Si"){
                    
                    alert(`Te entregamos las llaves de tu ${auto[1].marca} ${auto[1].referencia}, disfrutala :)`)
                break    
                    
                }else if(eleccion!=="Si" && eleccion!=="No"){

                    alert("Valor invalido")
                }else if(eleccion=="No"){



                    alert("Esta bien, vuelve cuando quieras :)"); 
                break
            }

        }    


   
}}
break 
}
case "2":{
    let referencias=prompt("En este momento tenemos 2 opciones de MAZDA diponibles:\n 1. Mazda CX30 --- 2. Mazda 323")

    switch(referencias){

        case "1":{

            alert(`${auto[2].marca}\n${auto[2].referencia}\n\n${auto[2].diseñoexterior}\n\n${auto[2].espaciointerior}`)
            let eleccion="h";
                
            while(eleccion!=="Si" && eleccion!=="No"){

            let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
            if(eleccion=="Si"){
                
                alert(`Te entregamos las llaves de tu ${auto[2].marca} ${auto[2].referencia}, disfrutala :)`)
            break    
                
            }else if(eleccion!=="Si" && eleccion!=="No"){

                alert("Valor invalido")
            }else if(eleccion=="No"){



                alert("Esta bien, vuelve cuando quieras :)"); 
                break
        }

    }  
            
            
            break
        }case "2":{

            alert(`${auto[3].marca}\n${auto[3].referencia}\n\n${auto[3].diseñoexterior}\n\n${auto[3].espaciointerior}`)

            let eleccion="h";
                
            while(eleccion!=="Si" && eleccion!=="No"){

            let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
            if(eleccion=="Si"){
                
                alert(`Te entregamos las llaves de tu ${auto[3].marca} ${auto[3].referencia}, disfrutala :)`)
            break    
                
            }else if(eleccion!=="Si" && eleccion!=="No"){

                alert("Valor invalido")
            }else if(eleccion=="No"){



                alert("Esta bien, vuelve cuando quieras :)"); 
                break
        }

    }  
            break
        }

    }    

break    
}
case "3":{
    let referencias=prompt("En este momento tenemos 2 opciones de RENAULT diponibles:\n 1. Renault Logan --- 2. Renault Sandero")

    switch(referencias){

        case "1":{

            alert(`${auto[4].marca}\n${auto[4].referencia}\n\n${auto[4].diseñoexterior}\n\n${auto[4].espaciointerior}`)
            
            let eleccion="h";
                
            while(eleccion!=="Si" && eleccion!=="No"){

            let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
            if(eleccion=="Si"){
                
                alert(`Te entregamos las llaves de tu ${auto[4].marca} ${auto[4].referencia}, disfrutala :)`)
            break    
                
            }else if(eleccion!=="Si" && eleccion!=="No"){

                alert("Valor invalido")
            }else if(eleccion=="No"){



                alert("Esta bien, vuelve cuando quieras :)"); 
                break
        }

    }  
            
            
            break
        }case "2":{

            alert(`${auto[5].marca}\n${auto[5].referencia}\n\n${auto[5].diseñoexterior}\n\n${auto[5].espaciointerior}`)

            let eleccion="h";
                
            while(eleccion!=="Si" && eleccion!=="No"){

            let eleccion=prompt("¿Quieres comprar este vehiculo? Si/No")
            if(eleccion=="Si"){
                
                alert(`Te entregamos las llaves de tu ${auto[5].marca} ${auto[5].referencia}, disfrutala :)`)
            break    
                
            }else if(eleccion!=="Si" && eleccion!=="No"){

                alert("Valor invalido")
            }else if(eleccion=="No"){



                alert("Esta bien, vuelve cuando quieras :)"); 
                break
        }

    }  

            break
        }

    }    

break    
}}
}

concesionario();

