# 하둡 설치 및 word count 실행 따라하기
- <span style="color:yellow; font-size:20px">소스코드 창에 있는 부분만 명령어로 따라 치시면 됩니다.</span>
### Linux OS 설치를 위한 VMware 다운로드

vmware 다운로드

[Workstation Player : Run a Second, Isolated Operating System on a Single PC with VMware Workstation Player](https://www.vmware.com/products/workstation-player.html)

### Linux 에서 사용할 ubuntu 이미지 다운로드

[Download Ubuntu Desktop | Download | Ubuntu](https://ubuntu.com/download/desktop)

## VMware에 Ubuntu 설치

![image](https://user-images.githubusercontent.com/51036842/186083418-a9ecdece-a946-4dd0-a1a9-35f3d75f4aef.png)

- 우분투의 이름을 hadoop으로 했음.

하둡 설치

- Console terminal 실행
    - Applications > Accessories > Terminal ( or Ctrl + Alt + t)
- 편의를 위한 패키징된 파일 다운로드
    - $ wget http://kdd.snu.ac.kr/~kddlab/Project.tar.gz -> CMD창 들어가서 이 방법 사용하기

[http://kdd.snu.ac.kr/~kddlab/Project.tar.gz](http://kdd.snu.ac.kr/~kddlab/Project.tar.gz)

## 하둡 설치하기

```bash
wget http://kdd.snu.ac.kr/~kddlab/Project.tar.gz

tar zxf Project.tar.gz

sudo chown -R hadoop:hadoop Project

cd Project

sudo mv hadoop-3.2.2 /usr/local/hadoop

sudo apt update

sudo apt install ssh openjdk-8-jdk ant -y

./set_hadoop_env.sh

source ~/.bashrc
```

## Empty ssh key 생성하기

```bash
ctrl + D

ssh-keygen -t rsa -P ""

# [enter 치기]

cat $HOME/.ssh/id_rsa.pub >> $HOME/.ssh/authorized_keys

ssh localhost

# [질문 뜨면 yes 치고] 그 다음 비밀번호를 물어보지 않고 prompt가 뜨면 성공

```
<details>
<summary span style="font-size:15px">하둡 계정만들기(명세서대로하면 필요 없음)</summary>

- 하둡 계정만들기
    
    ```bash
    [root@localhost download]# useradd hadoop
    
    [root@localhost download]# cd /home
    
    [root@localhost home]# ls
    
    groups  hadoop  nforgeadmin
    
    [root@siksco01 ~]# passwd hadoop
    
    hadoop 사용자의 비밀 번호 변경 중
    
    새  암호:
    
    잘못된 암호: 사전에 있는 단어를 기반으로 합니다
    
    잘못된 암호: 너무 간단함
    
    새  암호 재입력:
    
    passwd: 모든 인증 토큰이 성공적으로 업데이트 되었습니다.ㅁ
    
    [root@localhost home]# cat /etc/passwd
    
    root:x:0:0:root:/root:/bin/bash
    
    bin:x:1:1:bin:/bin:/sbin/nologin
    
    daemon:x:2:2:daemon:/sbin:/sbin/nologin
    
    adm:x:3:4:adm:/var/adm:/sbin/nologin
    
    lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
    
    sync:x:5:0:sync:/sbin:/bin/sync
    
    shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
    
    halt:x:7:0:halt:/sbin:/sbin/halt
    
    mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
    
    uucp:x:10:14:uucp:/var/spool/uucp:/sbin/nologin
    
    operator:x:11:0:operator:/root:/sbin/nologin
    
    games:x:12:100:games:/usr/games:/sbin/nologin
    
    gopher:x:13:30:gopher:/var/gopher:/sbin/nologin
    
    ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
    
    nobody:x:99:99:Nobody:/:/sbin/nologin
    
    dbus:x:81:81:System message bus:/:/sbin/nologin
    
    avahi-autoipd:x:170:170:Avahi IPv4LL Stack:/var/lib/avahi-autoipd:/sbin/nologin
    
    oprofile:x:16:16:Special user account to be used by OProfile:/home/oprofile:/sbin/nologin
    
    vcsa:x:69:69:virtual console memory owner:/dev:/sbin/nologin
    
    rtkit:x:499:496:RealtimeKit:/proc:/sbin/nologin
    
    rpc:x:32:32:Rpcbind Daemon:/var/cache/rpcbind:/sbin/nologin
    
    abrt:x:173:173::/etc/abrt:/sbin/nologin
    
    pegasus:x:66:65:tog-pegasus OpenPegasus WBEM/CIM services:/var/lib/Pegasus:/sbin/nologin
    
    cimsrvr:x:498:500:tog-pegasus OpenPegasus WBEM/CIM services:/var/lib/Pegasus:/sbin/nologin
    
    apache:x:48:48:Apache:/var/www:/sbin/nologin
    
    saslauth:x:497:76:"Saslauthd user":/var/empty/saslauth:/sbin/nologin
    
    postfix:x:89:89::/var/spool/postfix:/sbin/nologin
    
    qpidd:x:496:495:Owner of Qpidd Daemons:/var/lib/qpidd:/sbin/nologin
    
    ntp:x:38:38::/etc/ntp:/sbin/nologin
    
    mysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/bash
    
    avahi:x:70:70:Avahi mDNS/DNS-SD Stack:/var/run/avahi-daemon:/sbin/nologin
    
    rpcuser:x:29:29:RPC Service User:/var/lib/nfs:/sbin/nologin
    
    nfsnobody:x:65534:65534:Anonymous NFS User:/var/lib/nfs:/sbin/nologin
    
    haldaemon:x:68:68:HAL daemon:/:/sbin/nologin
    
    pulse:x:495:493:PulseAudio System Daemon:/var/run/pulse:/sbin/nologin
    
    hsqldb:x:96:96::/var/lib/hsqldb:/sbin/nologin
    
    gdm:x:42:42::/var/lib/gdm:/sbin/nologin
    
    tomcat:x:91:91:Apache Tomcat:/usr/share/tomcat6:/sbin/nologin
    
    webalizer:x:67:67:Webalizer:/var/www/usage:/sbin/nologin
    
    sshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin
    
    tcpdump:x:72:72::/:/sbin/nologin
    
    nforge:x:500:501::/opt/nforge:/bin/bash
    
    hadoop:x:501:502::/home/hadoop:/bin/bash
    ```
    
- 해당 계정으로 접속하기
    
    ```bash
    # su [계정이름]
    su hadoop
    ```
</details>

- 

```bash
## 모든 명령어는 hadoop 계정에서

# - Path를 지정하기 위해 /home/hadoop에서 source.bashrc 를 실행한다.

source .bashrc

### Name node format

# Disk format과 같은 개념
hadoop namenode - format

### Dfs daemon start
start-dfs.sh

### MapReduce daemon start (standalone 모드에서는 불필요)
start-mapred.sh

### 확인

# 수행중인 java 프로세스 리스트를 확인한다
jps

# 결과물:
    - SecNameNode
    - ondaryNameNode
    - DataNode
    - TaskTracker (Standalone에서는 불필요)
    - JobTracker (Standalone에서는 불필요)
```

![image](https://user-images.githubusercontent.com/51036842/186083493-aa8d4584-100b-4b6c-a142-b8cf73beac15.png)

 

![image](https://user-images.githubusercontent.com/51036842/186083566-f5e15ce5-d70f-4c03-ac81-2aa26f2632e9.png)

```bash
# hadoop 계정의 HDFS 상에 지금은 아무런 디렉토리나 파일이 없음
hdfs dfs -ls

# hadoop 계정의 HDFS 상에서의 맨 위에 user 디렉토리와 그 위에 hadoop 디렉토리 생성
hdfs dfs -mkdir /user
hdfs dfs -mkdir /user/hadoop
# 디렉토리 생성이 잘 되었는 지 확인
hdfs dfs -ls /
hdfs dfs -ls /user

```
<details>
<summary span style="font-size:20px">Linux에서 자주 쓰이는 Unix 명령어</summary>

### Linux에서 자주 쓰이는 Unix 명령어

cd

- 현재 디렉토리를 이동

ls

- 디렉토리에 있는 파일과 서브 디렉토리 출력

cat
- 파일의 내용을 출력
- ex) cat foo.txt (foo.txt 파일을 화면에 출력)

cp
- 파일을 복사
- ex) copy ex.txt abc/. (ex.txt 파일을 abc라는 이름의 서브 디렉토리에 복사)

mkdir
- 새로운 디렉토리를 생성
- 예) mkdir abc (abc라는 디렉토리 생성)

</details>

<details>
<summary span style="font-size:20px">하둡 파일 시스템 명령어</summary>

### 하둡 파일 시스템에서 유닉스 명령어들이 대부분 그대로 사용됩니다.

- 사용법: hdfs dfs -유닉스명령어
- 예) hdfs dfs -mkdir abc (하둡의 파일 시스템에 abc라는 새로운 디렉토리를 생성)
- 예) hdfs dfs -rm -r abc (하둡의 파일 시스템에 있는 abc라는 디렉토리를 삭제)

### Hadoop 에서 맵리듀스 자바 코드 실행 방법
- 문법: hadoop jar [jar file] [program name] < input arguments ...>
- 예) hadoop jar ssafy.jar wordcount wordcount_test wordcount_test_out

### MapReduce 예제 코드를 Hadoop에서 실행
- hadoop 실습을 위한 소스가 스켈레톤 프로젝트의 Project/src에 위치
    - cd ./Project/src
- Projet/src/Driver.java 파일에 아래 내용이 들어 있어야 Wordcount 코드 수행 가능

![image](https://user-images.githubusercontent.com/51036842/186086534-39374a1b-e20d-4c90-abf2-1daf2381f325.png)
</details>

## src 파일로 이동해서 예제 코드 실행하기
```
cd ./Project/src
cat Driver.java
```
![image](https://user-images.githubusercontent.com/51036842/186087490-95822d41-5223-4973-a448-25f3d444548f.png)

- wordcount를 pgd에 추가하는 코드가 있으므로 코드 수행 가능


## 맵 리듀스 코드 컴파일하기
```
cd Project/
ant
```

<details>
<summary span style="font-size:20px">ant 명령어</summary>

### ant 명령여
- Unix의 make 같은 것
- src director에 있는 것을 다 모아서 컴파일 한 후에 ssafy.jar를 생성
- Project 디렉토리에 있는 build.xml 파일에 정의한 대로 수행


</details>

### Wordcount MapReduce 알고리즘 코드 실행
```linux
# 테스트 데이터를 hdfs에 copy
cd /home/hadoop/Project/data
hdfs dfs -mkdir wordcount_test
hdfs dfs -put wordcount-data.txt wordcount_test

# 반드시 wordcount_test_out 디렉토리를 삭제 한 후 실행 해야 함
hdfs dfs -rm -r wordcount_test_out

# Hadoop의 실행 방법
cd /Project
# hadoop jar [jar file] [program name] < input arguments ...>
hadoop jar ssafy.jar wordcount wordcount_test wordcount_test_out

### 결과 확인 (reduce 함수를 2개 사용하면 아래와 같은 출력 파일 2개가 생성 됨)
hdfs dfs -cat wordcount_test_out/part-r-00000 | more
hdfs dfs -cat wordcount_test_out/part-r-00001 | more

```
![image](https://user-images.githubusercontent.com/51036842/186101232-dc3ec0f9-c356-4e48-8d83-2f46d75ad04a.png)

## 새로운 맵리듀스 알고리즘 코드를 만든 다음 컴파일을 하는 법
- 소스 코드 파일을 Project/src/ 디렉토리에 넣는다.
- Project/src 디렉토리에 있는 Driver.java 파일에 아래 라인을 추가합니다.

![image](https://user-images.githubusercontent.com/51036842/186104831-cd370a10-f81f-46e6-a94e-56081767cf8c.png)

```
package ssafy;

import org.apache.hadoop.util.ProgramDriver;

public class Driver {
        public static void main(String[] args) {
                int exitCode = -1;
                ProgramDriver pgd = new ProgramDriver();
                try {

                        pgd.addClass("wordcount",Wordcount.class,"A map/reduce program that counts the words in the input files.");
                        //pgd.addClass("wordcount", Wordcount.class, "A map/reduce program that performs word counting.");

                        pgd.driver(args);

                        //Success
                        exitCode = 0;
                }
                catch(Throwable e) {
                        e.printStackTrace();
                }

                System.exit(exitCode);
        }
}

```