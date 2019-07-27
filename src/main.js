// 这是main.js 是我们项目的JS入口文件

//1.导入jquery  (from是es6导入模块的方式.)
import $ from 'jquery';//相当于 const $ = require('jquery');

//使用 import 语法,导入css样式.
//注意: webpack默认只能打包处理js类型文件,无法处理其它非js类型的文件,如果要处理,我们需要手动安装一些合适的三方 loader 加载器.
//      如果需要打包处理css文件,需要安装2个加载器: npm style-loader css-loader -D
import './css/index.css';
import './css/index.less';
import './css/index.scss';
//如果要通过路径的形式,去引入node_modules 中相关的文件,可以直接省略路径前面的node_modules这一层目录,直接写名的名称,然后 后面跟上具休的文件路径.
import 'bootstrap/dist/css/bootstrap.css';//不写node_modules也行.


$(function(){
    $('li:odd').css('backgroundColor','green');
    $('li:even').css('backgroundColor',function(){return '#ccc';});
});

class Person{
    static info = {id:1, name:'huodeming'};
    a = 10;
}
let p = new Person();
console.log(Person.info);
console.log(p.a);
