function matchCron(str, date){
    const day = (date.getDay() +6) %7 +1
     
    console.log(day)
    const hours= date.getHours() 
    const  minutes= date.getMinutes()
    const month= date.getMonth() + 1
    const dayofmonth= date.getDate()
    
    let gogo = str.split(' ')
    
    let y= (gogo[0]==minutes || gogo[0] === '*') 
    let i= (gogo[1]==hours || gogo[1] === '*') 
    let p= (gogo[2]==dayofmonth || gogo[2] === '*') 
    let k= (gogo[3]==month || gogo[3] === '*') 
    let ko= (gogo[4]==day || gogo[4] === '*') 

    
    return y && i && p && k && ko
    }
    
    
    
    // console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))
    
    
    // console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
    // console.log(matchCron('* * 9 * *', new Date('2020-06-09 00:00:00')))
    // console.log(matchCron('* 3 * * *', new Date('2020-05-31 03:00:00')))
    // console.log(matchCron('1 * * * *', new Date('2020-05-30 19:01:00')))
    // console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
    // console.log(matchCron('* * * * *', new Date()))
    // //console.log( matchCron('* 7 * * *', new Date(`201${ctx}-01-01 07:00:00`)))
    
    // console.log(matchCron('* * * * 1', new Date('2020-06-02 00:00:00')))
    // console.log(matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
    // console.log(matchCron('* * 8 * *', new Date('2020-06-09 00:00:00')))
    // console.log(matchCron('* 2 * * *', new Date('2020-05-31 03:00:00')))
    // console.log(matchCron('1 * * * *', new Date('2020-05-30 19:00:00')))
    // console.log(matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')))