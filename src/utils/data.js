export const data = {
  about: [
    {
      title: "프론트엔드를 지향하는 이유",
      desc: `"기술로 사용자의 첫인상을 결정짓는 매력에 빠졌습니다."
서비스를 기획하고 구축할 때 가장 몰입하는 순간은 '사용자가 어떻게 이 기능을 마주할까'를 고민할 때입니다. 프론트엔드는 사용자와 서비스가 만나는 최전선에서 즉각적인 피드백을 주고받는 분야이기에 큰 매력을 느꼈습니다.
단순히 화면을 구현하는 것에 그치지 않고 React, Next.js, TypeScript 등의 스택을 활용해 더 나은 사용성을 고민하며, 기술적 성장을 통해 사용자 경험을 고도화하는 개발자가 되고 싶습니다.`,
    },
    {
      title: "개발자로써 마음가짐",
      desc: `"사용자의 목소리를 코드로 번역하는 개발자"
제가 생각하는 소통은 단순히 대화를 나누는 것을 넘어, 사용자의 불편함을 데이터와 피드백으로 읽어내어 솔루션을 제시하는 것입니다.
"이 기능이 사용자에게 정말 직관적인가?"라는 질문을 스스로 끊임없이 던집니다. 1초의 로딩 시간을 줄이는 최적화나, 사소해 보일 수 있는 UI의 디테일이 서비스의 완성도를 결정한다고 믿습니다. 작은 피드백도 놓치지 않고 끊임없이 코드를 개선하며, 어제보다 더 나은 인터페이스를 만드는 데 집중합니다.`,
    },
    {
      title: "문제를 해결하는 나만의 방식은?",
      desc: `"AI의 효율성과 공식 문서의 정확성을 결합해 최적의 답을 찾습니다."
문제를 마주하면 AI를 활용해 다양한 가설과 해결 가이드라인을 빠르게 도출합니다. 하지만 AI의 답변을 맹신하지 않고, 반드시 공식 문서와 교차 검증하여 우리 프로젝트 환경에 적합한지 확인합니다.
AI를 통해 해결 시간을 단축하는 만큼, 그 원리를 깊이 파고들어 '왜 이렇게 작동하는지'를 반드시 이해하고 넘어갑니다. 도구를 잘 다루는 것을 넘어, 도구가 내놓은 결과물을 완벽히 제 것으로 만드는 것이 저의 문제 해결 방식입니다.`,
    },
  ],
  project: [
    {
      id: 5,
      title: "NailArtX",
      subtitle: "AI 기반 퍼스널 네일 큐레이션 서비스",
      projectType: "personal",
      date: "25. 03. 03 ~ 25. 03. 26",
      description:
        "사용자의 취향(스타일, 컬러, 모양 등)을 분석하여 최적화된 네일 아트 디자인을 생성하는 AI 웹 서비스",
      detailedDescription:
        "사용자의 취향을 반영하여 맞춤형 네일 디자인을 제안하는 생성형 AI 기반 시뮬레이션 서비스입니다. 직관적인 UI 옵션 선택만으로 정교한 AI 프롬프트를 자동 생성하는 시스템을 구축하여 고퀄리티의 디자인 시각화를 구현했습니다. Supabase 인증을 통해 사용자별 권한을 관리하며, 생성된 디자인을 즉시 다운로드하거나 공유할 수 있는 시스템을 구축했습니다. 또한 Cloudflare Functions와 Polar API를 연동해 서버리스 기반의 안정적인 결제 및 구독 모델까지 구현한 완성도 높은 프로젝트입니다.",
      technologies: [
        "React 19, Vite, Tailwind CSS v4, Cloudflare Pages, Supabase, Nano Banana API, Polar.sh, Resend",
      ],
      imgUrl: "/images/네일메인.png",
      links: {
        github: "https://github.com/KimTaeEun1632/NailArtX-nano",
        website: "https://nailartxai.com/",
      },
      keyFeatures: [
        "Interactive Sidebar : 네일의 형태(Shape), 길이(Length), 색상(Color), 아트 기법(Art Style) 등을 세부적으로 선택 가능",
        "AI Prompt Builder : 선택된 메타데이터를 정교한 영어 프롬프트로 자동 변환하여 고품질 이미지 생성",
        "Real-time Preview : 생성된 디자인을 캔버스 위에서 즉시 확인",
        "Multilingual Support : 한국어 및 영어 환경을 지원하는 다국어 컨텍스트 시스템 구축",
        "User Management : Supabase를 활용한 소셜 로그인 및 개인별 프로 사용 여부 확인",
      ],
      reasonForTechChoice: [
        "React 19 & Vite : 최신 React 19의 기능을 활용하고, Vite를 통해 빠른 개발 피드백 루프를 구축했습니다.",
        "Nano Banana API : 기존 모델의 한계를 극복하고 네일 특유의 질감과 광택을 정교하게 표현하기 위해 채택했습니다.",
        "Cloudflare Pages & Functions : 서버리스 아키텍처를 통해 백엔드 인프라 관리 비용을 절감하고, API Key 노출을 원천 차단하는 미들웨어를 구축했습니다.",
        "Supabase : 인증(Auth)과 데이터베이스, RLS(Row Level Security)를 활용하여 빠르고 안전한 데이터 관리를 구현했습니다.",
        "Tailwind CSS v4 : 최신 CSS 워크플로우를 도입하여 유지보수가 용이하고 일관된 디자인 시스템을 구축했습니다.",
        "Polar.sh : 오픈소스 친화적인 구독 결제 시스템을 통합하여 비즈니스 로직을 완성했습니다.",
        "Resend : Supabase 기본 메일 서버의 발송 제한 문제를 해결하고, 인증 메일 도달률을 높여 사용자 이탈을 방지하기 위해 도입했습니다.",
      ],
      slides: [
        {
          src: "/images/네일메인.png",
          alt: "NailArtX 메인 화면",
        },
        {
          src: "/images/네일1.png",
          alt: "AI 네일 생성 프로세스",
        },
        {
          src: "/images/네일2.png",
          alt: "생성된 네일 아트 결과물",
        },
        {
          src: "/images/네일3.png",
          alt: "사용자 대시보드 및 관리",
        },
      ],
      retrospect: [
        {
          title: "사용자 맞춤형 프롬프트 빌더 도입",
          feedback:
            "초기 키워드 입력 방식은 사용자가 원하는 구체적인 디자인(네일 모양, 기법 등)을 반영하기 어렵고 결과물이 일관되지 않다는 피드백이 있었습니다.",
          iteration:
            "사용자의 선택값(Shape, Color, Detail 등)을 구조화된 데이터로 수집하는 사이드바 UI를 구축했습니다. 수집된 데이터를 기반으로 AI 모델이 가장 잘 이해할 수 있는 자연어 문장으로 조합하는 '자동 프롬프트 빌더(buildPrompt.jsx)' 로직을 설계하여 프롬프트 엔지니어링을 자동화하고 이미지 생성의 품질을 상향 평준화했습니다.",
        },
        {
          title: "API 보안 및 비용 관리 최적화",
          feedback:
            "클라이언트 측에서 AI API를 직접 호출할 경우 API Key 노출 위험(보안 취약점)과 악성 봇에 의한 무분별한 리소스 소모 가능성이 발견되었습니다.",
          iteration:
            "Cloudflare Functions를 활용한 미들웨어를 구축하여 API Key를 서버 사이드에서 안전하게 관리하고 클라이언트에는 프록시 경로만 노출했고, Cloudflare Turnstile을 도입하여 인간 사용자의 요청임을 검증함으로써 악성 봇의 접근을 원천 차단하고 불필요한 API 호출 비용을 절감했습니다.",
        },
        {
          title: "메일 시스템 안정성 확보",
          feedback:
            "기본 메일 서버의 발송 제한으로 인해 사용자들이 인증 메일을 제때 받지 못하는 불편함이 있었습니다.",
          iteration:
            "Resend SMTP를 연동하여 메일 도달률을 높이고, Supabase와의 통합 과정을 통해 서비스 운영 측면의 문제 해결 능력을 길렀습니다.",
        },
      ],
    },
    {
      id: 2,
      title: "GlobalNomad",
      subtitle: "체험 중심의 글로벌 액티비티 예약 플랫폼",
      projectType: "team",
      date: "24. 5. 18 ~ 24. 6. 26",
      description:
        "누구나 체험을 등록하고, 원하는 액티비티를 검색하여 예약할 수 있는 C2C 기반 액티비티 플랫폼",
      detailedDescription:
        "Next.js와 TypeScript를 활용하여 구축한 고성능 예약 플랫폼입니다. C2C 체험 비즈니스의 핵심인 '예약 라이프사이클'을 프론트엔드 관점에서 설계하고 구현한 프로젝트입니다. 체험 등록부터 예약 승인/거절, 그리고 실제 참여 후 리뷰 작성으로 이어지는 유기적인  데이터 흐름을 TanStack Query의 무효화(Invalidation) 전략을 통해 실시간성 있게 관리했습니다. Kakao Maps SDK와 FullCalendar를 연동하여 위치 기반 정보 및 스케줄링 기능을 강화하고, TanStack Query를 도입하여 전역 상태 관리와, 비동기 데이터 통신을 효율화하였습니다. React Hook Form을 이용한 복잡한 폼 검증 로직을 구현하여 사용자 경험을 극대화했습니다.",
      technologies: [
        "Next.js 14, TypeScript, Tailwind CSS, TanStack Query v5, Zustand, NextAuth.js, Axios, React Hook Form, Kakao Maps SDK, FullCalendar",
      ],
      imgUrl: "/images/글로벌노마드.png",
      links: {
        github: "https://github.com/Globalnomad-17/team17-globalnomad",
        website: "https://team17-globalnomad.vercel.app/",
        notion:
          "https://www.notion.so/GlobalNomad-169429a3f772807a9e93d784fa59d3cd",
      },
      keyFeatures: [
        "Activity Management : 체험 등록(이미지 업로드, 일정 설정), 수정 및 삭제 기능 제공",
        "Reservation System : FullCalendar를 연동한 날짜별 예약 현황 조회 및 예약 승인/거절 시스템 구축",
        "Search & Filter : 카테고리별 필터링 및 검색어 기반 체험 탐색 기능",
        "Interactive Maps : Kakao Maps SDK를 활용하여 체험 장소의 위치 시각화 및 주소 검색 기능 제공",
        "Dashboard : 사용자별 예약 내역, 위시리스트, 내가 등록한 체험 관리 기능을 포함한 마이페이지 구현",
        "Infinite Scroll : react-infinite-scroller를 활용한 매끄러운 체험 리스트 로딩",
      ],
      reasonForTechChoice: [
        "Next.js 14 (Pages Router) : SEO(검색 엔진 최적화)와 빠른 초기 로딩 속도를 위해 SSR 및 SSG를 유연하게 활용할 수 있는 Next.js를 채택했습니다.",
        "TanStack Query v5 : 서버 데이터의 캐싱, 동기화, 업데이트를 효율적으로 관리하고, 무한 스크롤 및 로딩 상태 처리를 간결하게 구현하기 위해 도입했습니다.",
        "Zustand : Redux 대비 가벼운 문법으로 모달 상태, 유저 세션 등 전역 상태를 직관적으로 관리하기 위해 선택했습니다.",
        "React Hook Form : 체험 등록과 같이 복잡한 입력값이 많은 폼에서 불필요한 리렌더링을 방지하고, 스키마 기반 검증을 효과적으로 수행하기 위해 활용했습니다.",
        "NextAuth.js : 복잡한 인증 로직을 안전하게 처리하고, 소셜 로그인 확장을 고려하여 표준화된 인증 라이브러리를 사용했습니다.",
        "NextUI & Tailwind CSS : 일관된 디자인 시스템을 빠르게 구축하고, 반응형 웹 디자인을 효율적으로 구현하기 위해 조합했습니다.",
      ],
      slides: [
        {
          src: "/images/글로벌1.png",
          alt: "글로벌노마드 이미지1",
        },
        {
          src: "/images/글로벌2.png",
          alt: "글로벌노마드 이미지2",
        },
        {
          src: "/images/글로벌3.png",
          alt: "글로벌노마드 이미지3",
        },
        {
          src: "/images/글로벌4.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/글로벌5.png",
          alt: "글로벌노마드 이미지4",
        },
      ],
      retrospect: [
        {
          title: "Axios Interceptor를 통한 공통 에러 핸들링 및 인증 자동화",
          feedback:
            "모든 API 요청마다 헤더에 토큰을 수동으로 넣어야 했고, 토큰 만료나 401 에러 발생 시 각 컴포넌트에서 개별적으로 로그인 페이지로 리다이렉트하는 로직이 중복되어 코드의 유지보수성이 떨어지는 문제가 있었습니다.",
          iteration:
            "Axios 인스턴스를 생성하고 `interceptors`를 활용하여 모든 요청(request) 시 쿠키에서 액세스 토큰을 자동으로 주입하는 중앙 집중식 구조(`requestor.ts`)를 설계했습니다. 또한, 응답(response) 인터셉터를 통해 401(인증 만료) 에러 발생 시 토큰을 삭제하고 자동으로 로그인 페이지로 이동시키거나, 공통 에러 메시지를 토스트 알림으로 띄우는 로직을 전역적으로 관리함으로써 비즈니스 로직의 순수성을 유지하고 중복 코드를 제거했습니다.",
        },
        {
          title: "서버 상태 동기화 및 캐싱 전략 수립",
          feedback:
            "예약 승인/거절 후 목록이 즉시 업데이트되지 않거나, 페이지 이동 시 반복적인 API 호출로 리소스가 낭비되는 현상이 발생했습니다.",
          iteration:
            "TanStack Query의 `onSuccess` 콜백 내에서 `invalidateQueries`를 활용해 관련 데이터를 즉시 무효화하고 재조회하여 클라이언트와 서버의 상태를 일치시켰습니다. 또한 staleTime과 gcTime을 적절히 설정하여 데이터 신선도를 유지하면서도 불필요한 네트워크 비용을 절감했습니다.",
        },
        {
          title: "외부 SDK(카카오맵, 캘린더) 통합 경험",
          feedback:
            "외부 라이브러리를 React 생태계와 결합할 때, DOM 직접 접근 방식과 React의 선언적 프로그래밍 모델 사이의 충돌이 있었습니다.",
          iteration:
            "Kakao Maps SDK를 커스텀 훅(`useKakaoMap`)으로 캡슐화하여 지도의 초기화 및 마커 제어 로직을 컴포넌트와 분리했습니다. 이를 통해 지도 관련 로직의 재사용성을 높이고 비즈니스 로직에만 집중할 수 있는 환경을 구축했습니다.",
        },
      ],
    },
    {
      id: 3,
      title: "The Julge",
      subtitle: "사장님과 알바생을 위한 맞춤형 급구 구인구직 플랫폼",
      projectType: "team",
      date: "24. 4. 15 ~ 24. 5. 1",
      description:
        "사용자 맞춤형 공고 필터링과 실시간 지원 현황 관리를 제공하는 매칭 서비스",
      detailedDescription:
        "가게 사장님은 구인 공고를 올리고, 알바생은 조건에 맞는 공고를 찾아 지원하는 양방향 매칭 플랫폼입니다. Next.js의 Pages Router를 활용하여 SEO와 라우팅 최적화를 구현했으며, TypeScript를 도입해 방대한 도메인 데이터(가게, 공고, 지원서 등)의 안정성을 확보했습니다. 특히, React Query와 Axios 인터셉터를 결합한 서비스 레이어 패턴을 구축하여 복잡한 비동기 로직을 효율적으로 관리했습니다. 사장님/알바생이라는 각기 다른 사용자 권한에 따른 대시보드와 접근 제어를 구현하여 실제 서비스 수준의 완성도를 목표로 개발되었습니다.",
      technologies: ["Next, TypeScript, SCSS, Jira, axios, react query"],
      imgUrl: "/images/더줄게1.png",
      links: {
        github: "https://github.com/Team18-The-Julge/The-Julge",
        website: "https://the-julge-tau.vercel.app/",
        notion:
          "https://www.notion.so/The-Julge-162429a3f7728084ba26ff8d4cf14762",
      },
      keyFeatures: [
        "Role-based Dashboard : 사장님(가게 관리, 공고 등록, 지원서 승인/거절)과 알바생(내 프로필, 지원 내역) 전용 대시보드 제공",
        "Advanced Filtering : 위치, 시급, 시작 시간 등 다중 조건 필터링 시스템 구현",
        "Application Management : 지원 현황을 '대기/승인/거절'로 관리하는 상태 시스템 및 실시간 알림",
        "Image Upload System : 가게 등록 및 프로필 수정을 위한 이미지 API 연동 및 프리뷰 기능",
        "Auth Interceptor : Axios Interceptor를 통한 토큰 기반 인증 및 401 에러 대응 자동화",
      ],
      reasonForTechChoice: [
        "Next.js : SEO 최적화와 파일 기반 라우팅을 통해 대규모 서비스 구조를 효율적으로 설계하기 위해 채택했습니다.",
        "React Query : 공고 목록, 지원 현황 등 빈번하게 업데이트되는 서버 데이터를 캐싱하고 로딩/에러 상태를 선언적으로 관리하기 위해 도입했습니다.",
        "Jira : 팀원들과의 원할한 의사소통, git과의 연동, 작업상황 등의 생명주기를 파악하기 위해 커뮤니케이션 툴 Jira를 채택 하게 되었습니다.",
        "SCSS Modules : 컴포넌트 단위 스타일링을 통해 스타일 충돌을 방지하고, 믹스인(Mixins)을 활용해 디자인 시스템의 재사용성을 극대화했습니다.",
      ],
      slides: [
        {
          src: "/images/더줄게1.png",
          alt: "글로벌노마드 이미지1",
        },
        {
          src: "/images/더줄게2.png",
          alt: "글로벌노마드 이미지2",
        },
        {
          src: "/images/더줄게3.png",
          alt: "글로벌노마드 이미지3",
        },
        {
          src: "/images/더줄게4.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게5.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게6.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게7.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게8.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게9.png",
          alt: "글로벌노마드 이미지4",
        },
        {
          src: "/images/더줄게10.png",
          alt: "글로벌노마드 이미지4",
        },
      ],
      retrospect: [
        {
          title: "공통 컴포넌트 설계 및 디자인 시스템 구축",
          feedback:
            "반복되는 버튼, 인풋, 모달 등 UI 요소들이 프로젝트 전반에 걸쳐 일관되지 않게 구현되는 리스크가 있었습니다.",
          iteration:
            "src/components/common 폴더에 원자 단위의 컴포넌트(Button, Input, Badge 등)를 설계하고, SCSS 변수와 믹스인을 통해 프로젝트 전반의 테마를 관리했습니다. 결과적으로 코드 중복을 획기적으로 줄이고 디자인 일관성을 확보했습니다.",
        },
      ],
    },
    {
      id: 4,
      title: "OpenMind",
      subtitle: "솔직한 질문과 답변으로 소통하는 익명 Q&A 플랫폼",
      projectType: "team",
      date: "24. 2. 24 ~ 24. 3. 12",
      description:
        "자신의 피드를 생성하여 익명으로 질문을 받고 답변하며 소통할 수 있는 커뮤니티 서비스",
      detailedDescription:
        "Vite와 React 18을 기반으로 구축된 익명 Q&A 플랫폼입니다. 사용자는 자신만의 피드를 생성하고, 타인과 질문 및 답변을 주고받으며 소통할 수 있습니다. Intersection Observer를 활용한 무한 스크롤로 대규모 데이터의 효율적인 로딩을 구현했으며, Kakao 및 Facebook 공유 기능을 통해 사용자 참여를 유도했습니다. Styled-components를 도입해 재사용 가능한 디자인 시스템을 구축하고, 커스텀 훅을 통한 API 통신 최적화 및 Redux Toolkit을 활용한 체계적인 상태 관리를 실천한 팀 프로젝트입니다.",
      technologies: [
        "React, Vite, pnpm, Prettier, EsLint airbnb, Style Components",
      ],
      imgUrl: "/images/오픈마인드1.png",
      links: {
        github: "https://github.com/suMin-97/openmind",
        website: "https://openmind-life.vercel.app/",
        notion:
          "https://www.notion.so/OpenMind-148429a3f77280fabb71f7823fe544f0",
      },
      keyFeatures: [
        "Personal Feed System : 이름을 입력하여 고유한 ID를 가진 개인별 질문 피드 생성 및 관리",
        "Infinite Scroll : Intersection Observer API를 활용해 대량의 질문 목록을 성능 저하 없이 동적으로 로드",
        "SNS Sharing : Kakao SDK 및 Facebook 공유 기능을 연동하여 개인 피드 URL 확산 기능 구현",
        "Question & Reaction : 익명 질문 작성 및 각 질문에 대한 좋아요/싫어요 반응 기능",
        "Responsive Design : PC, 태블릿, 모바일에 따라 리스트 배치를 최적화하는 반응형 그리드 UI",
      ],
      reasonForTechChoice: [
        "React 18 & Vite : 빠른 개발 피드백 루프와 선언적인 UI 구현을 위해 최신 번들러와 라이브러리를 채택했습니다.",
        "Styled-components : CSS-in-JS 방식을 통해 컴포넌트 단위 스타일링을 구현하고, 공통 테마 시스템으로 디자인 일관성을 유지했습니다.",
        "pnpm : 전역 저장소 기반의 패키지 관리로 디스크 공간을 절약하고 의존성 설치 속도를 최적화했습니다.",
        "Intersection Observer : 브라우저의 메인 스레드 부하를 줄이면서도 매끄러운 무한 스크롤 경험을 제공하기 위해 사용했습니다.",
      ],
      slides: [
        {
          src: "/images/오픈마인드1.png",
          alt: "글로벌노마드 이미지1",
        },
        {
          src: "/images/오픈마인드2.png",
          alt: "글로벌노마드 이미지2",
        },
        {
          src: "/images/오픈마인드3.png",
          alt: "글로벌노마드 이미지3",
        },
        {
          src: "/images/오픈마인드4.png",
          alt: "글로벌노마드 이미지4",
        },
      ],
      retrospect: [
        {
          title: "커스텀 훅을 이용한 비동기 로직 공통화",
          feedback:
            "다수의 페이지에서 반복되는 API 호출과 로딩/에러 상태 처리가 파편화되어 코드 가독성이 떨어지는 문제가 있었습니다.",
          iteration:
            "Axios 기반의 useRequest 커스텀 훅을 설계하여 모든 API 요청 로직을 정형화했습니다. 이를 통해 로딩 및 에러 핸들링을 선언적으로 처리함으로써 컴포넌트 내 비즈니스로직을 40% 이상 간소화했습니다.",
        },
        {
          title: "성능 최적화를 위한 무한 스크롤 구현",
          feedback:
            "수백 개의 질문이 있는 피드에서 전체 데이터를 한꺼번에 렌더링할 경우 초기 로딩 시간이 길어지고 성능이 저하되는 이슈가 있었습니다.",
          iteration:
            "Intersection Observer API를 활용한 useIntersectionObserver 훅을 제작했습니다. 사용자의 뷰포트 진입에 맞춰 데이터를 단계적으로 페칭하는 방식을 적용해 초기 렌더링 성능을 개선하고 불필요한 네트워크 리소스 낭비를 줄였습니다.",
        },
        {
          title: "협업을 위한 디자인 시스템 구축",
          feedback:
            "팀원 간 서로 다른 스타일 작성 방식으로 인해 UI 일관성이 깨지고 공통 UI 수정 시 번거로움이 발생했습니다.",
          iteration:
            "Styled-components의 ThemeProvider를 활용해 컬러셋과 폰트 스타일을 변수화했습니다. Button, Badge, ProfileImage 등 자주 사용되는 UI를 공통 컴포넌트로 분리하여 작업 효율을 높이고 통일감 있는 디자인을 완성했습니다.",
        },
      ],
    },
    {
      id: 1,
      title: "Portfolio",
      subtitle: "포트폴리오",
      projectType: "personal",
      date: "00.00.00 ~ 00. 00. 00",
      description: "기본과 성장을 기록하는 신입 프론트엔드 개발자의 포트폴리오",
      detailedDescription:
        "자신을 가장 잘 표현할 수 있는 공간을 만들기 위해 기획부터 디자인, 개발까지 전 과정을 주도한 프로젝트입니다. GSAP와 Lenis를 결합하여 사용자에게 부드럽고 생동감 넘치는 웹 경험을 제공하는 데 집중했습니다. Firebase를 활용해 서버리스 환경에서 실시간 방명록 기능을 구현하고, React Router v6의 유연한 라우팅 시스템을 통해 프로젝트별 상세 정보를 체계적으로 전달하도록 설계했습니다. 단순히 정보를 나열하는 것을 넘어, 코드의 품질과 사용자 경험(UX)을 동시에 고민한 결과물입니다.",
      technologies: [
        "React 18, Vite, Tailwind CSS v3, GSAP, Lenis, Firebase, React Router v6",
      ],
      imgUrl: "/images/포폴1.png",
      links: {
        github: "https://github.com/KimTaeEun1632/Portfolio",
        notion:
          "https://www.notion.so/Portfolio-16b429a3f7728049ae3ccee6701201f2",
      },
      keyFeatures: [
        "Interactive UI/UX : GSAP ScrollTrigger를 활용한 몰입감 있는 애니메이션과 부드러운 스크롤 시스템 구축",
        "Dynamic Routing : React Router v6의 동적 파라미터를 활용해 확장성 있는 프로젝트 상세 페이지 시스템 구현",
        "Guestbook System : Firebase Firestore와 Auth를 연동하여 실시간 데이터 읽기/쓰기가 가능한 방명록 기능 운영",
        "Responsive Design : 모바일, 태블릿, 데스크탑 등 다양한 기기 환경에 최적화된 Fluid UI 제공",
        "Performance Optimization : Vite 빌드 도구와 컴포넌트 최적화를 통해 애니메이션 부하를 최소화하고 렌더링 성능 확보",
      ],
      reasonForTechChoice: [
        "React 18 & Vite : 선언적인 UI 구성을 위해 React를 선택했으며, Vite를 통해 최적화된 빌드 속도와 개발 효율을 확보했습니다.",
        "GSAP & Lenis : 단순한 CSS 애니메이션을 넘어, 사용자 인터렉션에 즉각 반응하는 정교한 시각 효과와 매끄러운 스크롤 경험을 위해 채택했습니다.",
        "Firebase : 별도의 서버 인프라 구축 없이도 NoSQL 기반의 실시간 데이터베이스와 호스팅 기능을 빠르게 통합하기 위해 도입했습니다.",
        "Tailwind CSS : 유틸리티 퍼스트 방식을 활용해 디자인 시스템의 일관성을 유지하면서 유지보수가 용이한 스타일링을 실천했습니다.",
        "React Router v6 : 중첩 라우팅과 프로그래밍 방식의 네비게이션을 활용해 직관적인 페이지 전환 시스템을 구축했습니다.",
      ],
      slides: [
        {
          src: "/images/포트폴리오1.png",
          alt: "글로벌노마드 이미지1",
        },
        {
          src: "/images/포트폴리오2.png",
          alt: "글로벌노마드 이미지2",
        },
        {
          src: "/images/포트폴리오3.png",
          alt: "글로벌노마드 이미지3",
        },
      ],
      retrospect: [
        {
          title: "서버리스 데이터베이스 설계 경험",
          feedback:
            "NoSQL 기반의 Firebase를 사용하며 복잡한 계층형 데이터 구조(게시글-댓글)를 어떻게 효율적으로 관리할지에 대한 고민이 있었습니다.",
          iteration:
            "Firestore의 하위 컬렉션 구조를 활용해 데이터를 체계화하고, 보안 규칙(Security Rules)을 설정하여 데이터 무결성을 확보했습니다. 이를 통해 백엔드 없이도 완성도 높은 기능 구현 능력을 길렀습니다.",
        },
        {
          title: "사용자 경험 중심의 인터페이스 개선",
          feedback:
            "초기 버전에서는 정보를 찾는 과정이 다소 정적이고 직관성이 부족하다는 자체 피드백이 있었습니다.",
          iteration:
            "네비게이션 바에 스크롤 진행도를 표시하고, 프로젝트 리스트에 드롭다운 필터링 기능을 추가하여 사용자가 원하는 정보를 더 빠르고 즐겁게 탐색할 수 있도록 UI를 고도화했습니다.",
        },
      ],
    },
  ],
};
