
const video = document.getElementById('myVideo');
const play = () => {
    video.play();
    video.loop = true;
    video.muted = true;
}
play();


let country_id = document.getElementById('country_id'),
    button_view = document.getElementsByClassName('button_view'),
    block_country = document.getElementsByClassName('block_country');

for (let index = 0; index < button_view.length; index++) {
    button_view[index].setAttribute('data-index',index);
}

const copyText = (e) => {
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(e.target.previousElementSibling);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    e.target.nextElementSibling.innerHTML = "&#9989;";
    setTimeout(() => {e.target.nextElementSibling.innerHTML = "";}, 1000);
}




let click_submenu = document.getElementById('click_submenu'),
    icon_event = document.getElementById('icon_event'),
    submenu = document.getElementById('submenu');

const submenuevent = () => {
    let submenulet = submenu.style.display;
    if (submenulet == 'flex') {
            submenu.style.display = 'none';
            icon_event.setAttribute('src','imagen/more.svg');
        } else {
            submenu.style.display = 'flex';
            icon_event.setAttribute('src','imagen/minus.svg');
    } 
}

click_submenu.addEventListener('click', submenuevent);



const openClose = (index) => {
    let Close = block_country[index].style.display;
    if (Close == 'block') {
        block_country[index].style.display = 'none';
        button_view[index].innerHTML ='Ver +';
        button_view[index].style.backgroundColor ='transparent';
        button_view[index].style.color ='black';
        button_view[index].style.border ='1px solid black';
    } else {
        block_country[index].style.display = 'block';
        button_view[index].innerHTML ='Cerrar';
        button_view[index].style.backgroundColor ='rgb(165, 58, 58)';
        button_view[index].style.color ='white';
        button_view[index].style.border ='1px solid rgb(165, 58, 58)';
    } 
}


let eventHandler = e => {
    const className = e.target.className;
    switch (className) {
        case ('button'):
            copyText(e);
            break;
        case ('button_view'):
            openClose(e.target.dataset.index);
            break;
        default:
            break;
    }
}
country_id.addEventListener('click', eventHandler);



    
const dia = (e) => {
    let day = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    return day[e];
}
const mes = (e) => {
    let mes = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Set','Oct','Nov','Dic'];
    return mes[e];
}
const time = (e) =>{
    let timeFormat = ('0' + e).slice(-2);
    return timeFormat;
}
    
    
const tiempo = (tiempoFormat) => {
    let ahora = new Date(),
        remaintime = (new Date(tiempoFormat) - ahora + 1000)/1000,
        remainsecond = ('0' + Math.floor(remaintime % 60)).slice(-2),
        remaiminutes = ('0' + Math.floor(remaintime / 60 % 60)).slice(-2),
        remaihours = ('0' + Math.floor(remaintime / 3600 % 24)).slice(-2),
        remaidays = Math.floor(remaintime / (3600 * 24));
        return{
            remaintime,
            remainsecond,
            remainsecond,
            remaiminutes,
            remaihours,
            remaidays
        }
}

const countdown = (timeFormatStart,timeFormatEnd,elem,timeLocalStart,timeLocalEnd,status) => {
    const dateStart = new Date(timeFormatStart),
          dateEnd = new Date(timeFormatEnd),
          localStart = document.getElementById(timeLocalStart),
          localEnd = document.getElementById(timeLocalEnd),
          el = document.getElementById(elem);

    localStart.innerHTML = `${dia(dateStart.getDay())}, 
                        ${dateStart.getDate()} de
                        ${mes(dateStart.getMonth())} - 
                        ${time(dateStart.getHours())}:${time(dateStart.getMinutes())}`;

    localEnd.innerHTML = `${dia(dateEnd.getDay())}, 
                        ${dateEnd.getDate()} de
                        ${mes(dateEnd.getMonth())} -  
                        ${time(dateEnd.getHours())}:${time(dateEnd.getMinutes())}`;
    if (status == 1) {
        const timerupdate = setInterval(() => {
            let t = tiempo(timeFormatStart);
            if (t.remaintime > 1) {
                el.innerHTML = `<div>Comienza en: <span>${t.remaidays}</span><span>d </span>
                                       <span>${t.remaihours}</span><span>h </span>
                                       <span>${t.remaiminutes}</span><span>m </span>
                                       <span>${t.remainsecond}</span><span>s </span></div>`;
            } else {
                let a = tiempo(timeFormatEnd);
                if (a.remaintime > 1) {
                    el.innerHTML = `<div>Termina en: <span>${a.remaidays}</span><span>d </span>
                                            <span>${a.remaihours}</span><span>h </span>
                                            <span>${a.remaiminutes}</span><span>m </span>
                                            <span>${a.remainsecond}</span><span>s </span></div>`;
                } else {
                    clearInterval(timerupdate);
                    el.innerHTML = `<div>EVENTO FINALIZADO</div>`;
                }
            }
        }, 1000);
    } else if (status == 2) {
        const timerupdate2 = setInterval(() => {
            let t = tiempo(timeFormatStart);
            if (t.remaintime > 1) {
                el.innerHTML = `<div>Comienza en: <span>${t.remaidays}</span><span>d </span>
                                       <span>${t.remaihours}</span><span>h </span>
                                       <span>${t.remaiminutes}</span><span>m </span>
                                       <span>${t.remainsecond}</span><span>s </span></div>`;
            } else {
                let a = tiempo(timeFormatEnd);
                if (a.remaintime > 1) {
                    el.innerHTML = `<div>Termina en: <span>${a.remaidays}</span><span>d </span>
                                            <span>${a.remaihours}</span><span>h </span>
                                            <span>${a.remaiminutes}</span><span>m </span>
                                            <span>${a.remainsecond}</span><span>s </span></div>`;
                } else {
                    clearInterval(timerupdate2);
                    el.innerHTML = `<div>SERVIDORES RESTABLECIDOS</div>`;
                }
            }
        }, 1000);
    } else if (status == 3) {
        const timerupdate2 = setInterval(() => {
            let t = tiempo(timeFormatStart);
            if (t.remaintime > 1) {
                el.innerHTML = `<div>Cambia en: <span>${t.remaidays}</span><span>d </span>
                                       <span>${t.remaihours}</span><span>h </span>
                                       <span>${t.remaiminutes}</span><span>m </span>
                                       <span>${t.remainsecond}</span><span>s </span></div>`;
            } else {
                let a = tiempo(timeFormatEnd);
                if (a.remaintime > 1) {
                    el.innerHTML = `<div>Cambia en: <span>${a.remaidays}</span><span>d </span>
                                            <span>${a.remaihours}</span><span>h </span>
                                            <span>${a.remaiminutes}</span><span>m </span>
                                            <span>${a.remainsecond}</span><span>s </span></div>`;
                } else {
                    clearInterval(timerupdate2);
                    el.innerHTML = `<div>PROMOCION FINALIZADA</div>`;
                }
            }
        }, 1000);
    } else if (status == 4) {
        const timerupdate2 = setInterval(() => {
            let t = tiempo(timeFormatStart);
            if (t.remaintime > 1) {
                el.innerHTML = `<div>Termina en: <span>${t.remaidays}</span><span>d </span>
                                       <span>${t.remaihours}</span><span>h </span>
                                       <span>${t.remaiminutes}</span><span>m </span>
                                       <span>${t.remainsecond}</span><span>s </span></div>`;
            } else {
                let a = tiempo(timeFormatEnd);
                if (a.remaintime > 1) {
                    el.innerHTML = `<div>Regresan en: <span>${a.remaidays}</span><span>d </span>
                                            <span>${a.remaihours}</span><span>h </span>
                                            <span>${a.remaiminutes}</span><span>m </span>
                                            <span>${a.remainsecond}</span><span>s </span></div>`;
                } else {
                    clearInterval(timerupdate2);
                    el.innerHTML = `<div>¡PREPARENSE PARA LOS PROBLEMAS!</div>`;
                }
            }
        }, 1000);
    } else {
        el.innerHTML = `<div>LIGA POSTERGADA</div>`;
    }  
}

countdown(`Wed Jun 10 2020 17:00:00 GMT-0700`,`Wed Jun 24 2020 17:00:00 GMT-0700`,"time_1","time_local_start_1","time_local_end_1",3);

countdown(`Mon Jun 1 2020 11:00:00 GMT-0700`,`Mon Jun 1 2020 18:00:00 GMT-0700`,"time_2","time_local_start_2","time_local_end_2",2);

countdown(`Mon Jun 1 2020 13:00:00 GMT-0700`,`Wed Jul 1 2020 13:00:00 GMT-0700`,"time_3","time_local_start_3","time_local_end_3",1);
countdown(`Tue Jun 16 2020 13:00:00 GMT-0700`,`Tue Jul 7 2020 13:00:00 GMT-0700`,"time_4","time_local_start_4","time_local_end_4",1);


countdown(`Mon May 11 2020 13:00:00 GMT-0700`,`Mon Jun 1 2020 13:00:00 GMT-0700`,"time_7","time_local_start_7","time_local_end_7",1);
countdown(`Mon Jun 1 2020 13:00:00 GMT-0700`,`Mon Jun 22 2020 13:00:00 GMT-0700`,"time_8","time_local_start_8","time_local_end_8",1);
countdown(`Mon Jun 22 2020 13:00:00 GMT-0700`,`Mon Jul 6 2020 13:00:00 GMT-0700`,"time_9","time_local_start_9","time_local_end_9",1);
countdown(`Mon Jul 6 2020 13:00:00 GMT-0700`,`Mon Jul 13 2020 13:00:00 GMT-0700`,"time_10","time_local_start_10","time_local_end_10",1);
countdown(`Mon Jul 13 2020 13:00:00 GMT-0700`,`Mon Jul 27 2020 13:00:00 GMT-0700`,"time_12","time_local_start_12","time_local_end_12",1);

countdown(`Thu Mar 12 2020 22:00:00 GMT-0700`,`Tue Jun 30 2020 22:00:00 GMT-0700`,"time_14","time_local_start_14","time_local_end_14",1);


countdown(`Fri May 1 2020 13:00:00 GMT-0700`,`Mon Jun 1 2020 13:00:00 GMT-0700`,"time_16","time_local_start_16","time_local_end_16",1);

countdown(`Fri May 1 2020 00:00:00`,`Wed Sep 30 2020 23:59:59`,"time_17","time_local_start_17","time_local_end_17",4);



countdown(`Tue May 26 2020 13:00:00 GMT-0700`,`Tue Jun 16 2020 13:00:00 GMT-0700`,"time_18","time_local_start_18","time_local_end_18",1);









let community_day = document.getElementById('community_day');
let community_hour = document.getElementById('community_hour');

const local_day_hour = () => {
    setInterval(() => {
        let community_date = new Date(); 
        community_day.innerHTML = `${dia(community_date.getDay())}, 
                                   ${community_date.getDate()} de 
                                   ${mes(community_date.getMonth())} del 
                                   ${community_date.getFullYear()}`;
        community_hour.innerHTML = `${time(community_date.getHours())}:${time(community_date.getMinutes())}:${time(community_date.getSeconds())}`;
    }, 1000);   
}
local_day_hour();


window.onload = function () {
    let loader = document.getElementById('onload');
    loader.setAttribute('class','loader active');
}



