if($('.page-User_-_Darkchylde').length){$("#WikiaRail").append('<div style="clear:both;" align="center"><img src="http://vignette1.wikia.nocookie.net/xmenmovies/images/7/7a/Deadpool_thumbs_up.jpg/revision/latest?cb=20150715231436" width="300"></div>');}AjaxRCRefreshText='Auto-refresh';AjaxRCRefreshHoverText='Automatically refresh the page';ajaxPages=["Special:RecentChanges","Special:WikiActivity"];window.UserTagsJS={modules:{},tags:{bureaucrat:{u:'Chairman'},inactive:{u:'Has not edited recently'},}};UserTagsJS.modules.mwGroups=['bureaucrat'];UserTagsJS.modules.newuser={days:10,edits:40,namespace:0};importArticles({type:'script',articles:['u:admintools:MediaWiki:Common.js/displayClock.js','u:dev:AjaxRC/code.js','u:dev:BackToTopButton/code.js','u:dev:Countdown/code.js','u:dev:ReferencePopups/code.js','u:dev:ShowHide/code.js','u:dev:Toggler.js','u:dev:UserTags/code.js']});$(function FairUseRationale(){if((wgPageName=='Special:Upload'||wgPageName=='Special:MultipleUpload')&&document.
getElementById('wpDestFile').value==''){document.getElementById('wpUploadDescription').value='{{Fair use rationale\n| Description       = \n| Source            = \n| Portion           = \n| Purpose           = \n| Resolution        = \n| Replaceability    = \n| Other Information = \n}}';}});mw.loader.using(['jquery.ui.tabs'],function(){$(document).ready(function(){var $tabs=$("#portal_slider").tabs({fx:{opacity:'toggle',duration:100}});$("[class^=portal_sliderlink]").click(function(){$tabs.tabs('select',this.className.replace("portal_sliderlink_",""));return false;});$('#portal_next').click(function(){$tabs.tabs('select',($tabs.tabs('option','selected')==($tabs.tabs('length'))-1)?0:$tabs.tabs('option','selected')+1);return false;});$('#portal_prev').click(function(){$tabs.tabs('select',($tabs.tabs('option','selected')==0)?($tabs.tabs('length')-1):$tabs.tabs('option','selected')-1);return false;});});});$(function UserNameReplace(){if(typeof(disableUsernameReplace)!='undefined'&&
disableUsernameReplace||wgUserName===null)return;$("span.insertusername").html(wgUserName);});if($('.page-User_TheCarrotSaysYumYum').length){$("#WikiaRail").append('<div style="clear:both;" align="center"><img src="http://images.wikia.com/fairytail/images/6/65/Jellal_Zeref%27s_Awakening_Full_size.jpg" width="300"></div>');}var autoCollapse=2;var collapseCaption='hide';var expandCaption='show';function collapseTable(tableIndex){var Button=document.getElementById('collapseButton'+tableIndex);var Table=document.getElementById('collapsibleTable'+tableIndex);if(!Table||!Button){return false;}var Rows=Table.rows;if(Button.firstChild.data==collapseCaption){for(var i=1;i<Rows.length;i++){Rows[i].style.display='none';}Button.firstChild.data=expandCaption;}else{for(var i=1;i<Rows.length;i++){Rows[i].style.display=Rows[0].style.display;}Button.firstChild.data=collapseCaption;}}function createCollapseButtons(){var tableIndex=0;var NavigationBoxes=new Object();var Tables=document.
getElementsByTagName('table');for(var i=0;i<Tables.length;i++){if(hasClass(Tables[i],'collapsible')){var HeaderRow=Tables[i].getElementsByTagName('tr')[0];if(!HeaderRow){continue;}var Header=HeaderRow.getElementsByTagName('th')[0];if(!Header){continue;}NavigationBoxes[tableIndex]=Tables[i];Tables[i].setAttribute('id','collapsibleTable'+tableIndex);var Button=document.createElement('span');var ButtonLink=document.createElement('a');var ButtonText=document.createTextNode(collapseCaption);Button.className='collapseButton';ButtonLink.style.color=Header.style.color;ButtonLink.setAttribute('id','collapseButton'+tableIndex);ButtonLink.setAttribute('href',"javascript:collapseTable("+tableIndex+");");ButtonLink.appendChild(ButtonText);Button.appendChild(document.createTextNode('['));Button.appendChild(ButtonLink);Button.appendChild(document.createTextNode(']'));Header.insertBefore(Button,Header.childNodes[0]);tableIndex++;}}for(var i=0;i<tableIndex;i++){if(hasClass(NavigationBoxes[i],
'collapsed')||(tableIndex>=autoCollapse&&hasClass(NavigationBoxes[i],'autocollapse'))){collapseTable(i);}else if(hasClass(NavigationBoxes[i],'innercollapse')){var element=NavigationBoxes[i];while(element=element.parentNode){if(hasClass(element,'outercollapse')){collapseTable(i);break;}}}}}addOnloadHook(createCollapseButtons);var hasClass=(function(){var reCache={};return function(element,className){return(reCache[className]?reCache[className]:(reCache[className]=new RegExp("(?:\\s|^)"+className+"(?:\\s|$)"))).test(element.className);};})();$(function(){var images=['http://images.wikia.com/hunterxhunter/images/5/55/Wiki-wordmark1.png','http://images.wikia.com/hunterxhunter/images/4/49/Wiki-wordmark2.png','http://images.wikia.com/hunterxhunter/images/2/26/Wiki-wordmark3.png',];$('h2.wordmark a img').attr('src',images[Math.floor(Math.random()*images.length)]);});;;mw.loader.state({"site":"ready"});

/* cache key: hunterxhunter:resourceloader:filter:minify-js:7:d9c4d477308969758f96d9e81c9c8308 */