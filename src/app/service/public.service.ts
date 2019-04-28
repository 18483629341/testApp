import { Injectable } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx'; // 文件传输
import { File } from '@ionic-native/file/ngx'; // 文件
import { AlertController, ToastController, Events } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx'; // 文件打开

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  public progressNum: any;
  public alertControl: any;
  constructor(
    public transfer: FileTransfer,
    public file: File,
    public events: Events,
    public alertController: AlertController,
    public toastController: ToastController,
    public fileOpener: FileOpener
  ) {
  }

  /**
   * 下载文件
   * @param {Object} url 文件路径
   * @param {String} filename 文件名称
   * @param {String} application 文件类型
   * @param {any} filesize 文件大小
   * @param {string} packagename 包名
   */
  async downFile(url, filename, application, filesize?, packagename?) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    this.showLoadingAlert();
    fileTransfer.download(url, this.file.externalCacheDirectory + filename, false)
      .then(
        (entry) => {
          const openurl = entry.toURL();
          this.openFile(this.file.externalCacheDirectory + filename, application, null);
        },
        (error) => {
          setTimeout(() => {
            if (this.alertControl !== null) {
              this.hideAlert();
            }
            this.events.publish('loadFail', false);
            this.presentToast('文件下载失败，请重试');
          }, 1000);
        }
      ).catch(
        e => {
          setTimeout(() => {
            if (alert !== null) {
              this.hideAlert();
            }
            this.events.publish('loadFail', false);
            this.presentToast('文件下载失败，请重试');
          }, 1000);
        }
      );
    fileTransfer.onProgress((event: ProgressEvent) => {
      // alert(JSON.stringify(event));
      if (filesize) {
        this.progressNum = Math.floor(event.loaded / filesize * 100);
      } else {
        this.progressNum = Math.floor(event.loaded / event.total * 100);
      }
      this.events.publish('progressChange', this.progressNum, packagename);
      if (this.progressNum >= 100) {
        if (this.alertControl !== null) {
          this.hideAlert();
        }
        this.events.publish('loadFail', false);
      } else if (event.loaded > 0 && (event.total || filesize)) {
        const progress = document.getElementsByClassName('loading')[0];
        const downed = document.getElementsByClassName('downed')[0];
        if (progress) {
          progress['style'].display = 'block';
          progress['style'].width = this.progressNum + '%';
        }
        if (downed) {
          downed.innerHTML = '已经下载：' + this.progressNum + '%';
        }
      }
    });
  }

  /**
   * 打开文件
   * @param filePosition  文件位置
   * @param application  打开方式
   * @param fileName 文件名称
   */
  openFile(filePosition, application, obj) {
    this.fileOpener.open(filePosition, application).then(
      () => {

      }).catch(
        e => {
          this.presentToast('文件打开失败，请重试');
        }
      );
  }

  /**
   * 显示下载进度框
   */
  async showLoadingAlert() {
    this.alertControl = await this.alertController.create({
      message: '<p class="title">正在下载，请稍等...</p><div class="progress">' +
        '<span class="blue loading"></span></div><p class="downed">已经下载：0%</p>',
      buttons: [
        {
          text: '后台下载',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            this.hideAlert();
          }
        }
      ]
    });
    this.alertControl.present();
  }

  /**
   * 关闭下载进度框
   */
  hideAlert() {
    this.alertControl.dismiss();
    this.alertControl = null;
  }

  /**
   * 提示框
   * @param msg  提示文字
   * @param position  位置
   */
  async presentToast(msg, position?) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: position || 'bottom',
    });
    toast.present();
  }
  /**
   * 获取UUID   uuid(8, 2) // "01001010"   uuid(8, 10) // "47473046"
   * @param len  长度
   * @param radix 基数
   */
  getUUID(len, radix) {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    const uuid = [];
    let i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) {
          uuid[i] = chars[0 | Math.random() * radix];
        }
    } else {
        let r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }

    return uuid.join('');
  }

}

