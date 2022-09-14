const {getChildren} = require("./vuepress-sidebar-auto");
let sidebar={};
/**
 * */
sidebar={//左侧列表
        '/posts/': [
            {
                title: '博客',
                collapsable: false,//来让一个组永远都是展开状态
                sidebarDepth: 2,
                children: getChildren('2022/202209','网址收藏')
            }
        ],
        '/': [''] //不能放在数组第一个，否则会导致右侧栏无法使用
    };
module.exports = sidebar;