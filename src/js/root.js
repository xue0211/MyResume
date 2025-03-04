
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
                    name: 'flurryUI(基于Vue3)',
                    useSkill: 'Vue3.js、Vue Router、Vue CLI、Vite、TypeScript、SASS、MVVM、Prism.js、响应式布局 、Git管理',
                    imgLink: './img/flurryUI.jpg',
                    sourceLink: 'https://github.com/xue0211/flurryUI',
                    previewLink: 'https://xue0211.github.io/flurry-ui/',
                    describe: '本项目使用Vite搭建官网，通过Vue3、Vue Router、TypeScript等技术栈完成了Switch、Button、Dialog、Tabs组件的设计与实现，并在官网中撰写了文档。'
                },
                {
                    name:'sleetUI(基于Vue2)',
                    useSkill:'Vue2.js、Vue Router、JavaScript、SCSS、Event Bus、MVVM、响应式布局、Parcel、Chai、VuePress',
                    imgLink:'./img/sleetUI.jpg',
                    sourceLink:'https://github.com/xue0211/gulu-demo',
                    previewLink:'',
                    describe:'本项目使用VuePress搭建官网，通过Vue2、Vue Router、JavaScript等技术栈完成了Button、Collapse、Grid、Input、Layout、Popover、Tabs、Toast组件的设计与实现，借助Event Bus进行组件通信，通过Chai进行断言测试。'
                },
                {
                    name:'CNode社区(基于Vue2)',
                    useSkill:'Vue2.js、Vue Router、Vue CLI、Axios、jQuery、localStorage、filter、JavaScript、CSS、MVVM、响应式布局、Parcel',
                    imgLink:'./img/CNode.jpg',
                    sourceLink:'https://github.com/xue0211/CNode',
                    previewLink:'https://xue0211.github.io/CNode/cnode-project/dist/index.html#/',
                    describe:'本项目使用Vue CLI搭建官网，v-bind 动态绑定样式，Vue Router进行前端路由的切换及传参。引入Axios获取数据，运用filter对数据实现过滤处理，computed属性完成数据筛选，localStorage 技术存储数据。使用jQuery实现Pagination组件功能， 。'
                },
                {
                    name:'画一只皮卡丘',
                    useSkill:'JavaScript、jQuery、Prism.js、Rem响应式页面 、CSS',
                    imgLink:'./img/Pikachu.jpg',
                    sourceLink:'https://github.com/xue0211/Pikachu-2.0',
                    previewLink:'https://xue0211.github.io/Pikachu-2.0/index.html',
                    describe:'动态向<style>标签和<pre>标签添加文本，绘制出皮卡丘的过程。用css3实现动画的效果，prism.js实现代码高亮的效果，rem实现响应式布局。'
                },
                {
                    name:'Canvas画板',
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
                    describe:'根据 HTML5 标准编写具有语义化的文档结构，包括 <nav>、<header>、<main>、<section>、<article>、<aside>、<footer> 等'
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
            social:'社交 / SOCIAL INTERNET'
        },
    },

}).$mount('#app')