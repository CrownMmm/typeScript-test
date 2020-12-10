// es6模块化

declare module 'jquery' {
  // 定义全局函数
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }

  // 函数重载
  // 混合类型
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;

  namespace $ {
    namespace fn {
      class init {}
    }
  }

  export = $;
  // 使用了interface 的语法 实现函数重载
  // interface JQuery {
  //   (readyFunc: () => void): void;
  //   (selector: string): JqueryInstance;
  // }

  // declare var $: JQuery;
}

// 定义全局变量
// declare var $: (param: () => void) => void;

// 对对象，类进行定义 以及命名空间进行嵌套
