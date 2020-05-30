import './SeasonDisplay.css'
import React from 'react';

const SeasonConfig={
	summer:{
		text:"Lets hit the Beach!!",
		iconName:'sun'
	},
	winter:{
		text:"Burr its chilly!!",
		iconName:'snowflake'
	}
};



const getSeason = (lat,month)=>{
	if(month>2&&month<9){
		return lat > 0 ?'summer':'winter' ;
	}else{
		return lat>0? 'winter':'summer';
	}
}

const SeasonDisplay =(props)=>{
	const season = getSeason(props.lat,new Date().getMonth());
	const {text,iconName} = SeasonConfig[season];
	
	return (<div className={`season-display ${season}`}>
<i className={`icon-left massive ${iconName} icon`}></i>
<h1 className="text-alig">{text}</h1>
<i className={`icon-right massive ${iconName} icon`}></i>
</div>);
	}



export default SeasonDisplay