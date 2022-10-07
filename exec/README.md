# 배포 통합문서

<details>
<summary span style="font-size:20px">사용 기술 스택</summary>

여기서 사용한 기술 버전은 다음과 같습니다.

front-end : NodeJS, React

back-end: Java, Spring boot, JPA, gradle, Docker, NginX, Jenkins

| 기술 스택   | 버전      |
| ----------- | --------- |
| NodeJS      | 16.6.0    |
| React       | 18.2.0    |
| OpenJDK     | 1.8.0_192 |
| Spring boot | 2.4.5     |
| QueryDSL    | 4.4.0     |
| Docker      | 20.10.17  |
| NginX       | 1.18.0    |
| Jenkins     | 2.346     |
| Gradle      | 6.9       |

</details>

#

<details>
<summary span style="font-size:20px">Frontend 배포</summary>

## 로컬 실행 방법

```
git clone https://lab.ssafy.com/s07-bigdata-dist-sub2/S07P22E202.git
cd frontend
npm i
npm start
```

## Dockerfile 을 사용한 빌드 및 배포

Dockerfile을 작성하여 Nginx와 react를 함께 배포합니다.
프로젝트내의 frontend 디렉토리의 루트 경로에서 다음 명령어를 실행합니다.

S07P22E202/frontend/nginx.conf

```conf
server {
    listen 80;
    location / {
        root    /app/build;
        index   index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

- nginx 경로를 설정할 nginx.conf 파일을 추가합니다

S07P22E202/frontend/Dockerfile

```Dockerfile
# Dockerfile

# nginx 이미지를 사용합니다. 뒤에 tag가 없으면 latest 를 사용합니다.
FROM nginx

# root 에 app 폴더를 생성
RUN mkdir /app

# work dir 고정
WORKDIR /app

# work dir 에 build 폴더 생성 /app/build
RUN mkdir ./build

# host pc의 현재경로의 build 폴더를 workdir 의 build 폴더로 복사
ADD ./build ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 80 포트 오픈
EXPOSE 80
# https 사용을 위한 443 포트 오픈
EXPOSE 443
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
```

그 다음 도커파일을 작성합니다 nginx.conf 에 적혀있는 것을 컨테이너내 설정으로 변경합니다.

이후 다음 명령어를 차례로 입력하여 module을 설치, 빌드, 도커 이미지를 만들고 컨테이너에서 배포합니다.

```
# module 설치
npm update

# 빌드 파일 생성
CI=false npm run build

# 도커 이미지 빌드
docker build -t mlbti_front:0.1 .

# 도커 컨테이너를 이용한 프론트엔드 배포
docker run --name mlbti_front -d -p 3000:80 mlbti_front:0.1
```

</details>

#

<details>
<summary span style="font-size:20px">backend 배포</summary>

## 로컬에서 실행 방법

build 결과물 얻기

```
git clone https://lab.ssafy.com/s07-webmobile1-sub2/S07P22E202.git
cd S07P22E202/backend
```

S07P22E202/backend

```
gradle clean build
```

그러면 .jar 파일이 S07P22E202/backend/build/libs 위치에 생성됩니다.

```
java -jar [jar파일명]
```

을 실행하면 자바 백엔드 서버가 열립니다.

---

## Dockerfile을 사용한 배포( 추후 자동 배포를 위한 과정)

Dockerfile을 backend 폴더에서 작성합니다.

S07P22E202/backend의 Dockerfile

```Docker
FROM openjdk:8
VOLUME /tmp
EXPOSE 8080
ARG JAR_FILE=build/libs/ssafy-web-project-1.0-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Asia/Seoul
RUN apt-get install -y tzdata
```

S07P22E202/backend

```
docker build -t mlbti_back:0.1 .
docker run --name mlbti_back -p 8081:8080 mlbti_back:0.1
```

다음을 실행하면 배포가 완료됩니다.

</details>

#

<details>
<summary span style="font-size:20px">Nginx 설정과 SSL 설정 </summary>

## SSL 설정

### 배포 **Nginx 설정과 ssl 인증서 발급 및 적용**

Openvidu 같은 경우, 카메라를 사용하기 위해서는 반드시 https로 이용해야 하기에 SSL 인증서를 발급받아야 합니다. 인증서 발급을 위해서는 도메인이 필요합니다.

### nginx 설치

```bash
# nginx가 있다면 제거하고 다시 설치
sudo apt-get purge nginx nginx-common nginx-full
# nginx 설치
sudo apt-get install nginx
# 설치 확인 및 버전 확인
nginx -v
```

### SSL 인증서 발급을 위한 설치

```bash
sudo apt-get install letsencrypt

sudo systemctl stop nginx

# sudo letsencrypt certonly --standalone -d www제외한 도메인 이름
sudo letsencrypt certonly --standalone -d j7e202.p.ssafy.io
```

### 위를 실행하면 아래 동의문이 뜹니다.

```
ubuntu@ip-172-26-6-2:~$ sudo letsencrypt certonly --standalone -d j7e202.p.ssafy.io
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Enter email address (used for urgent renewal and security notices) (Enter 'c' to
cancel): ehddn5252@naver.com

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Please read the Terms of Service at
https://letsencrypt.org/documents/LE-SA-v1.2-November-15-2017-w-v1.3-notice.pdf.
You must agree in order to register with the ACME server at
https://acme-v02.api.letsencrypt.org/directory
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(A)gree/(C)ancel: A

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: N

Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator standalone, Installer None
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for j7e202.p.ssafy.io
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/j7e202.p.ssafy.io/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/j7e202.p.ssafy.io/privkey.pem
   Your cert will expire on 2022-12-17. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

```

### 만약 위와 같이 안 뜬다면 방화벽이 문제일 확률이 큽니다.

- 80 포트가 열려있지 않다면 제대로 설치가 안됩니다.

```shell
sudo ufw status

sudo ufw allow 80
```

### 확인 인증서 발급이 잘 되었는 지 확인

/etc/letsencrypt/live/j7e202.p.ssafy.io/ 경로에

```bash
fullchain.pem;
privkey.pem;
```

위 2개의 pem 파일이 생성되었다면 성공입니다.

![image](https://user-images.githubusercontent.com/51036842/184372917-2d9037bc-0097-40cf-bf91-7cc1e71c32b7.png)

### 만약에 live 경로로 들어갈 수 없다면 권한 문제입니다.

/etc/letsencrypt 위치에서 다음 명령어를 실행해줍니다.

```
sudo chmod 707 live
```

### /etc/nginx 로 이동

- 여기도 쓰기 권한이 아마 없을 것입니다 쓰기 권한을 추가해줍니다.

```
sudo chmod 707 sites-available
```

### /etc/nginx/sites-available 로 이동

⭐config 설정⭐

아무 파일을 하나 생성합니다.

default2를 생성했습니다.

/etc/nginx/sites-available의 default2 파일

```bash
server {

        location /{
                proxy_pass http://localhost:3000;
        }

        location /api {
                proxy_pass http://localhost:8081/api;
        }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/j7e202.p.ssafy.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/j7e202.p.ssafy.io/privkey.pem; # managed by Certbot
    # include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    # ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    if ($host = j7e202.p.ssafy.io) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

        listen 80;
        server_name j7e202.p.ssafy.io;
    return 404; # managed by Certbot
}
```

<details>
<summary span style="font-size:20px">코드 설명</summary>

```bash
location /{
                proxy_pass http://localhost:3000;
        }

        location /api {
                proxy_pass http://localhost:8081/api;
        }

```

proxy_pass : 해당 url(http://localhost:3000)로 들어오는 것을 listen port로 보냅니다.

443 을 ssl port로 설정합니다.

```bash
    listen 443 ssl; # 443 을 ssl port로 설정합니다.
    ssl_certificate /etc/letsencrypt/live/j7e202.p.ssafy.io/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/j7e202.p.ssafy.io/privkey.pem; # managed by Certbot
```

fullchain.pem 을 ssl_certificate 아이디로 설정하고

privkey.pem을 ssl_certificate_key 키로 설정합니다.

---

</details>

### 링킹 및 nginx 재시작

```bash
# 기존의 링크된 파일이 있다면 삭제합니다.
sudo rm /etc/nginx/sites-enabled/default2
# 링크파일을 생성합니다.
sudo ln -s /etc/nginx/sites-available/default2 /etc/nginx/sites-enabled/default2

# 다음 명령어에서 successful이 뜨면 nginx를 실행할 수 있다. 확인용
sudo nginx -t

# nginx를 재시작합니다.
sudo service nginx restart
sudo systemctl restart nginx

# 만약 포트가 있다면 퓨즈시킵니다.(nginx 재시작이 안된다면 실행)
sudo fuser -k 80/tcp
sudo fuser -k 443/tcp

```

그런 후에는 링크를 생성하고 nginx를 재시작합니다.

</details>

1. 커스텀 팀 기능을 사용하려면 로그인을 해야합니다. 로그인은 실제 존재하는 메일에 사용자를 인증하고 회원가입한 사람에게 가능합니다.

### 메인 페이지

![메인](https://user-images.githubusercontent.com/51036842/194444570-9e443a56-e3e8-4031-aaa3-75a7421737cd.gif)

메인 페이지에서는 현재 시뮬레이션 중인 경기의 목록을 보여줍니다. 해당 시뮬레이션을 클릭할 시 시뮬레이션 페이지에서 결과를 확인할 수 있습니다.
또한 어제/오늘의 실제 경기 기록을 제공하며, MLB 팀 순위 데이터도 제공하고 있습니다.

### 오늘의 경기 시뮬레이션

![오늘의 경기 시뮬레이션](https://user-images.githubusercontent.com/51036842/194444573-ca684ee1-4145-4555-8e50-87bf643e24ef.gif)

오늘 경기 일정이 있는 두 팀의 경기 결과를 시뮬레이션 해 볼 수 있습니다. 타순이나 투수는 실시간 데이터를 통해 받아오며 실제 경기를 예측한 결과를 확인해볼 수 있습니다.

### 커스텀 팀추가

![커스텀 팀추가](https://user-images.githubusercontent.com/51036842/194444595-d52dbae0-c8e4-4b54-bf1d-3d1c994f07d2.gif)

커스텀 팀 추가 페이지에서는 자신의 팀을 실제 MLB 선수를로 구성해볼 수 있습니다. 년도/팀명/포지션 별 필터링 기능과 이름 검색 기능을 통해 사용자 편의를 주려고 했습니다. 추가된 선수들에 대해 타순 또한 설정해볼 수 있습니다.

### 커스텀 실행

![커스텀 실행](https://user-images.githubusercontent.com/51036842/194444589-70cd89ab-ea49-471e-8f5d-008626bc70e1.gif)

커스텀 팀을 추가했다면 나만의 커스텀 팀과 실제 MLB 팀의 경기 결과를 예측해볼 수 있습니다. 자신의 팀의 타순을 모두 정하고 상대 MLB 팀을 정하며 시뮬레이션이 진행됩니다.
