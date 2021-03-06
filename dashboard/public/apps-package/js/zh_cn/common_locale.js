var locale = {lc:{"ar":function(n){
  if (n === 0) {
    return 'zero';
  }
  if (n == 1) {
    return 'one';
  }
  if (n == 2) {
    return 'two';
  }
  if ((n % 100) >= 3 && (n % 100) <= 10 && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 99 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"en":function(n){return n===1?"one":"other"},"bg":function(n){return n===1?"one":"other"},"bn":function(n){return n===1?"one":"other"},"ca":function(n){return n===1?"one":"other"},"cs":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"da":function(n){return n===1?"one":"other"},"de":function(n){return n===1?"one":"other"},"el":function(n){return n===1?"one":"other"},"es":function(n){return n===1?"one":"other"},"et":function(n){return n===1?"one":"other"},"eu":function(n){return n===1?"one":"other"},"fa":function(n){return "other"},"fi":function(n){return n===1?"one":"other"},"fil":function(n){return n===0||n==1?"one":"other"},"fr":function(n){return Math.floor(n)===0||Math.floor(n)==1?"one":"other"},"gl":function(n){return n===1?"one":"other"},"he":function(n){return n===1?"one":"other"},"hi":function(n){return n===0||n==1?"one":"other"},"hr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"hu":function(n){return "other"},"id":function(n){return "other"},"is":function(n){
    return ((n%10) === 1 && (n%100) !== 11) ? 'one' : 'other';
  },"it":function(n){return n===1?"one":"other"},"ja":function(n){return "other"},"ko":function(n){return "other"},"lt":function(n){
  if ((n % 10) == 1 && ((n % 100) < 11 || (n % 100) > 19)) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 9 &&
      ((n % 100) < 11 || (n % 100) > 19) && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"lv":function(n){
  if (n === 0) {
    return 'zero';
  }
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  return 'other';
},"mk":function(n){return (n%10)==1&&n!=11?"one":"other"},"ms":function(n){return "other"},"mt":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || ((n % 100) >= 2 && (n % 100) <= 4 && n == Math.floor(n))) {
    return 'few';
  }
  if ((n % 100) >= 11 && (n % 100) <= 19 && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"nl":function(n){return n===1?"one":"other"},"no":function(n){return n===1?"one":"other"},"pl":function(n){
  if (n == 1) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || n != 1 && (n % 10) == 1 ||
      ((n % 10) >= 5 && (n % 10) <= 9 || (n % 100) >= 12 && (n % 100) <= 14) &&
      n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"pt":function(n){return n===1?"one":"other"},"ro":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n === 0 || n != 1 && (n % 100) >= 1 &&
      (n % 100) <= 19 && n == Math.floor(n)) {
    return 'few';
  }
  return 'other';
},"ru":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sk":function(n){
  if (n == 1) {
    return 'one';
  }
  if (n == 2 || n == 3 || n == 4) {
    return 'few';
  }
  return 'other';
},"sl":function(n){
  if ((n % 100) == 1) {
    return 'one';
  }
  if ((n % 100) == 2) {
    return 'two';
  }
  if ((n % 100) == 3 || (n % 100) == 4) {
    return 'few';
  }
  return 'other';
},"sq":function(n){return n===1?"one":"other"},"sr":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"sv":function(n){return n===1?"one":"other"},"ta":function(n){return n===1?"one":"other"},"th":function(n){return "other"},"tr":function(n){return n===1?"one":"other"},"uk":function(n){
  if ((n % 10) == 1 && (n % 100) != 11) {
    return 'one';
  }
  if ((n % 10) >= 2 && (n % 10) <= 4 &&
      ((n % 100) < 12 || (n % 100) > 14) && n == Math.floor(n)) {
    return 'few';
  }
  if ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9) ||
      ((n % 100) >= 11 && (n % 100) <= 14) && n == Math.floor(n)) {
    return 'many';
  }
  return 'other';
},"ur":function(n){return n===1?"one":"other"},"vi":function(n){return "other"},"zh":function(n){return "other"}},
c:function(d,k){if(!d)throw new Error("MessageFormat: Data required for '"+k+"'.")},
n:function(d,k,o){if(isNaN(d[k]))throw new Error("MessageFormat: '"+k+"' isn't a number.");return d[k]-(o||0)},
v:function(d,k){locale.c(d,k);return d[k]},
p:function(d,k,o,l,p){locale.c(d,k);return d[k] in p?p[d[k]]:(k=locale.lc[l](d[k]-o),k in p?p[k]:p.other)},
s:function(d,k,p){locale.c(d,k);return d[k] in p?p[d[k]]:p.other}};
(window.blockly = window.blockly || {}).locale = {
"and":function(d){return "和"},
"booleanTrue":function(d){return "真"},
"booleanFalse":function(d){return "错"},
"blocks":function(d){return "模块"},
"blocklyMessage":function(d){return "布洛克里"},
"catActions":function(d){return "操作"},
"catColour":function(d){return "颜色"},
"catLogic":function(d){return "逻辑"},
"catLists":function(d){return "列表"},
"catLoops":function(d){return "循环"},
"catMath":function(d){return "数学"},
"catProcedures":function(d){return "函数"},
"catText":function(d){return "文本"},
"catVariables":function(d){return "变量"},
"clearPuzzle":function(d){return "重新开始"},
"clearPuzzleConfirm":function(d){return "你将重设这个猜谜至初始状态，并且删除所有你已经增加或更改的模块。"},
"clearPuzzleConfirmHeader":function(d){return "你确定要重新开始吗？"},
"codeMode":function(d){return "代码"},
"codeTooltip":function(d){return "请参见所生成的 JavaScript 代码。"},
"continue":function(d){return "继续"},
"designMode":function(d){return "设计"},
"designModeHeader":function(d){return "设计模式"},
"dialogCancel":function(d){return "取消"},
"dialogOK":function(d){return "确定"},
"directionNorthLetter":function(d){return "北"},
"directionSouthLetter":function(d){return "南"},
"directionEastLetter":function(d){return "东"},
"directionWestLetter":function(d){return "西"},
"dropletBlock_addOperator_description":function(d){return "添加两个数字"},
"dropletBlock_addOperator_signatureOverride":function(d){return "Add operator"},
"dropletBlock_andOperator_description":function(d){return "仅当两个表达式同时为真返回结果为真，否则返回假"},
"dropletBlock_andOperator_signatureOverride":function(d){return "AND布尔运算符"},
"dropletBlock_arcLeft_description":function(d){return "Move the turtle in a counterclockwise arc using the specified number of degrees and radius"},
"dropletBlock_arcLeft_param0":function(d){return "angle"},
"dropletBlock_arcLeft_param1":function(d){return "半径"},
"dropletBlock_arcRight_description":function(d){return "Move the turtle in a clockwise arc using the specified number of degrees and radius"},
"dropletBlock_arcRight_param0":function(d){return "angle"},
"dropletBlock_arcRight_param1":function(d){return "半径"},
"dropletBlock_assign_x_description":function(d){return "Reassign a variable"},
"dropletBlock_assign_x_signatureOverride":function(d){return "Assign a variable"},
"dropletBlock_button_description":function(d){return "Create a button and assign it an element id"},
"dropletBlock_button_param0":function(d){return "buttonId"},
"dropletBlock_button_param1":function(d){return "文本"},
"dropletBlock_callMyFunction_description":function(d){return "调用一个已经命名的不带参数的函数"},
"dropletBlock_callMyFunction_signatureOverride":function(d){return "调用函数"},
"dropletBlock_callMyFunction_n_description":function(d){return "寻找一个已经命名的需要一个或一个以上参数的函数"},
"dropletBlock_callMyFunction_n_signatureOverride":function(d){return "调用带参数的函数"},
"dropletBlock_changeScore_description":function(d){return "添加或移走一个得分点。"},
"dropletBlock_checkbox_description":function(d){return "创建一个复选框，并将它分配元素 id"},
"dropletBlock_checkbox_param0":function(d){return "checkboxId"},
"dropletBlock_checkbox_param1":function(d){return "checked"},
"dropletBlock_circle_description":function(d){return "以(x,y)为圆心，以指定长度为半径，在当前画布上画一个圆"},
"dropletBlock_circle_param0":function(d){return "中心X"},
"dropletBlock_circle_param1":function(d){return "中心Y"},
"dropletBlock_circle_param2":function(d){return "半径"},
"dropletBlock_clearCanvas_description":function(d){return "清除活动在画布上的所有数据"},
"dropletBlock_clearInterval_description":function(d){return "通过setInterval()的返回值清零一个存在的内在时钟"},
"dropletBlock_clearInterval_param0":function(d){return "interval"},
"dropletBlock_clearTimeout_description":function(d){return "通过setTimeout()的返回值清零一个timer"},
"dropletBlock_clearTimeout_param0":function(d){return "timeout"},
"dropletBlock_console.log_description":function(d){return "在操作界面显示字符串或者变量"},
"dropletBlock_console.log_param0":function(d){return "消息"},
"dropletBlock_container_description":function(d){return "给每个id创建一个container,并且选择性的设置内在的HTML"},
"dropletBlock_createCanvas_description":function(d){return "给每个id创建一个canvas,并且选择性的设置宽和高"},
"dropletBlock_createCanvas_param0":function(d){return "canvas的ID"},
"dropletBlock_createCanvas_param1":function(d){return "宽度"},
"dropletBlock_createCanvas_param2":function(d){return "高度"},
"dropletBlock_createRecord_description":function(d){return "Creates a new record in the specified table."},
"dropletBlock_createRecord_param0":function(d){return "表名"},
"dropletBlock_createRecord_param1":function(d){return "记录"},
"dropletBlock_createRecord_param2":function(d){return "onSuccess"},
"dropletBlock_declareAssign_x_array_1_4_description":function(d){return "Create a variable and initialize it as an array"},
"dropletBlock_declareAssign_x_array_1_4_signatureOverride":function(d){return "Declare a variable assigned to an array"},
"dropletBlock_declareAssign_x_description":function(d){return "声明一个具体的变量时，需要在它前面加var ，并在它的右侧赋值。"},
"dropletBlock_declareAssign_x_signatureOverride":function(d){return "声明一个变量"},
"dropletBlock_declareAssign_x_prompt_description":function(d){return "Create a variable and assign it a value by displaying a prompt"},
"dropletBlock_declareAssign_x_prompt_signatureOverride":function(d){return "Prompt the user for a value and store it"},
"dropletBlock_deleteElement_description":function(d){return "删除有特定id的元素"},
"dropletBlock_deleteElement_param0":function(d){return "id"},
"dropletBlock_deleteRecord_description":function(d){return "Deletes a record, identified by record.id."},
"dropletBlock_deleteRecord_param0":function(d){return "表名"},
"dropletBlock_deleteRecord_param1":function(d){return "记录"},
"dropletBlock_deleteRecord_param2":function(d){return "onSuccess"},
"dropletBlock_divideOperator_description":function(d){return "两个数相除"},
"dropletBlock_divideOperator_signatureOverride":function(d){return "Divide operator"},
"dropletBlock_dot_description":function(d){return "Draw a dot in the turtle's location with the specified radius"},
"dropletBlock_dot_param0":function(d){return "半径"},
"dropletBlock_drawImage_description":function(d){return "Draw an image on the active  canvas with the specified image element and x, y as the top left coordinates"},
"dropletBlock_drawImage_param0":function(d){return "id"},
"dropletBlock_drawImage_param1":function(d){return "x"},
"dropletBlock_drawImage_param2":function(d){return "y"},
"dropletBlock_drawImage_param3":function(d){return "宽度"},
"dropletBlock_drawImage_param4":function(d){return "高度"},
"dropletBlock_dropdown_description":function(d){return "Create a dropdown, assign it an element id, and populate it with a list of items"},
"dropletBlock_dropdown_signatureOverride":function(d){return "dropdown(dropdownID, option1, option2, ..., optionX)"},
"dropletBlock_equalityOperator_description":function(d){return "Test for equality"},
"dropletBlock_equalityOperator_signatureOverride":function(d){return "Equality operator"},
"dropletBlock_forLoop_i_0_4_description":function(d){return "Do something multiple times"},
"dropletBlock_forLoop_i_0_4_signatureOverride":function(d){return "for 循环"},
"dropletBlock_functionParams_n_description":function(d){return "Create a function with an argument"},
"dropletBlock_functionParams_n_signatureOverride":function(d){return "Function with a Parameter"},
"dropletBlock_functionParams_none_description":function(d){return "Create a function without an argument"},
"dropletBlock_functionParams_none_signatureOverride":function(d){return "定义一个函数"},
"dropletBlock_getAlpha_description":function(d){return "Gets the alpha"},
"dropletBlock_getAlpha_param0":function(d){return "图像数据"},
"dropletBlock_getAlpha_param1":function(d){return "x"},
"dropletBlock_getAlpha_param2":function(d){return "y"},
"dropletBlock_getAttribute_description":function(d){return "获取给定的属性"},
"dropletBlock_getBlue_description":function(d){return "Gets the given blue value"},
"dropletBlock_getBlue_param0":function(d){return "图像数据"},
"dropletBlock_getBlue_param1":function(d){return "x"},
"dropletBlock_getBlue_param2":function(d){return "y"},
"dropletBlock_getChecked_description":function(d){return "Get the state of a checkbox or radio button"},
"dropletBlock_getChecked_param0":function(d){return "id"},
"dropletBlock_getDirection_description":function(d){return "Get the turtle's direction (0 degrees is pointing up)"},
"dropletBlock_getGreen_description":function(d){return "Gets the given green value"},
"dropletBlock_getGreen_param0":function(d){return "图像数据"},
"dropletBlock_getGreen_param1":function(d){return "x"},
"dropletBlock_getGreen_param2":function(d){return "y"},
"dropletBlock_getImageData_description":function(d){return "Get the ImageData for a rectangle (x, y, width, height) within the active  canvas"},
"dropletBlock_getImageData_param0":function(d){return "startX"},
"dropletBlock_getImageData_param1":function(d){return "startY"},
"dropletBlock_getImageData_param2":function(d){return "endX"},
"dropletBlock_getImageData_param3":function(d){return "endY"},
"dropletBlock_getImageURL_description":function(d){return "Get the URL associated with an image or image upload button"},
"dropletBlock_getImageURL_param0":function(d){return "imageID"},
"dropletBlock_getKeyValue_description":function(d){return "Reads the value associated with the key from the remote data store."},
"dropletBlock_getKeyValue_param0":function(d){return "值"},
"dropletBlock_getKeyValue_param1":function(d){return "callbackFunction"},
"dropletBlock_getRed_description":function(d){return "Gets the given red value"},
"dropletBlock_getRed_param0":function(d){return "图像数据"},
"dropletBlock_getRed_param1":function(d){return "x"},
"dropletBlock_getRed_param2":function(d){return "y"},
"dropletBlock_getText_description":function(d){return "从指定元素获取文本"},
"dropletBlock_getText_param0":function(d){return "id"},
"dropletBlock_getTime_description":function(d){return "Get the current time in milliseconds"},
"dropletBlock_getUserId_description":function(d){return "Gets a unique identifier for the current user of this app."},
"dropletBlock_getX_description":function(d){return "Get the turtle's x position"},
"dropletBlock_getXPosition_description":function(d){return "获取此元素的 x 位置"},
"dropletBlock_getXPosition_param0":function(d){return "id"},
"dropletBlock_getY_description":function(d){return "Get the turtle's y position"},
"dropletBlock_getYPosition_description":function(d){return "获取此元素的 y 位置"},
"dropletBlock_getYPosition_param0":function(d){return "id"},
"dropletBlock_greaterThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_greaterThanOperator_signatureOverride":function(d){return "Greater than operator"},
"dropletBlock_hide_description":function(d){return "将海龟隐藏起来，它就不会显示在屏幕上"},
"dropletBlock_hideElement_description":function(d){return "Hide the element with the specified id"},
"dropletBlock_hideElement_param0":function(d){return "id"},
"dropletBlock_ifBlock_description":function(d){return "Do something only if a condition is true"},
"dropletBlock_ifBlock_signatureOverride":function(d){return "如果语句"},
"dropletBlock_ifElseBlock_description":function(d){return "Do something if a condition is true, otherwise do something else"},
"dropletBlock_ifElseBlock_signatureOverride":function(d){return "如果/或者 语句"},
"dropletBlock_image_description":function(d){return "Create an image and assign it an element id"},
"dropletBlock_image_param0":function(d){return "id"},
"dropletBlock_image_param1":function(d){return "网址"},
"dropletBlock_imageUploadButton_description":function(d){return "Create an image upload button and assign it an element id"},
"dropletBlock_inequalityOperator_description":function(d){return "Test for inequality"},
"dropletBlock_inequalityOperator_signatureOverride":function(d){return "Inequality operator"},
"dropletBlock_innerHTML_description":function(d){return "Set the inner HTML for the element with the specified id"},
"dropletBlock_lessThanOperator_description":function(d){return "Compare two numbers"},
"dropletBlock_lessThanOperator_signatureOverride":function(d){return "Less than operator"},
"dropletBlock_line_description":function(d){return "Draw a line on the active canvas from x1, y1 to x2, y2"},
"dropletBlock_line_param0":function(d){return "x 1"},
"dropletBlock_line_param1":function(d){return "y1"},
"dropletBlock_line_param2":function(d){return "x 2"},
"dropletBlock_line_param3":function(d){return "y2"},
"dropletBlock_mathAbs_description":function(d){return "Absolute value"},
"dropletBlock_mathAbs_signatureOverride":function(d){return "Math.abs(x)"},
"dropletBlock_mathMax_description":function(d){return "Maximum value"},
"dropletBlock_mathMax_signatureOverride":function(d){return "Math.max (n1、 n2，......，nX)"},
"dropletBlock_mathMin_description":function(d){return "Minimum value"},
"dropletBlock_mathMin_signatureOverride":function(d){return "Math.min (n1、 n2，......，nX)"},
"dropletBlock_mathRound_description":function(d){return "Round to the nearest integer"},
"dropletBlock_mathRound_signatureOverride":function(d){return "Math.round(x)"},
"dropletBlock_move_description":function(d){return "Move the turtle by the specified x and y coordinates"},
"dropletBlock_move_param0":function(d){return "x"},
"dropletBlock_move_param1":function(d){return "y"},
"dropletBlock_moveBackward_description":function(d){return "Move the turtle backward the specified distance"},
"dropletBlock_moveBackward_param0":function(d){return "像素"},
"dropletBlock_moveForward_description":function(d){return "Move the turtle forward the specified distance"},
"dropletBlock_moveForward_param0":function(d){return "像素"},
"dropletBlock_moveTo_description":function(d){return "Move the turtle to the specified x and y coordinates"},
"dropletBlock_moveTo_param0":function(d){return "x"},
"dropletBlock_moveTo_param1":function(d){return "y"},
"dropletBlock_multiplyOperator_description":function(d){return "将两个数字相乘"},
"dropletBlock_multiplyOperator_signatureOverride":function(d){return "Multiply operator"},
"dropletBlock_notOperator_description":function(d){return "Logical NOT of a boolean"},
"dropletBlock_notOperator_signatureOverride":function(d){return "AND boolean operator"},
"dropletBlock_onEvent_description":function(d){return "Execute code in response to the specified event."},
"dropletBlock_onEvent_param0":function(d){return "id"},
"dropletBlock_onEvent_param1":function(d){return "事件"},
"dropletBlock_onEvent_param2":function(d){return "function"},
"dropletBlock_orOperator_description":function(d){return "Logical OR of two booleans"},
"dropletBlock_orOperator_signatureOverride":function(d){return "或布尔运算符"},
"dropletBlock_penColor_description":function(d){return "设置乌龟移动时留下的线条颜色。"},
"dropletBlock_penColor_param0":function(d){return "颜色"},
"dropletBlock_penColour_description":function(d){return "设置乌龟移动时留下的线条颜色。"},
"dropletBlock_penColour_param0":function(d){return "颜色"},
"dropletBlock_penDown_description":function(d){return "Set down the turtle's pen"},
"dropletBlock_penUp_description":function(d){return "Pick up the turtle's pen"},
"dropletBlock_penWidth_description":function(d){return "Set the turtle to the specified pen width"},
"dropletBlock_penWidth_param0":function(d){return "宽度"},
"dropletBlock_playSound_description":function(d){return "Play the MP3, OGG, or WAV sound file from the specified URL"},
"dropletBlock_playSound_param0":function(d){return "网址"},
"dropletBlock_putImageData_description":function(d){return "Set the ImageData for a rectangle within the active  canvas with x, y as the top left coordinates"},
"dropletBlock_putImageData_param0":function(d){return "图像数据"},
"dropletBlock_putImageData_param1":function(d){return "startX"},
"dropletBlock_putImageData_param2":function(d){return "startY"},
"dropletBlock_radioButton_description":function(d){return "Create a radio button and assign it an element id"},
"dropletBlock_radioButton_param0":function(d){return "id"},
"dropletBlock_radioButton_param1":function(d){return "checked"},
"dropletBlock_radioButton_param2":function(d){return "group"},
"dropletBlock_randomNumber_max_description":function(d){return "Get a random number between 0 and the specified maximum value"},
"dropletBlock_randomNumber_max_signatureOverride":function(d){return "randomNumber(max)"},
"dropletBlock_randomNumber_min_max_description":function(d){return "Get a random number between the specified minimum and maximum values"},
"dropletBlock_randomNumber_min_max_signatureOverride":function(d){return "randomNumber(min, max)"},
"dropletBlock_readRecords_description":function(d){return "Reads all records whose properties match those on the searchParams object."},
"dropletBlock_readRecords_param0":function(d){return "表名"},
"dropletBlock_readRecords_param1":function(d){return "searchParams"},
"dropletBlock_readRecords_param2":function(d){return "onSuccess"},
"dropletBlock_rect_description":function(d){return "Draw a rectangle on the active  canvas with x, y, width, and height coordinates"},
"dropletBlock_rect_param0":function(d){return "upperLeftX"},
"dropletBlock_rect_param1":function(d){return "upperLeftY"},
"dropletBlock_rect_param2":function(d){return "宽度"},
"dropletBlock_rect_param3":function(d){return "高度"},
"dropletBlock_return_description":function(d){return "Return a value from a function"},
"dropletBlock_return_signatureOverride":function(d){return "返回"},
"dropletBlock_setActiveCanvas_description":function(d){return "Set the canvas id for subsequent canvas commands (only needed when there are multiple canvas elements)"},
"dropletBlock_setActiveCanvas_param0":function(d){return "canvas的ID"},
"dropletBlock_setAlpha_description":function(d){return "Sets the given value"},
"dropletBlock_setAlpha_param0":function(d){return "图像数据"},
"dropletBlock_setAlpha_param1":function(d){return "x"},
"dropletBlock_setAlpha_param2":function(d){return "y"},
"dropletBlock_setAlpha_param3":function(d){return "alphaValue"},
"dropletBlock_setAttribute_description":function(d){return "设为给定的值"},
"dropletBlock_setBackground_description":function(d){return "设置背景图案"},
"dropletBlock_setBlue_description":function(d){return "Sets the given value"},
"dropletBlock_setBlue_param0":function(d){return "图像数据"},
"dropletBlock_setBlue_param1":function(d){return "x"},
"dropletBlock_setBlue_param2":function(d){return "y"},
"dropletBlock_setBlue_param3":function(d){return "蓝色值"},
"dropletBlock_setChecked_description":function(d){return "Set the state of a checkbox or radio button"},
"dropletBlock_setChecked_param0":function(d){return "id"},
"dropletBlock_setChecked_param1":function(d){return "checked"},
"dropletBlock_setFillColor_description":function(d){return "Set the fill color for the active  canvas"},
"dropletBlock_setFillColor_param0":function(d){return "颜色"},
"dropletBlock_setGreen_description":function(d){return "Sets the given value"},
"dropletBlock_setGreen_param0":function(d){return "图像数据"},
"dropletBlock_setGreen_param1":function(d){return "x"},
"dropletBlock_setGreen_param2":function(d){return "y"},
"dropletBlock_setGreen_param3":function(d){return "绿色值"},
"dropletBlock_setImageURL_description":function(d){return "Set the URL for the specified image element id"},
"dropletBlock_setImageURL_param0":function(d){return "id"},
"dropletBlock_setImageURL_param1":function(d){return "网址"},
"dropletBlock_setInterval_description":function(d){return "Continue to execute code each time the specified number of milliseconds has elapsed"},
"dropletBlock_setInterval_param0":function(d){return "callbackFunction"},
"dropletBlock_setInterval_param1":function(d){return "毫秒"},
"dropletBlock_setKeyValue_description":function(d){return "Saves the value associated with the key to the remote data store."},
"dropletBlock_setKeyValue_param0":function(d){return "值"},
"dropletBlock_setKeyValue_param1":function(d){return "值"},
"dropletBlock_setKeyValue_param2":function(d){return "callbackFunction"},
"dropletBlock_setParent_description":function(d){return "Set an element to become a child of a parent element"},
"dropletBlock_setPosition_description":function(d){return "Position an element with x, y, width, and height coordinates"},
"dropletBlock_setPosition_param0":function(d){return "id"},
"dropletBlock_setPosition_param1":function(d){return "x"},
"dropletBlock_setPosition_param2":function(d){return "y"},
"dropletBlock_setPosition_param3":function(d){return "宽度"},
"dropletBlock_setPosition_param4":function(d){return "高度"},
"dropletBlock_setRed_description":function(d){return "Sets the given value"},
"dropletBlock_setRed_param0":function(d){return "图像数据"},
"dropletBlock_setRed_param1":function(d){return "x"},
"dropletBlock_setRed_param2":function(d){return "y"},
"dropletBlock_setRed_param3":function(d){return "红色值"},
"dropletBlock_setRGB_description":function(d){return "Sets the RGB color values (ranging from 0 to 255) of the pixel located at the given x and y position in the given image data to the input red, green, blue amounts"},
"dropletBlock_setRGB_param0":function(d){return "图像数据"},
"dropletBlock_setRGB_param1":function(d){return "x"},
"dropletBlock_setRGB_param2":function(d){return "y"},
"dropletBlock_setRGB_param3":function(d){return "红色"},
"dropletBlock_setRGB_param4":function(d){return "绿色"},
"dropletBlock_setRGB_param5":function(d){return "蓝色"},
"dropletBlock_setStrokeColor_description":function(d){return "Set the stroke color for the active  canvas"},
"dropletBlock_setStrokeColor_param0":function(d){return "颜色"},
"dropletBlock_setSprite_description":function(d){return "设置小人形象"},
"dropletBlock_setSpriteEmotion_description":function(d){return "设置演员心情"},
"dropletBlock_setSpritePosition_description":function(d){return "立即将小人移动到指定的位置。"},
"dropletBlock_setSpriteSpeed_description":function(d){return "设置小人的速度"},
"dropletBlock_setStrokeWidth_description":function(d){return "Set the line width for the active  canvas"},
"dropletBlock_setStrokeWidth_param0":function(d){return "宽度"},
"dropletBlock_setStyle_description":function(d){return "Add CSS style text to an element"},
"dropletBlock_setText_description":function(d){return "Set the text for the specified element"},
"dropletBlock_setText_param0":function(d){return "id"},
"dropletBlock_setText_param1":function(d){return "文本"},
"dropletBlock_setTimeout_description":function(d){return "Set a timer and execute code when that number of milliseconds has elapsed"},
"dropletBlock_setTimeout_param0":function(d){return "function"},
"dropletBlock_setTimeout_param1":function(d){return "毫秒"},
"dropletBlock_show_description":function(d){return "Show the turtle image at its current location"},
"dropletBlock_showElement_description":function(d){return "Show the element with the specified id"},
"dropletBlock_showElement_param0":function(d){return "id"},
"dropletBlock_speed_description":function(d){return "Change the execution speed of the program to the specified percentage value"},
"dropletBlock_speed_param0":function(d){return "值"},
"dropletBlock_startWebRequest_description":function(d){return "Request data from the internet and execute code when the request is complete"},
"dropletBlock_startWebRequest_param0":function(d){return "网址"},
"dropletBlock_startWebRequest_param1":function(d){return "function"},
"dropletBlock_subtractOperator_description":function(d){return "两个数字相减"},
"dropletBlock_subtractOperator_signatureOverride":function(d){return "Subtract operator"},
"dropletBlock_textInput_description":function(d){return "Create a text input and assign it an element id"},
"dropletBlock_textInput_param0":function(d){return "inputId"},
"dropletBlock_textInput_param1":function(d){return "文本"},
"dropletBlock_textLabel_description":function(d){return "Create a text label, assign it an element id, and bind it to an associated element"},
"dropletBlock_textLabel_param0":function(d){return "labelId"},
"dropletBlock_textLabel_param1":function(d){return "文本"},
"dropletBlock_textLabel_param2":function(d){return "forId"},
"dropletBlock_throw_description":function(d){return "从特定的演员抛出一个抛出物"},
"dropletBlock_turnLeft_description":function(d){return "Turn the turtle counterclockwise by the specified number of degrees"},
"dropletBlock_turnLeft_param0":function(d){return "angle"},
"dropletBlock_turnRight_description":function(d){return "Turn the turtle clockwise by the specified number of degrees"},
"dropletBlock_turnRight_param0":function(d){return "angle"},
"dropletBlock_turnTo_description":function(d){return "Turn the turtle to the specified direction (0 degrees is pointing up)"},
"dropletBlock_turnTo_param0":function(d){return "angle"},
"dropletBlock_updateRecord_description":function(d){return "Updates a record, identified by record.id."},
"dropletBlock_updateRecord_param0":function(d){return "表名"},
"dropletBlock_updateRecord_param1":function(d){return "记录"},
"dropletBlock_updateRecord_param2":function(d){return "callbackFunction"},
"dropletBlock_vanish_description":function(d){return "使演员消失"},
"dropletBlock_whileBlock_description":function(d){return "Repeat something while a condition is true"},
"dropletBlock_whileBlock_signatureOverride":function(d){return "while 循环"},
"dropletBlock_write_description":function(d){return "Create a block of text"},
"dropletBlock_write_param0":function(d){return "文本"},
"end":function(d){return "结束"},
"emptyBlocksErrorMsg":function(d){return "“Repeat”或“If”模块需要其他的模块充填在里面才能工作。请确保在容器模块里填入了合适的模块。"},
"emptyFunctionalBlock":function(d){return "你有一个未填入数据的块。"},
"emptyFunctionBlocksErrorMsg":function(d){return "这个函数块，需要有其他块在里面才能工作"},
"errorEmptyFunctionBlockModal":function(d){return "你的函数定义内需要有区块. 按一下\"编辑\"并拖动区块到绿色区块内部."},
"errorIncompleteBlockInFunction":function(d){return "按一下\"编辑\"来确保你的函式定义中没有缺少任何区块."},
"errorParamInputUnattached":function(d){return "记住要将区块附加到你工作空间内的函数块的每个参数输入上."},
"errorUnusedParam":function(d){return "你加了一个参数块，但没有在定义中使用它. 确保通过按“编辑”来使用你的参数块并把参数块放在绿色区块内."},
"errorRequiredParamsMissing":function(d){return "通過按“編輯來給你的函數創建一個參數, 並添加必要的參數. 把新的参数块拖动到你的函数定义内."},
"errorUnusedFunction":function(d){return "你创建一个函数，但从来没有使用它在你的工作空间! 按一下工具箱中的“函数”，并确保你在程序中使用它."},
"errorQuestionMarksInNumberField":function(d){return "尝试把\"???\"更换成一个值."},
"extraTopBlocks":function(d){return "你有一些未连接上的模块。你是否要把这些模块连接在“运行”模块上？"},
"extraTopBlocksWhenRun":function(d){return "You have unattached blocks. Did you mean to attach these to the \"when run\" block?"},
"finalStage":function(d){return "祝贺你 ！您已完成最后一章。"},
"finalStageTrophies":function(d){return "祝贺你 ！已完成最终章并赢得了 "+locale.p(d,"numTrophies",0,"zh",{"one":"1个奖杯","other":locale.n(d,"numTrophies")+" 奖杯"})+"。"},
"finish":function(d){return "完成"},
"generatedCodeInfo":function(d){return "即使是顶级的大学教授基于块的编码(如。"+locale.v(d,"berkeleyLink")+","+locale.v(d,"harvardLink")+")。但是,你组装的模块也可以显示在JavaScript中,世界上最广泛使用的编程语言:\n"},
"hashError":function(d){return "对不起，'%1' 并不对应任何已保存的程序。"},
"help":function(d){return "帮助"},
"hintTitle":function(d){return "提示："},
"jump":function(d){return "跳转"},
"keepPlaying":function(d){return "继续玩"},
"levelIncompleteError":function(d){return "你虽然把所有必要的模块都用上了，但是使用方法不对。"},
"listVariable":function(d){return "列表"},
"makeYourOwnFlappy":function(d){return "制作你自己的Flappy游戏吧"},
"missingBlocksErrorMsg":function(d){return "尝试下面一个或多个模块来解开这个谜题。"},
"nextLevel":function(d){return "祝贺你 ！完成了谜题 "+locale.v(d,"puzzleNumber")+"。"},
"nextLevelTrophies":function(d){return "祝贺你 ！完成了谜题 "+locale.v(d,"puzzleNumber")+"，并且赢得了"+locale.p(d,"numTrophies",0,"zh",{"one":"1个奖杯","other":locale.n(d,"numTrophies")+" 奖杯"})+"."},
"nextPuzzle":function(d){return "Next Puzzle"},
"nextStage":function(d){return "祝贺你 ！您完成了 "+locale.v(d,"stageName")+"。"},
"nextStageTrophies":function(d){return "祝贺你 ！您完成 "+locale.v(d,"stageName")+"，赢取了 "+locale.p(d,"numTrophies",0,"zh",{"one":"一个奖杯","other":locale.n(d,"numTrophies")+" 很多奖杯"})+"。"},
"numBlocksNeeded":function(d){return "祝贺你 ！完成了谜题 "+locale.v(d,"puzzleNumber")+"。(然而，你其实可以只使用"+locale.p(d,"numBlocks",0,"zh",{"one":"1个模块","other":locale.n(d,"numBlocks")+" 模块"})+"。)"},
"numLinesOfCodeWritten":function(d){return "你刚刚写了"+locale.p(d,"numLines",0,"zh",{"one":"1行","other":locale.n(d,"numLines")+" 行"})+" 的代码 ！"},
"play":function(d){return "玩"},
"print":function(d){return "打印"},
"puzzleTitle":function(d){return "第"+locale.v(d,"stage_total")+"章的谜题 "+locale.v(d,"puzzle_number")+" "},
"repeat":function(d){return "重复"},
"resetProgram":function(d){return "重置"},
"runProgram":function(d){return "运行"},
"runTooltip":function(d){return "运行你在工作区里由各种模块组装出的程序。"},
"score":function(d){return "得分"},
"showCodeHeader":function(d){return "显示代码"},
"showBlocksHeader":function(d){return "显示区块"},
"showGeneratedCode":function(d){return "显示代码"},
"stringEquals":function(d){return "字符串 = ？"},
"subtitle":function(d){return "一个可视化的编程环境"},
"textVariable":function(d){return "文本"},
"tooFewBlocksMsg":function(d){return "您正在使用所有必要类型的模块，但请尝试更多这些类型的模块来完成这个谜题。"},
"tooManyBlocksMsg":function(d){return "可以使用 < x id = 'START_SPAN' / > < x id = 'END_SPAN' / > 模块来解决这个谜题。"},
"tooMuchWork":function(d){return "你让我多做很多工作 ！你可以尝试少重复几次吗？"},
"toolboxHeader":function(d){return "块"},
"toolboxHeaderDroplet":function(d){return "Toolbox"},
"hideToolbox":function(d){return "(Hide)"},
"showToolbox":function(d){return "Show Toolbox"},
"openWorkspace":function(d){return "它是如何工作的？"},
"totalNumLinesOfCodeWritten":function(d){return "全程统计： "+locale.p(d,"numLines",0,"zh",{"one":"1 行","other":locale.n(d,"numLines")+" 行"})+"代码。"},
"tryAgain":function(d){return "再次尝试"},
"hintRequest":function(d){return "看提示"},
"backToPreviousLevel":function(d){return "返回到上一级"},
"saveToGallery":function(d){return "保存到画廊"},
"savedToGallery":function(d){return "已保存在画廊內!"},
"shareFailure":function(d){return "对不起，我们无法分享这程序。"},
"workspaceHeaderShort":function(d){return "工作区域"},
"infinity":function(d){return "无限"},
"rotateText":function(d){return "旋转您的设备。"},
"orientationLock":function(d){return "关闭设置中的旋转锁定。"},
"wantToLearn":function(d){return "想要学习如何写代码吗？"},
"watchVideo":function(d){return "观看视频"},
"when":function(d){return "当"},
"whenRun":function(d){return "当运行时"},
"tryHOC":function(d){return "来试试”编程一小时“项目！"},
"signup":function(d){return "注册账号后参加简介课程"},
"hintHeader":function(d){return "这里有一个提示："},
"genericFeedback":function(d){return "看你的程序时如何结束的，并尝试修复你的程序"},
"toggleBlocksErrorMsg":function(d){return "在作为一个程序块之前，您需要更正程序中的错误。"},
"defaultTwitterText":function(d){return "看看我做了什么"}};