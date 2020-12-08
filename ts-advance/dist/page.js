"use strict";
// 三斜杠制定当前文件和其他文件之间的关系  不仅可以使用构造器 还可以使用其中的interface
/// <reference path= './components.ts/'>
var Home;
(function (Home) {
    var Page = /** @class */ (function () {
        function Page() {
            this.user = {
                name: 'dell',
            };
            new Components.Header();
            new Components.Footer();
            new Components.Content();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
