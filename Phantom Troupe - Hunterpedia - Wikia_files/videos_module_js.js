
define('thumbnails.templates.mustache',[],function(){'use strict';return{"Thumbnail_articleBlock":'<figure class="article-thumb {{figureClass}}" style="width: {{width}}px">{{{thumbnail}}}<figcaption><a href="{{url}}" class="sprite details" title="{{thumbnailMore}}"></a>{{#title}}<p class="title">{{title}}</p>{{/title}}{{#caption}}<p class="caption">{{{caption}}}</p>{{/caption}}{{#addedBy}}<p class="attribution">{{{addedBy}}}</p>{{/addedBy}}</figcaption></figure>',"Thumbnail_title":'{{{thumbnail}}}<div class="title" title="{{title}}"><a href="{{url}}">{{title}}</a></div>',"done":"true"};});;define('thumbnails.views.titleThumbnail',['thumbnails.templates.mustache','wikia.mustache'],function(templates,Mustache){'use strict';var thumbnailTemplateName='Thumbnail_title';function TitleView(options){this.model=options.model;this.el=document.createElement(options.el||'div');this.$el=$(this.el);this.isFluid=(typeof options.isFluid==='undefined')?true:options.isFluid;this.initialize();}
TitleView.prototype.render=function(){this.el.className+=' title-thumbnail';this.el.innerHTML=Mustache.render(templates[thumbnailTemplateName],this.model);this.$el=$(this.el);return this;};TitleView.prototype.initialize=function(){var self=this;if(this.isFluid){$(window).resize(function(){self.applyEllipses();});}};TitleView.prototype.applyEllipses=function(config){this.$el.find('.title a').ellipses(config);};return TitleView;});;define('videosmodule.templates.mustache',[],function(){'use strict';return{"VideosModule_index":'<section id="videosModule" class="videos-module-rail module hidden"><h2>{{title}}</h2><ul class="thumbnails"></ul></section>',"bottomModule":'<section id="videosModule" class="videos-module"><h2>{{title}}</h2><ul class="thumbnails small-block-grid-3 large-block-grid-3 x-large-block-grid-4"></ul></section>',"inContent":'<section id="videosModule" class="videos-module-in-content hidden"><h2 class="heading">{{title}}</h2><ul class="thumbnails"></ul></section>',"done":"true"};});;define('videosmodule.models.videos',['wikia.nirvana','wikia.geo','bucky'],function(nirvana,geo,bucky){'use strict';bucky=bucky('videosmodule.models.videos');var VideosData=function(){this.data=null;};VideosData.prototype.fetch=function(){var ret,self=this;if(this.data!==null){ret=this.data;}else{bucky.timer.start('fetch');ret=nirvana.getJson('VideosModuleController','index',{userRegion:geo.getCountryCode()}).done(function(data){self.data=data;bucky.timer.stop('fetch');});}
return ret;};return VideosData;});;define('videosmodule.views.titleThumbnail',['thumbnails.views.titleThumbnail','wikia.tracker'],function(TitleThumbnail,Tracker){'use strict';function VideosModuleThumbnail(config){this.idx=config.idx;this.trackClick=Tracker.buildTrackingFunction({category:config.trackingCategory,trackingMethod:'analytics',action:Tracker.ACTIONS.CLICK,label:'thumbnail-click'});TitleThumbnail.call(this,config);}
VideosModuleThumbnail.prototype=Object.create(TitleThumbnail.prototype);VideosModuleThumbnail.prototype.bindEvents=function(){var self=this;this.$el.on('mousedown','a',function(){self.trackClick({value:self.idx});return true;});};VideosModuleThumbnail.prototype.render=function(){this.constructor.prototype.render.call(this);this.addSourceInfo();this.bindEvents();return this;};VideosModuleThumbnail.prototype.addSourceInfo=function(){this.$el.attr('data-source',this.model.source);};return VideosModuleThumbnail;});;define('videosmodule.views.index',['sloth','videosmodule.views.titleThumbnail','wikia.log','wikia.tracker','bucky','wikia.window'],function(sloth,TitleThumbnailView,log,Tracker,bucky,win){'use strict';var VideosModule=function(options){this.$el=options.$el;this.previousElement=options.previousElement;this.hookElement=options.hookElement;this.moduleInsertingFunction=options.moduleInsertingFunction;this.model=options.model;this.$thumbs=this.$el.find('.thumbnails');this.isFluid=options.isFluid;this.numVids=options.numVids||5;this.minNumVids=options.minNumVids||5;this.bucky=bucky(options.buckyCategory);this.trackingCategory=options.trackingCategory;this.trackImpression=Tracker.buildTrackingFunction({category:options.trackingCategory,trackingMethod:'analytics',action:Tracker.ACTIONS.IMPRESSION,label:'module-impression'});if(win.wgArticleId){this.init();}};VideosModule.prototype.init=function(){var self=this;if(this.moduleInsertingFunction){this.moduleInsertingFunction.call($(this.hookElement),this.$el);}
if(this.previousElement){sloth({on:this.previousElement,threshold:200,callback:function(){self.prep();}});}else{this.prep();}};VideosModule.prototype.prep=function(){var self=this;this.$thumbs.addClass('hidden');this.$el.startThrobbing().removeClass('hidden');this.model.fetch().complete(function(){self.videos=self.model.data.videos;self.staffPickVideos=self.model.data.staffVideos;self.render();});};VideosModule.prototype.render=function(){var self=this,$imagesLoaded=$.Deferred(),imgCount=0;this.bucky.timer.start('render');if(!this.hasEnoughVideos()){this.bucky.timer.stop('render');return;}
this.addBackfill();this.shuffle(this.videos);this.addStaffPick();this.$thumbs.append(this.getThumbHtml()).find('img[data-video-key]').on('load error',function(){imgCount+=1;if(imgCount===self.numVids){$imagesLoaded.resolve();}});$.when($imagesLoaded).done(function(){self.$thumbs.removeClass('hidden');self.$el.stopThrobbing().trigger('initialized.videosModule');self.bucky.timer.stop('render');});if(win.wgIsGASpecialWiki!==true){this.trackImpression();}};VideosModule.prototype.hasEnoughVideos=function(){if(this.videos.length+this.staffPickVideos.length<this.minNumVids){this.$el.addClass('hidden');log('Not enough videos were returned for VideosModule.',log.levels.error,'VideosModule',true);return false;}
return true;};VideosModule.prototype.addBackfill=function(){var vidsNeeded;if(this.videos.length<this.numVids){vidsNeeded=this.numVids-this.videos.length;this.videos=this.videos.concat(this.staffPickVideos.splice(0,vidsNeeded));this.numVids=this.videos.length;}};VideosModule.prototype.shuffle=function(array){var i,j,temp;for(i=array.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));temp=array[i];array[i]=array[j];array[j]=temp;}
return array;};VideosModule.prototype.addStaffPick=function(){var VideosIndex,StaffPicksIndex;if(this.staffPickVideos.length){VideosIndex=Math.floor(Math.random()*this.numVids);StaffPicksIndex=Math.floor(Math.random()*this.staffPickVideos.length);this.videos[VideosIndex]=this.staffPickVideos[StaffPicksIndex];}};VideosModule.prototype.getThumbHtml=function(){var i,thumbHtml=[];for(i=0;i<this.numVids;i++){thumbHtml.push(new TitleThumbnailView({el:'li',model:this.videos[i],isFluid:this.isFluid,idx:i,trackingCategory:this.trackingCategory}).render().$el);}
return thumbHtml;};return VideosModule;});;define('videosmodule.controllers.rail',['videosmodule.views.index','videosmodule.models.videos','videosmodule.templates.mustache','wikia.mustache','bucky'],function(RailModule,VideoData,templates,Mustache,bucky){'use strict';var $rail=$('#WikiaRail');bucky=bucky('videosmodule.controller.index');function init(containerElement){var rail;bucky.timer.start('execution');rail=new RailModule({$el:$(Mustache.render(templates.VideosModule_index,{title:$.msg('videosmodule-title-default')})),model:new VideoData(),isFluid:false,buckyCategory:'videosmodule.views.rail',trackingCategory:'videos-module-rail',hookElement:containerElement,moduleInsertingFunction:$.fn.append});rail.$el.on('initialized.videosModule',function(){bucky.timer.stop('execution');});}
return function(element){if($rail.hasClass('loaded')){init(element);}else{$rail.on('afterLoad.rail',function(){init(element)});}}});;