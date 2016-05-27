(function(context){'use strict';if(context.define){throw'define is already defined in the global scope, cannot continue';}if(context.require){throw'require is already defined in the global scope, cannot continue';}var mocks={},modules={},definitions={},processing={},arrType=Array,funcType=Function,strType='string',yes=true,nil=null,define,require;function process(id,reqId,optional){var module=modules[id],mock=mocks[id],pid=processing[reqId],dependencies,chain='',x,y,p,moduleDependencies,dependency;if(module){return mock?override(module,mock):module;}if(!pid){pid={length:0};}else if(pid[id]){for(p in pid){if(pid.hasOwnProperty(p)&&p!=='length'){chain+=p+'->';}}throw'circular dependency: '+chain+id;}pid[id]=yes;pid.length+=1;processing[reqId]=pid;module=definitions[id];if(module&&module.def){dependencies=[];if(module.dep instanceof arrType){moduleDependencies=module.dep;for(x=0,y=moduleDependencies.length;x<y;x+=1){dependency=moduleDependencies[x];dependencies[x]=process(dependency.
toString(),reqId,dependency instanceof OptionalModule);}}modules[id]=module=module.def.apply(context,dependencies);}else if(!optional){throw'Module '+id+' is not defined.';}delete definitions[id];delete pid[id];pid.length-=1;if(!pid.length){delete processing[reqId];}return mock?override(module,mock):module;}define=function(id,dependencies,definition,defMock){if(typeof id!==strType){throw"Module id missing or not a string. "+(new Error().stack||'').replace(/\n/g,' / ');}if(!definition&&dependencies){definition=dependencies;dependencies=nil;}if(!definition){throw"Module "+id+" is missing a definition.";}else if(definition instanceof funcType){if(dependencies===nil||dependencies instanceof arrType){if(defMock){mocks[id]=definition();}else{definitions[id]={def:definition,dep:dependencies};}}else{throw'Invalid dependencies for module '+id;}}else{(defMock?mocks:modules)[id]=definition;}};define.mock=function(id,definition){define(id,nil,definition,yes);};define.amd={jQuery:yes};require=
function(ids,callback,errHandler){if(ids instanceof arrType&&callback instanceof funcType){setTimeout(function(){try{var reqId=Math.random(),m=[],x,y;for(x=0,y=ids.length;x<y;x+=1){var module=ids[x];m[x]=process(module.toString(),reqId,module instanceof OptionalModule);}callback.apply(context,m);}catch(err){if(errHandler instanceof funcType){errHandler.call(context,err);}else{throw err;}}},0);}else{throw'Invalid require call - ids: '+JSON.stringify(ids);}};var OptionalModule=function(id){this.id=id;};OptionalModule.prototype.toString=function(){return this.id;};require.optional=function(id){return new OptionalModule(id);};function override(module,mock){for(var p in mock){if(mock.hasOwnProperty(p)&&module.hasOwnProperty(p))module[p]=mock[p];}return module;}context.require=require;context.define=define;}(this));;(function(window){'use strict';var Wikia=window.Wikia||{};function tracker(){var actions={ADD:'add',CLICK:'click',CLICK_LINK_BUTTON:'click-link-button',CLICK_LINK_IMAGE:
'click-link-image',CLICK_LINK_TEXT:'click-link-text',CLOSE:'close',CONFIRM:'confirm',DISABLE:'disable',ENABLE:'enable',ERROR:'error',HOVER:'hover',IMPRESSION:'impression',KEYPRESS:'keypress',PLAY_VIDEO:'play-video',REMOVE:'remove',OPEN:'open',PAGINATE:'paginate',SHARE:'share',SUBMIT:'submit',SUCCESS:'success',SWIPE:'swipe',TAKE_SURVEY:'take-survey',VIEW:'view'},actionsReverse=(function(){var obj={},key;for(key in actions){obj[actions[key]]=key;}return obj;})(),spool=[],slice=spool.slice;function track(){spool.push(slice.call(arguments));}function buildTrackingFunction(){var args=slice.call(arguments),trackingFunction=typeof args[0]==='function'&&args.shift();return function(){var track=trackingFunction||Wikia.Tracker.track;return track.apply(track,args.concat(slice.call(arguments)));};}return{ACTIONS:actions,ACTIONS_REVERSE:actionsReverse,buildTrackingFunction:buildTrackingFunction,spool:spool,track:track};}window.Wikia=Wikia||{};window.Wikia.Tracker=tracker(window);if(window.define&&
window.define.amd){window.define('wikia.tracker',function(){return Wikia.Tracker;});}})(window,undefined);function veTrack(data){if(!window.syslogReport){return;}var defaultData={},uri,finalData;try{try{defaultData.isAnonymous=!wgUserName?'yes':'no';}catch(e){defaultData.isAnonymous='unknown';}try{uri=new mw.Uri(location.href);defaultData.isRedlink=!!uri.query.redlink?'yes':'no';}catch(e){defaultData.isRedlink='unknown';}defaultData.referrer=document.referrer;try{defaultData.contentLanguage=mw.config.get('wgContentLanguage');}catch(e){defaultData.contentLanguage='unknown';}try{defaultData.userLanguage=mw.config.get('wgUserLanguage');}catch(e){defaultData.userLanguage='unknown';}if(window.veOrientationEnabled===undefined){defaultData.orientationEnabled='unknown';}else{defaultData.orientationEnabled=!!window.veOrientationEnabled?'yes':'no';}if(window.anoneditwarning===undefined){defaultData.anonEditWarning='unknown';}else{defaultData.anonEditWarning=!!window.anoneditwarning?'yes':'no';}
try{defaultData.whichVE=('showLoading'in mw.libs.ve)?'new':'old';}catch(e){defaultData.whichVE='unknown';}finalData=$.extend({},defaultData,data);}catch(e){finalData={failed:true};}syslogReport(6,'veTrack-v6',finalData);};define('wikia.abTest',['wikia.window'],function(window){'use strict';if(window.Wikia&&window.Wikia.AbTest){return window.Wikia.AbTest;}});;(function(context){'use strict';var CACHE_PREFIX='wkch_',CACHE_VALUE_PREFIX=CACHE_PREFIX+'val_',CACHE_TTL_PREFIX=CACHE_PREFIX+'ttl_',CACHE_VARY_PREFIX=CACHE_PREFIX+'vary_',CACHE_LONG=2592000,CACHE_STANDARD=86400,CACHE_SHORT=10800,undef;function cache(window,localStorage){var moduleStorage={};if(!localStorage){try{window.localStorage.setItem('localStorageTestItem','testValue');window.localStorage.getItem('localStorageTestItem');localStorage=window.localStorage;}catch(e){localStorage={};}}function uniGet(key){if(moduleStorage[key]!==undef){return moduleStorage[key];}return localStorage[key]||null;}function uniSet(key,value){
moduleStorage[key]=value;localStorage[key]=value;}function uniDel(key){delete moduleStorage[key];delete localStorage[key];}function set(key,value,ttl,customNow){var now=customNow||new Date();ttl=parseInt(ttl,10);if(ttl){uniSet(CACHE_TTL_PREFIX+key,now.getTime()+ttl*1000);}else{uniDel(CACHE_TTL_PREFIX+key);}uniSet(CACHE_VALUE_PREFIX+key,JSON.stringify(value));}function del(key){uniDel(CACHE_TTL_PREFIX+key);uniDel(CACHE_VALUE_PREFIX+key);uniDel(CACHE_VARY_PREFIX+key);}function get(key,customNow){var ttl=uniGet(CACHE_TTL_PREFIX+key),value,now=customNow||new Date();if(!ttl||ttl>now.getTime()){value=uniGet(CACHE_VALUE_PREFIX+key);if(value){return JSON.parse(value);}}del(key);return null;}function setVersioned(key,value,ttl,customNow){set(key,value,ttl,customNow);uniSet(CACHE_VARY_PREFIX+key,window.wgStyleVersion);}function getVersioned(key,customNow){var vary=uniGet(CACHE_VARY_PREFIX+key);if(!vary||vary===window.wgStyleVersion){return get(key,customNow);}del(key);return null;}return{
CACHE_LONG:CACHE_LONG,CACHE_STANDARD:CACHE_STANDARD,CACHE_SHORT:CACHE_SHORT,get:get,set:set,del:del,setVersioned:setVersioned,getVersioned:getVersioned,delVersioned:del};}if(!context.Wikia){context.Wikia={};}context.Wikia.Cache=cache(context);if(context.define&&context.define.amd){context.define('wikia.cache',['wikia.window','wikia.localStorage'],cache);}}(this));;(function(context){'use strict';function cookies(window){var cookieReplaceRegEx1=/^\s*/,cookieReplaceRegEx2=/\s*$/,lastCookieContent,data;function fetchCookies(){var cookieString=window.document.cookie,pair,name,value,separated,i,m;if(lastCookieContent!==cookieString){data={};lastCookieContent=cookieString;separated=cookieString.split(';');for(i=0,m=separated.length;i<m;i+=1){pair=separated[i].split('=');name=pair[0].replace(cookieReplaceRegEx1,'').replace(cookieReplaceRegEx2,'');value=decodeURIComponent(pair[1]);data[name]=value;}}return data;}function get(name){var val=fetchCookies()[name];return(typeof val!=='undefined')?
val:null;}function set(name,value,options){var expDate,currYear,cookieString,data=[],x,y;options=options||{};if(typeof value==='undefined'||value===null){value='';options.expires=-1;}if(options.expires){if(options.expires==='never'){currYear=new Date().getFullYear();expDate=new Date(currYear+20,0);}else if(typeof options.expires==='number'){expDate=new Date();expDate.setTime(expDate.getTime()+(options.expires));}else if(options.expires instanceof Date){expDate=options.expires;}data.push('; expires='+expDate.toUTCString());}if(options.path){data.push('; path='+options.path);}if(options.domain){data.push('; domain='+options.domain);}if(options.secure){data.push('; secure');}cookieString=name+'='+encodeURIComponent(value);for(x=0,y=data.length;x<y;x+=1){cookieString+=data[x];}window.document.cookie=cookieString;return cookieString;}return{get:get,set:set};}if(!context.Wikia){context.Wikia={};}context.Wikia.Cookies=cookies(context);if(context.define&&context.define.amd){context.define(
'wikia.cookies',['wikia.window'],cookies);}}(this));;define('wikia.document',['wikia.window'],function(window){'use strict';return window.document;});;(function(context){'use strict';function geo(cookies){var cookieName='Geo',earth='XX',geoData=false,negativePrefix='non-';function getGeoData(){if(geoData===false){var jsonData=decodeURIComponent(cookies.get(cookieName));try{geoData=JSON.parse(jsonData)||{};}catch(e){geoData={};}}return geoData;}function getCountryCode(){var data=getGeoData();return data.country;}function setCountryCode(countryCode){var data=getGeoData();data.country=countryCode;cookies.set(cookieName,JSON.stringify(data));}function getContinentCode(){var data=getGeoData();return data.continent;}function getRegionCode(){var data=getGeoData();return data.region;}function isProperCountry(countryList){return!!(countryList&&countryList.indexOf&&countryList.indexOf(getCountryCode())>-1);}function isProperRegion(countryList){return!!(countryList&&countryList.indexOf&&
countryList.indexOf(getCountryCode()+'-'+getRegionCode())>-1);}function isProperContinent(countryList){if(countryList&&countryList.indexOf){return!!(countryList.indexOf(earth)>-1||countryList.indexOf(earth+'-'+getContinentCode())>-1);}return false;}function isGeoExcluded(countryList){return!!(countryList.indexOf(negativePrefix+getCountryCode())>-1||countryList.indexOf(negativePrefix+getCountryCode()+'-'+getRegionCode())>-1||countryList.indexOf(negativePrefix+earth+'-'+getContinentCode())>-1);}function isProperGeo(countryList){return!!(countryList&&countryList.indexOf&&!isGeoExcluded(countryList)&&(isProperContinent(countryList)||isProperCountry(countryList)||isProperRegion(countryList)));}return{getGeoData:getGeoData,getCountryCode:getCountryCode,getContinentCode:getContinentCode,getRegionCode:getRegionCode,setCountryCode:setCountryCode,isProperGeo:isProperGeo};}if(context.Wikia){context.Geo=context.Wikia.geo=geo(context.Wikia.Cookies);}if(context.define&&context.define.amd){context.
define('wikia.geo',['wikia.cookies'],geo);}}(this));;define('wikia.instantGlobals',['wikia.window'],function(window){'use strict';if(window.Wikia&&window.Wikia.InstantGlobals){return window.Wikia.InstantGlobals;}return{};});;define('wikia.localStorage',['wikia.window'],function(window){'use strict';try{return window.localStorage;}catch(err){return{};}});;define('wikia.location',['wikia.window'],function(window){return window.location;});;(function(context){'use strict';var SYSLOG_CUTOFF=8;var levels={emergency:0,alert:1,critical:2,error:3,warning:4,notice:5,info:6,debug:7,user:8,feedback:9,system:10,trace:11,trace_l2:12,trace_l3:13};function syslog(priority,message,context){if(typeof syslogReport=='function'&&priority<SYSLOG_CUTOFF){syslogReport(priority,message,context);}}function logger(){var console=context.console,undef,outputLevel=0,groups={},groupsString='',groupsCount=0,enabled=false,isIdevice,levelsMap=[],levelID,p,v;for(p in levels){if(levels.hasOwnProperty(p)){levelsMap[
levels[p]]=p;}}function printMessage(msg,group){if(console!==undef){if(group){group+=': ';if(isIdevice===undef){isIdevice=/i(pod|pad|phone)/i.test(context.navigator.userAgent);}if(isIdevice){console.log(group+msg.toString());}else{console.log(group,msg);}}else{console.log(msg);}}}function logMessage(msg,level,group,report){if(level!==levels.emergency){level=level||'trace';}report=report||false;if(typeof level==='number'){if(level<0){level=0;}else if(level>levelsMap.length-1){level=levelsMap.length-1;}level=levelsMap[level];}level=level.toLowerCase();levelID=levels[level];group=group||'Unknown source';if(report&&levelID<SYSLOG_CUTOFF){printMessage(msg,'syslog');syslog(levelID,msg);}if(!enabled||(msg===undef)||(levelID>outputLevel)||(groupsCount>0&&!(groups.hasOwnProperty(group)))){return false;}printMessage(msg,group);return true;}function init(querystring,cookies){var qs=new querystring(),selectedGroups,x,y,g;outputLevel=qs.getVal('log_level')||(cookies&&cookies.get('log_level'))||
outputLevel;if(levels.hasOwnProperty(outputLevel)){outputLevel=levels[outputLevel];}else{outputLevel=parseInt(outputLevel,10);}selectedGroups=(qs.getVal('log_group')||(cookies&&cookies.get('log_group'))||'').replace(' ','').replace('|',',').split(',');groupsString=selectedGroups.join(', ');for(x=0,y=selectedGroups.length;x<y;x++){g=selectedGroups[x];if(g!==''){groups[g]='';groupsCount++;}}if(outputLevel>0){printMessage('initialized at level '+outputLevel+((groupsCount>0)?' for '+groupsString:''),'Wikia.log');enabled=true;}}if(context.define&&context.define.amd){context.require(['wikia.querystring',require.optional('wikia.cookies')],init);}else{init(context.Wikia.Querystring,context.Wikia.Cookies);}return logMessage;}if(!context.Wikia){context.Wikia={};}context.Wikia.log=logger();context.Wikia.log.levels=levels;context.Wikia.syslog=syslog;if(context.define&&context.define.amd){context.define('wikia.log',function(){return context.Wikia.log;});}}(this));;(function(context){'use strict';
function querystring(location,win){var l=location,p,u,a=document.createElement('a');function isEmpty(obj){var key;for(key in obj){if(obj.hasOwnProperty(key)){return false;}}return true;}function Querystring(url){if(!(this instanceof Querystring)){return new Querystring(url);}var srh,tmp,cache={},tmpQuery,i,loc=url?a:l;if(url){a.href=url;}srh=loc.search.substr(1);if(srh){tmpQuery=srh.split('&');i=tmpQuery.length;while(i--){if(tmpQuery[i]){tmp=tmpQuery[i].split('=');cache[tmp[0]]=decodeURIComponent(tmp[1])||'';}}}this.cache=cache;this.protocol=loc.protocol;this.link=loc.host;this.path=(loc.pathname.charAt(0)!='/'?'/':'')+loc.pathname;this.hash=loc.hash.substr(1);}p=Querystring.prototype;p.toString=function(){var ret=((this.protocol)?this.protocol+'//':'')+this.link+this.path+(isEmpty(this.cache)?'':'?'),attr,val,tmpArr=[];for(attr in this.cache){if(this.cache.hasOwnProperty(attr)){val=this.cache[attr];tmpArr.push(encodeURIComponent(attr)+(val===u?'':'='+val));}}return ret+tmpArr.join('&'
)+((this.hash)?'#'+this.hash:'');};p.getVal=function(name,defVal){return this.cache[name]||defVal;};p.getVals=function(){var cacheCopy={};for(var param in this.cache){cacheCopy[param]=this.cache[param];}return cacheCopy;};p.setVal=function(name,val,safe){if(name){if(typeof name==='object'){val=val||'';for(var key in name){if(name.hasOwnProperty(key)){this.cache[val+key]=safe?name[key]:encodeURIComponent(name[key]);}}}else if(val){this.cache[name]=safe?val:encodeURIComponent(val);}}return this;};p.removeVal=function(list){if(list instanceof Array){for(var i=0,l=list.length;i<l;i++){delete this.cache[list[i]];}}else{delete this.cache[list];}return this;};p.clearVals=function(){this.cache={};return this;};p.getHash=function(){return this.hash;};p.setHash=function(h){this.hash=h;return this;};p.removeHash=function(list){if(list===u||(list instanceof Array&&list.indexOf(this.hash)>-1)||list===this.hash){this.hash='';}return this;};p.getPath=function(){return this.path;};p.setPath=function(p
){this.path=p;return this;};p.addCb=function(){this.setVal('cb',Math.ceil(Math.random()*10001));return this;};p.goTo=function(){l.href=this.toString();};p.sanitizeHref=function(href){href=href.trim();return(href.indexOf("#")===0&&href.length>1)?href.slice(1):'';};return Querystring;}if(!context.Wikia){context.Wikia={};}context.Wikia.Querystring=querystring(window.location,context);if(context.define&&context.define.amd){context.define('wikia.querystring',['wikia.location','wikia.window'],querystring);}}(this));;define('wikia.window',function(){'use strict';return window;});;mw.loader.state({"amd":"ready","wikia.tracker.stub":"ready","wikia.abTest":"ready","wikia.cache":"ready","wikia.cookies":"ready","wikia.document":"ready","wikia.geo":"ready","wikia.instantGlobals":"ready","wikia.localStorage":"ready","wikia.location":"ready","wikia.log":"ready","wikia.querystring":"ready","wikia.window":"ready"});

/* cache key: slot1:resourceloader:filter:minify-js:7:677339e303f2c8c1a346f45a2b880111 */