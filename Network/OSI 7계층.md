### 물리계층 (1계층)

    컴퓨터가 두대밖에 없다고 가정했을 때
    0101 1001와 같이 비트 형태의 data를 옆에 컴퓨터에게 전달하기 위해서는
    아날로그 형태로 바꿔서 전달해야한다.

(컴퓨터 A) (데이터를 보내는 클라이언트)
[endoder]0101 1001 -> `물리계층` -> 아날로그 신호->

(컴퓨터 B) (데이터를 받는 서버)
[decoder] -> 아날로그 신호 -> `물리계층` -> 0101 1001

사용되는 곳은 phy 하드웨어적으로 구현

### 데이터링크 계층 (2계층)

    여러대의 컴퓨터중에 data를 원하는 목적지에 전달 할 수 있도록 도와주는 스위치
    스위치 하나로 묶여있는 여러대의 컴퓨터에서 옳바른 데이터를 받기 옳바른 PC에 전달하기 위해서는
    데이터를 프레임으로 쌓아서 보내야한다.
    0101 1001 이라는 데이터를 특정한 비트열을 붙여
    예를들어 시작을 1111 끝을 0000으로 감싸주어 데이터를 구분해야한다.
    예를 들면 110`1111`*01011001*`0000`10101 와 같이 말이다.

(컴퓨터 A) (데이터를 보내는 클라이언트)
[endoder] data -> `데이터링크 계층` -> 1111 0101 1001 0000(프레임) -> `물리계층` -> 아날로그 신호 ->

(컴퓨터 B) (데이터를 받는 서버)
[decoder] -> 아날로그 신호 -> `물리계층` -> 1111 0101 1001 0000(프레임) -> `데이터링크 계층` -> data

사용되는 곳은 랜카드 하드웨어적으로 구현

### 네트워크 계층 (3계층)

    여러대의 라우터로 연결된 PC들을 인터넷이라고 하는데 대륙간에는 해상 케이블로 연결되어있다.
    이렇게 더 많은 컴퓨터들 사이의 통신을 할 때에는 데이터 앞에 데이터가 도착해야하는 목적지 주소를
    적어준다. 숫자로 되어있는 IP주소는 DNS의 도움을 받아 의미있는 문자로 검색이 가능핟.
    이렇게 목적지 IP주소를 앞에 붙여서 전달하는 데이터를 패킷이라고 부른다.
    라우팅은 최적의 경로를 찾아서 해당 데이터를 보내준다.

(컴퓨터 A) (데이터를 보내는 클라이언트)
[endoder] data -> `네트워크 계층` -> [목적지 IP : 54.180.179.18[data]] -> `데이터링크 계층` -> ...생략 [목적지 IP : 54.180.179.18[data]] -> `물리계층` -> 아날로그 신호 ->

(컴퓨터 B) (데이터를 받는 라우터)
[decoder] -> 아날로그 신호 -> `물리계층` -> ...생략 [목적지 IP : 54.180.179.18[data]] -> `데이터링크 계층` -> [목적지 IP : 54.180.179.18[data]] -> `네트워크 계층` -> data -> 다른 라우터 -> data -> ...

### 전송 계층 (4계층)

    하나의 컴퓨터에서 동시에 실행되고 있는 프로세스들이 서로 겹치지 않게 포트 번호를 부여한다.
    보내는 사람은 데이터를 보낼 때 데이터를 받을 사람에게 프로세스의 포트 번호를 붙여 보낸다.

(컴퓨터 A) (데이터를 보내는 클라이언트)
[encoder] data -> `전송 계층` -> [Port : 3000[data]] -> `네트워크 계층` -> [목적지 IP : 54.180.179.18[Port : 3000[data]]] -> `데이터링크 계층 & 물리계층` -> 아날로그 신호 ->

(컴퓨터 B) (데이터를 받는 서버)
[decoder] -> 아날로그 신호 -> `물리계층 & 데이터링크 계층` -> [목적지 IP : 54.180.179.18[data]] -> `네트워크 계층` -> [Port : 3000[data]] -> `전송 계층` -> data

### 운영 계층 (5,6,7계층)

    기존의 OSI 7계층에서는 세션계층, 표현계층, 운영계층으로 나눠져있던 계층들을 최근에는 합쳐서 사용하고 있다.(기존 모델 보다 TCP/IP 모델이 더 많이 사용되기 때문에)

(컴퓨터 B) (데이터를 보내는 서버)
[encoder] -> 뭐해 -> `운영 계층 HTTP` -> [Status code : 500 [뭐해]] ->`전송 계층` -> [Port : 3000[Status code : 500 [뭐해]]] -> `네트워크 계층` -> [목적지 IP : 54.180.179.18[Port : 3000[Status code : 500 [뭐해]]]] -> `데이터링크 계층 & 물리계층` -> 아날로그 신호 ->

(컴퓨터 A) (데이터를 받는 클라이언트)
[decoder] 아날로그 신호 -> `물리계층 & 데이터링크 계층` -> [목적지 IP : 54.180.179.18[Port : 3000[Status code : 500 [뭐해]]]] -> `네트워크 계층` -> [Port : 3000[Status code : 500 [뭐해]]] -> `전송 계층` -> [Status code : 500 [뭐해]] -> `운영 계층 HTTP` -> 뭐해
