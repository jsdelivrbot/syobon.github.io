/*
 * コメントフォーム
 * Original script - http://phiary.me/js-form-value-accessor/
 */

window.onload = function() {
  // TODO: write code
  // console.log("Hello, runstant!");
  var form = document.forms.mainForm;
  // text
  form._text.value = 'Hello, Vanilla JS';
  console.log('text:', form._text.value); //=> text: Hello, Vanilla JS
  // radio
  form._radio.value = 'foo';
  console.log('radio:', form._radio.value); //=> radio: foo

  // checkbox
  form._checkB.checked = true;
  console.log('checkbox:', 'A=' + form._checkA.checked, 'B=' + form._checkB.checked); //=> checkbox: A=false B=true

  // selectbox
  form._select.value = 'bar';
  console.log('select:', form._select.value); //=> select: bar
  
  // textarea
  form._ta.value = 'コメント';
  console.log('textarea:', form._ta.value); //=> textarea: コード書きたい
  
  // file
  form._file.onchange = function() {
    var file = form._file.files[0];
    
    var fr = new FileReader();
    fr.onload = function(res) {
      console.log(fr.result); // ファイルの中身を表示
    };
    fr.readAsText(file);
  };
};
