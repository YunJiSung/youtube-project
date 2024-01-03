# <strong font size="30">나만의 여행 유튜브 사이트 만들기</strong>
<img src="https://github.com/YunJiSung/youtube-project/blob/main/src/assets/img/project-min.png" style="border: 1px solid #000">   
2 유튜브 API를 이용해서 여행하는 사이트를 만들겠습니다.   
평소에 여행을 좋아하기 때문에.....  

## 셋팅
1. `npx create-react-app youtube-project`   

2. `npm install react-router-dom axios react-icon react-player sass react-helmet-async swiper`   


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

React Suspense   

const Home = lazy(() => import('./pages/Home'));   
const Today = lazy(() => import('./pages/Today'));   
const Traveler = lazy(() => import('./pages/Traveler'));   
const Channel = lazy(() => import('./pages/Channel'));   
const Search = lazy(() => import('./pages/Search'));   
const Video = lazy(() => import('./pages/Video'));   

Suspense는 2018년에 첫 시연되어 React 커뮤니티에서 큰 반향을 일으킨 후, React v16.6에 실험적인(experimental) 기능으로 추가되어 이미 알 만한 분들은 다들 한 번씩 써보셨을텐데요. 많은 리액트 개발자들이 Suspense가 React의 정식 기능이 되기를 목이 빠지게 기다렸던 걸로 아는데 드디어 React v18.0에서 이 일이 이루어졌습니다! 🥳   

Suspense라는 React의 신기술을 사용하면 컴포넌트의 랜더링을 어떤 작업이 끝날 때까지 잠시 중단시키고 다른 컴포넌트를 먼저 랜더링할 수 있습니다. 이 작업이 꼭 어떠한 작업이 되어야 한다는 특별한 제약 사항은 없지만 아무래도 REST API나 GraphQL을 호출하여 네트워크를 통해 비동기로(asynchronously) 데이터를 가져오는 작업을 가장 먼저 떠오르게 됩니다.   

비동기로 데이터를 읽어오는 것은 예전에 클래스로 컴포넌트를 작성하던 시절부터 훅(hook)을 사용하는 요즘까지도 항상 필요한 일이지만 React로 직접 구현하기에는 까다로운 면이 있지요. 그래서 일반적으로 데이터 로딩(data loading)을 전문으로 하는 라이브러리나 프레임워크에서 제공하는 데이터 로더(data loader)에 의존하는 경우가 많습니다.   

Suspense는 어떤 컴포넌트가 읽어야 하는 데이터가 아직 준비가 되지 않았다고 리액트에게 알려주는 새로운 매커니즘인데요. Suspense를 통해 컴포넌트가 비동기 데이터를 읽어오는 방법을 표준화하고자 리액트 팀의 장기적인 계획도 엿볼 수 있습니다. Suspense는 얼핏 보기에는 작은 아이디어처럼 보이지만 개인적으로 앞으로 리액트 개발 패러다임을 바꿀 정도로 파급력이 큰 기능이라고 생각합니다.   


.
