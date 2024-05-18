//let uid1 = '';


async function get_pages(uid,diss,nioktr,rid,nauch,sort,start_date,end_date) {
  saw = await  fff(uid,diss,nioktr,rid,nauch,sort,start_date,end_date)
        .then(function (response) {
            // handle success
            //let d = document.createElement('div');
            //d.innerText = response.data.value;
            //document.body.append(d);
            console.log('responceByUID СУКАААА', response.value);
            return response.value;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return saw;
}

async function get_page_by_id(i, vuz,diss,nioktr,rid,nauch,sort,start_date,end_date) {
  saw = await  ff(i, vuz,diss,nioktr,rid,nauch,sort,start_date,end_date)
        .then(function (response) {
            // handle success
            //let d = document.createElement('div');
            //d.innerText = response.data.value;
            //document.body.append(d);
            console.log('responceByid', response);
            return response;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    return saw;
}



//async function pagesbyUid(uid)
//{
//    uid1 = uid;
//    
//    let res = await get_pages(uid);
//    
//    //console.log('diss',diss.checked);
//    console.log('res', res);
//    createPages(res);
//}


async function change_page(i) {
    console.log('i', i);
    let diss = document.getElementById('diss').checked;
    let nioktr = document.getElementById('nioktr').checked;
    let rid = document.getElementById('rid').checked;
    let nauch = document.getElementById('nauch').checked;
    let vuz = document.getElementById('vuz-select').value;
    let sort = document.getElementById('sort-select').value;
    let start_date = document.getElementById('start-date').value;
    let sd = new Date(start_date);
    let end_date = document.getElementById('end-date').value;
    let ed = new Date(end_date);
    let sdComlete = getFormatDateField(sd);
    let edComlete = getFormatDateField(ed);
    console.log('start_date', ed);
    let res = await get_page_by_id(i, vuz, diss, nioktr, rid, nauch, sort,sdComlete,edComlete);
    console.log('АГШФЫВПАФЫВПОЩРФПАЩОРФЩПОРПЩР res', res);
    await get_page(res,i);
    console.log('resID', i);
    createPages(i)
    let btn = document.getElementById(i);
    btn.style.background = 'rgb(184, 217, 245)';



}
let RRRRR = 0;

function getFormatDateField(datefield)
{   
    let day = ("0" + datefield.getDate()).slice(-2);
    let month = ("0" + (datefield.getMonth() + 1)).slice(-2);
    let date = datefield.getFullYear() + "-" + (month) + "-" + (day);
    console.log('today', date);
    
    return date;
}

async function show()
{
    let diss = document.getElementById('diss').checked;
    let nioktr = document.getElementById('nioktr').checked;
    let rid = document.getElementById('rid').checked;
    let nauch = document.getElementById('nauch').checked;
    let vuz = document.getElementById('vuz-select').value;
    let sort = document.getElementById('sort-select').value;
    console.log('diss.checked', diss);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    let start_date = document.getElementById('start-date').value;
    let end_date = document.getElementById('end-date').value;
    let sd = new Date(start_date);
    let ed = new Date(end_date);
    let sdComlete = getFormatDateField(sd);
    let edComlete = getFormatDateField(ed);
    let res = await get_pages(vuz, diss, nioktr, rid, nauch, sort,sdComlete,edComlete);
    //Analysis(res);\
    //showAnalysis();
    RRRRR = res;
    createPages(1);
    if (document.getElementById('pages'))
        document.getElementById('pages').remove();
    
}
async function show2()
{
    let diss = document.getElementById('diss').checked;
    let nioktr = document.getElementById('nioktr').checked;
    let rid = document.getElementById('rid').checked;
    let nauch = document.getElementById('nauch').checked;
    let vuz = document.getElementById('vuz-select').value;
    let sort = document.getElementById('sort-select').value;
    let start_date = document.getElementById('start-date');
    let end_date = document.getElementById('end-date');
    console.log('diss.checked', diss);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    //let res = await get_pages(vuz, diss, nioktr, rid, nauch, sort);
    //Analysis(res);\
    showAnalysis();
    //RRRRR = res;
    //createPages(1);
    //if (document.getElementById('pages'))
    //    document.getElementById('pages').remove();
    
}
function createPages(currentP)
{
    console.log('RRRRR', RRRRR);
    let res = RRRRR;
    j = 0;
    res = res / 10;
    res = Math.floor(res);
    console.log('res', res);
    if (res != 0) {
        if (document.getElementById(`${1}`) !== null)
            while (document.getElementById(`${j + 1}`) !== null) {
                if (document.getElementById(`${j + 1}`) !== null)
                    element = document.getElementById(`${j + 1}`);
                element.remove();
                j++
            }
    
        if (document.getElementById('btns'))
            document.getElementById('btns').remove();
    
    
        div = document.createElement('div')
        div.id = 'pages';
        document.body.append(div);
        divb = document.createElement('div')
        divb.id = 'btns';
        document.body.append(divb);
        
    
    
    
        if (document.getElementById('first'))
            document.getElementById('first').remove();
            
        if (document.getElementById('last'))
            document.getElementById('last').remove();
            
        btn = document.createElement('button');
        btn.addEventListener('click', () => { return change_page(1); });
        //console.log('uid1', uid1);
        btn.innerText = 'Первая';
        btn.id = 'first';
        divb.appendChild(btn);

    

        //for (let i = 0; i <= res; i++) {
        //    btn = document.createElement('button');
        //    btn.addEventListener('click', () => { return change_page(i + 1, uid1); });
        //    console.log('uid1', uid1);
        //    btn.innerText = i + 1;
        //    btn.id = i + 1;
        //    divb.appendChild(btn);
        //    
        //}
    
        let min_page = currentP - 2;
        let max_page = currentP + 2;
        if (min_page < 1) {
            min_page = 0;
            max_page = 4;
        }
        console.log('faSFASFASFASDFASF res', res);
        if (max_page >= res + 1) {
            max_page = res;
            min_page = res - 4;
        }
        console.log('max_page', max_page);
        console.log('min_page', min_page);
        if (res < 4 && res > 0) {
            for (let i = 0; i <= res; i++) {
                btn = document.createElement('button');
                btn.addEventListener('click', () => { return change_page(i + 1); });
                //console.log('uid1', uid1);
                btn.innerText = i + 1;
                btn.id = i + 1;
                //btn.classList.add('selectedBTN');
                divb.appendChild(btn);
            }
        }

   
        else (res > 4)
        {
            for (let i = min_page; i <= max_page; i++) {
                btn = document.createElement('button');
                btn.addEventListener('click', () => { return change_page(i + 1); });
                //console.log('uid1', uid1);
                btn.innerText = i + 1;
                btn.id = i + 1;
                //btn.classList.add('selectedBTN');
                divb.appendChild(btn);
        
            }
        }
        btnl = document.createElement('button');
        btnl.addEventListener('click', () => { return change_page(res + 1); });
        //console.log('uid1', uid1);
        btnl.innerText = 'Последняя';
        btnl.id = 'last';
        divb.appendChild(btnl);
    }

}




listUniversirty = [10184556,10192406,10178176,10109220]


//for (let i = 1; i <= 4; i++) {
//    btn = document.getElementById(`btn${i}`);
//    btn.addEventListener('click', () => {
//        return pagesbyUid(listUniversirty[i - 1]);
//    });
//}


btnSub = document.getElementById('getDATA');
btnSub.addEventListener('click', () => {
    return show();
});
btnSub = document.getElementById('getDATA2');
btnSub.addEventListener('click', () => {
    return show2();
});



function Analysis(res) {
    if (document.getElementById('myChart'))
        document.getElementById('myChart').remove();
    let chart = document.getElementById('chart');
    let canvas = document.createElement('canvas')
    canvas.id = 'myChart';
    chart.appendChild(canvas);
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Кубгу', 'Кубгту', 'Кубгаy', 'Кубгму'],
            datasets: [{
                label: '# Работ по параметрам',
                data: res,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function AnalRadar(data) {
    console.log('data', data);
    const config = {
        type: 'radar',
        data: ['1'],
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            }
        },
    };
    if (document.getElementById('myChart2'))
        document.getElementById('myChart2').remove();
    let chart2 = document.getElementById('chart2');
    let canvas2 = document.createElement('canvas')
    canvas2.id = 'myChart2';
    chart2.appendChild(canvas2);
    const ctx2 = document.getElementById('myChart2');
    new Chart(ctx2, {
        type: 'radar',
        data: data,
        options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//options: {
//  elements: {
//    line: {
//      borderWidth: 3
//    }
//  }
//      },
//tions: {
//          scales: {
//              y: {
//                  beginAtZero: true
//              }
//          }
//      }    });
}


async function showAnalysis()
{
    let diss = document.getElementById('diss').checked;
    let nioktr = document.getElementById('nioktr').checked;
    let rid = document.getElementById('rid').checked;
    let nauch = document.getElementById('nauch').checked;
    let vuz = document.getElementById('vuz-select').value;
    let sort = document.getElementById('sort-select').value;
    let start_date = document.getElementById('start-date').value;
    let end_date = document.getElementById('end-date').value;
    let sd = new Date(start_date);
    let ed = new Date(end_date);
    let sdComlete = getFormatDateField(sd);
    let edComlete = getFormatDateField(ed);
    console.log('diss.checked', diss);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);
    console.log('diss.checked', diss.checked);

    let res=[];
    for (let keys in listUniversirty) {
        res[keys] = await get_pages(listUniversirty[keys], true, true, true, true, sort,sdComlete,edComlete);
        console.log('keys', keys);
    }
    let res2 = [[],[],[],[]]; 
    for (let keys in listUniversirty)
    {
        res2[keys][0] = await get_pages(listUniversirty[keys], true, false, false, false, sort,sdComlete,edComlete)
        res2[keys][1] = await get_pages(listUniversirty[keys], false, true, false, false, sort,sdComlete,edComlete)
        res2[keys][2] = await get_pages(listUniversirty[keys], false, false, true, false, sort,sdComlete,edComlete)
        res2[keys][3] = await get_pages(listUniversirty[keys], false, false, false, true, sort,sdComlete,edComlete)
    
    }
    let listUni = ['Кубгу', 'Кубгту','Кубгау','Кубгму']
    console.log('res2', res2);
    let dataTEST = {
        labels: [
            'Диссертация',
            'НИОКТР',
            'РИД',
            'Научный отчёт',
        ],
        datasets: []
    }
    let datasets = [];
    for (let keys in res2)
    {
        let dataset ={}
        dataset['label'] = listUni[keys];
        let dat = [];
        for (let i = 0; i < 4; i++)
        {
            dataTEST['datasets']
            = res2[keys][i];
            dat.push(res2[keys][i]);
            
        }
    //dataset['backgroundColor']= 'rgba(255, 99, 132, 0.2)',
    //dataset['borderColor'] = 'rgb(255, 99, 132)',
    //dataset['pointBackgroundColor'] ='rgb(255, 99, 132)',
    //dataset['pointBorderColor'] ='#fff',
    //dataset['pointHoverBackgroundColor'] ='#fff',
    //dataset['pointHoverBorderColor']= 'rgb(255, 99, 132)'
        console.log('dat', dat);
        dataset['data'] = dat;
        datasets.push(dataset);
    }
    dataTEST['datasets'] = datasets;
        console.log('AGOISDHJGUASHDG{OUHSGUOHAS{UIOGHASO{UIGHA',dataTEST);


    const data = {
  labels: [
    'diss',
    'nioktr',
    'rid',
    'nauch',
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65,],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};
    Analysis(res);
    AnalRadar(dataTEST);
    //RRRRR = res;
    //createPages(1);
    //if (document.getElementById('pages'))
    //    document.getElementById('pages').remove();
    
}