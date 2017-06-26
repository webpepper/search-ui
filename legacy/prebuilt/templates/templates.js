Coveo.TemplateCache.registerTemplate("People", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:75px\">\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-people-no-thumbnail\"/>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"\">\n      <a class=\"CoveoResultLink\">\n            </a>\n      <span class=\"CoveoFieldValue\" data-field=\"@worktitle\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@company\"></span>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@workemail\" data-caption=\"Email\"></tr>\n        <tr data-field=\"@workphone\" data-caption=\"Work Phone\"></tr>\n        <tr data-field=\"@mobilephone\" data-caption=\"Mobile Phone\"></tr>\n        <tr data-field=\"@homephone\" data-caption=\"Home Phone\"></tr>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":"raw.fullname != undefined","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Chatter", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\">\n      <span class=\"CoveoIcon\" data-class-to-use=\"coveo-sprites-documentType-chatter\"></span>\n    </div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoChatterPostedBy\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell coveo-no-wrap\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoChatterLikedBy\" data-nb-likes-to-render=\"1\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoChatterTopic\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoChatterPostAttachment\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"FeedComment\"></span>\n    </div>\n  </div>\n</div>",{"condition":"raw.objecttype =='FeedItem' || raw.objecttype == 'FeedComment'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("YouTubeVideo", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:220px\">\n      <span class=\"CoveoYouTubeThumbnail\"></span>\n    </div>\n    <div class=\"coveo-result-cell\">\n      <a class=\"CoveoResultLink\"></a>\n      <div class=\"CoveoExcerpt\"></div>\n      <span class=\"CoveoFieldValue\" data-field=\"@ytvideoduration\" data-helper=\"timeSpan\"></span>\n      <span class=\"CoveoText\" data-value=\"•\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@ytviewcount\"></span>\n      <span class=\"CoveoText\" data-value=\"views\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:right; width:100px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"dateTime\" data-helper-options-predefined-format=\"MM/dd/yyyy\"></span>\n    </div>\n  </div>\n</div>",{"condition":"raw.filetype == 'YouTubeVideo'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("SharePointList", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\">\n            </a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@spsitename\" data-caption=\"Site\"></tr>\n        <tr data-field=\"@spitemtype\" data-caption=\"Item Type\"></tr>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":"(raw.connectortype == 'SharePoint' || raw.connectortype == 'SharepointCrawler') && raw.spitemtype == 'List'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Dropbox", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\">\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\">\n      </a>\n      <span class=\"CoveoQuickview\">\n        <div class='coveo-icon-for-quickview'>Quickview</div>\n      </span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\">\n    </div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\">\n      </span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\">\n    </div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n      </table>\n    </div>\n  </div>\n</div>\n",{"condition":"raw.sourcetype == 'Dropbox'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("EmailThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <span class=\"CoveoText\" data-value=\"From:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></span>\n      <span class=\"CoveoText\" data-value=\"To:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:200px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"font-size: 16px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\" data-template-id=\"EmailQuickviewContent\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\"></table>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultAttachments\" data-result-template-id=\"EmailResultAttachment\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"EmailChildResult\" data-more-caption=\"ShowAllReplies\" data-less-caption=\"ShowOnlyMostRelevantReplies\"></span>\n    </div>\n  </div>\n</div>",{"condition":"raw.mailbox != undefined","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("SharePoint", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\">\n            </a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoPrintableUri\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@author\" data-caption=\"Author\"></tr>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":"(raw.connectortype == 'SharePoint' || raw.connectortype == 'SharepointCrawler') && raw.spitemtype != 'List'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Salesforce", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <span class=\"CoveoBadge\" data-field=\"@objecttype\"></span>\n      <a class=\"CoveoResultLink\">\n                </a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@sfaccountname\" data-caption=\"Account\"></tr>\n        <tr data-field=\"@sfownername\" data-caption=\"Owner\"></tr>\n        <tr data-field=\"@sfopportunityamountconverted\" data-caption=\"Total\" data-helper=\"currency\"></tr>\n        <tr data-field=\"@sfopportunitylicensingstotalcconverted\" data-caption=\"License\" data-helper=\"currency\"></tr>\n        <tr data-field=\"@sfopportunityamountsupportcconverted\" data-caption=\"Support\" data-helper=\"currency\"></tr>\n        <tr data-field=\"@sfopportunityconsultingstotalcconverted\" data-caption=\"PS\" data-helper=\"currency\"></tr>\n        <tr data-field=\"@sfopportunitystagename\" data-caption=\"Stage\"></tr>\n        <tr data-field=\"@sfopportunitydealtypec\" data-caption=\"Deal Type\"></tr>\n        <tr data-field=\"@sfopportunitycompetitionc\" data-caption=\"Competition\" data-split-values=true></tr>\n        <tr data-field=\"@sfibdusername\" data-caption=\"ISR\"></tr>\n        <tr data-field=\"@sfopportunityregionc\" data-caption=\"Region\"></tr>\n        <tr data-field=\"@sfleadsource\" data-caption=\"Lead Source\"></tr>\n        <tr data-field=\"@sfleadstatus\" data-caption=\"Lead status\"></tr>\n        <tr data-field=\"@worktitle\" data-caption=\"Work title\"></tr>\n        <tr data-field=\"@sfemail\" data-caption=\"Email\" data-helper=\"email\" data-html-value=\"true\"></tr>\n        <tr data-field=\"@sfcontactphone\" data-caption=\"Phone\"></tr>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":"raw.sfid != null","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("GoogleDrive", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoPrintableUri\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\"></table>\n    </div>\n  </div>\n</div>",{"condition":"raw.connectortype == 'GoogleDriveCrawler'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("LithiumThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoText\" data-value=\"From:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@authorloginname\"></span>\n      <span class=\"CoveoText\" data-value=\"To:\"></span>\n      <span class=\"CoveoFieldValue\" data-field=\"@liboardshorttitle\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:200px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\"></table>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"LithiumChildResult\" data-more-caption=\"ShowCompleteThread\" data-less-caption=\"ShowOnlyTopMatchingPosts\"></span>\n    </div>\n  </div>\n</div>",{"condition":"raw.connectortype == 'LithiumCrawler'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Jira", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoResultAttachments\" data-result-template-id=\"JiraAttachment\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <span class=\"CoveoPrintableUri\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tr data-field=\"@jikey\" data-caption=\"Key\"></tr>\n        <tr data-field=\"@jifieldsprojectname\" data-caption=\"Project name\"></tr>\n        <tr data-field=\"@jifieldsissuetypename\" data-caption=\"Issue type\"></tr>\n        <tr data-field=\"@jifieldstimetrackingoriginalestimatehours\" data-caption=\"Time tracking Estimated\"></tr>\n        <tr data-field=\"@jifieldstimetrackingremainingestimatehours\" data-caption=\"Time tracking Remaining\"></tr>\n        <tr data-field=\"@jifieldstimetrackingtimespenthours\" data-caption=\"Time tracking Logged\"></tr>\n        <tr data-field=\"@jifieldspriorityname\" data-caption=\"Priority\"></tr>\n        <tr data-field=\"@jifieldsversionsname\" data-caption=\"Version\"></tr>\n        <tr data-field=\"@jifieldslabels\" data-caption=\"Labels\"></tr>\n        <tr data-field=\"@jifieldsenvironment\" data-caption=\"Environment\"></tr>\n        <tr data-field=\"@jifieldsstatusname\" data-caption=\"Status\"></tr>\n        <tr data-field=\"@jifieldsReporterDisplayName\" data-caption=\"Reporter\"></tr>\n        <tr data-field=\"@jifieldsAssigneeDisplayName\" data-caption=\"Assignee\"></tr>\n        <tr data-field=\"@jifieldsfixVersionsname\" data-caption=\"Fix Vesions\"></tr>\n        <tr data-field=\"@jifieldsresolution\" data-caption=\"Resolution\"></tr>\n        <tr data-field=\"@jifieldscreated\" data-caption=\"Created Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jifieldsupdated\" data-caption=\"Updated Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jifieldsduedate\" data-caption=\"Due Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jifieldsissuelinkstypename\" data-caption=\"Links\"></tr>\n        <tr data-field=\"@jifieldsissuelinkstypeoutward\" data-caption=\"Outward links\"></tr>\n        <tr data-field=\"@jifieldsissuelinkstypeinward\" data-caption=\"Inward links\"></tr>\n        <tr data-field=\"@jiprojectname\" data-caption=\"Project name\"></tr>\n        <tr data-field=\"@jiissuename\" data-caption=\"Issue name\"></tr>\n        <tr data-field=\"@jiauthordisplayname\" data-caption=\"Author\"></tr>\n        <tr data-field=\"@jisize\" data-caption=\"Size\"></tr>\n        <tr data-field=\"@jiupdateauthordisplayname\" data-caption=\"Update Author\"></tr>\n        <tr data-field=\"@jicreated\" data-caption=\"Created Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jiupdated\" data-caption=\"Updated Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jibody\" data-caption=\"Comment\"></tr>\n        <tr data-field=\"@jistarted\" data-caption=\"Started Date\" data-helper=\"datetime\"></tr>\n        <tr data-field=\"@jitimespent\" data-caption=\"TimeSpent\"></tr>\n        <tr data-field=\"@jicomment\" data-caption=\"Comment\"></tr>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":"raw.connectortype == 'JiraCrawler'","layout":null,"fieldsToMatch":null,"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("JiraAttachment", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-attachment-container\">\n    <%= fromFileTypeToIcon() %>\n    <a class=\"CoveoResultLink\"><%= title || clickUri %></a>\n    <span class=\"CoveoQuickview\">\n    \t<div class='coveo-icon-for-quickview'>Quickview</div>\n    </span>\n</div>",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("LithiumChildResult", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-date\"><%- dateTime(raw.limessageposttime) %></div>\n\n<div class=\"coveo-lithium-header\">\n    <span class=\"coveo-lithium-from\">\n        From: <span class=\"CoveoFieldValue\" data-field=\"@limessageauthor\"></span>\n    </span>\n</div>\n\n<div class='coveo-excerpt coveo-show-if-normal'>\n    <a class=\"CoveoResultLink\">\n        <%= highlight(firstSentences, firstSentencesHighlights) %>\n    </a>\n</div>\n\n<div class='coveo-excerpt coveo-show-if-expanded'>\n    <a class=\"CoveoResultLink\">\n        <%= raw.limessagebody %>\n    </a>\n</div>",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("EmailResultAttachment", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-attachment-container\">\n    <% if(isMobileDevice() && (Coveo.QueryUtils.hasThumbnail(obj) || hasHtmlVersion)) { %>\n        <% if(hasHtmlVersion) { %>\n        <%= fromFileTypeToIcon() %>\n        <a class=\"CoveoResultLink\"><%= title || clickUri %></a>\n        <span class=\"CoveoQuickview\">\n            <div class='coveo-icon-for-quickview'>Quickview</div>\n        </span>\n        <% } else if(Coveo.QueryUtils.hasThumbnail(obj)) { %>\n        <%= thumbnail() %>\n        <% } %>\n    <% } else { %>\n        <%= fromFileTypeToIcon() %>\n        <a class=\"CoveoResultLink\"><%= title || clickUri %></a>\n        <span class=\"CoveoQuickview\">\n            <div class='coveo-icon-for-quickview'>Quickview</div>\n        </span>\n    <% } %>\n</div>\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("EmailQuickviewContent", Coveo.HtmlTemplate.fromString("<div class=\"coveo-quick-view-full-height\">\n    <div class=\"coveo-quick-view-header\">\n        <div class=\"coveo-email-from\">\n            From: <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></span>\n        </div>\n        <div class=\"coveo-email-to\">\n            To: <span class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\"></span>\n        </div>\n    </div>\n    <div class=\"CoveoEmailActions\"></div>\n    <div class=\"CoveoQuickviewDocument\"></div>\n</div>\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("EmailChildResult", Coveo.UnderscoreTemplate.fromString("<div class=\"coveo-date\"><%- dateTime(raw.date) %></div>\n\n<div class=\"coveo-email-header\">\n    <span class=\"coveo-child-email-from\">\n        <% if(!isMobileDevice()) { %>\n            <%= email(raw.from, undefined, undefined, undefined, true) %>\n        <span class=\"CoveoQuickview\" data-template-id=\"EmailQuickviewContent\">\n            <div class='coveo-icon-for-quickview'>Quickview</div>\n        </span>\n        <% } else { %>\n            <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></span>\n        <% } %>\n    </span>\n</div>\n\n<div class=\"coveo-excerpt\">\n    <% if(hasHtmlVersion && isMobileDevice()) { %>\n    <a class=\"CoveoResultLink coveo-email-child-excerpt\"><%= highlight(firstSentences, firstSentencesHighlights) %></a>\n      <span class=\"CoveoQuickview\" data-template-id=\"EmailQuickviewContent\">\n        <div class='coveo-icon-for-quickview'>Quickview</div>\n      </span>\n    <% } else { %>\n    <a class=\"CoveoResultLink coveo-email-child-excerpt\"><%= highlight(firstSentences, firstSentencesHighlights) %></a>\n    <% } %>\n</div>\n\n<div class=\"CoveoResultAttachments\" data-result-template-id=\"EmailResultAttachment\"></div>",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("FeedComment", Coveo.UnderscoreTemplate.fromString("<div class='coveo-date'><%- dateTime(raw.sfcreateddate) %></div>\n<div class='coveo-title'>\n    <span class=\"CoveoChatterPostedBy\" data-use-from-instead=\"true\" enable-posted-on=\"false\"></span>\n</div>\n\n\n<div class='coveo-excerpt'>\n    <span><%= encodeCarriageReturn(shorten(highlight(title, titleHighlights), 250)) %></span>\n\n    <div class='CoveoChatterPostAttachment'></div>\n</div>",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("Default", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px; font-size:14px\">\n      <span class=\"CoveoIcon\"></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"font-size:14px\">\n      <a class=\"CoveoResultLink\"></a>\n      <span class=\"CoveoQuickview\"><div class='coveo-icon-for-quickview'>Quickview</div></span>\n    </div>\n    <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:14px\">\n      <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\" style=\"text-align:justify\">\n      <span class=\"CoveoExcerpt\"></span>\n    </div>\n  </div>\n  <div class=\"coveo-result-row\">\n    <div class=\"coveo-result-cell\" style=\"width:20px\"></div>\n    <div class=\"coveo-result-cell\">\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\">\n        <tbody>\n          <tr data-field=\"@author\" data-caption=\"Author\"></tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),true, true)