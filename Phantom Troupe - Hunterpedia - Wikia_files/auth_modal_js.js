
define('AuthModal',['jquery','wikia.window'],function($,window){'use strict';var authPopUpWindow,closeTrackTimeoutId,popUpWindowHeight=670,popUpWindowMaxWidth=768,popUpName='WikiaAuthWindow',track=getTrackingFunction();function initPostMessageListener(onAuthSuccess){$(window).on('message.authPopUpWindow',function(event){var e=event.originalEvent;if(!e.data){return;}
if(e.data.isUserAuthorized){close();if(typeof onAuthSuccess==='function'){onAuthSuccess();}}
if(e.data.beforeunload&&!closeTrackTimeoutId){closeTrackTimeoutId=setTimeout(function(){var trackParams;if(!authPopUpWindow.closed){return;}
closeTrackTimeoutId=null;trackParams={action:Wikia.Tracker.ACTIONS.CLOSE,label:'username-login-modal'};if(e.data.forceLogin){trackParams.category='force-login-modal';}
track(trackParams);},1000);}});}
function close(event){if(event){event.preventDefault();}
if(authPopUpWindow){authPopUpWindow.close();}
$(window).off('.authPopUpWindow');}
function buildPopUpUrl(url,additionalParams){var defaultQueryParams={modal:1,forceLogin:0};return url+(url.indexOf('?')===-1?'?':'&')+
$.param($.extend({},defaultQueryParams,additionalParams));}
function getPopUpWindowSpecs(){var pageWidth=window.innerWidth,popUpWindowWidth=pageWidth<popUpWindowMaxWidth?pageWidth:popUpWindowMaxWidth,popUpWindowLeft=window.screenX+(pageWidth/2)-(popUpWindowWidth/2),popUpWindowTop=window.screenY+(window.innerHeight/2)-(popUpWindowHeight/2);return'width='+popUpWindowWidth+',height='+popUpWindowHeight+',top='+popUpWindowTop+',left='+popUpWindowLeft;}
function getTrackingFunction(){if(track){return track;}
track=Wikia.Tracker.buildTrackingFunction({category:'user-login-desktop-modal',trackingMethod:'analytics'});return track;}
function loadPopUpPage(url,forceLogin){var src=buildPopUpUrl(url,{'forceLogin':(forceLogin?1:0)});authPopUpWindow=window.open(src,popUpName,getPopUpWindowSpecs());if(!authPopUpWindow||authPopUpWindow.closed){window.location=url;}}
return{load:function(params){var trackParams={action:Wikia.Tracker.ACTIONS.OPEN,label:'from-'+params.origin};if(typeof params.onAuthSuccess!=='function'){params.onAuthSuccess=function(){window.location.reload();};}
if(!params.origin){params.origin='no-origin-provided';}
if(window.wgEnableNewAuthModal){if(params.forceLogin){trackParams.category='force-login-modal';trackParams.label='signin-page-from-'+params.origin;}
initPostMessageListener(params.onAuthSuccess);track(trackParams);loadPopUpPage(params.url,params.forceLogin);}else{window.UserLoginModal.show({origin:params.origin,callback:params.onAuthSuccess});}},close:close};});;