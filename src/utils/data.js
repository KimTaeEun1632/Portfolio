export const data = {
  about: [
    {
      title: "Q. 프론트엔드를 지향하는 이유",
      desc: "서비스를 제공하는 기획 과정에서 항상 소비자, 사용자를 생각해야 합니다. 개발자에 대해 알아가는 과정에서 프론트엔드 개발자는 항상 사용자와 가까운 위치에 있었습니다. 이 과정이 큰 매력으로 느껴 프론트엔드를 지향하게 되었습니다. React, Next, Typescript, Firebase, React-query 등 다양한 프레임워크와 라이브러리를 배우며 새로운 세상에 도전하고 있습니다.",
    },
    {
      title: "Q. 개발자로써 마음가짐",
      desc: "소통하는 개발자, 그리고 개선할 줄 아는 개발자가 되고자 합니다. 단순히 팀원과의 소통을 넘어, 사용자와의 소통을 통해 더 나은 경험을 제공하는 것이 중요하다고 생각합니다. 사용자의 입장에서 고민하고, 최적화를 통해 더욱 직관적이고 효율적인 서비스를 만들기 위해 노력합니다. 작은 디테일까지 신경 쓰며 지속적으로 개선하고 성장하는 개발자가 되겠습니다.",
    },
    {
      title: "Q. 문제를 해결하는 나만의 방식은?",
      desc: "개발을 하면서 다양하 문제를 해결하기 위해 작은 단위로 나누어 단계별로 분석하고 해결 합니다. 공식문서, 커뮤니티, 검색 등 다양한 방식으로 접근합니다. 그 중 팀원과의 소통이 제일 중요하다고 생각합니다. 해결 후 지속적인 학습을 통해 내 것으로 만들기 위해 노력하고 있습니다.",
    },
  ],
  project: [
    {
      id: 1,
      title: "Portfolio",
      subtitle: "포트폴리오",
      projectType: "personal",
      date: "00.00.00 ~ 00. 00. 00",
      description:
        "개인 포트폴리오 사이트 제작, React 기본기 연습과 React router v6, Firebase, GSAP 의 사용법을 배우고자 해당 기술 들을 사용하였습니다.",
      technologies: ["React, GSAP, Firebase"],
      imgUrl: "/images/포폴1.png",
      links: {
        github: "https://github.com/KimTaeEun1632/Portfolio",
        notion:
          "https://www.notion.so/Portfolio-16b429a3f7728049ae3ccee6701201f2",
      },
      reasonForTechChoice: [
        "React : 리액트의 기본기를 더 연습하고자 채택했습니다.",
        "React router v6: 기존 배원던 v5대신 v6를 연습하고자 채택하였습니다.",
        "Firebase : 서버를 활용하여 게시판 기능을 만들고자 채택하였습니다.",
        "GSAP : 인터렉티브한 사이트를 만들기 위해 채택하였습니다.",
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
        "동영상을 넣고 싶어 직접 동영상을 만들면서 편집에 대해서도 배우고, video속성에 대해 공부를 할 수 있었으며 인터렉티브한 사이트를 위해 GSAP에 대해 공부하고 사용해보며 UX/UI 역량을 기를 수 있었습니다.",
        "React 최신버전을 공부하면서 라우팅에 대해 많이 배울 수 있었습니다. react-router-dom v6버전을 적용하면서 동작원리와 빠르게 변하는 React에 대해 더 공부 할 수 있었습니다. 또한, 캐러샐 라이브러리 없이 캐러샐을 구현하면서 Vanilla.js에도 조금 익숙해 질 수 있었습니다.",
        "게시판 기능을 구현하기 위해 Firebase를 활용하며 실시간 데이터베이스, 인증, 저장소 등의 기능을 익혔습니다. Firebase의 장점인 백엔드 구축 없이도 빠르게 기능을 개발할 수 있다는 점을 직접 경험하며, NoSQL 데이터 구조와 Firestore의 쿼리 방식에 대해 깊이 이해할 수 있었습니다.",
      ],
    },
    {
      id: 2,
      title: "GlobalNomad",
      subtitle: "글로벌노마드",
      projectType: "team",
      date: "24. 5. 18 ~ 24. 6. 26",
      description:
        "사람들이 여행을 갈 때, 가서 뭘 할지, 비용은 얼마인지 등 여러 고민을 하게 됩니다. 바쁜 현대인의 이런 고민을 줄여주기 위해 플랫폼 안에 잘 짜인 체험 상품을 보고 간단하게 예약할 수 있는 서비스 입니다.",
      technologies: ["next, TypeScript, TailWind CSS, axios, react query"],
      imgUrl: "/images/글로벌노마드.png",
      links: {
        github: "https://github.com/Globalnomad-17/team17-globalnomad",
        website: "https://team17-globalnomad.vercel.app/",
        notion:
          "https://www.notion.so/GlobalNomad-169429a3f772807a9e93d784fa59d3cd",
      },
      reasonForTechChoice: [
        "Next.js : Next.js는 서버사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 모두 지원하여 SEO와 초기 로딩 속도가 뛰어난 웹 애플리케이션을 만들 수 있습니다. 또한 파일 기반 routing과 이미지 최적화를 위해 선택했습니다.",
        "TypeScript : 코드에 정적 타입을 추가하여 에러를 사전에 방지하고 코드의 안정성과 가독성을 높이기 위해 사용했습니다. ",
        "axios : 프로미스 기반으로 비동기 작업을 처리하는 데 있어서 더 직관적이고 편리한 방법을 제공합니다.",
        "react query : 간편한 데이터 관리를 위해 사용, 특히 데이터 패칭과 캐싱을 반복적인 비동기 데이터 호출을 방지하고자 채택했습니다.",
        "TailWind CSS : 빠르고 효율적인 스타일링을 위해 유틸리티 클래스 기반의 접근 방식인 TailWind CSS를 채택했습니다.",
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
        "웹사이트를 개발하는 과정에서 사용자 경험을 생각하며 개발하는게 중요하다고 생각합니다. 주어진 디자인 시안대로 만드는 것이 아닌 UX/UI 측면을 고려해 프로젝를 진행했습니다. 팀원들과 프로젝트를 분석 중 모바일 반응형에서 사용자 경험 부분에 불편한 부분을 발견하고 팀원들과 여러 레퍼런스를 참고하여 UX/UI를 직접 구상하는 과정을 통해 개발 외적인 UX/UI 디자인 역량을 기를 수 있었습니다.",
        "부족했던 SSG, SSR을 직접 구현하면서 Next.js에 대한 역량을 기를 수 있었습니다. next.js 와 react-query를 사용하여 SSR을 구현했습니다. react-query에서는 dehydrate 와 hydrate 함수를 제공하기 때문에 Hydration API를 활용 하여, next.js와 react-query를 사용하는데 더 익숙해질 수 있었습니다.",
      ],
    },
    {
      id: 3,
      title: "The Julge",
      subtitle: "더 줄게",
      projectType: "team",
      date: "24. 4. 15 ~ 24. 5. 1",
      description:
        "더 줄게는 고용인과 사용자간의 조건 입력을 통한 원하는 일자리를 검색하는 매칭 플랫폼 입니다.",
      technologies: [
        "Next, TypeScript, Style Components, SCSS, Jira, axios, react query, EsLint, Prettier",
      ],
      imgUrl: "/images/더줄게1.png",
      links: {
        github: "https://github.com/Team18-The-Julge/The-Julge",
        website: "https://the-julge-tau.vercel.app/",
        notion:
          "https://www.notion.so/The-Julge-162429a3f7728084ba26ff8d4cf14762",
      },
      reasonForTechChoice: [
        "Next.js : Next.js는 서버사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 모두 지원하여 SEO와 초기 로딩 속도가 뛰어난 웹 애플리케이션을 만들 수 있습니다. 또한 파일 기반 routing과 이미지 최적화를 위해 선택했습니다.",
        "TypeScript : 코드에 정적 타입을 추가하여 에러를 사전에 방지하고 코드의 안정성과 가독성을 높이기 위해 사용했습니다. ",
        "SCSS : 변수선언, @import, @mixin과 같은 기능을 통해 코드의 재활용성을 올리고, 가독성을 올리는 장점이 있어 채택 하였습니다. ",
        "Jira : 팀원들과의 원할한 의사소통, git과의 연동, 작업상황 등의 생명주기를 파악하기 위해 커뮤니케이션 툴 Jira를 채택 하게 되었습니다.",
        "axios : 프로미스 기반으로 비동기 작업을 처리하는 데 있어서 더 직관적이고 편리한 방법을 제공합니다.",
        "react query : 간편한 데이터 관리를 위해 사용, 특히 데이터 패칭과 캐싱을 반복적인 비동기 데이터 호출을 방지하고자 채택했습니다.",
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
        "처음 Next.js 와 Typescript를 사용한 프로젝트 입니다. 그 전에 Next와 Typescript를 처음배우고 리액트 프로젝트를 Typescript로 마이그레이션 하는 과정에서 어려움이 있어서 프로젝트를 시작하기 전 많은 두려움이 있었습니다. 프로젝트를 진행하며 하나하나 Type을 지정하고 Next의 장점을 사용하다 보니 React와 다른 매력을 느끼게 되었습니다.",
        "특히, Next.js의 파일 시스템 기반의 간편한 페이지 라우팅과, SSG, SSR이라는 강력한 기능을 더 깊게 배울 수 있는 계기가 되었고, SCSS를 사용하여 CSS 코드의 재사용성과 계층 구조로 되어 있어 가독성에서 장점을 느낄 수 있었고 모듈화를 통해 공통CSS를 한번에 관리할 수 있었습니다.",
        "처음 프로젝트와 달리, 이번 프로젝트에서는 공통 컴포넌트를 설계하고 만드는 시간을 가졌습니다. 공통 컴포넌트를 설계하는 과정에서 어떤 기능과 스타일을 가져야 할지를 신중히 고려하며, 컴포넌트를 재사용 가능한 형태로 설계하는 것의 중요성을 배웠습니다. 특히, 사용자 유형(type)에 따라 적절한 데이터를 보여줄 수 있도록 Props를 설계하고 관리하는 방법을 깊이 이해하게 되었습니다.",
      ],
    },
    {
      id: 4,
      title: "OpenMind",
      subtitle: "오픈마인드",
      projectType: "team",
      date: "24. 2. 24 ~ 24. 3. 12",
      description:
        "솔직한 질문을 통해 상대와 더 가까워지세요. 자유롭게 질문과 답변을 통해 소통하는 플랫폼 입니다.",
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
      reasonForTechChoice: [
        "React : 리액트는 컴포넌트 기반 아키텍처를 사용하여 재사용 가능한 UI를 구성합니다. 이는 개발 과정을 단순화하고, 유지 보수를 용이하게 합니다. 가상 DOM을 사용하여 애플리케이션의 성능을 향상 뿐만 아니라 강력한 생태계와 활발한 커뮤니티를 보유하고 있습니다.",
        "Vite :  Vite는 개발 서버를 이용할 때 빠른 속도를 자랑합니다. 기존 번들로 기반으로 개발을 진행할 때, 소스 코드를 업데이트 하게 되면 번들링 과정을 다시 거쳐야 했지만 Vite는 어떤 모듈이 수정되면 수정된 모듈과 관련된 부분만 교체하기 때문에 로딩이 빠릅니다.",
        "pnpm : pnpm의 경우에는 프로젝트별로 node_modules에 매번 패키지를 설치했던 것과는 달리 global 저장소에 패키지를 한 번만 저장함으로써 저장 공간을 절약할 수 있다는 아주 큰 장점을 가지고 있어 사용하게 되었습니다.",
        "Style Components : CSS-in-JS 방식으로 JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유 할 수 있다. 예를 들어, React에서는 props를 활용한 조건부 스타일링이 가능합니다. 현재 사용중인 스타일만 DOM에 포함합니다. CSS-in-JS는 짧은 길이의 유니크한 클래스를 자동으로 생성하기 때문에 코드 경량화의 장점이 있습니다.",
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
        "코딩을 배우고 React를 활용한 첫 번째 팀 프로젝트였기 때문에, React 기술에 대해 많이 이해할 수 있었습니다. HTML, CSS, React 모든게 익숙하지 않았던 시기 많은 어려움 있었습니다. 하루 12시간씩 공부하고 반복해서 모르는 부분 강의 반복해서 들어보고, 배우지 않았던 기술스택들 또한 적용해 보기 위해 구글검색, 유튜브 등에도 찾아보며 하루 대부분을 프로젝트에 시간을 보냈었습니다.",
        "프로젝트 진행 과정, 회의, 에러 핸들링, 컨벤션, 깃 등 다루어 가면서 하나의 프로젝트가 만들어가는 과정을 함께하며 정말 많은 노력이 필요하다는 것을 배우게 되었습니다. 특히 GIt을 처음 활용하면서 도구 사용 방법을 배우는 것 뿐만 아니라, Git을 통해 팀원과 소통하는 방법을 배우고 팀원과 의사소통의 중요함을 배우게 되었습니다.",
        "처음 이 프로젝트를 진행하며 웹 개발자의 길을 걷게 되는 계기가 되었습니다. 하루 대부분을 시간 가는줄 모르고 개발과 공부를 하면서 내가 개발에 재미를 가지고 있다는 것을 느꼈으며 일상에서 웹사이트를 드러가며 개발자 도구를 통해 분석하는 재미를 느끼게 되었습니다.",
      ],
    },
    {
      id: 5,
      title: "AI Nail Art",
      subtitle: "AI Nail Art",
      projectType: "personal",
      date: "25. 3. 3 ~ 진행중",
      description:
        "AI 오픈소스 Stable Diffusion를 활용한 AI 네일 아트 디자인 생성 프로젝트입니다",
      technologies: ["Python, Next.js, Tailwind CSS"],
      imgUrl: "/images/네일메인.png",
      links: {
        github: "https://github.com/Team18-The-Julge/The-Julge",
        website: "https://the-julge-tau.vercel.app/",
      },
      reasonForTechChoice: ["Python:", "Next: ", "Tailwind CSS:"],
      slides: [
        {
          src: "/images/네일1.png",
          alt: "글로벌노마드 이미지1",
        },
        {
          src: "/images/네일2.png",
          alt: "글로벌노마드 이미지2",
        },
        {
          src: "/images/네일3.png",
          alt: "글로벌노마드 이미지3",
        },
      ],
      retrospect: [],
    },
  ],
};
