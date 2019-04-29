import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-setion-info',
  templateUrl: './setion-info.page.html',
  styleUrls: ['./setion-info.page.scss'],
})
export class SetionInfoPage implements OnInit {
  public screenWidth= window.innerWidth + 'px'; // 获取屏幕宽度
  public echartsAreaNameList = ['1', '2'];
  public echartsAreaDataList = [4, 5];
  public waterQuiData = {
    date: '2018年4月8日',
    arr: [
      {
        time: '00:00',
        andan: 31,
        PH: 34,
        DO: 11,
        p: 14,
        water_level: 'Ⅰ'
      },
      {
        time: '02:00',
        andan: 33,
        PH: 24,
        DO: 21,
        p: 14,
        water_level: 'Ⅱ'
      }
    ]
  };
  public waterAssData = {
    xData: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    arr: [1, 2, 3, 4, 5, 6, 4, 3, 3, 1, 6, 1]
  };
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.getEcharts('chart1');
    }, 1000);
  }
  /**
   * 渲染echarts图表
   * @param charts 需要渲染的echarts的id
   */
  getEcharts(charts: string) {
    const ec = echarts as any;
    const container = document.getElementById(charts);
    const chart = ec.init(container);
    chart.setOption( {
      color: ['#76c75b'],
      tooltip: {
        show: false,
      },
      grid: {
        top: 40,
        left: '0%',
        right: 33,
        bottom: 20,
        containLabel: true,
        show: false
      },
      xAxis: {
        type: 'category',
        data: this.waterAssData.xData,
        onZero: true,
        axisLine: { //X轴线的设置
          show: false,
          lineStyle: {
            color: "#324b75",
            type: 'dashed',
            align: 'right',
            padding: [3, 4, 5, 10]
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          show: true,
          rotate: -45,
          textStyle: {
            color: '#c3d4ff',
            fontSize: 14,
          }
        },
        boundaryGap: true
      },
      yAxis: {
        type: 'value',
        //name: this._obj.Yname,
        nameLocation: 'end',
        nameTextStyle: {
          color: '#c3d4ff',
          align: 'left',
          padding: [0, 0, 5, 0],
          fontSize: 14
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#c3d4ff',
            fontSize: 13,
    
          },
          formatter: function (y) {
            var r = null;
            switch (y) {
              case 6:
                r = '劣Ⅳ类'
                break;
              case 5:
                r = 'Ⅴ类'
                break;
              case 4:
                r = 'Ⅵ类'
                break;
              case 3:
                r = 'Ⅲ类'
                break;
              case 2:
                r = 'Ⅱ类'
                break;
              case 1:
                r = 'Ⅰ类'
                break;
              default:
                r = ' '
            }
            return r;
          }
        },
        axisLine: { //Y轴线的设置
          show: false,
    
        },
        axisTick: {
          show: false
        },
        splitLine: { //Y轴线的设置
          show: true,
          lineStyle: {
            color: ["#324b75"],
            type: 'dashed'
          }
        },
        max: 6,
        min: 0,
        boundaryGap: ['0%', '0%']
      },
      series: [{
        data: this.waterAssData.arr,
        barCategoryGap: '80%',
        type: 'bar',
        legendHoverLink: true,
        itemStyle: {
          normal: {
            // color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            //             offset: 0,
            //             color: '#00b0ff'
            //         }, {
            //             offset: 0.8,
            //             color: '#7052f4'
            //         }], false),
            barBorderRadius: [8,8,0,0]
          }
        },
        progressive: 5000,
      }]
    });
  }

  /**
   * 获取对象所有属性，返回属性组成的数组
   * @param item 对象
   */
  getKeys(item) {
    // console.log(Object.keys(item));
    return Object.keys(item);
  }

}
