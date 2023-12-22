# 使用官方的 Nginx 基础镜像
FROM nginx:alpine

# 将自定义的配置文件复制到容器中
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx
COPY index.html /usr/share/nginx/html