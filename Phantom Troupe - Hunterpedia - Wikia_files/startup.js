var isCompatible=function(){if(navigator.appVersion.indexOf('MSIE')!==-1&&parseFloat(navigator.appVersion.split('MSIE')[1])<6){return false;}return true;};var startUp=function(){mw.config=new mw.Map(true);mw.loader.addSource({"local":{"loadScript":"/__load/-/","apiScript":"/api.php"},"common":{"loadScript":"http://slot1.images.wikia.nocookie.net/__load/-/","apiScript":"/api.php"}});mw.loader.register([["site",1462228200,[],"site"],["noscript",1202225400,[],"noscript"],["startup",1463843700,[],"startup"],["user",1202225400,[],"user"],["user.groups",1202225400,[],"user"],["user.options",1463843700,[],"private"],["user.cssprefs",1463843700,["mediawiki.user"],"private"],["user.tokens",1202225400,[],"private"],["filepage",1202225400],["mediawiki.language.data",1459471500,["mediawiki.language.init"]],["skins.monobook",1463692500,[],null,"common"],["jquery",1463692500,[],null,"common"],["jquery.appear",1463692500,[],null,"common"],["jquery.arrowSteps",1463692500,[],null,"common"],[
"jquery.async",1463692500,[],null,"common"],["jquery.autoEllipsis",1463692500,["jquery.highlightText"],null,"common"],["jquery.byteLength",1463692500,[],null,"common"],["jquery.byteLimit",1463692500,["jquery.byteLength"],null,"common"],["jquery.checkboxShiftClick",1463692500,[],null,"common"],["jquery.client",1463692500,[],null,"common"],["jquery.collapsibleTabs",1463692500,[],null,"common"],["jquery.color",1463692500,["jquery.colorUtil"],null,"common"],["jquery.colorUtil",1463692500,[],null,"common"],["jquery.cookie",1463692500,[],null,"common"],["jquery.delayedBind",1463692500,[],null,"common"],["jquery.expandableField",1463692500,["jquery.delayedBind"],null,"common"],["jquery.farbtastic",1463692500,["jquery.colorUtil"],null,"common"],["jquery.footHovzer",1463692500,[],null,"common"],["jquery.form",1463692500,[],null,"common"],["jquery.getAttrs",1463692500,[],null,"common"],["jquery.highlightText",1463692500,[],null,"common"],["jquery.hoverIntent",1463692500,[],null,"common"],[
"jquery.json",1463692500,[],null,"common"],["jquery.localize",1463692500,[],null,"common"],["jquery.makeCollapsible",1463692500,[],null,"common"],["jquery.messageBox",1463692500,[],null,"common"],["jquery.mockjax",1463692500,[],null,"common"],["jquery.mw-jump",1463692500,[],null,"common"],["jquery.mwExtension",1463692500,[],null,"common"],["jquery.placeholder",1463692500,[],null,"common"],["jquery.qunit",1463692500,[],null,"common"],["jquery.qunit.completenessTest",1463692500,["jquery.qunit"],null,"common"],["jquery.spinner",1463692500,[],null,"common"],["jquery.suggestions",1463692500,["jquery.autoEllipsis"],null,"common"],["jquery.tabIndex",1463692500,[],null,"common"],["jquery.tablesorter",1463692500,["jquery.mwExtension"],null,"common"],["jquery.textSelection",1463692500,[],null,"common"],["jquery.validate",1463692500,[],null,"common"],["jquery.xmldom",1463692500,[],null,"common"],["jquery.tipsy",1463692500,[],null,"common"],["jquery.ui.core",1463692500,["jquery"],"jquery.ui",
"common"],["jquery.ui.widget",1463692500,[],"jquery.ui","common"],["jquery.ui.mouse",1463692500,["jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.position",1463692500,[],"jquery.ui","common"],["jquery.ui.draggable",1463692500,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.droppable",1463692500,["jquery.ui.core","jquery.ui.mouse","jquery.ui.widget","jquery.ui.draggable"],"jquery.ui","common"],["jquery.ui.resizable",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.selectable",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.sortable",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.accordion",1463692500,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.autocomplete",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.position"],"jquery.ui","common"],[
"jquery.ui.button",1463692500,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.datepicker",1463692500,["jquery.ui.core"],"jquery.ui","common"],["jquery.ui.dialog",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.button","jquery.ui.draggable","jquery.ui.mouse","jquery.ui.position","jquery.ui.resizable"],"jquery.ui","common"],["jquery.ui.progressbar",1463692500,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.ui.slider",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse"],"jquery.ui","common"],["jquery.ui.tabs",1463692500,["jquery.ui.core","jquery.ui.widget"],"jquery.ui","common"],["jquery.effects.core",1463692500,["jquery"],"jquery.ui","common"],["jquery.effects.blind",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.bounce",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.clip",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.drop",1463692500,[
"jquery.effects.core"],"jquery.ui","common"],["jquery.effects.explode",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fade",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.fold",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.highlight",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.pulsate",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.scale",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.shake",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.slide",1463692500,["jquery.effects.core"],"jquery.ui","common"],["jquery.effects.transfer",1463692500,["jquery.effects.core"],"jquery.ui","common"],["mediawiki",1463692500,[],null,"common"],["mediawiki.api",1463692500,["mediawiki.util"],null,"common"],["mediawiki.api.category",1463692500,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.edit",
1463692500,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.parse",1463692500,["mediawiki.api"],null,"common"],["mediawiki.api.titleblacklist",1463692500,["mediawiki.api","mediawiki.Title"],null,"common"],["mediawiki.api.watch",1463692500,["mediawiki.api","mediawiki.user"],null,"common"],["mediawiki.debug",1463692500,["jquery.footHovzer"],null,"common"],["mediawiki.debug.init",1463692500,["mediawiki.debug"],null,"common"],["mediawiki.feedback",1463692500,["mediawiki.api.edit","mediawiki.Title","mediawiki.jqueryMsg","jquery.ui.dialog"],null,"common"],["mediawiki.htmlform",1463692500,[],null,"common"],["mediawiki.Title",1463692500,["mediawiki.util"],null,"common"],["mediawiki.Uri",1463692500,[],null,"common"],["mediawiki.user",1463692500,["jquery.cookie"],null,"common"],["mediawiki.util",1463692500,["jquery.client","jquery.cookie","jquery.messageBox","jquery.mwExtension"],null,"common"],["mediawiki.action.edit",1463692500,["jquery.textSelection","jquery.byteLimit"],null
,"common"],["mediawiki.action.history",1463692500,["jquery.ui.button"],"mediawiki.action.history","common"],["mediawiki.action.history.diff",1463692500,[],"mediawiki.action.history","common"],["mediawiki.action.view.dblClickEdit",1463692500,["mediawiki.util","mediawiki.page.startup"],null,"common"],["mediawiki.action.view.metadata",1463692500,[],null,"common"],["mediawiki.action.view.rightClickEdit",1463692500,[],null,"common"],["mediawiki.action.watch.ajax",1463692500,["mediawiki.api.watch","mediawiki.util"],null,"common"],["mediawiki.language",1463692500,["mediawiki.language.data","mediawiki.cldr"],null,"common"],["mediawiki.cldr",1463692500,["mediawiki.libs.pluralruleparser"],null,"common"],["mediawiki.libs.pluralruleparser",1463692500,[],null,"common"],["mediawiki.language.init",1463692500,[],null,"common"],["mediawiki.jqueryMsg",1463692500,["mediawiki.util","mediawiki.language"],null,"common"],["mediawiki.language.months",1463692500,["mediawiki.language"],null,"common"],[
"mediawiki.language.names",1462235400,["mediawiki.language.init"]],["mediawiki.libs.jpegmeta",1463692500,[],null,"common"],["mediawiki.page.ready",1463692500,["jquery.checkboxShiftClick","jquery.makeCollapsible","jquery.mw-jump","mediawiki.util"],null,"common"],["mediawiki.page.startup",1463692500,["jquery.client","mediawiki.util"],null,"common"],["mediawiki.special",1463692500,[],null,"common"],["mediawiki.special.block",1463692500,["mediawiki.util"],null,"common"],["mediawiki.special.changeemail",1463692500,["mediawiki.util"],null,"common"],["mediawiki.special.changeslist",1463692500,["jquery.makeCollapsible"],null,"common"],["mediawiki.special.movePage",1463692500,["jquery.byteLimit"],null,"common"],["mediawiki.special.preferences",1463692500,[],null,"common"],["mediawiki.special.recentchanges",1463692500,["mediawiki.special"],null,"common"],["mediawiki.special.search",1463692500,[],null,"common"],["mediawiki.special.undelete",1463692500,[],null,"common"],["mediawiki.special.upload"
,1463692500,["mediawiki.libs.jpegmeta","mediawiki.util"],null,"common"],["mediawiki.special.javaScriptTest",1463692500,["jquery.qunit"],null,"common"],["test.sinonjs",1463692500,[],null,"common"],["mediawiki.tests.qunit.testrunner",1463692500,["jquery.qunit","jquery.qunit.completenessTest","mediawiki.page.startup","mediawiki.page.ready","test.sinonjs"],null,"common"],["mediawiki.legacy.ajax",1463692500,["mediawiki.util","mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.commonPrint",1463692500,[],null,"common"],["mediawiki.legacy.config",1463692500,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.IEFixes",1463692500,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.mwsuggest",1463692500,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.preview",1463692500,["mediawiki.legacy.wikibits"],null,"common"],["mediawiki.legacy.protect",1463692500,["mediawiki.legacy.wikibits","jquery.byteLimit"],null,"common"],["mediawiki.legacy.shared",
1463692500,[],null,"common"],["mediawiki.legacy.upload",1463692500,["jquery.spinner","mediawiki.util"],null,"common"],["mediawiki.legacy.wikibits",1463692500,["mediawiki.util","wikia.importScript"],null,"common"],["mediawiki.legacy.wikiprintable",1463692500,[],null,"common"],["amd",1463692500,[],null,"common"],["amd.shared",1202225400,["wikia.instantGlobals","wikia.cache","wikia.cookies","wikia.document","wikia.geo","wikia.fbLocale","wikia.loader","wikia.localStorage","wikia.location","wikia.log","wikia.mw","wikia.nirvana","wikia.querystring","wikia.history","wikia.throbber","wikia.thumbnailer","wikia.tracker","wikia.window","wikia.abTest"],null,"common"],["wikia.window",1463692500,["amd"],null,"common"],["wikia.cache",1463692500,["amd","wikia.localStorage","wikia.window"],null,"common"],["wikia.document",1463692500,["amd","wikia.window"],null,"common"],["wikia.location",1463692500,["amd","wikia.window"],null,"common"],["wikia.localStorage",1463692500,["amd","wikia.window"],null,
"common"],["wikia.nirvana",1463692500,["amd"],null,"common"],["wikia.mw",1463692500,["amd","wikia.window"],null,"common"],["wikia.fbLocale",1463692500,["wikia.geo"],null,"common"],["wikia.loader",1463692500,["amd","wikia.window","wikia.mw","wikia.nirvana","wikia.fbLocale"],null,"common"],["wikia.querystring",1463692500,["amd","wikia.window"],null,"common"],["wikia.history",1463692500,["amd","wikia.window"],null,"common"],["wikia.cookies",1463692500,["amd","wikia.window"],null,"common"],["wikia.log",1463692500,["amd","wikia.querystring","wikia.cookies"],null,"common"],["wikia.abTest",1463692500,["amd","wikia.window"],null,"common"],["wikia.instantGlobals",1463692500,["amd","wikia.window"],null,"common"],["wikia.thumbnailer",1463692500,["amd"],null,"common"],["wikia.geo",1463692500,["amd","wikia.cookies"],null,"common"],["wikia.tracker",1463692500,["amd","wikia.window","wikia.log","wikia.tracker.stub"],null,"common"],["wikia.tracker.stub",1463692500,["amd","wikia.window"],null,"common"],
["wikia.throbber",1463692500,["amd"],null,"common"],["wikia.aim",1463692500,["amd"],null,"common"],["wikia.uniqueId",1463692500,["amd"],null,"common"],["wikia.modernizr",1463843700,["amd","modernizr"],null,"common"],["wikia.mustache",1463692500,["amd"],null,"common"],["wikia.underscore",1463692500,["amd","wikia.window"],null,"common"],["wikia.stickyElement",1463692500,["amd","wikia.window","wikia.document","wikia.underscore"],null,"common"],["wikia.jquery.ui",1463692500,["jquery.ui.core","jquery.ui.widget","jquery.ui.mouse","jquery.ui.position","jquery.ui.draggable","jquery.ui.droppable","jquery.ui.sortable","jquery.ui.autocomplete","jquery.ui.slider","jquery.ui.tabs","jquery.ui.datepicker"],"jquery.ui","common"],["jquery.mustache",1463692500,["wikia.mustache"],null,"common"],["jquery.autocomplete",1463692500,[],null,"common"],["wikia.yui",1463692500,[],"yui","common"],["wikia.monobook",1463692500,[],null,"common"],["wikia.importScript",1463692500,[],null,"common"],["jquery.uls.data",
1463692500],["jquery.i18n",1463692500,["mediawiki.libs.pluralruleparser"]],["ext.math.mathjax",1463692500,[],"ext.math.mathjax"],["ext.math.mathjax.enabler",1463692500],["wikia.ext.instantGlobals",1463843700,[],null,"common"],["wikia.ext.instantGlobalsOverride",1463692500,[],null,"common"],["ext.bannerNotifications",1202225400],["ext.geshi.local",1202225400],["ext.siteWideMessages.anon",1463692500],["wikia.ext.adengine.sp.detection",1463715900],["wikia.ext.adengine.yavli",1463683500],["ext.categoryTree",1463692500],["ext.categoryTree.css",1463692500],["ext.checkUser",1463692500,["mediawiki.util"]],["ext.cite",1463692500,["jquery.tooltip"]],["jquery.tooltip",1463692500],["ext.wikia.WMU",1463692500,["wikia.yui","jquery.aim"]],["ext.wikia.LinkSuggest",1463692500,["jquery.ui.autocomplete"]],["ext.cookiePolicyMessages",1202225400,["mediawiki.jqueryMsg"]],["ext.nuke",1463692500],["ext.userLogin",1202225400],["ext.Chat2",1202225400],["wikia.ext.abtesting",1463702400,[],null,"common"],[
"wikia.ext.abtest",1463692500],["wikia.ext.abtesting.edit.styles",1463692500,[],null,"local",["sass"]],["wikia.ext.abtesting.edit",1463692500],["ext.quickTools",1463692500,["mediawiki.user","mediawiki.util"]],["ext.createUserPage",1463692500,["mediawiki.user","mediawiki.util"]],["ext.quickAdopt",1463692500,["mediawiki.util","ext.createUserPage"]],["oojs",1463692500],["oojs-ui",1463692500,["oojs","oojs-ui.styles"]],["oojs-ui.styles",1463692500],["jquery.visibleText",1463692500],["Base64.js",1463692500],["easy-deflate.core",1463692500,["Base64.js"]],["easy-deflate.deflate",1463692500,["easy-deflate.core"]],["unicodejs",1463692500],["unicodejs.wordbreak",1202225400,["unicodejs"]],["papaparse",1463692500],["rangefix",1463692500],["ext.visualEditor.viewPageTarget.init",1463692500,["jquery.client","mediawiki.page.startup","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],["ext.visualEditor.viewPageTarget.noscript",1463692500],[
"ext.visualEditor.viewPageTarget",1463692500,["ext.visualEditor.base","ext.visualEditor.mediawiki","ext.visualEditor.core.desktop","jquery.placeholder","mediawiki.feedback","mediawiki.jqueryMsg","mediawiki.util"]],["ext.visualEditor.mobileViewTarget",1463692500,["ext.visualEditor.base","ext.visualEditor.mediawiki.mobile","ext.visualEditor.core.mobile","ext.visualEditor.mwimage.core"]],["ext.visualEditor.ve",1463692500],["ext.visualEditor.track",1463692500,["ext.visualEditor.ve"]],["ext.visualEditor.base",1463692500,["oojs","oojs-ui","unicodejs","rangefix","ext.visualEditor.ve"]],["ext.visualEditor.mediawiki",1463692500,["jquery.visibleText","jquery.byteLength","jquery.client","mediawiki.api","mediawiki.language","mediawiki.Title","mediawiki.Uri","mediawiki.user","mediawiki.util","easy-deflate.deflate","user.options","user.tokens","ext.visualEditor.base","ext.visualEditor.track"]],["ext.visualEditor.mediawiki.mobile",1463692500,["ext.visualEditor.mediawiki",
"ext.visualEditor.core.mobile"]],["ext.visualEditor.standalone",1463692500,["ext.visualEditor.base","jquery.i18n"]],["ext.visualEditor.data",1463692500,["ext.visualEditor.base"]],["ext.visualEditor.core",1463692500,["unicodejs","papaparse","jquery.uls.data","ext.visualEditor.base"]],["ext.visualEditor.core.desktop",1463692500,["ext.visualEditor.core"]],["ext.visualEditor.core.mobile",1463692500,["ext.visualEditor.core"]],["ext.visualEditor.mwcore",1463692500,["ext.visualEditor.core","mediawiki.Title","mediawiki.action.history.diff","mediawiki.user","mediawiki.util","mediawiki.jqueryMsg","jquery.autoEllipsis","jquery.byteLimit"]],["ext.visualEditor.mwformatting",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage.core",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwimage",1463692500,["ext.visualEditor.mwimage.core"]],["ext.visualEditor.mwlink",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwmeta",1463692500,["ext.visualEditor.mwcore",
"ext.visualEditor.mwlink"]],["ext.visualEditor.mwreference.core",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwreference",1463692500,["ext.visualEditor.mwreference.core","ext.visualEditor.mwtransclusion"]],["ext.visualEditor.mwtransclusion.core",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwtransclusion",1463692500,["ext.visualEditor.mwtransclusion.core","mediawiki.jqueryMsg","mediawiki.language"]],["ext.visualEditor.language",1463692500,["ext.visualEditor.core","mediawiki.language.names"]],["ext.visualEditor.mwalienextension",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.mwgallery",1463692500,["ext.visualEditor.mwcore"]],["ext.visualEditor.experimental",1202225400,["ext.visualEditor.language","ext.visualEditor.mwalienextension"]],["ext.visualEditor.wikia.viewPageTarget.init",1463692500,["jquery.client","jquery.byteLength","mediawiki.Title","mediawiki.Uri","mediawiki.util","user.options","ext.visualEditor.track"]],[
"ext.visualEditor.wikia.oasisViewPageTarget",1463692500,["ext.visualEditor.viewPageTarget"]],["ext.visualEditor.wikia.core",1463692500,["ext.visualEditor.core.desktop","ext.visualEditor.mwimage","ext.visualEditor.mwmeta"]],["ext.scribunto",1463692500],["ext.scribunto.edit",1463692500,["ext.scribunto","mediawiki.api"]],["ext.wikia.InfoboxBuilder",1463692500,[],null,"local",["sass"]],["ext.closeMyAccount",1463692500,[],null,"local",["sass"]],["ext.TwitterTag",1463692500],["ext.wikia.VKTag",1463692500]]);mw.config.set({"wgLoadScript":"/load.php","debug":false,"skin":"oasis","stylepath":"http://slot1.images.wikia.nocookie.net/__cb1463693845/common/skins","wgUrlProtocols":"http\\:\\/\\/|https\\:\\/\\/|ftp\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|gopher\\:\\/\\/|telnet\\:\\/\\/|nntp\\:\\/\\/|worldwind\\:\\/\\/|mailto\\:|news\\:|svn\\:\\/\\/|git\\:\\/\\/|mms\\:\\/\\/|\\/\\/|xmpp\\:","wgArticlePath":"/wiki/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php",
"wgVariantArticlePath":false,"wgActionPaths":{},"wgServer":"http://hunterxhunter.wikia.com","wgUserLanguage":"en","wgContentLanguage":"en","wgVersion":"1.19.24","wgEnableAPI":true,"wgEnableWriteAPI":true,"wgDefaultDateFormat":"mdy","wgMonthNames":["","January","February","March","April","May","June","July","August","September","October","November","December"],"wgMonthNamesShort":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"wgMainPageTitle":"Hunterpedia","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Hunterpedia","5":"Hunterpedia talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","110":"Forum","111":"Forum talk","500":"User blog","501":"User blog comment","502":"Blog","503":"Blog talk","828":"Module","829":"Module talk","1200":"Message Wall","1201":"Thread","1202":
"Message Wall Greeting","2000":"Board","2001":"Board Thread","2002":"Topic"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"hunterpedia":4,"hunterpedia_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"forum":110,"forum_talk":111,"user_blog":500,"user_blog_comment":501,"blog":502,"blog_talk":503,"module":828,"module_talk":829,"message_wall":1200,"thread":1201,"message_wall_greeting":1202,"board":2000,"board_thread":2001,"topic":2002,"image":6,"image_talk":7,"project":4,"project_talk":5},"wgSiteName":"Hunterpedia","wgFileExtensions":["png","gif","jpg","jpeg","ico","pdf","svg","odt","ods","odp","odg","odc","odf","odi","odm","ogg","ogv","oga"],"wgDBname":"hunterxhunter","wgFileCanRotate":true,"wgAvailableSkins":{"lyricsminimal":"LyricsMinimal","monobook":"MonoBook","oasis":"Oasis","uncyclopedia":"Uncyclopedia","wikiamobile":"WikiaMobile","wowwiki":
"wowwiki"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"wikicities","wgResourceLoaderMaxQueryLength":-1,"wgCaseSensitiveNamespaces":[],"wgLegalTitleChars":" %!\"$\x26\'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgSassParams":{"background-dynamic":"true","background-image":"http://vignette3.wikia.nocookie.net/hunterxhunter/images/5/50/Wiki-background/revision/latest?cb=20160430154003","background-image-height":"1080","background-image-width":"2000","color-body":"#f1f1f1","color-body-middle":"#000000","color-buttons":"#0a4514","color-header":"#285f00","color-links":"#337800","color-page":"#ebebeb","oasisTypography":1,"page-opacity":"100","widthType":0},"wgJSMessagesCB":"1463693845.0.0","wgVisualEditorConfig":{"disableForAnons":false,"preferenceModules":{"visualeditor-enable-experimental":"ext.visualEditor.experimental","visualeditor-enable-language":"ext.visualEditor.language"},"namespaces":[0,2,14,4],"pluginModules":["ext.visualEditor.wikia.core"],
"defaultUserOptions":{"betatempdisable":0,"enable":1,"defaultthumbsize":180,"visualeditor-enable-experimental":0,"visualeditor-enable-language":0},"blacklist":{"msie":null,"android":[["\x3c",3]],"firefox":[["\x3c=",14]],"opera":[["\x3c",12]],"blackberry":null,"silk":null},"skins":["oasis","venus"],"tabPosition":"before","tabMessages":{"edit":null,"editsource":"visualeditor-ca-classiceditor","create":null,"createsource":"visualeditor-ca-classiceditor","editlocaldescriptionsource":"visualeditor-ca-editlocaldescriptionsource","createlocaldescriptionsource":"visualeditor-ca-createlocaldescriptionsource","editsection":null,"editsectionsource":"visualeditor-ca-editsource-section","editappendix":null,"editsourceappendix":null,"createappendix":null,"createsourceappendix":null,"editsectionappendix":null,"editsectionsourceappendix":null},"showBetaWelcome":false,"enableTocWidget":false}});mw.loader.state({"jquery":"ready"});window.preMwLdrSt&&mw.loader.state(window.preMwLdrSt);if(window.
preMwLdrStA){for(var i=0;i<window.preMwLdrStA.length;i++)mw.loader.state(window.preMwLdrStA[i]);};};if(isCompatible()){document.write("\x3cscript src=\"http://slot1.images1.wikia.nocookie.net/__load/-/debug%3Dfalse%26lang%3Den%26only%3Dscripts%26skin%3Doasis%26version%3D1463693845-20160519T211500Z/jquery,mediawiki\"\x3e\x3c/script\x3e");}delete isCompatible;;

/* cache key: hunterxhunter:resourceloader:filter:minify-js:7:8a56ca4172a490ac1700815aa3298585 */