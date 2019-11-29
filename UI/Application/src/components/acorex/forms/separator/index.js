import { Component } from 'react';

class AXSeparator extends Component {
  static showSeparate(e) {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  static separate(e) {
    let result = this.removeComma(e);
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  static removeComma(e) {
    let result = '';
    let i = 0;
    if (e) {
      while (i < e.length) {
        if (e[i] != ',') result += e[i];
        i++;
      }
    }
    return result;
  }
}
export { AXSeparator };
