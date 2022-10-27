//Como o RG muda de regi'ao para regiao, preferi abordar 
//os rgs de 9 digitos pois os que estao na db.json sao nesse formato

export function rgFormat(v0,errChar='?'){
    const v = v0.toUpperCase().replace(/[^\dX]/g,'');
    return (v.length==9)?
       v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'):
       (errChar+v0)
    ;
} 