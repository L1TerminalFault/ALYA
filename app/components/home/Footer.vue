<script setup lang="tsx">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

const SOCIALS = [
  { name: "Instagram", icon: "i-ph-instagram-logo", link: "https://www.instagram.com/" },
  { name: "Facebook", icon: "i-ph-facebook-logo", link: "https://www.facebook.com/" },
  { name: "LinkedIn", icon: "i-ph-linkedin-logo", link: "https://www.linkedin.com/" },
  { name: "Whatsapp", icon: "i-ph-whatsapp-logo", link: "https://wa.me/" },
  { name: "Email", icon: "i-ph-envelope-simple", link: "mailto:hello@alya.co" },
];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

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
  
  gsap.fromTo(
    ".mega-text",
    { opacity: 0, scale: 0.95 },
    { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", scrollTrigger: { trigger: ".mega-text", start: "top 95%" } }
  );
});

const handleSubmission = async (e: Event) => {
  return alert("Thank you for subscribing!");
};
</script>

<template>
  <div class="z-0 flex w-full flex-col items-center justify-center bg-white pt-50 px-5 pb-10 overflow-hidden relative">
    
    <div
      class="animfooter relative z-10 flex aspect-[2.11/1] min-h-[500px] size-full h-auto max-w-467.5 flex-col justify-between rounded-[31px] bg-[#0F0F0F] border border-gray-800 px-10 py-12 text-white lg:px-15.5 shadow-[0_30px_60px_rgba(0,0,0,0.4)]">
      
      <div class="flex w-full flex-col gap-8">
        <div class="flex w-full justify-center text-center font-[Switzer] text-[48px] font-bold text-white tracking-tighter">
          ALYA.co
        </div>

        <div class="flex flex-col justify-between gap-10 lg:flex-row mt-10">
          <div class="flex max-w-125 flex-col gap-6">
            <div class="font-[Haas75] text-[38px] leading-tight text-white">BUILDING TOGETHER</div>
            <div class="max-w-115 font-[Switzer] text-[20px] text-gray-400">
              Transforming visions into structural reality with precision engineering and sustainable design.
            </div>
          </div>

          <div class="flex w-full max-w-125 flex-col gap-5">
            <div class="w-full font-[Switzer] text-[20px]">
              <input placeholder="ENTER YOUR EMAIL" type="text"
                class="w-full border-b border-gray-600 bg-transparent py-4 text-white outline-none focus:border-brand-500 transition-colors"
                @keydown.enter="handleSubmission" />
            </div>
            <button
              class="flex w-full items-center justify-center overflow-hidden rounded-full bg-white hover:bg-gray-200 transition-colors p-5 text-[18px] font-bold text-black shadow-lg"
              :call-back="handleSubmission">
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 lg:flex-row">
        <div class="order-2 mt-6 font-[Switzer] text-[15px] text-gray-500 lg:order-1 lg:mt-0 font-medium">
          © 2026 ALYA Construction Group. All rights reserved.
        </div>

        <div class="order-1 flex items-center gap-4 lg:order-2">
          <NuxtLink v-for="social in SOCIALS" :key="social.name" :to="social.link" target="_blank"
            class="flex size-12 cursor-pointer items-center justify-center rounded-full border border-gray-600 text-xl transition-all hover:bg-white hover:text-black hover:border-white text-white">
            <Icon :name="social.icon" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <div class="mega-text w-full max-w-[1920px] mt-30 flex flex-col gap-16 pointer-events-none pb-20">
       <div class="font-[Haas] text-[clamp(60px,18vw,400px)] leading-[0.75] font-black text-[#f3f3f3] tracking-tighter text-center uppercase whitespace-nowrap overflow-hidden my-10">
         ALYA GROUP
       </div>
       <div class="columns-1 md:columns-2 lg:columns-4 gap-12 font-[Switzer] text-[12px] text-gray-400 text-justify leading-relaxed px-10 border-t border-gray-100 pt-10 mx-auto w-full">
         <p>Terms of Service: By accessing this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
         <p>Privacy Policy: We are committed to protecting your privacy. Authorized employees within the company on a need to know basis only use any information collected from individual customers. We constantly review our systems and data to ensure the best possible service to our customers. Parliament has created specific offences for unauthorised actions against computer systems and data.</p>
         <p>Disclaimer: The materials on ALYA Group's website are provided on an 'as is' basis. ALYA Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
         <p>Corporate Governance: We adhere to the highest standards of corporate governance, ensuring transparency, accountability, and ethical conduct in all our operations globally. Our board of directors is dedicated to sustainable long-term value creation for all stakeholders, maintaining rigid compliance with international corporate charters and environmental mandates.</p>
       </div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  color: #6b7280;
}
</style>
