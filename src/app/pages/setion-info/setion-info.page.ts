import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-setion-info',
  templateUrl: './setion-info.page.html',
  styleUrls: ['./setion-info.page.scss'],
})
export class SetionInfoPage implements OnInit {
  public screenWidth: number; // 获取屏幕宽度
  public echartsAreaNameList = ['1', '2'];
  public echartsAreaDataList = [ 4, 5];
  public chartOption = {
    title: {
      text: '堆叠区域图'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: '联盟广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '视频广告',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '直接访问',
        type: 'line',
        stack: '总量',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.getEcharts('chart1');
  }
/**
   * 渲染echarts图表
   * @param charts 【需要渲染的echarts的id】
   */
  getEcharts(charts: string) {
    const ec = echarts as any;
    const container = document.getElementById(charts);
    const chart = ec.init(container);

    chart.setOption({
      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: (params) => {
          return params[0].axisValue + '：' + params[0].value;
        },
      },
      dataZoom: [{
        type: 'slider',
        show: true,
        realtime: true, // 拖动时，是否实时更新系列的视图
        height: 16,
        bottom: '10',
        left: '20%',
        right: '20%',
        start: 50,
        end: 100,
        textStyle: { color: '#181818' }
      },
      {
        type: 'inside',
      }
      ],
      grid: {
        left: '5%',
        right: '5%',
        bottom: '14%',
        top: '14%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: this.echartsAreaNameList,
        axisLabel: {
          interval: 0,
          rotate: 35,
          textStyle: {
            fontSize : 10
          }
        },
        axisTick: {
          lineStyle: {
            color: '#fff'
          },
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#181818'
          }
        }
      },
      yAxis: {
        show: true,
        min: 0,
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#181818'
          }
        }
      },
      series: [
        {
          name: '数量',
          type: 'bar',
          barWidth: '10',
          data: this.echartsAreaDataList,
          itemStyle: {
            normal: {
              color: '#4162fb',
              barBorderRadius: [30, 30, 0, 0]
            }
          }
        }
      ]
    });


  }
  

}
