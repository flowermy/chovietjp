import Holidays from 'date-holidays'

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

function getDateInMonth(year, month, date) {
  const newDate = new Date(year, month - 1, date);
  let dayName = '';
  switch (newDate.getDay()) {
    case 0:
      dayName = '日';
      break;
    case 1:
      dayName = '月';
      break;
    case 2:
      dayName = '火';
      break;
    case 3:
      dayName = '水';
      break;
    case 4:
      dayName = '木';
      break;
    case 5:
      dayName = '金';
      break;
    case 6:
      dayName = '土';
      break;
    default:
      dayName = '日';
      break;
  }
  return dayName;
}

function getHolidayInMonth(monthDisplay, yearDisplay) {
  let hd = new Holidays('JP');
  const holidaysList = hd.getHolidays(yearDisplay);
  let holidaysInMonth = [];
  for (let j = 0; j < holidaysList.length; j++) {
    if (((new Date(holidaysList[j].date)).getMonth() + 1) === parseInt(monthDisplay, 0)) {
      holidaysInMonth.push(holidaysList[j]);
    }
  }
  let holidayDate = [];
  for (let h = 0; h < holidaysInMonth.length; h++) {
    if ((new Date(holidaysInMonth[h].end)).getDate() > (new Date(holidaysInMonth[h].start)).getDate() + 1) {
      for (let k = (new Date(holidaysInMonth[h].start)).getDate(); k <= (new Date(holidaysInMonth[h].end).getDate()); k++) {
        holidayDate.push(k);
      }
    } else {
      holidayDate.push((new Date(holidaysInMonth[h].date)).getDate());
    }
  }
  return holidayDate;
}

function getDistance(startDate, endDate, startDateSelected, endDateSelected) {
  let distance = '';
  if (startDateSelected && endDateSelected) {
    const startDateNumber = (new Date(startDate)).getDate();
    const endDateNumber = (new Date(endDate)).getDate();
    const startDateSelectedNumber = (new Date(startDateSelected)).getDate();
    const endDateSelectedNumber = (new Date(endDateSelected)).getDate();
    if (endDateSelectedNumber > endDateNumber && startDateSelectedNumber <= startDateNumber) {
      distance = endDateNumber - startDateNumber;
    } else if (endDateSelectedNumber > endDateNumber && startDateSelectedNumber > startDateNumber) {
      distance = endDateNumber - startDateSelectedNumber;
    } else if (endDateSelectedNumber <= endDateNumber && startDateSelectedNumber <= startDateNumber) {
      distance = endDateSelectedNumber - startDateNumber;
    } else {
      distance = endDateSelectedNumber - startDateSelectedNumber;
    }
  } else {
    if ((new Date(endDate)).getFullYear() === (new Date(startDate)).getFullYear()) {
      if ((new Date(endDate)).getMonth() > (new Date(startDate)).getMonth()) {
        distance = (new Date(endDate)).getDate();
      } else {
        distance = (new Date(endDate)).getDate() - (new Date(startDate)).getDate();
      }
    } else {
      distance = daysInMonth(((new Date(endDate)).getMonth() + 1), (new Date(endDate)).getFullYear());
    }
  }
  return distance;
}

function convertMessageByCode(messageCode) {
  if (messageCode === 'LOGIN_FAIL') {
    return 'あなたは登録されていないか、パスワードが違っています。';
  } else if (messageCode === 'PARAMS_MISSING') {
    return '必要なパラメータが足りない、又は間違っています。';
  } else if (messageCode === 'INVALID_TOKEN') {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('doubleLogin');
    localStorage.removeItem('getAvatarResponse');
    localStorage.removeItem('getAvatarResponseData');
    window.location.href = '/login';
  } else if (messageCode === 'DATE_INVALID_FORMAT') {
    return '日付の形式が正しくないです。';
  } else if (messageCode === 'START_DATE_MUST_BE_SMALLER_END_DATE') {
    return '開始時間が終了時間より前でなければなりません。';
  } else if (messageCode === 'NYUSHO_DATE_MUST_BE_SMALLER_TAISHO_DATE') {
    return '入所時間が退所時間より前でなければなりません。';
  } else if (messageCode === 'END_DATE_MUST_SMALLER_TAISHO_DATE') {
    return '日付範囲に誤りがあります。';
  } else if (messageCode === 'GAIHAKU_NYUIN_JOKYO_EXISTED') {
    return '既に予定がセットされている為変更できませんでした。';
  } else if (messageCode === 'NYUTAISHO_JOKYO_EXISTED') {
    return 'この利用者のその期間は、既に予定がセットされています。';
  } else if (messageCode === 'CREATE_ERROR') {
    return '作成できません。';
  } else if (messageCode === 'RECORD_NOT_FOUND') {
    return 'レコードが見つけませんでした。';
  } else if (messageCode === 'ROOM_BED_HAS_BEEN_USED') {
    return 'この部屋には空きがありません。';
  } else if (messageCode === 'DELETE_ERROR') {
    return '削除できません。';
  } else if (messageCode === 'RIYOUSYA_NOT_FOUND') {
    return '利用者が存在しません。';
  } else if (messageCode === 'THIS_FIELD_IS_REQUIRED') {
    return 'このフィールドが入力必須です。';
  } else if (messageCode === 'LOGOUT') {
    return 'ログアウト';
  } else if (messageCode === 'ARE_YOU_SURE') {
    return 'ログアウトしてもよろしいですか。';
  } else if (messageCode === 'UPDATE_ERROR') {
    return '修正できません。';
  } else if (messageCode === 'ROOM_INVALID') {
    return '該当の部屋が見つかりませんでした。';
  } else if (messageCode === 'BED_INVALID') {
    return '該当のベッドが見つかりませんでした。';
  } else if (messageCode === 'NYUTAISHO_NOT_FOUND') {
    return '該当の入所状況が見つかりませんでした。';
  } else if (messageCode === 'GAIHAKU_NOT_FOUND') {
    return '該当の外泊又は入院の予定が見つかりませんでした。';
  } else if (messageCode === 'SEARCHING_MISSING_PARAMS') {
    return '検索文字列を入力してください。';
  } else if (messageCode === 'END_DATE_INVALID') {
    return '日付範囲に誤りがあります。';
  } else if (messageCode === 'PLAN_EXISTED') {
    return '既に予定がセットされている為変更できませんでした。'
  } else if (messageCode === 'NYUSHO_DATE_MUST_BE_SMALLER_START_DATE') {
    return '入所日が開始日より前でなければなりません。';
  }
}

/**
 * 
 * @param {*} shortFlag 
 * @param {*} tempBookFlag 
 * @param {*} nyushoKubunFlag 
 * @param {*} gaihakuNyuinFlag 
 */
function genderStatus(shortFlag, tempBookFlag, nyushoKubunFlag, gaihakuNyuinFlag) {
  if (shortFlag) {
    return '短期利用';
  } else if (tempBookFlag) {
    return '仮予約のみ';
  } else if (gaihakuNyuinFlag) {
    if (gaihakuNyuinFlag === 1) {
      return '外泊';
    } else if (gaihakuNyuinFlag === 2) {
      return '入院';
    } else {
      return '入所';
    }
  } else {
    return '入所';
  }
}


/**
 * 
 * @param {string} inputChar 
 * @param {float} value 
 */
function handleInputNumber(inputChar, value) {
  let data = 0;
  if (inputChar === 'del') {
    data = 0;
  }

  // else if (inputChar === '.') {
  //   if (!value) {
  //     value = '0.'
  //   } else {
  //     if (!value.includes('.')) {
  //       value = value + '.'
  //     }
  //   }
  // }

  else if (!value) {
    // if (inputChar !== '0')
    data = inputChar
  } else {
    data = value + '' + inputChar
  }

  // let pointNum = parseFloat(value);

  // @TODO: not check much min input. check requirement for this and fix
  // if (!checkMaxMin) {
  //   if (pointNum > 200 || pointNum < 0) {
  //     return 0;
  //   }
  // }

  return data;
}

/**
 * 
 * @param {*} url 
 */
function getUrlVars(url) {
  var vars = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

/**
 * 
 * @param {array, obj or int, string} Obj 
 */
function clone(Obj) {
  var buf;
  if (Obj instanceof Array) {
    buf = []; // create an empty array
    var i = Obj.length;
    while (i--) {
      buf[i] = clone(Obj[i]); // recursively clone the elements
    }
    return buf;
  } else if (Obj instanceof Object) {
    buf = {}; // create an empty object
    for (var k in Obj) {
      buf[k] = clone(Obj[k]); // recursively clone the value
    }
    return buf;
  } else {
    return Obj;
  }
}

function extractRangeVital(vitalHighLow) {
  let temperature = null;
  let bpressureHigh = null;
  let bpressureLow = null;
  let pulse = null;
  let respiration = null;

  if (vitalHighLow) {
    let preVitalHighLow = vitalHighLow.split(';')
    for (let tmpVhl = 0; tmpVhl < preVitalHighLow.length; tmpVhl++) {
      if (preVitalHighLow[tmpVhl].split('_')[0] === '体温') {
        temperature = preVitalHighLow[tmpVhl].split('_')[1]
      }

      if (preVitalHighLow[tmpVhl].split('_')[0] === '血圧高') {
        bpressureHigh = preVitalHighLow[tmpVhl].split('_')[1]
      }

      if (preVitalHighLow[tmpVhl].split('_')[0] === '血圧低') {
        bpressureLow = preVitalHighLow[tmpVhl].split('_')[1]
      }

      if (preVitalHighLow[tmpVhl].split('_')[0] === '脈拍') {
        pulse = preVitalHighLow[tmpVhl].split('_')[1]
      }

      if (preVitalHighLow[tmpVhl].split('_')[0] === '呼吸') {
        respiration = preVitalHighLow[tmpVhl].split('_')[1]
      }

    }

    return {
      "temperature": temperature,
      "bpressureHigh": bpressureHigh,
      "bpressureLow": bpressureLow,
      "pulse": pulse,
      "respiration": respiration,
      "spo2B": null,
      "spo2A": null
    }

  }
}


/**
 * SPO2 の format: spo2B-spo2A, spo2B, -spo2A,
 * @param {sting} spo2 
 * @param {number} spo2B 
 * @param {number} spo2A
 * 
 * Return String
 */
function handleSpo2(spo2, spo2B, spo2A) {
  //handle Spo2B and Spo2A
  let spo2BPre = spo2 ? spo2.toString().split('-')[0] : '';
  let spo2APre = spo2 && spo2.toString().split('-')[1] ? spo2.split('-')[1] : '';

  if (spo2B !== null) {
    spo2BPre = spo2B
  }
  if (spo2A !== null) {
    spo2APre = spo2A
  }

  if (spo2BPre && spo2APre) {
    spo2 = spo2BPre + '-' + spo2APre
  } else if (spo2BPre && !spo2APre) {
    spo2 = spo2BPre
  } else if (!spo2BPre && spo2APre) {
    spo2 = '-' + spo2APre
  } else {
    spo2 = ''
  }

  return spo2;
}

/**
 * 
 * @param {sting} fieldName 
 * @param {sting} value 
 */
function setValueLocalstorage(fieldName, value) {
  let preParedata = JSON.parse(localStorage.getItem('swpsps'));

  if (preParedata) {
    preParedata[fieldName] = value;
  } else {
    preParedata = {};
    preParedata.started = true;
    preParedata[fieldName] = value;
  }

  localStorage.setItem('swpsps', JSON.stringify(preParedata))
}

/**
 * 
 * @param {sting} fieldName 
 * @param {sting} value 
 * 
 * return value
 * if fieldName is null return all
 */
function getValueLocalstorage(fieldName) {
  let preParedata = JSON.parse(localStorage.getItem('swpsps'));

  // return all if field name is  empty
  if (!fieldName) {
    return preParedata;
  }

  // return value
  if (preParedata && preParedata[fieldName]) {
    return preParedata[fieldName]
  }

  // exception
  return null;
}

export {
  getDateInMonth,
  getHolidayInMonth,
  getDistance,
  convertMessageByCode,
  genderStatus,
  getUrlVars,
  handleInputNumber,
  clone,
  extractRangeVital,
  handleSpo2,
  setValueLocalstorage,
  getValueLocalstorage
}
