"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3738],{89790:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var r=i(74848),t=i(28453);const s={title:"\u7f51\u7edc\u4f18\u5316",sidebar_position:2},d="\u7f51\u7edc\u4f18\u5316",l={id:"maintenance/optimize/parameter-adjustment/networkoptimize",title:"\u7f51\u7edc\u4f18\u5316",description:"\u7f51\u7edc\u4f18\u5316\u4e3b\u8981\u76ee\u7684\u662f\u89e3\u51b3\u670d\u52a1\u5668\u4e0a\u884c\u5e26\u5bbd\u5360\u7528\u5bfc\u81f4\u7684\u73a9\u5bb6 Ping\uff08\u5373\u7f51\u7edc\u5ef6\u8fdf\uff09\u8fc7\u9ad8\u5bfc\u81f4\u7684\u7cdf\u7cd5\u6e38\u620f\u4f53\u9a8c\u3002",source:"@site/docs/maintenance/optimize/parameter-adjustment/networkoptimize.md",sourceDirName:"maintenance/optimize/parameter-adjustment",slug:"/maintenance/optimize/parameter-adjustment/networkoptimize",permalink:"/NitWikit/maintenance/optimize/parameter-adjustment/networkoptimize",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/maintenance/optimize/parameter-adjustment/networkoptimize.md",tags:[],version:"current",lastUpdatedBy:"lilingfengdev",lastUpdatedAt:1719229018e3,sidebarPosition:2,frontMatter:{title:"\u7f51\u7edc\u4f18\u5316",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/NitWikit/maintenance/optimize/parameter-adjustment/performance-optimization"},next:{title:"\u6742\u9879\u4f18\u5316",permalink:"/NitWikit/maintenance/optimize/parameter-adjustment/misc"}},c={},a=[{value:"\u6570\u636e\u5305\u538b\u7f29",id:"\u6570\u636e\u5305\u538b\u7f29",level:2},{value:"\u6389\u7ebf\u4f18\u5316",id:"\u6389\u7ebf\u4f18\u5316",level:2},{value:"\u964d\u4f4e\u670d\u52a1\u5668\u89c6\u91ce\u8ddd\u79bb",id:"\u964d\u4f4e\u670d\u52a1\u5668\u89c6\u91ce\u8ddd\u79bb",level:2},{value:"\u624b\u52a8\u8c03\u6574",id:"\u624b\u52a8\u8c03\u6574",level:3},{value:"\u81ea\u52a8\u8c03\u6574",id:"\u81ea\u52a8\u8c03\u6574",level:3},{value:"\u964d\u4f4e\u533a\u5757\u52a0\u8f7d\u901f\u5ea6",id:"\u964d\u4f4e\u533a\u5757\u52a0\u8f7d\u901f\u5ea6",level:2},{value:"\u63a7\u5236\u5b9e\u4f53\u6570\u91cf",id:"\u63a7\u5236\u5b9e\u4f53\u6570\u91cf",level:2},{value:"\u66f4\u4f4e\u7684\u5b9e\u4f53\u663e\u793a\u8ddd\u79bb\uff08\u4e0d\u63a8\u8350\uff09",id:"\u66f4\u4f4e\u7684\u5b9e\u4f53\u663e\u793a\u8ddd\u79bb\u4e0d\u63a8\u8350",level:2},{value:"\u9009\u62e9\u66f4\u52a0\u5408\u7406\u7684 AntiXray\uff08\u53cd\u77ff\u7269\u900f\u89c6\uff09\u65b9\u5f0f",id:"\u9009\u62e9\u66f4\u52a0\u5408\u7406\u7684-antixray\u53cd\u77ff\u7269\u900f\u89c6\u65b9\u5f0f",level:2},{value:"\u5176\u4ed6\u63d2\u4ef6",id:"\u5176\u4ed6\u63d2\u4ef6",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u7f51\u7edc\u4f18\u5316",children:"\u7f51\u7edc\u4f18\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u7f51\u7edc\u4f18\u5316\u4e3b\u8981\u76ee\u7684\u662f\u89e3\u51b3\u670d\u52a1\u5668\u4e0a\u884c\u5e26\u5bbd\u5360\u7528\u5bfc\u81f4\u7684\u73a9\u5bb6 ",(0,r.jsx)(n.strong,{children:"Ping"}),"\uff08\u5373\u7f51\u7edc\u5ef6\u8fdf\uff09\u8fc7\u9ad8\u5bfc\u81f4\u7684\u7cdf\u7cd5\u6e38\u620f\u4f53\u9a8c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e\u5305\u538b\u7f29",children:"\u6570\u636e\u5305\u538b\u7f29"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"server.properties"})," \u53ef\u4ee5\u8bbe\u7f6e\u6570\u636e\u5305\u538b\u7f29\u9608\u503c\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"network-compression-threshold: 256\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4e00\u4e2a\u6570\u636e\u5305\u7684\u5927\u5c0f\u8fbe\u5230\u8be5\u503c\uff0c\u670d\u52a1\u5668\u5c31\u4f1a\u538b\u7f29\u5b83\u3002\u8bbe\u7f6e\u5f97\u66f4\u9ad8\u53ef\u4ee5\u8282\u7701\u4e00\u4e9b CPU \u8d44\u6e90\uff0c\u4f46\u4f1a\u589e\u52a0\u5e26\u5bbd\u5360\u7528\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u5176\u8bbe\u7f6e\u4e3a -1 \u4f1a\u7981\u7528\u5b83\u3002\u8bbe\u7f6e\u7684\u592a\u9ad8\u6709\u53ef\u80fd\u4f1a\u5f71\u54cd\u5230\u7f51\u901f\u8f83\u6162\u7684\u73a9\u5bb6\u3002\u4ee5\u4e0b\u662f\u4e0d\u540c\u60c5\u51b5\u4e0b\u7684\u63a8\u8350\u503c\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u63a8\u8350\u503c"}),(0,r.jsx)(n.th,{children:"\u670d\u52a1\u5668\u60c5\u51b5"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"256"}),(0,r.jsx)(n.td,{children:"\u666e\u901a\u670d\u52a1\u5668"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0 - 127"}),(0,r.jsx)(n.td,{children:"\u5e26\u5bbd\u975e\u5e38\u975e\u5e38\u7d27\u7f3a\u4f46CPU\u8d44\u6e90\u5145\u88d5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"128"}),(0,r.jsx)(n.td,{children:"\u5e26\u5bbd\u7d27\u7f3a\u4f46 CPU \u8d44\u6e90\u76f8\u5bf9\u5145\u88d5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"512 +"}),(0,r.jsx)(n.td,{children:"\u5e26\u5bbd\u5bbd\u88d5\u4f46 CPU \u8d44\u6e90\u76f8\u5bf9\u7d27\u7f3a"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{children:"\u5728\u540c\u4e00\u7f51\u7edc\u4e0b\u4f7f\u7528\u53cd\u5411\u4ee3\u7406\uff08\u4ea4\u7ed9\u53cd\u5411\u4ee3\u7406\u538b\u7f29\uff09"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u6389\u7ebf\u4f18\u5316",children:"\u6389\u7ebf\u4f18\u5316"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"purpur.yml"})," \u53ef\u4ee5\u542f\u7528 Purpur \u7684\u5728\u7ebf\u68c0\u6d4b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"use-alternate-keepalive: false\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u63a8\u8350\u503c: true"})}),"\n",(0,r.jsx)(n.p,{children:"\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u6bcf\u79d2\u5411\u73a9\u5bb6\u53d1\u9001\u4e00\u6b21 keepalive \u5305\uff0c\u73a9\u5bb6\u5728 30 \u79d2\u5185\u672a\u54cd\u5e94\u624d\u4f1a\u8d85\u65f6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u73a9\u5bb6\u4ee5\u4efb\u4f55\u987a\u5e8f\u54cd\u5e94\u90fd\u4e0d\u4f1a\u8d85\u65f6\u3002\u8fd9\u6837\u7f51\u7edc\u60c5\u51b5\u8f83\u5dee\u7684\u73a9\u5bb6\u5c31\u4e0d\u4f1a\u7ecf\u5e38\u8d85\u65f6\u3002\u5df2\u77e5\u4e0e TCPShield \u4e0d\u517c\u5bb9\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u964d\u4f4e\u670d\u52a1\u5668\u89c6\u91ce\u8ddd\u79bb",children:"\u964d\u4f4e\u670d\u52a1\u5668\u89c6\u91ce\u8ddd\u79bb"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"\u8bf7\u6ce8\u610f\u89c6\u91ce\u8ddd\u79bb\u548c\u73a9\u5bb6\u4f53\u9a8c\u76f8\u5173\u6027\u4e5f\u8f83\u5927\uff0c\u9664\u975e\u7279\u6b8a\u60c5\u51b5\u5426\u5219\u4e0d\u5efa\u8bae\u5927\u5e45\u538b\u7f29\u89c6\u91ce\u6362\u53d6\u5e26\u5bbd\u5360\u7528\u3002"})}),"\n",(0,r.jsx)(n.h3,{id:"\u624b\u52a8\u8c03\u6574",children:"\u624b\u52a8\u8c03\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"spigot.yml"})," \u4e2d\u53ef\u4ee5\u8bbe\u7f6e\u670d\u52a1\u5668\u7684\u89c6\u91ce\u8ddd\u79bb\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"view-distance: 8\n#\u89c6\u91ce\u8ddd\u79bb\u4e3a 8 chunks\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u63a8\u8350\u503c: 4 - 12"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u9ed8\u8ba4 10 chunks \u7684\u89c6\u91ce\u8ddd\u79bb\uff0c\u53ef\u80fd\u5bf9\u4e8e\u5e26\u5bbd\u6765\u8bf4\u6709\u4e00\u5b9a\u7684\u538b\u529b\uff0c\u53ef\u4ee5\u914c\u60c5\u51cf\u5c11\uff0c\u5efa\u8bae\u4e3a 4 - 12\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4e0d\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"default"}),"\uff0c\u6b64\u9879\u5c06\u8986\u76d6 server.properties \uff0c\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u533a\u5206\u6a21\u62df\u8ddd\u79bb\u548c\u89c6\u91ce\u8ddd\u79bb\uff0c\u8bf7\u67e5\u770b ",(0,r.jsx)(n.a,{href:"performance-optimization.md/#%E9%99%8D%E4%BD%8E%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%A8%A1%E6%8B%9F%E8%B7%9D%E7%A6%BB%E5%8D%B3-simulate-distance",children:"\u533a\u5206\u6a21\u62df\u548c\u89c6\u91ce\u8ddd\u79bb"}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u81ea\u52a8\u8c03\u6574",children:"\u81ea\u52a8\u8c03\u6574"}),"\n",(0,r.jsxs)(n.p,{children:["\u5b89\u88c5 ",(0,r.jsx)(n.a,{href:"https://www.spigotmc.org/resources/view-distance-tweaks.75164/",children:"View Distance Tweaks"})," \u5b9e\u73b0\u81ea\u52a8\u8c03\u6574\u89c6\u91ce\u8ddd\u79bb\u4f7f\u5f97\u73a9\u5bb6\u589e\u591a\u65f6\u81ea\u52a8\u51cf\u5c11\u89c6\u91ce\uff0c\u73a9\u5bb6\u51cf\u5c11\u65f6\u81ea\u52a8\u589e\u52a0\u89c6\u91ce\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u964d\u4f4e\u533a\u5757\u52a0\u8f7d\u901f\u5ea6",children:"\u964d\u4f4e\u533a\u5757\u52a0\u8f7d\u901f\u5ea6"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 ",(0,r.jsx)(n.code,{children:"/config/paper-global.yml"})," \u4e2d\u6709\u5173\u4e8e\u533a\u5757\u751f\u6210\u7684\u4e00\u4e9b\u53c2\u6570"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"chunk-loading-basic:\n  #\u6ce8\uff1a\u4ee5\u4e0b\u7684\u5355\u4f4d\u5747\u4e3a chunks / seconds\n  player-max-chunk-generate-rate: -1.0\n  #\u4e3a\u6bcf\u4e2a\u73a9\u5bb6\u751f\u6210\u5206\u5757\u7684\u6700\u5927\u901f\u7387\uff0c\u8bbe\u7f6e\u4e3a-1 \u5219\u7981\u7528\u3002\n  player-max-chunk-load-rate: 100\n  #\u4efb\u4f55\u5355\u4e2a\u64ad\u653e\u5668\u52a0\u8f7d\u5757\u7684\u6700\u5927\u901f\u7387\uff0c\u8bbe\u7f6e\u4e3a-1 \u5219\u7981\u7528\u3002\n  player-max-chunk-send-rate: 75\n  #\u670d\u52a1\u5668\u53d1\u9001\u7ed9\u5355\u4e2a\u73a9\u5bb6\u7684\u6700\u5927\u901f\u7387\u3002\u8bbe\u7f6e\u4e3a-1 \u5219\u7981\u7528\u3002\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"player-max-chunk-send-rate"})," \u5bf9\u5e94\u670d\u52a1\u5668\u6bcf\u79d2\u949f\u6700\u591a\u5411\u73a9\u5bb6\u53d1\u9001\u591a\u5c11\u533a\u5757\u5305\uff0c\u8bbe\u7f6e\u5f97\u8d8a\u4f4e\u73a9\u5bb6\u6536\u5230\u5b8c\u6574\u7684\u5730\u56fe\u4fe1\u606f\u8d8a\u6162\uff0c"]}),"\n",(0,r.jsx)(n.p,{children:"\u670d\u52a1\u5668\u867d\u7136\u603b\u662f\u4f1a\u53d1\u9001\u51e0\u4e4e\u540c\u6837\u591a\u7684\u533a\u5757\u4fe1\u606f\uff0c\u4f46\u7531\u4e8e\u53d1\u9001\u901f\u5ea6\u964d\u4f4e\uff0c\u8fd9\u4f1a\u964d\u4f4e\u4e0a\u884c\u5e26\u5bbd\u7684\u6700\u5927\u5360\u7528\u7387\uff0c\u4ece\u800c\u907f\u514d\u5927\u91cf\u8dd1\u56fe\u5bfc\u81f4\u7684\u987f\u5361\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"\u63a8\u8350\u503c: 40 - 60"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63a7\u5236\u5b9e\u4f53\u6570\u91cf",children:"\u63a7\u5236\u5b9e\u4f53\u6570\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"Minecraft \u670d\u52a1\u7aef\u4f1a\u5c06\u6bcf\u4e2a\u5b9e\u4f53\u7684\u884c\u4e3a\u5b9e\u65f6\u53d1\u9001\u7ed9\u9644\u8fd1\u7684\u73a9\u5bb6\u5ba2\u6237\u7aef\uff0c\u8fd9\u4e2a\u5305\u901a\u5e38\u6765\u8bf4\u5360\u7528\u662f\u5f88\u5c11\u7684\uff0c\u4f46\u662f\u5927\u91cf\u73a9\u5bb6\u5904\u4e8e\u5b9e\u4f53\u5bc6\u96c6\u578b\u533a\u57df\u65f6\u5c06\u51fa\u73b0\u5927\u91cf\u5e26\u5bbd\u5360\u7528\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u65b9\u9762\u53c2\u6570\u53ef\u4ee5\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"performance-optimization.md/#%E6%8E%A7%E5%88%B6%E5%AE%9E%E4%BD%93%E6%95%B0%E9%87%8F",children:"\u6027\u80fd\u4f18\u5316"})]}),"\n",(0,r.jsx)(n.h2,{id:"\u66f4\u4f4e\u7684\u5b9e\u4f53\u663e\u793a\u8ddd\u79bb\u4e0d\u63a8\u8350",children:"\u66f4\u4f4e\u7684\u5b9e\u4f53\u663e\u793a\u8ddd\u79bb\uff08\u4e0d\u63a8\u8350\uff09"}),"\n",(0,r.jsx)(n.p,{children:"\u964d\u4f4e\u5b9e\u4f53\u663e\u793a\u8ddd\u79bb\u53ef\u4ee5\u8ba9\u670d\u52a1\u5668\u5c11\u53d1\u9001\u5b9e\u4f53\u7684\u5237\u65b0\u6570\u636e\u5305\uff0c\u4f46\u662f\u4ee3\u4ef7\u662f\u73a9\u5bb6\u770b\u4e0d\u5230\u8fdc\u5904\u7684\u5b9e\u4f53\uff0c\u5373\u4f7f\u5728\u670d\u52a1\u5668\u4e0a\u8fd9\u4e9b\u5b9e\u4f53\u662f\u5b58\u5728\u7684\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"entity-tracking-range:\n  players: 48\n  animals: 48\n  monsters: 48\n  misc: 32\n  other: 64\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u9009\u62e9\u66f4\u52a0\u5408\u7406\u7684-antixray\u53cd\u77ff\u7269\u900f\u89c6\u65b9\u5f0f",children:"\u9009\u62e9\u66f4\u52a0\u5408\u7406\u7684 AntiXray\uff08\u53cd\u77ff\u7269\u900f\u89c6\uff09\u65b9\u5f0f"}),"\n",(0,r.jsxs)(n.admonition,{type:"warning",children:[(0,r.jsxs)(n.p,{children:["\u505c\u6b62\u4f7f\u7528 ",(0,r.jsx)(n.a,{href:"https://modrinth.com/plugin/orebfuscator",children:"Orebfuscator"})," \u7b49\u77ff\u7269\u6df7\u6dc6\u63d2\u4ef6\uff0c\u4f7f\u7528 Paper \u81ea\u5e26\u7684\u77ff\u7269\u6df7\u6dc6\u3002"]}),(0,r.jsx)(n.p,{children:"\u4f7f\u7528 Paper \u77ff\u7269\u6df7\u6dc6\u65f6\u5019\uff0c\u5c3d\u91cf\u4e0d\u8981\u5728\u975e\u4e3b\u4e16\u754c\u5f00\u542f mode 2 \u6216 mode 3"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u53c2\u8003\u6587\u6863\u5185\u5173\u4e8e",(0,r.jsx)(n.a,{href:"/docs/maintenance/anti-cheat/antixray.md",children:"\u53cd\u77ff\u7269\u900f\u89c6"}),"\u4e2d\u6807\u660e\u80fd\u964d\u4f4e\u5e26\u5bbd\u5360\u7528\u7684\u914d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5176\u4ed6\u63d2\u4ef6",children:"\u5176\u4ed6\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u89c1\u7684\u5bf9\u5e26\u5bbd\u53ef\u80fd\u6709\u4e00\u5b9a\u5360\u7528\u7684\u63d2\u4ef6\u884c\u4e3a\u6709\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u67d0\u4e9b TAB / \u8ba1\u5206\u677f / bossbar / actionbar \u7c7b\u63d2\u4ef6\u65f6\u9ad8\u9891\u5237\u65b0"}),"\n",(0,r.jsx)(n.li,{children:"\u67d0\u4e9b\u5199\u7684\u7279\u522b\u70c2\u7684\u53cd\u4f5c\u5f0a\u63d2\u4ef6\u53ef\u80fd\u4f1a\u6bcf tick \u90fd\u5411\u73a9\u5bb6\u53d1\u9001\u6570\u636e\u5305"}),"\n",(0,r.jsxs)(n.li,{children:["\u67d0\u4e9b ",(0,r.jsx)(n.strong,{children:"\u88c5\u9970\u7c7b"})," \u63d2\u4ef6\u5927\u91cf\u57fa\u4e8e\u7c92\u5b50\u6548\u679c\u6216\u76d4\u7532\u67b6\u7684\u6570\u636e\u5305\u53d1\u9001"]}),"\n",(0,r.jsx)(n.li,{children:"\u6b22\u8fce\u8865\u5145"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u8bf7\u9002\u5f53\u4f7f\u7528\u4f7f\u7528\u4ee5\u4e0a\u7c7b\u578b\u7684\u63d2\u4ef6\u3002\u4f7f\u7528\u65f6\u4e5f\u5c3d\u91cf\u63a7\u5236\u76d4\u7532\u67b6\u3001\u7c92\u5b50\u6548\u679c\u7b49\u7684\u91cf\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(96540);const t={},s=r.createContext(t);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);