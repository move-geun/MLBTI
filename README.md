# MLBTI (enjoy MLB Together with Interest)

📆 **프로젝트 진행기간 : 2022/08/22 ~ 2022/10/07**

🏆 **SSAFY 7기 특화 프로젝트 부울경 2반 1등 수상** 

😎 **BE: 김동우(팀장), 박찬호**

😆 **FE: 이동근, 배송윤, 정민지**

![image-20221005141403117](https://user-images.githubusercontent.com/51036842/195288810-e029dd67-f024-4132-beee-795cccf33885.png)


📽️ [소개 UCC 보러가기](https://youtu.be/gL8SykLT9KA)


## ✨소개

### 기록의 스포츠, 야구. 그 안에서 또 다른 즐거움을 찾다 "MLBTI"

##### **날씨, 투구 시간, 타율, 역대 전적 등 MLB 경기 중에 쌓인 수많은 데이터를 활용하여 경기를 예측합니다.** 

**이에 그치지 않고, 역대 MLB 선수들로 이루어진 자신만의 팀을 만들어 실제 팀과 경기할 수 있는 시뮬레이션 서비스를 제공합니다.**


## 💡주요기능

- MLB stats API의 데이터를 활용하여 MLB 경기를 시뮬레이션 합니다.
  실제 경기 결과와 저희 서비스의 예측 결과를 비교하여 신뢰성을 높입니다.  

- 나만의 팀을 만들어 실제 MLB 팀과 시뮬레이션으로 경기를 진행 할 수 있습니다.
- MLB (American, National League) 팀과 선수들의 상세 정보를 알 수 있습니다. 



## 🎞MLBTI 서비스 설명

### 1. 메인 화면

___

- #### 경기 시뮬레이션

  - 오늘의 주요 경기 시뮬레이션 진행
  - 어제, 오늘 경기 결과 및 일정 조회 
  - 팀 순위 조회 

![메인화면](https://user-images.githubusercontent.com/51036842/195283285-49b45621-6ad7-477c-b1bb-8325ce437786.gif)


### 2. 나만의 팀 만들기

____

- #### 선수 추가 

  - 시즌, 리그, 소속팀, 포지션 별 MLB 선수 목록 필터링 

  - 선수 추가 시 그라운드에 표시

- #### 팀 설정

  - 선수 별 타순 설정
  - 선수 삭제 

![커스텀 팀 짤](https://user-images.githubusercontent.com/51036842/195283351-bddf07c9-2742-4015-b767-26927ea3564c.gif)




### 3. 시뮬레이션 

___

- #### 커스텀 시뮬레이션 

  - 직접 MLB 팀을 선택하여 시뮬레이션 결과 조회 가능

![실제 팀 선택 시뮬레이션](README.assets/실제 팀 선택 시뮬레이션.gif)

- #### 실제 경기 시뮬레이션 

  - 메인화면에서 어제 및 오늘의 경기 클릭 시, 두 팀의 시뮬레이션 결과 조회 가능

![메인에서 시뮬레이션](https://user-images.githubusercontent.com/51036842/195283411-f2b2cd77-eca6-4539-bbb1-c6b148605b15.gif)




### 4. 마이 페이지

___

- #### 정보 변경

  - 이메일 인증 후 닉네임, 비밀번호 변경 가능

![개인정보변경](https://user-images.githubusercontent.com/51036842/195283472-72cd03e3-ab77-4326-9129-bedc9bd7f469.gif)

- #### 선수 상세 페이지

  - 커스텀 팀 선수들의 상세 정보 조회 가능

![선수상세페이지](https://user-images.githubusercontent.com/51036842/195283680-573392fa-5ff2-4efd-b753-92f90b097be8.gif)



## 🍀개발환경

⌨ Backend

| 기술 스택   | 버전      |
| :---------- | --------- |
| OpenJDK     | 1.8.0_192 |
| Spring boot | 2.4.5     |
| QueryDSL    | 4.4.0     |
| Docker      | 20.10.17  |
| NginX       | 1.18.0    |
| Jenkins     | 2.346     |
| Gradle      | 6.9       |
| Airflow     | 2.23      |
| Spark       | 3.2.2     |

🖥 Frontend

| 기술 스택         | 버전     |
| :---------------- | :------- |
| React             | 18.2.0   |
| NodeJS            | 16.15.0  |
| Redux             | 4.1.2    |
| styeld-components | 5.3.5    |
| stompjs           | 2.3.3    |
| yarn              | 1.22.19  |
| Prettier          | (v9.9.0) |





## 🧱서비스 아키텍쳐

![image](https://user-images.githubusercontent.com/51036842/195971300-ad0f2abe-f6fa-4d77-92a6-4756fd032a62.png)

## 🎇기술 특이점

- 정제한 Data를 활용하여 **직접 타석 시뮬레이션**을 구현
  10월 5일에 진행 된 16개 경기에 대해 [실제 경기 결과]와 [시뮬레이션 결과]가 **70%** **일치**

  ```
  *시뮬레이션 로직 설명*
  '우투수 A선수'와 '좌타자 B선수'의 타석을 예측할 때, 
  A선수의 우수투 상대 데이터, B선수의 좌타자 상대 데이터를 활용. 
  이를 바탕으로 타자의 타율, 안타/아웃 분류 데이터, 투수 방어율 데이터 등으로 해당 타석의 예상 결과를 도출하는 방식
  ```



- 빅 데이터

  - 1900~2022 년 MLB 경기 데이터(100GB), 역대 MLB 팀 및 선수 데이터 등 방대한 양의 데이터를 크롤링과 MLB API를 활용해 쌓았습니다.
  - 쌓은 데이터들에서 활용하여 시뮬레이션 및 'MLBTI' 서비스를 구축했습니다. 

    ![방대한 데이터](https://user-images.githubusercontent.com/51036842/195283950-35db04f9-74e0-4d3a-8fe3-62895e5f0658.png)



- 자체 제작한 데이터 베이스
  - 5 만줄의 MLB 경기 데이터 속에 있는 팀, 타자, 투수, 타격 이벤트, 날씨 데이터 

  - 마운드 위에서 일어날 수 있는 63 가지 경우의 수를 분석하여 적절한 field로 mapping 할 수 있게 가공하였고, 이때 타자인지 투수인지를 기준으로 partition을 나누었고, 왼손잡이인지 오른손잡이인지 partition을 각각 나눠서 가공했습니다. 

  - data 가공 flow
    
    ![image](https://user-images.githubusercontent.com/51036842/195972781-3c5864b5-20c3-4cc9-aa76-1e91d7e10189.png)


- AirFlow 활용

  MLBTI 서비스는 최신의 데이터를 유지하기 위하여 데이터 스케줄러 관리 및 모니터링을 위해 Air flow를 사용합니다.
  
  스케줄러의 데이터 업데이트 주기는 다음과 같습니다.
  - 5분에 한 번씩 경기 기록을 갱신
  - 1일에 한 번씩 리그 순위 기록 갱신
  - 3일에 한 번씩 새로 수행한 경기 기록 갱신
 
  ![image](https://user-images.githubusercontent.com/51036842/195971943-a9a4e0c8-7873-4c74-bccd-9713deb669d1.png)

## 👨‍👩‍👦‍👦협업 툴

- Jira

스프린트 기간을 일주일로 설정하여 1주일 작업 내역 정리 
Epic : Ex) 구현, 설계 
Story :  EX) 메인페이지 팀 순위 설계와 같이 Issue를 세분화 하여 스프린트를 운영   

![image-20221012113958300](https://user-images.githubusercontent.com/51036842/195284050-1b3c22fc-39eb-4e13-a3b3-3d57797ebbff.png)




- GItLab

Front와 Back을 나누었고, Git branch, Commit 전략에 맞게 코드 버전 관리

![image-20221012114045120](https://user-images.githubusercontent.com/51036842/195284192-bddb9aef-99b9-4171-8b15-93f40c450253.png)




- Notion

스케줄, 레퍼런스, 커밋전략 등 팁 협업에 필요한 내용 정리 및 공유

![image-20221012114111356](https://user-images.githubusercontent.com/51036842/195284303-1d1c7780-a204-4a95-b69e-a1fb1a6986ed.png)




- Swagger UI

Front와 Back 의 원활한 협업을 위해 UI가 우수한 Swagger UI 사용

![image-20221012114202155](https://user-images.githubusercontent.com/51036842/195284637-abadc79a-b8ea-4d64-9dfc-d4cb1be8dfd8.png)




- Figma

프로젝트 구현 전 목업 작성

![image-20221012114309109](https://user-images.githubusercontent.com/51036842/195284707-df062a86-7ae6-46c7-86f3-6f5415f84cd1.png)


## 👨‍🏫요구사항 정의서

![image-20221012113504773](https://user-images.githubusercontent.com/51036842/195284771-55ce4417-8fe7-49c5-a891-4092ad8c5d7e.png)




## 🌤컨벤션

#### - Git 컨벤션

___

- Git 브랜치 전략

```
master : 기준이 되는 브랜치로 제품을 배포하는 브랜치
develop : 개발 브랜치로 개발자들이 이 브랜치를 기준으로 각자 작업한 기능들을 Merge
feature : 단위 기능을 개발하는 브랜치로 기능 개발이 완료되면 develop 브랜치에 Merge
release : 배포를 위해 master 브랜치로 보내기 전에 먼저 QA(품질검사)를 하기위한 브랜치
hotfix : master 브랜치로 배포를 했는데 버그가 생겼을 떄 긴급 수정하는 브랜치
```



- Git Commit 전략

```
feat: 새로운 기능
fix: 버그 고친 것
docs: documentation 변경
style: 코드 변경은 없이 띄어쓰기와 같은 코드 스타일 변경 등
refactor: 코드 리팩토링
test: test code 추가, production code는 변경 없음
chore: build test 업데이트

- Code 관련
    - Add : 코드나 문자 추가
    - Test : 테스트 코드 삽입
    - Update : Fix와 달리 원래 정상적으로 동작한 기능의 보완 개념
    - Fix : 버그 수정
    - Remove : 코드 삭제
    - Refactor : 결과의 변경 없이 코드 구조 재조정
                    Ex) createStore의 함수를 작은 함수로 분리
    - Move : 코드나 파일의 이동
    - Style : 서식, 세미콜론 누락
    - Correct : 문법 오류, 타입 및 변수 이름 변경 등 수정 사항에 사용
    
- 기능 관련
    - Feat : 새로운 기능 추가
    - Improve : 호환성, 테스트 커버리지(테스트 케이스가 얼마나 충족 한지), 접근성 향상
    - Chore : 기타 작업, 빌드 작업, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음
    - Test : git 관련 테스트 혹은 코드 관련 테스트 진행
    
- 파일, 폴더 관련
    - Docs : 문서 변경 (문서 추가, 이름 변경 등)
    - Move : 코드나 파일의 이동
    - Rename : 이름 변경
    - Create : 파일이나 폴더 추가
```

#### - Jira 컨벤션

```
Epic : [담당역할] 큰 틀의 단위 업무
	   ex) [FB] 화면 설계 
Story : [담당역할] 세부 업무
		ex) [F] 로그인 화면 설계, [B] 커스텀 팀 등록 API 설계
```



## 🧬ERD

![mlbti_erd](https://user-images.githubusercontent.com/51036842/195971147-1e59a138-626b-4e5e-a80c-bd789658c1b3.png)


## 포팅 메뉴얼

### Front End 포팅 메뉴얼
#### 로컬 실행 방법

```
git clone https://lab.ssafy.com/s07-bigdata-dist-sub2/S07P22E202.git
cd frontend
npm i
npm start
```

### Dockerfile 을 사용한 빌드

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

### backend 포팅 메뉴얼

#### 로컬에서 실행 방법

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

### Dockerfile을 사용한 빌드

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

