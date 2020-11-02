export function randomNumbers (number) {
    let ranN = [];
    for( let i =0; i<number; i++){
        let ran = Math.floor(Math.random() * 201) - 100;
        ranN.push(ran)
    }
    return ranN
}

export function  decToHex  (ranN) {
   let hexN = []
    ranN.map((value)=>{
    let gHex = Math.round((value * 255) / 100); 
    let rHex = 255 - gHex; 
    gHex = gHex.toString(16); 
    rHex = rHex.toString(16);
    gHex = gHex.length === 1 ? `0${gHex}` : gHex; 
    rHex = rHex.length === 1 ? `0${rHex}` : rHex;
    hexN.push(`#${rHex}${gHex}00`); 
    })
    return hexN
}
 
