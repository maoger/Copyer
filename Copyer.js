// ==UserScript==
// @name         Copyer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  恢复复制粘贴功能
// @author       maoger
// @match        http://*.gov.cn/*
// @grant        none
// ==/UserScript==

//免责声明：本代码仅供技术交流，请勿用于商业及非法用途，如产生法律纠纷与本人无关。
//目前仅发现“全国企业信用信息公示系统（浙江）”不能复制粘贴，仅修改body中的onselectstart属性即可恢复复制粘贴功能。

(function() {
    'use strict';

    document.body.onselectstart = 'return true';

})();
