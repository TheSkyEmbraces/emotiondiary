### 멋진 디자인의 감정 일기장!!!!

- 2021.12.23일 시작!

* 리액트는 너무 어렵다. 퇴근도 하고싶다.

---

- 2021.12.27 메인 페이지 만들었다 정말 어렵다.

1. basename={process.env.PUBLIC_URL}를 라우터에 적어주지 않으면 깃허브페이지에서 인식을 하지 못함.
2. const env = process.env; env.PUBLIC_URL = env.PUBLIC_URL || ""; 이거 작성하지 않으면 깃허브에서 이미지 인식 못함 이미지가 사용되는 컴포넌트에 필수로 사용
   2-1. 하면 될 줄 알았는데 안됨 이유를 찾아보니 레파지토리랑img폴더가 붙어있음. 원인을 찾다가 package.json에 homepage 주소 뒤에 /를 붙여야 한다는 걸 알았음.

### https://theSkyEmbraces.github.io/emotiondiary/
