

module.exports = {

  cripto(message){


    let vet1 = [ ]
    let vet2 = [ ]
    let vet3 = [ ]
    let aux ; 

    let cont  = 1;


    for(let i = 0 ; i<message.length; i++){

      cont++;

      if(i %4 == 0 ){
        vet1[i] = message[i]
      }else{
        vet1[i] = ' '
      }

      if( i%2 !=0 && i != 0 ){
        vet2[i] = message[i]
      }else{
      vet2[i] = ' '
      }

      if(cont == 4 ){
        vet3[i] = message[i]
        cont = 0 ;
      }else{
        vet3[i] = ' '
      }
      
    }

    console.log(" "+vet1)
    console.log(" "+vet2)
    console.log(" "+vet3)

  }
}


