import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
  static section1(target) {
    const sections = gsap.utils.toArray("#about .aboutContent-desc-wrapper");
    //자기소개 desc
    sections.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          filter: "blur(5px)",
          scale: 0.5,
        },
        {
          filter: "blur(0px)",
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: e,
            scrub: true,
            start: "bottom 120%",
            end: "top 80%",
          },
        }
      );
    });

    //자기소개 타이틀
    const sectionTitle = gsap.utils.toArray("#about .aboutContent-foot-title");

    sectionTitle.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          filter: "blur(5px)",
          scale: 0.5,
        },
        {
          filter: "blur(0px)",
          scale: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: e,
            scrub: true,
            start: "bottom 120%",
            end: "top 60%",
            markers: true,
          },
        }
      );
    });

    // 전체 컨테이너를 선택
    const container = document.querySelector("#about");

    // 이미지들을 선택
    const images = gsap.utils.toArray("#about .aboutContent-top");

    // 타임라인 생성
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom", // 스크롤의 시작 지점
        end: "bottom top", // 스크롤의 끝 지점
        scrub: true, // 스크롤에 맞게 애니메이션 조정
      },
    });

    // 이미지 애니메이션 추가
    tl.fromTo(
      images,
      {
        rotate: 0,
        scale: 1.5,
        y: 200,
      },
      {
        rotate: 5,
        scale: 1,
        y: 0,
        duration: 0.2,
      }
    );
  }

  static section2(target) {
    //프로젝트 리스트
    const sections = gsap.utils.toArray("#project");
    sections.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          scale: 0.5,
        },
        {
          scale: 1,
          scrollTrigger: {
            trigger: e,
            scrub: true,
            start: "top 100%",
            end: "bottom 80%",
          },
        }
      );
    });
  }

  static section3(target) {
    const section = gsap.utils.toArray("#board .m-board-section-top");

    section.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.2,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: e,
            start: "top 85%",
            end: "top 60%",
          },
        }
      );
    });

    const content = gsap.utils.toArray("#board .m-board-section-content-box");

    content.forEach((e, i) => {
      gsap.fromTo(
        e,
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.4,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: e,
            start: "top 85%",
            end: "top 60%",
          },
        }
      );
    });
  }
}

export default Animation;
