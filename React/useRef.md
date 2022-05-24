## useRef

```jsx
// DOM 접근 하기 위해 사용
// React -> useRef
// Javascript -> getElementById, querySelector 사용

// Ref 객체 만들기
const nameInput = useRef();
// Ref 객체의 .current 값으로 DOM 에 접근
nameInput.current.focus();

// 컴포넌트 안에서 조회 및 수정 할 수 있는 변수 관리
```
