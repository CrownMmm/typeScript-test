// 三斜杠制定当前文件和其他文件之间的关系  不仅可以使用构造器 还可以使用其中的interface
/// <reference path= './components.ts/'>

namespace Home {
  export class Page {
    user: Components.User = {
      name: 'dell',
    };
    constructor() {
      new Components.Header();
      new Components.Footer();
      new Components.Content();
    }
  }
}
