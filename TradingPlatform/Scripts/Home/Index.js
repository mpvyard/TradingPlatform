﻿//$(function () {
//    var tableObject = $('#orderBookList'); //获取id为tableSort的table对象
//    var tbHead = tableObject.children('thead'); //获取table对象下的thead
//    var tbHeadTh = tbHead.find('tr th'); //获取thead下的tr下的th
//    var tbBody = tableObject.children('tbody'); //获取table对象下的tbody
//    var tbBodyTr = tbBody.find('tr'); //获取tbody下的tr

//    var sortIndex = -1;

//    tbHeadTh.each(function () {//遍历thead的tr下的th
//        var thisIndex = tbHeadTh.index($(this)); //获取th所在的列号
//        //给表态th增加鼠标位于上方时发生的事件
//        $(this).mouseover(function () {
//            tbBodyTr.each(function () {//编列tbody下的tr
//                var tds = $(this).find("td"); //获取列号为参数index的td对象集合
//                $(tds[thisIndex]).addClass("hover");//给列号为参数index的td对象添加样式
//            });
//        }).mouseout(function () {//给表头th增加鼠标离开时的事件
//            tbBodyTr.each(function () {
//                var tds = $(this).find("td");
//                $(tds[thisIndex]).removeClass("hover");//鼠标离开时移除td对象上的样式
//            });
//        });

//        $(this).click(function () {//给当前表头th增加点击事件
//            var dataType = $(this).attr("type");//点击时获取当前th的type属性值
//            checkColumnValue(thisIndex, dataType);
//        });
//    });

//    $("tbody tr").removeClass(); //先移除tbody下tr的所有css类
//    //table中tbody中tr鼠标位于上面时添加颜色,离开时移除颜色
//    $("tbody tr").mouseover(function () {
//        $(this).addClass("hover");
//    }).mouseout(function () {
//        $(this).removeClass("hover");
//    });

//    //对表格排序
//    function checkColumnValue(index, type) {
//        var trsValue = new Array();

//        tbBodyTr.each(function () {
//            var tds = $(this).find('td');
//            //获取行号为index列的某一行的单元格内容与该单元格所在行的行内容添加到数组trsValue中
//            trsValue.push(type + ".separator" + $(tds[index]).html() + ".separator" + $(this).html());
//            $(this).html("");
//        });

//        var len = trsValue.length;

//        if (index == sortIndex) {
//            //如果已经排序了则直接倒序
//            trsValue.reverse();
//        } else {
//            for (var i = 0; i < len; i++) {
//                //split() 方法用于把一个字符串分割成字符串数组
//                //获取每行分割后数组的第一个值,即此列的数组类型,定义了字符串\数字\Ip
//                type = trsValue[i].split(".separator")[0];
//                for (var j = i + 1; j < len; j++) {
//                    //获取每行分割后数组的第二个值,即文本值
//                    value1 = trsValue[i].split(".separator")[1];
//                    //获取下一行分割后数组的第二个值,即文本值
//                    value2 = trsValue[j].split(".separator")[1];
//                    //接下来是数字\字符串等的比较
//                    if (type == "number") {
//                        value1 = value1 == "" ? 0 : value1;
//                        value2 = value2 == "" ? 0 : value2;
//                        if (parseFloat(value1) > parseFloat(value2)) {
//                            var temp = trsValue[j];
//                            trsValue[j] = trsValue[i];
//                            trsValue[i] = temp;
//                        }
//                    } else if (type == "ip") {
//                        if (ip2int(value1) > ip2int(value2)) {
//                            var temp = trsValue[j];
//                            trsValue[j] = trsValue[i];
//                            trsValue[i] = temp;
//                        }
//                    } else {
//                        if (value1.localeCompare(value2) > 0) {//该方法不兼容谷歌浏览器
//                            var temp = trsValue[j];
//                            trsValue[j] = trsValue[i];
//                            trsValue[i] = temp;
//                        }
//                    }
//                }
//            }
//        }

//        for (var i = 0; i < len; i++) {
//            $("tbody tr:eq(" + i + ")").html(trsValue[i].split(".separator")[2]);
//        }

//        sortIndex = index;
//    }

//    //IP转成整型
//    function ip2int(ip) {
//        var num = 0;
//        ip = ip.split(".");
//        num = Number(ip[0]) * 256 * 256 * 256 + Number(ip[1]) * 256 * 256 + Number(ip[2]) * 256 + Number(ip[3]);
//        return num;
//    }

//})

var choice;
$("#strage").change(function () {
    choice = $(this).val();
    if (choice == 1 || choice == 2) {
        $('#price').attr("disabled", true);
    } else {
        $('#price').attr("disabled", false);
    }
});


//验证表单输入
$(document).ready(function () {
    $("#qtyError").hide();
    $("#priceError").hide();

    $("#formSubmit").click(function () {
        var ok1 = false;
        var ok2 = false;

        var $val = $("#qty").val();
        var $val2 = $("#price").val();
        var code1;
        var code2;
        for (var i = 0; i < $val.length; i++) {
            //charAt()获取指定位置字符串,charCodeAt()返回该字符串的编码
            //0的ASCII是48,9的ASCII是57
            var code1 = $val.charAt(i).charCodeAt(0);
            if (code1 < 48 || code1 > 57) {
                $("#qtyError").show();
                ok1 = false;
                break;
            }
            else {
                $("#qtyError").hide();
                ok1 = true;
            }
        }

        if (choice == "1" || choice == "2") {
            ok2 = true;
        } else {
            var dotNum = 0;
            for (var i = 0; i < $val2.length; i++) {
                //charAt()获取指定位置字符串,charCodeAt()返回该字符串的编码
                //0的ASCII是48,9的ASCII是57
                var code2 = $val2.charAt(i).charCodeAt(0);
                if (code2 < 48 || code2 > 57) {
                    if (code2 = 46) {
                        if (i == 0 || i == $val2.length - 1) {
                            $("#priceError").show();
                            ok2 = false;
                            break;
                        } else {
                            dotNum++;
                        }
                        if (dotNum > 1) {
                            $("#priceError").show();
                            ok2 = false;
                            break;
                        }
                    } else {
                        $("#priceError").show();
                        ok2 = false;
                        break;
                    }

                }
                else {
                    $("#priceError").hide();
                    ok2 = true;
                }
            }
        }

        if (ok1 == true && ok2 == true) {
            return $('#order').submit();
        } else {
            return false;
        }
    });
});
