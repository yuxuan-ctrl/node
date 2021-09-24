class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      this.data = data;
    }
    if (message) {
      this.message = message;

    }

  }
}
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = 0;
  }
}
class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.errno = -1;
  }
}
class bingEchartModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;
    }
    if (data) {
      let dataGamma = [];
      let dataAerosol = [];
      let dataNeutuon = [];
      let dataSedimentary = [];
      let dataAlarm = [];
      let zong = []
      for (let i in data) {
        if (data[i].system === 'gamma') {
          dataGamma.push(data[i])
        }
        if (data[i].system === 'aerosol') {
          dataAerosol.push(data[i])
        } if (data[i].system === 'neutuon') {
          dataNeutuon.push(data[i])
        } if (data[i].system === 'sedimentary') {
          dataSedimentary.push(data[i])
        } if (data[i].system === 'alarm') {
          dataAlarm.push(data[i])
        }
      }
      zong.push(dataGamma, dataNeutuon, dataSedimentary, dataAerosol, dataAlarm)
      this.data = zong;
    }
  }
}
module.exports = {
  SuccessModel,
  ErrorModel,
  bingEchartModel
}