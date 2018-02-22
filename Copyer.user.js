// ==UserScript==
// @name         Copyer
// @namespace    http://tampermonkey.net/
// @homepage     https://github.com/maoger/Copyer
// @version      1.2
// @description  恢复被网站禁用的复制粘贴功能。
// @author       maoger
// @include      http*://*
// @updateURL    https://openuserjs.org/meta/maoger/Copyer.meta.js
// ==/UserScript==

(function() {
    'use strict';
    document.body.onselectstart = 'return true';
})();
