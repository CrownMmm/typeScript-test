import superagent from 'superagent';
//  ts -> js 会报错 需要用.d.ts 翻译   活着安装 @types/superagent

class Crowller {
  private secret = 'x3b174jsx';
  private url = `http://www.dell-lee.com/typescript/demo.html?secret=${this.secret}`;
  private rawHtml = '';
  async getRawHtml() {
    const result = await superagent.get(this.url);
    this.rawHtml = result.text;
    // console.log(result.text);
  }
  constructor() {
    this.getRawHtml();
  }
}

const crowller = new Crowller();
