
// 1.4 换行
// 好的做法： 在运算符后换行，第二行追加两个缩进
callAFunction (document, element, window, "some string value", true, 123,
        navigator);

// 不好的做法：第二行只有一个缩进
callAFunction (document, element, window, "some string value", true, 123,
    navigator);

// 不好的做法：在运算符之前换行（ASI 在某些场景下会自动加入分号）
callAFunction (document, element, window, "some string value", true, 123
    , navigator);

// 1.5 空行
// 不好的代码
if (wl && wl.length) {
    for(i = 0, l = wl.length; i < 1; ++1){
        p = wl[i];
        type = Y.Lang.type(r[p]);
        if (screen.hasOwnProperty(p)) {
            if (merge && type === 'object') {
                Y.mix(r[p], s[p]);
            } else if (ov || !(p in r) ) {
                r[p] = s[p];
            }
        }
    }
}

// 好的代码
if (wl && wl.length) {

    for(i = 0, l = wl.length; i < 1; ++1) {
        p = wl[i];
        type = Y.Lang.type(r[p]);

        if (screen.hasOwnProperty(p)) {
                
            if (merge && type === 'object') {
                Y.mix(r[p], s[p]);
            } else if (ov || !(p in r) ) {
                r[p] = s[p];
            }
        }
    }
}

// 3.3.2 case的连续执行.eg 
switch (condition) {
    case 1:
    case 2:
        doSth1
        break;
    
    case 3:
        doSth2
    
    // fall through 注释 
    default:
        doSth3
    // 作者倾向于
}

// 4.2 函数声明 不要在块内
if (condition) {
    function A () {
        alert('A')
    }
} else {
    function A () {
        alert('B')
    }
}

// 6.3.2 AMD eg.
// 可以匿名 模块加载器将js文件名当做模块名称 （例如RequireJs）
define('name', [
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
});

// 6.4 零全局变量
(function(win){
    const doc = win.document
    // 
    // do sth
})(window)

// 7.1 典型用法
function handleClick(event) {
    const popup = document.getElementById('popup')
    popup.style.left = event.clientX + 'px'
    popup.style.top = event.clientY + 'px'
    popup.className = 'reveal' 
}
addEventListener(element, 'click', handleClick)

// 隔离应用逻辑
const aApplication = {
    handleClick: (event) => {
        this.showPopup(event)
    },

    showPopup: (event) => {
        const popup = document.getElementById('popup')
        popup.style.left = event.clientX + 'px'
        popup.style.top = event.clientY + 'px'
        popup.className = 'reveal' 
    }
}

addEventListener(element, 'click', event => aApplication.handleClick(event))

// 不要分发事件对象
const aApplication = {
    handleClick: (event) => {
        this.showPopup(event.clientX, event.clientY)
    },

    showPopup: (x, y) => {
        const popup = document.getElementById('popup')
        popup.style.left = x + 'px'
        popup.style.top = y + 'px'
        popup.className = 'reveal' 
    }
}

addEventListener(element, 'click', event => aApplication.handleClick(event))

// 最好事件处理程序成为接触到 event 对象的唯一函数。事件处理程序应当在进入应用逻辑之前针对 event 对象执行任何必要的操作，包括阻止默认时间或者阻止事件冒泡，都应当直接在事件处理程序中
const aApplication = {
    handleClick: (event) => {
        event.preventDefault();
        event.stopProgagation();

        // 传入应用逻辑
        this.showPopup(event.clientX, event.clientY)
    },

    showPopup: (x, y) => {
        const popup = document.getElementById('popup')
        popup.style.left = x + 'px'
        popup.style.top = y + 'px'
        popup.className = 'reveal' 
    }
}

addEventListener(element, 'click', event => aApplication.handleClick(event))

// 8.2 检测引用值 
// 不仅检测构造这个对象的构造器，还检测原型链
const now = new Date()
console.log(now instanceof Object) 
//  true
console.log(now instanceof Date) 
//  true
// 自定义类型的检测
function Person(name) {
    this.name = name
}

const me = new Person('Tony')
console.log(me instanceof Object) 
//  true
console.log(me instanceof Person) 
//  true

// 8.2.2 检测数组
// 鸭式辨型
isSort
function isArray(value) {
    return typeof value.sort === 'function'
}

// 
function isArray(value) {
    if (typeof Array.isArray === 'function') {
        return Array.isArray(value)
    } else {
        return Object.prototype.toString.call(value) === '[obejct Array]'
    }
}
    





