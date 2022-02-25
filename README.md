# 상태 관리 라이브러리 "Redux"

## 🟣 용어 정리 

### 1. 액션  (Action)
	> 상태에 변화가 필요하다면 액션을 일으켜야 한다. 
	> 액션은 객체로 표현되며 type 필드를 반드시 가지고 있어야한다.
### 2. 액션 생성함수(Action Creator)
	> 액션 생성함수는 액션 객체를 만들어주는 함수이다.
### 3. 리듀서 (Reducer)
	> 현재 상태와 액션 객체를 받아 필요하다면 새로운 상태를 리턴하는 함수이다.
	> 액션 유형을 기반으로 이벤트 처리하는 이벤트 리스너 
	> 여러개의 리듀서를 만들고 이를 합쳐 루트 리듀서를 만들 수 있다.
### 4. 스토어 (Store)
	> 상태가 들어있다.
	> 현재의 앱 상태와 리듀서를 스토어에 만든다.
	> 하나의 프로젝트에는 하나의 스토어만 가질 수 있음.
### 5. 디스패치 (Dispatch)
	> 액션 객체를 넘겨줘서 상태를 업데이트 하는 유일한 방법
	> 액션을 발생 시키는 것  
### 6. 구독 (Subscribe)
	> 파라미터에 리스너 함수를 넣어 호출하면 상태가 업데이트될 때마다 호출 
	> react-deux 라이브러리에서 제공하는 connect함수 사용
### 7. 셀렉터 (Selector)
	> 상태 값을 가져오기 위해 getState 사용
### 8. 프리젠테이셔널 컴포넌트
	> 리덕스 스토어에 직접 접근 하지 않고 필요한 값 또는 함수를 props로만 받아와서 사용 하는 컴포넌트이다. 
	> 보통 components 디렉터리에 생성
### 9. 컨테이너 컴포넌트
	> 리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트이다.
	> 다른 프리젠테이셔널 컴포넌트들을 불러와서 사용한다.
	> 보통 components 디렉터리에 생성

## 🟣 상태 변화 흐름
	> 유저가 버튼을 클릭
	> 유저가 클릭한 버튼에 맞는 디스패치를 실행해 액션을 일으킴
	> 이전상태와 현재 액션으로 리듀서 함수를 스토어에서 실행, 그 값을 새로운 상태로 저장
	> 스토어를 구독하고 있던 UI들에게 업데이트 알림
	> 스토어의 데이터가 필요한 UI들은 필요한 상태가 업데이트 되었는지 확인
	> 데이터 변경된 것을 업데이트 하여 화면에 표시 

## 🟣  그외 정보
	> 리덕스의 경우 자체적으로 typescript가 지원되기 때문에 따로 typescript 버전을 받을 필요 없음.
  	> Redux 라이브러리 설치 	Ø Yarn add redux
	


		
