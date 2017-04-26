import React, {Component}from 'react';
import $ from 'jquery';

let c = '', cxt = '';
class Canvas extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
    this.time = '';
    this.stop = false;
    this.a = 0
  }

  componentDidMount() {
    c = document.getElementById('canvas');
    cxt = c.getContext("2d");
    console.log(document.getElementById('a'))
    cxt.translate(100, 75);
    this.draw()
  }

  draw() {
    cxt.clearRect(-70, -70, 300, 200);
    // 绘制小圆
    cxt.beginPath();
    cxt.arc(0, 0, 50, 0, 2 * Math.PI);
    cxt.stroke()
    cxt.closePath();
    // 绘制大圆
    cxt.beginPath();
    cxt.arc(0, 0, 60, 0, 2 * Math.PI);
    cxt.stroke()
    cxt.closePath();


    // 绘制实现
    cxt.translate(0, 0);
    cxt.beginPath();
    cxt.fillStyle = "#FF0000";
    cxt.arc(0, -55, 5, 0, Math.PI * 2);
    cxt.stroke()
    cxt.closePath();
    cxt.fill();

    cxt.rotate(((2 * Math.PI) / 360));

    this.a = 1 + this.a;
    if (this.a === 360) {
      this.a = 0
    }
  }

  revolev() {
    if (this.stop) {
      clearInterval(this.time)
      this.stop = false;
      document.getElementById('sum').innerHTML = '您当前得分为' + this.a + '分。继续努力呦';
    } else {
      this.stop = true;
      let that = this;
      this.time = setInterval(function () {
        that.draw()
      }, 5)
    }
  }

  render() {
    return (
      <div>
        <canvas id="canvas" width="300" height="200" onClick={()=>{ this.revolev() }}></canvas>
        <div id="sum"></div>
      </div>
    )
  }
}
export default Canvas;
