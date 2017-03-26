export function transAipDate(value){
		let date;
		if (value && value.length==8){
            date = value.slice(0, 4) + "-" + value.slice(4, 6) + "-" + value.slice(6, 8);
		}else{
			date = '';
		}
		return date;
}
export function transSurge(value){
		let date;
	if (isNaN(value)) {
		date = value;
	} else{
		date = value*100+"";
		date = date.slice(0,5);
	}
	return date;
		
}
//保留小数位 num为保留几位
export function etainNum(value,num,type){
	let data;
    if (!isNaN(value)){
    	//针对万分收益*100
    	if (type =='W' || type == 'Q'){
			data = parseFloat(value*100).toFixed(num);
		}else{
            data=parseFloat(value).toFixed(num);
		}
    }else{
        data=value;
	}
    return data;
}
//针对排行处理每个产品的折扣
export function handleAgio(list) {
    let agio,arr=[];
    if (list && list.length>0){
        for (let i=0;i<list.length;i++){
            if (list[i].channelId=='1' && (list[i].transCode=='100201'|| list[i].transCode=='100200')){
                arr.push(list[i].agio);
            }
        }
    }
    if (arr.length>0){
        agio = (Math.min.apply(null, arr)*10)+'折';
	} else{
        agio = '--';
    }
    return agio;
}