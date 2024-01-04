# <strong font size="30">나만의 여행 유튜브 사이트 만들기</strong>
<img src="https://github.com/YunJiSung/youtube-project/blob/main/src/assets/img/project-min.png" style="border: 1px solid #000">   
2 유튜브 API를 이용해서 여행하는 사이트를 만들었습니다.평소에 여행을 좋아하기 때문에.....  

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

개요
이 플랫폼은 다양한 YouTube 채널로부터 여행 관련 콘텐츠를 수집하여 표시하는 데 중점을 두고 있습니다. React의 강력한 기능을 활용하여, 동적이고 사용자 친화적인 인터페이스를 제공함으로써 전반적인 탐색 경험을 향상시킵니다. YouTube API와의 통합은 여행 블로그, 가이드 및 기타 관련 콘텐츠의 원활하고 최신의 스트림을 보장하여 여행 애호가들을 위한 원스톱 목적지를 만듭니다.   

주요 페이지 및 기능   
채널 페이지 (Channel.js):

기능: 특정 YouTube 채널에 대한 자세한 정보를 표시합니다. 배너, 프로필 사진 및 구독자 수, 비디오 수, 전체 조회수와 같은 주요 통계를 포함합니다. 채널의 비디오 목록을 표시하고 추가 콘텐츠를 가져오기 위한 '더 보기' 기능을 제공합니다.
코드 하이라이트: React 훅 (useState, useEffect) 및 useParams를 사용하여 채널 세부 정보 및 비디오를 가져오고 표시합니다. fetchFromAPI를 사용한 비동기 데이터 가져오기를 구현합니다.

홈 페이지 (Home.js):

기능: 다양한 채널에서 가져온 비디오 컬렉션을 특색있고 매력적인 레이아웃으로 표시하는 주요 랜딩 페이지입니다.
코드 하이라이트: 서로 다른 채널의 비디오를 저장하기 위해 여러 상태 변수를 사용합니다. useEffect 훅은 컴포넌트 마운트 시 각 채널의 비디오 데이터를 가져옵니다.
검색 페이지 (Search.js):

기능: 특정 쿼리에 따라 YouTube 비디오를 검색할 수 있습니다. 페이지네이션을 위한 '더 보기' 버튼이 포함되어 있습니다.
코드 하이라이트: useParams와 fetchFromAPI를 사용하여 검색 기능을 구현합니다. 비디오, 로딩 상태 및 페이지네이션을 위한 상태 관리를 합니다.
오늘 및 유튜버 섹션 (Today.js, Youtuber.js):

기능: 새로운 콘텐츠 발견을 증진시키기 위해 선정된 비디오와 YouTube 채널을 전시합니다.
코드 하이라이트: 렌더링을 위해 todayText 및 travelerText의 정적 데이터를 사용합니다.
비디오 페이지 (Video.js):

기능: 선택된 비디오에 대한 자세한 보기를 제공하며, 댓글 및 관련 통계를 포함합니다.
코드 하이라이트: useParams에서 비디오 ID를 사용하여 비디오 세부 정보 및 댓글을 가져오고 표시합니다.
재사용 가능한 컴포넌트 (Header.js, Footer.js, Main.js):

기능: 사이트 전반에 걸쳐 일관된 탐색, 브랜딩 및 레이아웃 구조를 제공합니다.
코드 하이라이트: Header는 탐색 및 소셜 미디어 링크를 포함하고, Footer는 연락처 정보를 제공하며, Main은 Helmet을 사용한 전체 페이지 레이아웃 및 SEO를 관리합니다.

결론
이 프로젝트는 React를 활용하여 동적이고 API 기반의 웹 애플리케이션을 구축하는 잠재력을 보여줍니다. 모듈식 아키텍처와 효과적인 상태 관리 및 라우팅을 결합하여 콘텐츠 집대성 플랫폼을 위한 견고하고 확장 가능한 솔루션을 제공합니다.


##React Suspense   

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


