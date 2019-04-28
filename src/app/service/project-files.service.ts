import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ConfigService } from './config.service';
@Injectable({
  providedIn: 'root'
})
export class ProjectFilesService {
  public favoriteList: any = [];
  constructor(public httpService: HttpService, public configService: ConfigService) { }
  /**
 * 登录验证
 * @param {Object} params 调用方法传过来的参数，根据城市代码查询进行获取
 * @param {Boolean} flag 是否显示数据加载,false或不传参为显示，true不显示
 * @param {Function} callback 回调函数
 */
  login(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.login, params, showloading, callback);
  }
  /* 项目档案开始 */
  // 基本信息
  getBaseInfoData(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.baseInfo, params, showloading, callback);
  }
  // 登录表
  getLoginTable(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.loginTable, params, showloading, callback);
  }
  // 项目档案
  getProjectInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.projectFiles, params, showloading, callback);
  }
  // 基础表1
  getApprovalForm(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.approvalForm, params, showloading, callback);
  }
  // 基础表3
  getApprovalForm3(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.approvalForm3, params, showloading, callback);
  }
  // 办理过程
  getHandling(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.XmdnBlgc, params, showloading, callback);
  }
  // 延时记录
  getDelayRecord(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.XmdnYsjl, params, showloading, callback);
  }
  // 评价备案信息
  getRecordInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.recordInfo, params, showloading, callback);
  }
  // 三同时检查记录
  // getInspectionRecord(params, showloading, callback) {
  //   return this.httpService.get('../../assets/data/inspectionRecord.json', params, showloading, callback);
  // }
  getInspectionRecord(params, showloading, callback) {
    return this.httpService.post(this.configService.host + this.configService.Stsjcjl, params, showloading, callback);
  }
  // 三同时检查录入
  getCheckSave(params, showloading, callback) {
    console.log(params)
    return this.httpService.post(this.configService.host + this.configService.checkSave, params, showloading, callback);
  }
  // 建设单位列表数据详情
  getProInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.ProInfo, params, showloading, callback);
  }
  // 建设单位列表数据详情
  getDevRelateItemInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.RelateItemInfo, params, showloading, callback);
  }
  // 编制单位列表详情数据-机构数据
  getEstabunitInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.HpjgDetailInfo, params, showloading, callback);
  }
  // 编制单位列表详情数据-工程师
  getHpjgEnginnerInfoList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.EnginnerInfoList, params, showloading, callback);
  }
  // 编制单位列表详情数据-项目
  getHpjgItemInfoList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.ItemInfoList, params, showloading, callback);
  }
  // 编制单位列表详情数据-诚信信息
  getHpjgCxInfoList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.CxInfoList, params, showloading, callback);
  }
  // 环评专家列表详情数据-机构数据
  getHpzjInfo(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.ExpertBaseInfo, params, showloading, callback);
  }
  // 环评专家列表详情数据-机构数据
  getExpertCxInfoList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.ExpertCxInfoList, params, showloading, callback);
  }
  // 环评专家列表详情数据-参与项目
  getExpertItemList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.ExpertItemList, params, showloading, callback);
  }

  /* 项目档案结束 */

  /* 环评监督管理开始 */

  // 环评专家的列表数据
  getHpzjList(params, showloading, callback) {
    console.log(params)
    return this.httpService.get(this.configService.host + this.configService.ExpertDataList, params, showloading, callback);
  }
  /**
  * 获取环评监督管理–建设单位-获取筛选条件-区域列表
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getReligionList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.regionList, params, showloading, callback);
  }

  /**
  * 获取环评监督管理–建设单位-获取筛选条件-行业列表
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getIndustryList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.industryList, params, showloading, callback);
  }

  /**
  * 获取环评监督管理–建设单位-获取列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getProInfoList(params, showloading, callback) {
    console.log(params)
    return this.httpService.get(this.configService.host + this.configService.devcompanyInfoList, params, showloading, callback);
  }

  /**
  * 获取环评监督管理-编制单位-筛选条件-地区列表
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getPlaceList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.placeList, params, showloading, callback);
  }
  /**
    * 获取环评监督管理-编制单位-筛选条件-甲级环评报告书评价范围列表
    * @param {Object} params 调用方法传过来的参数
    * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
    * @param {Function} callback 回调函数
    */
  getReportList(params, showloading, callback) {
    return this.httpService.get('../../assets/data/EIA-consUnit-establishunit-reportList.json', params, showloading, callback);
  }
  /**
    * 获取环评监督管理-编制单位-获取列表数据
    * @param {Object} params 调用方法传过来的参数
    * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
    * @param {Function} callback 回调函数
    */
  // getUnitList(params, showloading, callback) {
  //   return this.httpService.get('../../assets/data/EIA-consUnit-establishunit-unitListData.json', params, showloading, callback);
  // }
  getUnitList(params, showloading, callback) {
    console.log(params)
    return this.httpService.get(this.configService.host + this.configService.HpjgInfoList, params, showloading, callback);
  }
  /**
    * 获取环评监督管理-环评专家-获取领域列表数据
    * @param {Object} params 调用方法传过来的参数
    * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
    * @param {Function} callback 回调函数
    */
  getFieldList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.FieldList, params, showloading, callback);
  }

  /**
  * 获取环评监督管理-环评专家-获取学历列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getEducationList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.EducationList, params, showloading, callback);
  }

  /* 环评监督管理结束 */

  /** 项目统计分析  --start */
  /**
  * 获取项目统计分析-筛选条件-区域列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getProAnalysisRegionList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.proAnalysisRegionList, params, showloading, callback);
  }
  /**
  * 获取项目统计分析-筛选条件-区域列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getProAnalysisYearList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.proAnalysisYearList, params, showloading, callback);
  }
  /**
  * 获取项目统计分析-筛选条件-环评文件列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getProAnalysisHpfileList(params, showloading, callback) {
    return this.httpService.get(this.configService.host + this.configService.proAnalysisHpfileList, params, showloading, callback);
  }

  /**
  * 获取项目统计分析-列表数据
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  getproAnalysisCountList(params, showloading, callback) {
    console.log(params);
    return this.httpService.get(this.configService.host + this.configService.proAnalysisCountList, params, showloading, callback);
  }
  /** 项目统计分析  --end */

  /**
  * 改变列表收藏状态
  * @param {Object} params 调用方法传过来的参数
  * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
  * @param {Function} callback 回调函数
  */
  changeCollectStatus(params, showloading, callback) {
    console.log(params);
    return this.httpService.get(this.configService.host + this.configService.changeCollectStatus, params, showloading, callback);
  }
  /**
    * 获取收藏列表
    * @param {Object} params 调用方法传过来的参数
    * @param {Boolean} showloading 是否显示数据加载,false或不传参为显示，true不显示
    * @param {Function} callback 回调函数
    */
  getUserCollPro(params, showloading, callback) {
    console.log(params);
    return this.httpService.post(this.configService.host + this.configService.getUserCollPro, params, showloading, callback);
  }

}
