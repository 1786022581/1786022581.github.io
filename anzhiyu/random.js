var posts=["2023/04/22/hello-world/","2023/04/23/【雷顿教授与恶魔之箱】全谜题位置/","2023/04/23/个人博客搭建流程：前期准备/","2023/04/30/个人博客搭建流程：部署hexo和next/","2023/04/29/个人博客搭建流程：购入域名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };