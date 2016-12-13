// ==UserScript==
// @name         Copyer
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/maoger/Copyer
// @version      1.2
// @description  恢复被网站禁用的复制粘贴功能；最近工商信息网站更新，所有网站已均可复制粘贴。
// @author       maoger
// @match        http://gsxt.zjaic.gov.cn/*
// @updateURL    https://openuserjs.org/meta/maoger/Copyer.meta.js
// ==/UserScript==

//免责声明：本代码仅供技术交流，请勿用于商业及非法用途，如产生法律纠纷与本人无关。

(function() {
    'use strict';
    document.body.onselectstart = 'return true';
})();
