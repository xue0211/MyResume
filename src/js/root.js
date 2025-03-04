
const app = new Vue({
    data: {
        displayresume: {
            info: {
                name: '余韵之',
                job: '前端工程师',
                school: '南京工业大学',
                telephone: '18964022629',
                email: 'zx2723708118@163.com',
                wechat: 'lambert1129',
                age: '25',
            },
          
            projects: [
                {
                    name: '《flurryUI》(基于Vue3)',
                    useSkill: 'Vue3.js、Vue Router、Vue CLI、Vite、TypeScript、SASS、MVVM、Prism.js、响应式布局 、Git管理',
                    imgLink: './img/flurryUI.jpg',
                    sourceLink: 'https://github.com/xue0211/flurryUI',
                    previewLink: 'https://xue0211.github.io/flurry-ui/',
                    describe: '本项目使用Vite搭建官网，通过Vue3、Vue Router、TypeScript等技术栈完成了Switch、Button、Dialog、Tabs组件的设计与实现，并在官网中撰写了文档。'
                },
                {
                    name:'《sleetUI》(基于Vue2)',
                    useSkill:'Vue2.js、Vue Router、JavaScript、SCSS、Event Bus、MVVM、响应式布局、Parcel、Chai、VuePress',
                    imgLink:'./img/sleetUI.jpg',
                    sourceLink:'https://github.com/xue0211/gulu-demo',
                    previewLink:'',
                    describe:'本项目使用VuePress搭建官网，通过Vue2、Vue Router、JavaScript等技术栈完成了Button、Collapse、Grid、Input、Layout、Popover、Tabs、Toast组件的设计与实现，借助Event Bus进行组件通信，通过Chai进行断言测试。'
                },
                {
                    name:'《CNode社区》(基于Vue2)',
                    useSkill:'Vue2.js、Vue Router、Vue CLI、Axios、jQuery、localStorage、filter、JavaScript、CSS、MVVM、响应式布局、Parcel',
                    imgLink:'./img/CNode.jpg',
                    sourceLink:'https://github.com/xue0211/CNode',
                    previewLink:'https://xue0211.github.io/CNode/cnode-project/dist/index.html#/',
                    describe:'本项目使用Vue CLI搭建官网，v-bind 动态绑定样式，Vue Router进行前端路由的切换及传参。引入Axios获取数据，运用filter对数据实现过滤处理，computed属性完成数据筛选，localStorage 技术存储数据。使用jQuery实现Pagination组件功能， 。'
                },
                {
                    name:'《画一只皮卡丘》',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面 、CSS',
                    imgLink:'./img/Pikachu.jpg',
                    sourceLink:'https://github.com/xue0211/Pikachu-2.0',
                    previewLink:'https://xue0211.github.io/Pikachu-2.0/index.html',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出皮卡丘的过程。用css3实现动画的效果，prism.js实现代码高亮的效果，rem实现响应式布局。'
                },
                {
                    name:'《Canvas画板》',
                    useSkill:'原生JavaScript、Canvas、移动端、SVG、特性检测',
                    imgLink:'./img/Canvas.jpg',
                    sourceLink:'https://github.com/xue0211/canvas',
                    previewLink:'https://xue0211.github.io/canvas/index.html',
                    describe:'本项目使用原生JS实现，主要调用 Canvas API，实现了线粗、调色、橡皮擦、一键删除、保存等功能。其中，context.clearRect()实现了橡皮檫和清屏的功能，className切换实现了笔的线粗、颜色切换的功能，用meta:vp、特性检测、ontouch事件实现了触屏设备与web端兼容。'
                }, 


            ],
            skills: [
                {
                    name:'HTML 5',
                    describe:'能够根据HTML5标准书写结构良好，并且符合语义化的html代码。如标签<header>、<main>、<section>、<footer> 等'
                },  
                {
                    name:'DIV+CSS布局与居中',
                    describe:'能够使用flex、float+清除浮动布局，能够用多种方式进行水平居中、垂直居中。'
                },   
                {
                    name:'Canvas、SVG',
                    describe:'能够使用Canvas的部分API进行画图，并用Canvas做了《Canvas画板》。了解Canvas与SVG的区别。'
                }, 
                {
                    name:'原生JavaScript',
                    describe:'能够使用原生JS进行 DOM 元素的操作，事件的监听等。用原生JS做了《自定义导航网页》。'
                }, 
                {
                    name:'响应式布局、移动端适配',
                    describe:'能够使用meta:viewport、媒体查询、动态rem、vw/vh进行响应式布局，用媒体查询做了该简历，用rem做了《我是一只大白》。'
                },  
                {
                    name:'jQuery',
                    describe:'能够使用 jQuery 进行 DOM 操作，使用常见的API完成需求。'
                },    
                {
                    name:'Vue.js',
                    describe:'能够使用Vue.js完成需求，了解Vue.js的数据双向绑定、父子兄弟组件间的通信原理，能够使用Vue-Router制作前端路由，能够使用keep-alive进行缓存。'
                }, 
                {
                    name:'MVC、Observer设计模式',
                    describe:'了解 MVC、Observer 设计模式，能够运用到实际的开发中。'
                }, 
                {
                    name:'new、this、闭包、原型链、作用域',
                    describe:'了解 new 的过程，了解 this、闭包、原型链、作用域的基本概念，并能够熟练使用，写了相应博客。'
                },    
                {
                    name:'继承',
                    describe:'了解 ES5 中原型链继承和 ES6 中 class 继承的方法。'
                }, 
                {
                    name:'DOM事件模型、事件委托',
                    describe:'了解 DOM 事件模型，捕获、冒泡、处理三个阶段以及如何阻止事件的传递，并做了一个按钮 demo 。'
                },   
                {
                    name:'命令行',
                    describe:'了解命令行，能够使用命令行进行常用的操作。'
                },    
                {
                    name:'HTTP',
                    describe:'了解 HTTP 基础知识，了解常见状态码含义，能够根据请求查看响应。'
                }, 
                {
                    name:'JSONP',
                    describe:'了解JSONP的概念，并写了相应的博客。'
                },    
                {
                    name:'AJAX、Promise',
                    describe:'了解AJAX、promise 的概念，并写了相应的博客。'
                }, 
                {
                    name:'Cookie和Session',
                    describe:'了解客户端缓存、Cookie、session 等知识，并写了相应博客。'
                },    
                {
                    name:'LocalStorage、Cache-Control、Etag',
                    describe:'了解 LocalStorage、Cache-Control、Etag、Expires 等知识，了解几者之间的区别，并写了相应博客。'
                }, 
                {
                    name:'Web性能优化',
                    describe:'了解常见的web性能优化方案，并写了相应的博客。'
                },    
                {
                    name:'同源策略、跨域',
                    describe:'了解同源策略，以及常用的跨域方法。'
                }, 
            ],
            statement:{
                content:''
            },
            social:{
                github:'',
                zhihu:'',
                wexin:'余韵之',
            }
        },
        line: {
            information:'信息 / INFORMATION',
            projects:'作品 / PROJECT',
            skills:'技能 / SKILLS',
            stateself:'经历 / EXPERIENCE',
            
        },
    },

}).$mount('#app')