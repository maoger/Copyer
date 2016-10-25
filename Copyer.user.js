// ==UserScript==
// @name         Copyer
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/maoger/Copyer
// @version      1.1.1
// @description  恢复被网站禁用的复制粘贴功能。
// @author       maoger
// @match        http://gsxt.zjaic.gov.cn/*
// @updateURL https://openuserjs.org/meta/maoger/Copyer.meta.js
// ==/UserScript==

// changelog:
// version 1.1 revise the 'match' option
// version 1.0 initial release

//免责声明：本代码仅供技术交流，请勿用于商业及非法用途，如产生法律纠纷与本人无关。
//适用：“全国企业信用信息公示系统（浙江）”，原网站设置了不能复制粘贴，通过修改body中的onselectstart属性即可恢复复制粘贴功能。

(function() {
    'use strict';

    document.body.onselectstart = 'return true';

})();
