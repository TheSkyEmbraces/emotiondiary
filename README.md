### 멋진 디자인의 감정 일기장!!!!

- 2021.12.23일 시작!

* 리액트는 너무 어렵다. 퇴근도 하고싶다.

---

- 2021.12.27 메인 페이지 작업

1. 라우터 버전이 업데이트 되면서 basename={process.env.PUBLIC_URL}를 라우터에 적어주지 않으면 깃허브페이지에서 인식을 하지 못함.
2. const env = process.env; env.PUBLIC_URL = env.PUBLIC_URL || ""; 이미지가 보이지 않을 경우 사용
3. 2번을 하면 될 줄 알았는데 안됨 이유를 찾아보니 레파지토리랑img폴더가 붙어있음. 원인을 찾다가 package.json에 homepage 주소 뒤에 /를 붙여야 한다는 걸 알았음.

---

- 2021.12.28 글 작성 페이지 작업

1. createContext를 바보처럼 배치해놔서 작동이 안되었지만 수정완료
2. 페이지 작업 완료 일기 작성시 메인 화면에 보이지만 아직 서버에 저장하지 않아서 새로고침을 하면 사라짐
3. 스타일을 뉴모피즘 스타일로 바꿔봄. 뭔가 이상하면서도 괜찮은 느낌이랄까,,?

- 2021.12.28 글 수정 페이지, 일기 보기 페이지 작업

1. 기본 레이아웃은 모두 완성
2. 로컬 스토리지를 이용한 일기 저장 방법을 사용
3. 버그를 아직 고치지 않음,ㅠ

- 2022.01.03 완성

1. 로컬스토리지 값을 지우면 id값을 찾지 못해 페이지가 뜨지 않는 버그 수정.
2. 카카오톡 공유하기까지 완성
3. 길고 긴 여정이 끝났다!

### https://theSkyEmbraces.github.io/emotiondiary/
