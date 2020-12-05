let d, t, m, pr, n, i, s;
d = 'Deposit Summ';
t = 'Deposit Time';
d = +prompt('put' + ' ' + d + ',' + 'UAH');
t = +prompt('put' + ' ' + t + ','  +'month');
m = t ;

if(m>0 && m<6) {
    if (m<3){
        for (let m = 1; m <=3; m++){ 
        pr = 0;
        i = 0;
        n = 0;
        console.log('month=' + ' ' + m +';  '+'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n}`+ ';  ' +  'your month summ=' + ' ' + `${i }`+';  ' +  'deposite summ=' + ' ' + `${d}` +';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
    }}
    else {
        for (let m = 1; m <=3; m++){  
        pr = 0.13     
        i = +(d *pr/12*m^m);
        i.toFixed(2);
        n = +(i* 0.2/100*100).toFixed(0);
         alert(' your year procent = 13 %');
    
    console.log('month=' + ' ' + m +';  '+'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n}`+ ';  ' +  'your month summ=' + ' ' + `${i }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}` +';  ');
    console.log('month=' + ' ' + (m+=1) +';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
    console.log('month=' + ' ' + (m+=1) +';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
    console.log('month=' + ' ' + (m+=1) +';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
    console.log('month=' + ' ' + (m+=1) +';  '+  'year % =' + ' ' + `${pr*100}`+';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');

    }
}
     
}else if (m >5 && m<12){
    pr= (0.16);
    for (let m = 1; m<12; m++){
        i = +(d*(pr/12*m**m)).toFixed(2);
        n = +(i* 0.2).toFixed(0);
        alert(' your year procent = 16 %');
        console.log('month=' + ' ' + m +';  '+'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n}`+ ';  ' +  'your month summ=' + ' ' + `${i}`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}` +';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');

    }  
}
else  {
    pr= +(0.18);
    for (let m = 1 ; m <= 12; m++){
        i = +(d*(pr/12*m**m)).toFixed(2);
        n = +(i* 0.2).toFixed(0);
        alert(' your year procent = 18 %');
        console.log('month=' + ' ' + m +';  '+'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n}`+ ';  ' +  'your month summ=' + ' ' + `${i}`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}` +';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+' ;  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');
        console.log('month=' + ' ' + (m+=1)+ ';  '+  'year % =' + ' ' + `${pr*100}` +';  '+ 'nalog=' + ' ' + `${n*m}` + ';  ' +  'your month summ=' + ' ' + `${i*m }`+';  ' +  'deposite summ=' + ' ' + `${d+((i-n)*m)}`+';  ');

    
    }
}

