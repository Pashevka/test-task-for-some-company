document.addEventListener("DOMContentLoaded", PageLoad);


function GetType(value) {
    if (isNumber(value)) return "number";
    if (isString(value)) return "string";
    if (isBoolean(value)) return "boolean";
    if (isUndefined(value)) return "undefined";
    if (isNull(value)) return "null";
    if (isFunction(value)) return "function";
    if (isArray(value)) return "array";
    if (isObject(value)) return "object";
    return "array-like"

}

function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
}

function isFunction(value) {
    return typeof value === 'function';
}

function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}


function sequenceFizzBuzz(start, step) {
    if (!check2(start) || !check2(step)) {
        return null;
    }
    if (step == 0) step = 1;
    start = parseInt(start);
    step = parseInt(step);
    if (check(start) && check(step))
        var a = function() {
            var out = "";
            if (9007199254740990 <= start) {
                alert("This is a completely different story")
                return null;
            }
            if (start == 0) {
                start += step;
                return 0;
            }
            if (start % 3 == 0 && start % 5 == 0) {
                out = "FizzBuzz";
            } else if (start % 3 == 0) {
                out = "Fizz";
            } else if (start % 5 == 0) {
                out = "Buzz";
            } else {
                out = start;
            }
            start += step;
            return out;
        }
    else {
        return null;
    }

    return a;
}

function ExecuteTests() {
    // TestPack1();
    // 
    console.log("test1");
    var testFunc = sequenceFizzBuzz(0, 0);
    Equals(testFunc, 0);
    Equals(testFunc, 1);
    Equals(testFunc, 2);
    Equals(testFunc, "Fizz");

    console.log("test 2");
    testFunc = sequenceFizzBuzz(1, 0);
    Equals(testFunc, 1);
    Equals(testFunc, 2);
    Equals(testFunc, "Fizz");


    console.log("test3");
    testFunc = sequenceFizzBuzz(3, 6);
    Equals(testFunc, "Fizz");
    Equals(testFunc, "Fizz");
    Equals(testFunc, "FizzBuzz");
    Equals(testFunc, "Fizz");
    Equals(testFunc, 'Fizz');

    console.log("test4");
    testFunc = sequenceFizzBuzz("", "");
    Equals(testFunc, null);
    Equals(testFunc, null);
    Equals(testFunc, null);

    console.log("test5");
    testFunc = sequenceFizzBuzz(null, null);
    Equals(testFunc, null);
    Equals(testFunc, null);
    Equals(testFunc, null);
    
    console.log("test6");
    testFunc = sequenceFizzBuzz(Infinity, Infinity);
    Equals(testFunc, null);
    Equals(testFunc, null);
    Equals(testFunc, null);

    console.log("test7");
    testFunc = sequenceFizzBuzz([1,2,3], [2,3,4]);
    Equals(testFunc, null);
    Equals(testFunc, null);
    Equals(testFunc, null);
    

}


function Equals(func, res) {
    try {
        if (func == null && res == null) {
            console.log("Тест. Результат ОК")
            return;
        } else if (func == null && res != null) {
            console.log("Тест. Результат ОШБИКА")
            return;
        }
        if (func() == res)
            console.log("Тест. Результат ОК")
        else
            console.log("Тест. Результат ОШБИКА")
    } catch (e) {
        console.log("Тест. Результат ОШБИКА")

    }

}




// function TestPack1() {
//     Test__p1_0__p2_0();
//     Test__p1_0__p2_1();
//     Test__p1_3__p2_4();
//     Test__p1_0__p2_1__6times()
//     Test__p1_3__p2_2__7times()
//     Test__p1_3__p2_4__2times();
//     Test__p1_3__p2_4__201times();
//     Test__p1_String__p2_String2();
//     Test__p1_quotes__p2_quotes();
//     Test__p1_null__p2_null()
//     Test__p1_Infinity__p2_Infinity()
//     Test__p1_func__p2_func()
//     Test__mas_func__pmas_func()
//     Test__mas_12312313123123123123__pmas_123123123123123123__2times()
// }

// function Test__p1_0__p2_0() {
//     TestTemplate(0, 0, 0, 1);
// }

// function Test__p1_0__p2_1() {
//     TestTemplate(0, 1, 0, 1);
// }

// function Test__p1_3__p2_4() {
//     TestTemplate(3, 4, "Fizz", 1);
// }

// function Test__p1_0__p2_1__6times() {
//     TestTemplate(0, 1, "Buzz", 6);
// }

// function Test__p1_3__p2_2__7times() {
//     TestTemplate(3, 2, "FizzBuzz", 7);
// }

// function Test__p1_3__p2_4__2times() {
//     TestTemplate(3, 4, 7, 2);
// }

// function Test__p1_3__p2_4__201times() {
//     TestTemplate(3, 4, 803, 201);
// }

// function Test__p1_String__p2_String2() {
//     TestTemplate("String", "String2", null, 1);
// }

// function Test__p1_quotes__p2_quotes() {
//     TestTemplate("", "", null, 1);
// }

// function Test__p1_null__p2_null() {
//     TestTemplate(null, null, null, 1);
// }

// function Test__p1_Infinity__p2_Infinity() {
//     TestTemplate(Infinity, Infinity, null, 1);
// }

// function Test__p1_func__p2_func() {
//     var a = function test1() {

//     }
//     var b = function test2() {

//     }
//     TestTemplate(a, b, null, 1);
// }

// function Test__mas_func__pmas_func() {
//     var a = [1, 2];
//     var b = [3, 4];
//     TestTemplate(a, b, null, 1);
// }

// function Test__mas_12312313123123123123__pmas_123123123123123123__2times() {
//     TestTemplate(12312313123123123123, 123123123123123123, null, 2);
// }




// function TestTemplate(p1, p2, res, count) {
//     try {
//         var testFunc = sequenceFizzBuzz(p1, p2);
//         if (testFunc == null && res == null) {
//             if (typeof p1 == "function") p1 = "tempFunction1";
//             if (typeof p2 == "function") p2 = "tempFunction2";

//             if (typeof p1 == "object") p1 = "tempObject1";
//             if (typeof p2 == "object") p2 = "tempObject2";


//             console.log("Тест(Test__p1_" + p1 + "__p2_" + p2 + "__" + count + "times). Результат ОК")
//             return;
//         } else if (testFunc == null && res != null) {
//             console.log("Тест(Test__p1_" + p1 + "__p2_" + p2 + "__" + count + "times). Результат ОШБИКА")
//             return;
//         }
//         for (let i = 1; i < count; i++) {
//             testFunc();
//         }
//         if (testFunc() == res)
//             console.log("Тест(Test__p1_" + p1 + "__p2_" + p2 + "__" + count + "times). Результат ОК")
//         else
//             console.log("Тест(Test__p1_" + p1 + "__p2_" + p2 + "__" + count + "times). Результат ОШБИКА")
//     } catch (e) {
//         console.log("Тест(Test__p1_" + p1 + "__p2_" + p2 + "__" + count + "times). Результат ОШБИКА")

//     }

// }


function check2(value) {
    if (/[^[0-9]/.test(value)) {
        return false;
    } else {
        return true;
    };
}

function GetMode() {
    var a = document.getElementById("mode").innerHTML;
    if (a == "1" || a == "2" || a == "3") {
        return a;
    }
    location.reload();
}

function SetMode(value) {
    if (document.getElementById("mode") != undefined) {
        document.getElementById("mode").innerHTML = value;
        return;
    }

    location.reload();
}

function check(value) {
    return (value instanceof Number || typeof value === 'number') && !isNaN(value);
}

function GetSection(id, start, step) {
    var outHTML = '<section id="' + id + '">'
    outHTML += '<div class="section__header">'
    outHTML += '                <span class="section__start info">'
    outHTML += '                    ' + start + ''
    outHTML += '                </span>'
    outHTML += '                <span class="section__step info">'
    outHTML += '                    ' + step + ''
    outHTML += '                </span>'
    outHTML += '               </div>'
    outHTML += '               <div class="section__content">'
    outHTML += '                   <div id="FBOut" class="f__b__out">'
    outHTML += '                      ' + start + ''
    outHTML += '                   </div>'
    outHTML += '                   <div id="FBBtnNext" class="f__b__btn btn btnNext">Next</div>'
    outHTML += '                   <div id="FBBtnNext" class="f__b__btn btn btnDelete">Delete</div>'
    outHTML += '               </div>'
    outHTML += '           </section>'
    return outHTML;
}

function PageLoad() {
    ExecuteTests();
    addListenerToConfirm();
    addListenerToArrows();
    addListenerToGetType();
    addElemsToTable();
}

function addListenerToConfirm() {
    document.getElementById("btnConfirm").addEventListener("click", function() {
        var start = document.getElementById("iStart").value;
        var step = document.getElementById("iStep").value;
        if (start == "") {
            start = 0
            document.getElementById("iStart").value = 0;
        };
        if (step == "") {
            step = 1
            document.getElementById("iStep").value = 1;
        };
        var id = new Date().getTime()
        var code = 'func' + id + ' = sequenceFizzBuzz(start, step);'
        eval(code);
        if (eval('func' + id) == null) return;
        eval('func' + id + '()')
        document.getElementsByClassName("sections__container")[0].insertAdjacentHTML('beforeend', GetSection(id, start, step));
        // console.log(id);
        document.getElementById(id).getElementsByClassName("f__b__out")[0].innerHTML = start;
        document.getElementById(id).getElementsByClassName("btnNext")[0].addEventListener("click", function() {
            // console.log(this.parentNode.getElementsByClassName("f__b__out")[0]);
            var number = eval('func' + id + '()');
            if (number != null) {
                this.parentNode.getElementsByClassName("f__b__out")[0].innerHTML = number;

            }
        })
        document.getElementById(id).getElementsByClassName("btnDelete")[0].addEventListener("click", function() {
            this.parentNode.parentNode.parentNode.removeChild(document.getElementById(id));
        })
    })
}

function addListenerToArrows() {
    var larrow = document.getElementById("left_arrow");
    var rarrow = document.getElementById("right_arrow");
    larrow.addEventListener("click", function() {

        var mode = GetMode();
        if (mode == "1") return
        moveAllToRight(mode);
        SetMode((parseInt(mode) - 1).toString());
    })
    rarrow.addEventListener("click", function() {

        var mode = GetMode();
        if (mode == "3") return
        moveAllToLeft(mode);
        SetMode((parseInt(mode) + 1).toString());
    })

}

function moveAllToLeft(mode) {
    if (mode == "1") {
        var e1 = document.getElementsByClassName("pos2")[0];
        var e2 = document.getElementsByClassName("pos3")[0];
        var e3 = document.getElementsByClassName("pos4")[0];
        e1.classList.remove("pos2")
        e2.classList.remove("pos3")
        e3.classList.remove("pos4")
        e1.classList.add('pos1');
        e2.classList.add('pos2');
        e3.classList.add('pos3');
        return
    }
    if (mode == "2") {
        var e1 = document.getElementsByClassName("pos1")[0];
        var e2 = document.getElementsByClassName("pos2")[0];
        var e3 = document.getElementsByClassName("pos3")[0];
        e1.classList.remove("pos1");
        e2.classList.remove("pos2");
        e3.classList.remove("pos3");
        e1.classList.add('pos0');
        e2.classList.add('pos1');
        e3.classList.add('pos2');
        return
    }


}

function moveAllToRight(mode) {
    if (mode == "2") {
        var e1 = document.getElementsByClassName("pos1")[0];
        var e2 = document.getElementsByClassName("pos2")[0];
        var e3 = document.getElementsByClassName("pos3")[0];
        e1.classList.remove("pos1")
        e2.classList.remove("pos2")
        e3.classList.remove("pos3")
        e1.classList.add('pos2');
        e2.classList.add('pos3');
        e3.classList.add('pos4');
        return
    }
    if (mode == "3") {
        var e1 = document.getElementsByClassName("pos0")[0];
        var e2 = document.getElementsByClassName("pos1")[0];
        var e3 = document.getElementsByClassName("pos2")[0];
        e1.classList.remove("pos0");
        e2.classList.remove("pos1");
        e3.classList.remove("pos2");
        e1.classList.add('pos1');
        e2.classList.add('pos2');
        e3.classList.add('pos3');
        return
    }
}

function addListenerToGetType() {
    document.getElementById("getType").addEventListener("click", function() {
        var code = document.getElementsByTagName("textarea")[0].value;

        try {
            eval("var a = " + code)
            alert(GetType(a))
        } catch (e) {
            // console.log(e);
            alert("Определите переменную в поле для ввода");
        }
    })

}

function getClearCode(string) {
    return string.replace(/>/g, "&gt").replace(/</g, "&lt");
}

function addElemsToTable() {
    var outherHTML = "";
    for (var i = 0; i < document.all.length; i++) {
        outherHTML += '<div class="item">'
        outherHTML += '         <div class="elem">NodeName: ' + document.all[i].nodeName + ', ID: ' + document.all[i].id + ', classList: ' + document.all[i].className + '</div>'
        outherHTML += '         <input class="cb" index="' + i + '" onclick="setPopup(event)" type="checkbox">'
        outherHTML += '         <span class="redCB"> Выделить элемент</span>'
        outherHTML += '         <input class="cb" index="' + i + '" onclick="setRed(event)"  type="checkbox">'
        outherHTML += '     </div>'

    }
    document.getElementsByClassName("table")[0].innerHTML = outherHTML;
}

function setPopup(event) {
    // console.log("Spp");

    if (event.target.checked) {
        MakePopupWork(document.all[event.target.attributes[1].value], "on");

    } else {
        MakePopupWork(document.all[event.target.attributes[1].value], "off");

    }

    event.stopPropagation()

}

function MakePopupWork(elem, state) {
    // console.log("Mpw");

    if (state == "on") {
        if (elem.localName == "textarea" || elem.localName == "input") {
            listenerToInputs(elem, "on");
        } else
            elem.addEventListener("click", TogglePopup, true)
    } else {
        if (elem.localName == "textarea" || elem.localName == "input") {
            listenerToInputs(elem, "off");
        } else
            elem.removeEventListener("click", TogglePopup, true)
    }

}

function TogglePopup() {
    document.getElementsByClassName("popup")[0].classList.toggle("popup__hidden");

}

function listenerToInputs(elem, state) {
    if (state == "on") {
        elem.addEventListener("focus", TogglePopup, true)
        elem.addEventListener("blur", TogglePopup, true)
    } else {
        elem.removeEventListener("focus", TogglePopup, true)
        elem.removeEventListener("blur", TogglePopup, true)
    }
}


function setRed(event) {
    if (event.target.checked) {
        document.all[event.target.attributes[1].value].classList.add("red");

    } else {
        document.all[event.target.attributes[1].value].classList.remove("red");

    }
}