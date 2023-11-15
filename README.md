# 나만의 여행 유튜브 사이트 만들기
2 유튜브 API를 이용해서 여행하는 사이트를 만들겠습니다.
평소에 여행을 좋아하기 때문에.....

## 셋팅
1. `npx create-react-app youtube-project`

2. `npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`

"axios": "^1.6.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-helmet-async": "^1.3.0",
"react-icon": "^1.0.0",
"react-player": "^2.13.0",
"react-router-dom": "^6.18.0",
"react-scripts": "5.0.1",
"sass": "^1.69.5",
"swipe": "^1.7.7",
"web-vitals": "^2.1.4"#   y o u t u b e - p r o j e c t 
 
 
API 연동

1. 유튜브 api사이트에서 키를 받아와서 .env파일 생성
2. REACT_APP_YOUTUBE_API_KEY= api키 입력


Postman은 개발자들이 API(Application Programming Interface)를 개발, 테스트, 공유, 문서화하기 위해 사용하는 인기 있는 도구입니다. 그것은 다음과 같은 주요 기능을 제공합니다:

1. API 요청 및 테스트: Postman을 사용하면 다양한 HTTP 메소드(GET, POST, PUT, DELETE 등)를 사용하여 API 요청을 쉽게 보낼 수 있습니다. 사용자는 헤더, 매개변수, 바디 데이터를 설정하고 서버로부터 응답을 받을 수 있습니다.

2. 환경 관리: 개발, 테스팅, 프로덕션 등 다양한 환경에 대한 설정을 구성하고 관리할 수 있습니다. 이를 통해 같은 요청을 다른 환경에서 쉽게 테스트할 수 있습니다.

3. 자동화된 테스트: Postman은 요청 후 응답을 검증하는 자동화된 테스트 스크립트를 작성할 수 있게 해줍니다. 이를 통해 API가 예상대로 작동하는지 확인할 수 있습니다.

4. 컬렉션 및 공유 기능: API 요청들을 컬렉션으로 그룹화하고, 이를 팀원들과 공유하여 협업을 간소화할 수 있습니다.

5. 문서화: Postman은 API 요청과 응답, 예제, 설명 등을 포함한 문서를 자동으로 생성할 수 있습니다. 이는 API의 사용 방법을 쉽게 전달하고 공유하는 데 도움이 됩니다.

6. Mock 서버: API가 완전히 개발되기 전에 Mock 서버를 사용하여 프론트엔드 개발 등을 진행할 수 있습니다.

7. 플러그인과 인티그레이션: Postman은 다양한 플러그인과 다른 도구들과의 인티그레이션을 지원하여 확장성이 뛰어납니다.