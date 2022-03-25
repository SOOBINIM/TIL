## Docker를 설치

![](https://images.velog.io/images/lsoob/post/9d29ee1e-e0a2-4071-a1c6-200b640073ae/Docker-Logo_Horizontel_279x131.b8a5c41e56b77706656d61080f6a0217a3ba356d.png)
https://www.docker.com/get-started/

## node.js를 사용해 간단한 코딩

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("💸💰나는 임수빈이다. 최고의 부자가 될 사람💰💸");
});

app.listen(3000, () => console.log("서버가 열렸습니다 🎉🎊"));
```

## Dockerfile 생성

```python
# 도커 이미지를 만들기 위해 필요한 것들을 가져와 사용.
# 노드는 다행이 만들어져 있는 무언가가 있다.
FROM node:17.8.0-alpine

# 복사할 위치의 디렉터리로 이동
# 유닉스의 cd와 동일함.
# /app에 프로젝트 관련 내용을 모두 카피 하겠다.
WORKDIR /app

# 도커 파일은 레이어 시스템으로 많이 사용하는 파일일 수 록 뒤에 적어준다.

# 현재 경로에 디펜던시(package.json)를 명시
COPY package.json package-lock.json ./

# ci node일 떄 디펜던시에 명시해둔 버전과 동일한 버전으로 설치
# ci cd
RUN npm ci

COPY index.js .

# 노드와 인덱스를 실행 해
ENTRYPOINT [ "node", "index.js" ]

```

## Docker 빌드

docker build -f Dockerfile -t fun-docker .

## Docker Error

![](https://images.velog.io/images/lsoob/post/f8a821de-dded-44c8-8355-34fae44ac63c/image.png)
`this error may indicate that the docker daemon is not running`

### Docker Desktop stopped...

도커 파일을 실행해 봤는데 Docker Desktop stopped...??
도커를 실행을 어떻게 하지?
도커 빌드 또는 이미지를 아직 만들지 않아서 그런건가...??
![](https://images.velog.io/images/lsoob/post/666a16ea-49ea-4f2d-921c-4d6a7a98af31/image.png)

### WSL2 설치

뭐든지 안되면.. 처음부터 다시 시작!!
아래와 같이 `WSL2 installation is incomplete`
무슨말이야.. 윈도인데 리눅스를 설치하라고??
VM웨어로 리눅스 설치해서 리눅스 안에서 해야 하나?
아니 그럼 왜 windows 버전이 왜있는거야...(무지🙏)

#### 파워쉘 관리자 권한으로 실행

차례대로 입력하여 설치
`dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart`
`dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart`

#### WSL2 리눅스 커널 업데이트

[설치하기](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

### Docker Desktop 재시작

시작된다. 오예!!!! 🎉🎊
![](https://images.velog.io/images/lsoob/post/c9258ac5-de8f-4e94-9148-d4f9c610848f/image.png)

### Docker Build

![](https://images.velog.io/images/lsoob/post/aff6df85-fd65-4401-b5fc-91da9f560d2f/image.png)

시작이 반이다. 가즈아!!🚀
