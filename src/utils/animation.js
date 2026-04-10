import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
  static section1(target) {
    const sections = gsap.utils.toArray("#about .aboutContent-desc-wrapper");
    //자기소개 desc
    if (sections.length > 0) {
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
              end: "top 60%",
            },
          }
        );
      });
    }

    //자기소개 타이틀
    const sectionTitle = gsap.utils.toArray("#about .about-sticky-title");

    if (sectionTitle.length > 0) {
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
            },
          }
        );
      });
    }
  }

  static section2(target) {
    //프로젝트 리스트
    const sections = gsap.utils.toArray("#project");
    if (sections.length > 0) {
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
  }

  static section3(target) {
    const section = gsap.utils.toArray("#board .m-board-section-top");

    if (section.length > 0) {
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
    }

    const content = gsap.utils.toArray("#board .m-board-section-content-box");

    if (content.length > 0) {
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
}

export default Animation;
