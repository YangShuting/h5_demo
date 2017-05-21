# h5_demo
H5移动端页面：
进度：
# webpack + node环境搭建
# 配置 webpack.config.js
#router + app + views文件配置
# 页面样式书写trc_mobile.scss
1. 页面布局：lib_flexible库
2. 字体：@mixin引用使用px为单位
3. icon: png雪碧图

待做：
雪碧图的icon根据屏幕大小调整
中间动效和背景图
雪碧图的icon有一个多出来一像素border的问题。

启动：
1.cd到目录监听Scss改变 sass --watch trc_mobile.scss
2.webpack更新，还有热更新？
3. node bin/www
4.weinre同一局域网调试。 PC端：192.168.****** 手机192.168.********* :3000，3000是配置的端口
