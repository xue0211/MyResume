
const app = new Vue({
    data: {
        displayresume: {
            info: {
                name: '钟雪',
                job: '前端工程师',
                school: '南京工业大学 本科',
                telephone: '17714428531',
                email: 'zx2723708118@163.com',
                wechat: '17714428531',
                age: '22',
            },
          
            projects: [
                {
                    name: '《flurryUI》(基于Vue3)',
                    useSkill: 'Vue3.js、vue-router、vue-cli、Vite、TypeScript、SASS、MVVM、Prism.js、响应式布局 、Git管理',
                    imgLink: './img/flurryUI.jpg',
                    sourceLink: 'https://github.com/xue0211/flurryUI',
                    previewLink: 'https://xue0211.github.io/flurry-ui/',
                    describe: '使用Vite搭建官网、vue-router进行路由切换、TypeScript编写脚本、SASS调整页面样式、Prism.js实现语法高亮。完成了Switch、Button、Dialog、Tabs组件的设计与实现，并在官网中撰写了文档。'
                },
                {
                    name:'《sleetUI》(基于Vue2)',
                    useSkill:'Vue2.js、vue-router、JavaScript、SCSS、EventBus、MVVM、响应式布局、Parcel、Chai、VuePress',
                    imgLink:'./img/sleetUI.jpg',
                    sourceLink:'https://github.com/xue0211/gulu-demo',
                    previewLink:'./img/sleetUI预览.png',
                    describe:'使用VuePress搭建官网、vue-router进行路由切换、TypeScript编写脚本、SCSS调整页面样式、EventBus进行组件间解耦通信和状态管理、Parcel打包、Chai进行断言测试。完成了Button、Collapse、Grid、Input、Layout、Popover、Tabs、Toast组件的设计与实现。'
                },
                {
                    name:'《Vue2搭建CNode社区》',
                    useSkill:'Vue2.js、vue-router、vue-cli、Axios、jQuery、localStorage、filter、组件化、MVVM、响应式布局、Parcel',
                    imgLink:'./img/CNode.jpg',
                    sourceLink:'https://github.com/xue0211/CNode',
                    previewLink:'https://xue0211.github.io/CNode/cnode-project/dist/index.html#/',
                    describe:'使用vue-cli作为脚手架、v-bind 动态绑定样式、vue-router进行前端路由的切换及传参、watch监听路由的变化。使用axios获取数据、filter对数据进行过滤、computed完成数据筛选、localStorage存储数据。'
                },
                {
                    name:'《画一只皮卡丘》',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面 、CSS',
                    imgLink:'./img/Pikachu.jpg',
                    sourceLink:'https://github.com/xue0211/Pikachu-2.0',
                    previewLink:'https://xue0211.github.io/Pikachu-2.0/index.html',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出皮卡丘的过程。用css3实现动画效果，prism.js实现代码高亮，rem实现响应式布局。'
                },
                {
                    name:'《Canvas画板》',
                    useSkill:'原生JavaScript、Canvas、移动端、SVG、特性检测',
                    imgLink:'./img/Canvas.jpg',
                    sourceLink:'https://github.com/xue0211/canvas',
                    previewLink:'https://xue0211.github.io/canvas/index.html',
                    describe:'本项目使用原生JS实现，主要调用 Canvas API，实现了线粗、调色、橡皮擦、一键删除、保存等功能。其中，context.clearRect()方法实现了橡皮檫和清屏的功能，className切换实现了笔的线粗、颜色切换的功能，用meta:vp、特性检测、ontouch事件实现了触屏设备与web端兼容。'
                }, 


            ],
            skills: [
                {
                    name:'Vue3.js',
                    describe:'能够使用Vue3.js完成相关需求，vue-cli、vue-router、axios、vuex、组件通信、数据绑定等。'
                }, 
                {
                    name:'HTML 5',
                    describe:'能够根据HTML5标准书写结构良好，并且符合语义化的html代码。如标签<header>、<main>、<section>、<footer> 等'
                },  
                {
                    name:'CSS3布局与居中',
                    describe:'能够使用grid、flex、float+清除浮动布局，能够用多种方式进行水平居中、垂直居中，并写了相关博客。'
                },
                {
                    name:'原生JavaScript',
                    describe:'能够使用原生JS进行 DOM 元素的操作，事件的监听等。用原生JS做了一个《自定义导航网页》。'
                },    
                {
                    name:'Canvas',
                    describe:'能够使用Canvas的部分API进行画图，并用Canvas做了《Canvas画板》。'
                }, 
             
                {
                    name:'响应式布局、移动端适配',
                    describe:'能够使用meta:viewport、媒体查询、动态rem、vw/vh进行响应式布局，并写了相应博客，用媒体查询做了本简历。'
                },  
                {
                    name:'jQuery',
                    describe:'能够使用 jQuery 进行 DOM 操作，使用常见的API完成需求。用jQuery做过《轮播》和CNode社区项目中的Pagination组件。'
                },
                {
                    name:'webpack',
                    describe:'了解webpack基础操作，能够安装webpack及配置相关loader,如bable-loader、sass-loader、postcss-loader。'
                },
                {
                    name:'Git版本管理工具',
                    describe:'了解git，能够使用git的命令行进行代码版本的管理，用GitHub进行代码托管。'
                }, 
                {
                    name:'MVC、Observer、MVVM设计模式',
                    describe:'了解 MVC、Observer、MVVM 设计模式，能够运用到实际的开发中。'
                }, 
                {
                    name:'new、this、闭包、原型链、作用域',
                    describe:'了解 new 的过程，了解 this、闭包、原型链、作用域的基本概念，并能够熟练使用。'
                },    
                {
                    name:'继承',
                    describe:'了解 ES5 中原型链继承和 ES6 中 class 继承的方法。'
                }, 
                {
                    name:'DOM事件模型、事件委托',
                    describe:'了解 DOM 事件模型，捕获、冒泡、处理三个阶段以及如何阻止事件的传递，并写了相关博客。'
                },
                {
                    name:'AJAX、Promise',
                    describe:'了解AJAX、promise 的概念，写了相关博客，并能够自己写出带有promise的AJAX请求。'
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
                    name:'Cookie和Session',
                    describe:'了解客户端缓存、Cookie、session 等知识，并写了相关博客。'
                },    
                {
                    name:'LocalStorage、Cache-Control、Etag',
                    describe:'了解 LocalStorage、Cache-Control、Etag、Expires 等知识，了解其中的区别。'
                }, 
                {
                    name:'Web性能优化',
                    describe:'了解常见的web性能优化方案。'
                },   
                {
                    name:'同源策略、跨域',
                    describe:'了解同源策略，以及常用的跨域方法，比如JSONP、CORS、postMessage。'
                }, 
            
            ],
            statement:{
                content:'我是一名本科应届毕业生。大一因VBA课程对编程产生了浓厚兴趣。大二开始修读计算机科学与技术专业的第二学历，在课程中接触到了前端开发。至今，已经自学前端开发两年，热爱写代码，享受解决bug的过程，目前掌握Vue3、HTML5、CSS3、JavaScript，jQuery等技术，能胜任开发工作。'
            },
        },
        line: {
            information:'信息 / INFORMATION',
            projects:'作品 / PROJECTS',
            skills:'技能 / SKILLS',
            stateself:'经历 / EXPERIENCE'
            
        },
    },

}).$mount('#app')