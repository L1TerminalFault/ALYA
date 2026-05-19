<script setup lang="tsx">
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import SplitText from "gsap/SplitText";
  import { onMounted } from "vue";

  const SOCIALS = [
    {
      name: "Instagram",
      icon: "i-ph-instagram-logo",
      link: "https://www.instagram.com/",
    },
    {
      name: "Facebook",
      icon: "i-ph-facebook-logo",
      link: "https://www.facebook.com/",
    },
    {
      name: "LinkedIn",
      icon: "i-ph-linkedin-logo",
      link: "https://www.linkedin.com/",
    },
    { name: "Whatsapp", icon: "i-ph-whatsapp-logo", link: "https://wa.me/" },
    {
      name: "Email",
      icon: "i-ph-envelope-simple",
      link: "mailto:hello@aliya.co",
    },
  ];

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animfooter",
        start: "top 80%",
      },
    });

    tl.fromTo(
      ".animfooter",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    const splitFooterTitle = new SplitText(".footer-build-text", {
      type: "chars,words",
    });
    tl.fromTo(
      splitFooterTitle.chars,
      { opacity: 0, y: 30, rotationX: -90, transformOrigin: "0% 50% -50" },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power3.out",
      },
      "-=0.4"
    );

    const splitAlya = new SplitText(".footer-alya-text", { type: "chars" });
    tl.fromTo(
      splitAlya.chars,
      { opacity: 0, scale: 2, filter: "blur(10px)" },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.04,
        ease: "power3.out",
      },
      "-=0.8"
    );

    const splitMega = new SplitText(".mega-text-inner", { type: "chars" });
    gsap.fromTo(
      splitMega.chars,
      { opacity: 0, y: 150 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.015,
        ease: "power4.out",
        scrollTrigger: { trigger: ".mega-text", start: "top 95%" },
      }
    );
  });

  const handleSubmission = async (e: Event) => {
    return alert("Thank you for subscribing!");
  };
</script>

<template>
  <div
    class="relative z-0 flex w-full flex-col items-center justify-center overflow-hidden bg-white px-5 pt-50 pb-10"
  >
    <div
      class="animfooter relative z-10 flex aspect-[2.11/1] size-full h-auto min-h-[500px] max-w-467.5 flex-col justify-between rounded-[31px] border border-gray-800 bg-[#0F0F0F] px-10 py-12 text-white shadow-[0_30px_60px_rgba(0,0,0,0.4)] lg:px-15.5"
    >
      <div class="flex w-full flex-col gap-8">
        <div
          class="footer-alya-text flex w-full justify-center text-center font-[Switzer] text-[48px] font-bold text-white"
        >
          ALIYA.co
        </div>

        <div class="mt-10 flex flex-col justify-between gap-10 lg:flex-row">
          <div class="flex max-w-125 flex-col gap-6">
            <div
              class="footer-build-text font-[Haas75] text-[38px] leading-tight text-white perspective-[1000px]"
            >
              BUILDING TOGETHER
            </div>
            <div class="max-w-115 font-[Switzer] text-[20px] text-gray-400">
              Transforming visions into structural reality with precision
              engineering and sustainable design.
            </div>
          </div>

          <div class="flex w-full max-w-125 flex-col gap-5">
            <div class="w-full font-[Switzer] text-[20px]">
              <input
                placeholder="ENTER YOUR EMAIL"
                type="text"
                class="focus:border-brand-500 w-full border-b border-gray-600 bg-transparent py-4 text-white transition-colors outline-none"
                @keydown.enter="handleSubmission"
              />
            </div>
            <AnimatedCtaBtn
              text="Subscribe for Updates"
              class="bg-brand-500 flex w-full items-center justify-center overflow-hidden rounded-full p-5 text-[18px] font-bold text-white shadow-lg transition-colors"
              :call-back="handleSubmission"
            >
            </AnimatedCtaBtn>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 lg:flex-row"
      >
        <div
          class="order-2 mt-6 font-[Switzer] text-[15px] font-medium text-gray-500 lg:order-1 lg:mt-0"
        >
          © 2026 ALIYA Construction Group. All rights reserved.
        </div>

        <div class="order-1 flex items-center gap-4 lg:order-2">
          <NuxtLink
            v-for="social in SOCIALS"
            :key="social.name"
            :to="social.link"
            target="_blank"
            class="hover:border-brand-500 hover:bg-brand-500 flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-600 text-xl text-white transition-all duration-500 hover:text-black"
          >
            <Icon :name="social.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="mega-text pointer-events-none mt-30 flex w-full flex-col gap-16 pb-20"
    >
      <div
        class="mega-text-inner my-10 w-full overflow-hidden text-center font-[Haas] text-[clamp(60px,13vw,400px)] font-black whitespace-nowrap text-[#f3f3f3] uppercase"
      >
        ALIYA Co. PLC
      </div>
      <div
        class="mx-auto w-full columns-1 gap-12 border-t border-gray-100 px-10 pt-10 text-justify font-[Switzer] text-[12px] leading-relaxed text-gray-400 md:columns-2 lg:columns-4"
      >
        <p>
          Terms of Service: By accessing this website, you agree to be bound by
          these Terms of Service, all applicable laws and regulations, and agree
          that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited
          from using or accessing this site. The materials contained in this
          website are protected by applicable copyright and trademark law.
        </p>
        <p>
          Privacy Policy: We are committed to protecting your privacy.
          Authorized employees within the company on a need to know basis only
          use any information collected from individual customers. We constantly
          review our systems and data to ensure the best possible service to our
          customers. Parliament has created specific offences for unauthorised
          actions against computer systems and data.
        </p>
        <p>
          Disclaimer: The materials on ALIYA Group's website are provided on an
          'as is' basis. ALIYA Group makes no warranties, expressed or implied,
          and hereby disclaims and negates all other warranties including,
          without limitation, implied warranties or conditions of
          merchantability, fitness for a particular purpose, or non-infringement
          of intellectual property or other violation of rights.
        </p>
        <p>
          Corporate Governance: We adhere to the highest standards of corporate
          governance, ensuring transparency, accountability, and ethical conduct
          in all our operations globally. Our board of directors is dedicated to
          sustainable long-term value creation for all stakeholders, maintaining
          rigid compliance with international corporate charters and
          environmental mandates.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input::placeholder {
    color: #6b7280;
  }
</style>
