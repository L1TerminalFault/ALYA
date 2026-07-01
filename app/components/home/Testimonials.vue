<!-- <script setup lang="tsx">
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import { ref, onMounted, nextTick } from "vue";

  gsap.registerPlugin(SplitText);

  let titleSplit: SplitText;
  let descSplit: SplitText;
  const isAnimating = ref(false);
  const isFirstImageFront = ref(true);

  const reviews = [
    {
      title:
        "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
      desc: "I've had the pleasure of collaborating with Belay on multiple projects, and his ability to turn ideas into stunning, functional designs is unmatched.",
      image1: "/test1.jpg",
      image2: "/test2.jpg",
    },
    {
      title:
        "Unmatched Reliability And Incredible Build Quality That Never Disappoints",
      desc: "I’ve worked alongside Dumeme on different projects, and he consistently brings ideas to life through impressive and functional designs.",
      image1: "/Vector.png",
      image2: "/test1.jpg",
    },
  ];

  const counter = ref(0);
  const review = ref(reviews[0]);

  const splitElements = () => {
    if (titleSplit) titleSplit.revert();
    if (descSplit) descSplit.revert();
    titleSplit = new SplitText(".review-title", { type: "lines" });
    descSplit = new SplitText(".review-description", { type: "words,chars" });
  };

  onMounted(async () => {
    await nextTick();
    splitElements();
  });

  const handleShuffle = async () => {
    if (isAnimating.value) return;
    isAnimating.value = true;

    const topImg = isFirstImageFront.value ? ".image1" : ".image2";
    const bottomImg = isFirstImageFront.value ? ".image2" : ".image1";

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.value = false;
        isFirstImageFront.value = !isFirstImageFront.value;
      },
    });

    // 1. Text & Layout Out
    tl.to([".review-title", ".review-description"], {
      opacity: 0,
      filter: "blur(4px)",
      y: 15,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        counter.value = (counter.value + 1) % reviews.length;
        review.value = reviews[counter.value];
      },
    });

    // 2. THE REFINED SHUFFLE
    // Top Image: Move Right, Rotate, and Drop
    tl.to(
      topImg,
      {
        x: 100,
        y: 40,
        rotate: 8,
        opacity: 0.5,
        scale: 0.85,
        duration: 0.5,
        ease: "expo.inOut",
      },
      "-=0.3"
    )

      // Bottom Image: Swing out Left and Come Forward
      .fromTo(
        bottomImg,
        {
          x: 0,
          scale: 0.9,
          zIndex: 0,
          opacity: 0.5,
        },
        {
          x: -120,
          scale: 1.05,
          opacity: 1,
          rotate: -5,
          zIndex: 20,
          duration: 0.5,
          ease: "expo.inOut",
        },
        "<"
      )

      // Switch Depths at the peak of the movement
      .set(topImg, { zIndex: 0 })
      .set(bottomImg, { zIndex: 10 })

      // Return both to center
      .to([topImg, bottomImg], {
        x: 0,
        y: 0,
        rotate: 0,
        opacity: (i) => (i === 0 ? 0.5 : 1),
        scale: (i) => (i === 0 ? 0.6 : 1), // Hide back image by shrinking to 60%
        duration: 0.6,
        stagger: 0.05,
        ease: "elastic.out(1, 0.8)",
      })

      // 3. Text Re-Split and Entrance
      .add(async () => {
        await nextTick();
        splitElements();

        gsap.set(".review-title, .review-description", {
          opacity: 1,
          filter: "blur(0px)",
        });

        // counter.value =
        //   counter.value === reviews.length - 1 ? 0 : counter.value + 1;
        gsap.fromTo(
          titleSplit.lines,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.1, ease: "expo.out", duration: 0.8 }
        );

        gsap.fromTo(
          descSplit.words,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.015, ease: "expo.out", duration: 0.8 },
          "-=0.6"
        );
      }, "-=0.4");
  };
</script>

<template>
  <div class="my-40 w-svw overflow-hidden bg-transparent py-40 text-white">
    <div class="max-467.5 mx-auto w-full">
      <div class="flex flex-col items-center gap-25">
        <div
          class="revhead /font-[Haas] flex w-full justify-center px-10 text-center text-[clamp(30px,4vw,48px)]"
        >
          what others think about us
        </div>

        <div
          class="aspect-[2.8/1] h-auto w-full max-w-467.5 px-10 py-5 lg:px-17 lg:py-10"
        >
          <div class="flex h-full w-full gap-10 px-5 lg:gap-30">
            <div
              class="test relative flex h-auto flex-1 items-center justify-center overflow-visible lg:h-full"
            >
              <img
                src="/test4.png"
                class="image1 absolute h-130 w-120 rounded-[100px] object-cover"
                style="z-index: 10"
              />
              <img
                src="/test1.jpg"
                class="image2 absolute mt-10 h-130 w-120 rounded-[100px] object-cover"
                style="z-index: 0; opacity: 0.5"
              />
            </div>

            <div class="flex h-full w-[60%] flex-col justify-between gap-10">
              <div class="flex flex-col gap-10.5">
                <div
                  class="review-title /font-[Haas] pr-10 text-[clamp(20px,3vw,58px)] leading-tight font-thin uppercase italic"
                >
                  {{ reviews[counter].title }}
                </div>
                <div
                  class="review-description /font-[Switzer] text-[clamp(13px,2vw,22px)] leading-[1.4] text-gray-400"
                >
                  " {{ reviews[counter].desc }} "
                </div>
              </div>

              <div class="flex w-full gap-3.75">
                <button
                  @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                >
                  <img src="/arrow-max-left.svg" class="invert max-lg:size-5" />
                </button>
                <button
                  @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                >
                  <img
                    src="/arrow-max-right.svg"
                    class="invert max-lg:size-5"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .test {
    --dash-length: 32px;
    --dash-thickness: 2px;
    --dash-color: #3f3f3f30;
    background-image:
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%);
    background-position: top, bottom, left, right;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size:
      var(--dash-length) var(--dash-thickness),
      var(--dash-length) var(--dash-thickness),
      var(--dash-thickness) var(--dash-length),
      var(--dash-thickness) var(--dash-length);
  }

  img {
    will-change: transform, opacity, z-index;
  }

  /* Optional: add a slight shadow to the front image during shuffle */
  .image1,
  .image2 {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));
  }
</style> -->


<script setup lang="tsx">
  import gsap from "gsap";
  import { SplitText } from "gsap/all";
  import { ref, onMounted, nextTick, computed } from "vue";

  gsap.registerPlugin(SplitText);

  let titleSplit: SplitText;
  let descSplit: SplitText;
  const isAnimating = ref(false);
  const isFirstImageFront = ref(true);

  const reviews = [
    {
      name: "Belay",
      title: "Fast And Reliable Incredible Build Quality Their Quality Is Always Worth The Money",
      desc: "I've had the pleasure of collaborating on multiple projects, and the ability to turn ideas into stunning, functional designs is unmatched.",
      image1: "/test3.jpg",
      image2: "/test2.jpg",
    },
    {
      name: "Dumeme",
      title: "Unmatched Reliability And Incredible Build Quality That Never Disappoints",
      desc: "I’ve worked alongside team members on different projects, and they consistently bring ideas to life through impressive and functional designs.",
      image1: "/test1.jpg",
      image2: "/place.webp",
    },
    {
      name: "Sarah Jenkins",
      title: "Absolute Game Changer For Our Workflow Minimal Clean And Highly Intuitive",
      desc: "The attention to detail in the layout architecture saved us weeks of engineering. It feels premium right out of the box.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "David Chen",
      title: "Exemplary Performance And Code Architecture That Scales Exceptionally Well",
      desc: "Blown away by how fast this handles heavy interaction loads. The implementation is lightweight yet incredibly robust.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Elena Rostova",
      title: "Stunning Aesthetics Combined With Flawless Mechanical Engineering Execution",
      desc: "It is incredibly rare to find tools that balance pixel-perfect aesthetics with production-ready architectural stability.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Marcus Vance",
      title: "Uncompromising Attention To Detail Across Every Single Interface Element",
      desc: "Every interaction state, fluid breakpoint, and asset feels completely intentional. An absolute joy to work with.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Amina Diop",
      title: "Incredible Turnaround Times Without Saving On Production Build Quality",
      desc: "Deadlines were tight but the delivery surpassed all expectations. Clean modular architecture that was incredibly easy to integrate.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Liam O'Connor",
      title: "Remarkable Technical Support And End To End Execution Quality Control",
      desc: "Beyond the gorgeous layouts, the structural foundation is reliable. Highly responsive architecture built for real use.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Chie Tanaka",
      title: "Minimalist Modern Functional Design Language Handled With Complete Mastery",
      desc: "Eliminates unnecessary clutter while maximizing functional space. The visual hierarchy guides users perfectly.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Carlos Mendez",
      title: "Exceeded All Benchmarks For Interaction Speed And Asset Optimization",
      desc: "Our core performance metrics improved significantly post-deployment. Resource management here is incredibly efficient.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Amara Okafor",
      title: "A Masterclass In Modern Seamless User Interfaces And Smooth Systems Integration",
      desc: "The transition layers and clean APIs made connecting our backend architecture simpler than we ever anticipated.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Devon Miller",
      title: "Flawless Execution From Initial Conceptual Strategy To Final Production Launch",
      desc: "They precisely anticipated user friction points and engineered clean visual systems to resolve them perfectly.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Sofia Gatti",
      title: "Incredible Fluidity And Responsive Balance Across Modern Multi Platform Screens",
      desc: "Maintains its pristine aesthetic precision and structural integrity beautifully across ultra-wide layouts and mobile devices alike.",
      image1: "/place.webp",
      image2: "/place.webp",
    },
    {
      name: "Alex Mercer",
      title: "Robust Scalable Architecture Wrapped Indulgently In A Premium Experience",
      desc: "The system provides an elite balance of production security alongside fluid, beautiful creative expression.",
      image1: "/place.webp",
      image2: "/place.webp",
    }
  ];

  const counter = ref(0);
  const currentReview = computed(() => reviews[counter.value]);

  // Predict next index to gracefully pre-load images onto the background container
  const nextCounter = computed(() => (counter.value + 1) % reviews.length);
  const nextReview = computed(() => reviews[nextCounter.value]);

  // Dynamically map resources to prevent swapping artifacts
  const image1Source = computed(() => isFirstImageFront.value ? currentReview.value.image1 : nextReview.value.image1);
  const image2Source = computed(() => isFirstImageFront.value ? nextReview.value.image2 : currentReview.value.image2);

  const splitElements = () => {
    if (titleSplit) titleSplit.revert();
    if (descSplit) descSplit.revert();
    titleSplit = new SplitText(".review-title", { type: "lines" });
    descSplit = new SplitText(".review-description", { type: "words,chars" });
  };

  onMounted(async () => {
    await nextTick();
    splitElements();
  });

  const handleShuffle = async () => {
    if (isAnimating.value) return;
    isAnimating.value = true;

    const topImg = isFirstImageFront.value ? ".image1" : ".image2";
    const bottomImg = isFirstImageFront.value ? ".image2" : ".image1";

    const tl = gsap.timeline({
      onComplete: () => {
        counter.value = (counter.value + 1) % reviews.length;
        isFirstImageFront.value = !isFirstImageFront.value;
        isAnimating.value = false;
      },
    });

    // 1. Text Out
    tl.to([".review-title", ".review-description", ".review-author"], {
      opacity: 0,
      filter: "blur(4px)",
      y: 15,
      duration: 0.4,
      ease: "power2.inOut",
    });

    // 2. The Shuffle Palette Animation
    tl.to(
      topImg,
      {
        x: 100,
        y: 40,
        rotate: 8,
        opacity: 0.5,
        scale: 0.85,
        duration: 0.5,
        ease: "expo.inOut",
      },
      "-=0.3"
    )
    .fromTo(
      bottomImg,
      {
        x: 0,
        scale: 0.9,
        zIndex: 0,
        opacity: 0.5,
      },
      {
        x: -120,
        scale: 1.05,
        opacity: 1,
        rotate: -5,
        zIndex: 20,
        duration: 0.5,
        ease: "expo.inOut",
      },
      "<"
    )
    // Synchronize layered ordering heights mid-flight
    .set(topImg, { zIndex: 0 })
    .set(bottomImg, { zIndex: 10 })
    // Re-center system sets smoothly
    .to([topImg, bottomImg], {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: (i) => (i === 0 ? 0.5 : 1),
      scale: (i) => (i === 0 ? 0.6 : 1),
      duration: 0.6,
      stagger: 0.05,
      ease: "elastic.out(1, 0.8)",
    })
    // 3. Re-split and text entrance
    .add(async () => {
      await nextTick();
      splitElements();

      gsap.set(".review-title, .review-description, .review-author", {
        opacity: 1,
        filter: "blur(0px)",
      });

      gsap.fromTo(
        titleSplit.lines,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.1, ease: "expo.out", duration: 0.8 }
      );

      gsap.fromTo(
        descSplit.words,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.015, ease: "expo.out", duration: 0.8 },
        "-=0.6"
      );

      gsap.fromTo(
        ".review-author",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.6 },
        "-=0.4"
      );
    }, "-=0.4");
  };
</script>

<template>
  <div class="my-40 w-svw overflow-hidden bg-transparent py-40 text-white">
    <div class="max-467.5 mx-auto w-full">
      <div class="flex flex-col items-center gap-25">
        <div class="revhead /font-[Haas] flex w-full justify-center px-10 text-center text-[clamp(30px,4vw,48px)] uppercase">
          what others think about us
        </div>

        <div class="aspect-[2.8/1] h-auto w-full max-w-467.5 px-10 py-5 lg:px-17 lg:py-10">
          <div class="flex h-full w-full gap-10 px-5 lg:gap-30">

            <!-- Dynamic Image Swapping Stack -->
            <div class="test relative flex h-auto flex-1 items-center justify-center overflow-visible lg:h-full">
              <img
                :src="image1Source"
                class="image1 absolute h-130 w-120 rounded-[100px] object-cover"
                :style="{ zIndex: isFirstImageFront ? 10 : 0, opacity: isFirstImageFront ? 1 : 0.5 }"
              />
              <img
                :src="image2Source"
                class="image2 absolute mt-10 h-130 w-120 rounded-[100px] object-cover"
                :style="{ zIndex: isFirstImageFront ? 0 : 10, opacity: isFirstImageFront ? 0.5 : 1 }"
              />
            </div>

            <!-- Content Area -->
            <div class="flex h-full w-[60%] flex-col justify-between gap-10">
              <div class="flex flex-col gap-10.5">
                <div class="review-title /font-[Haas] pr-10 text-[clamp(20px,3vw,58px)] leading-tight font-thin uppercase italic">
                  {{ currentReview.title }}
                </div>
                <div class="review-description /font-[Switzer] text-[clamp(13px,2vw,22px)] leading-[1.4] text-gray-400">
                  " {{ currentReview.desc }} "
                </div>
                <div class="review-author mt-2 text-[clamp(12px,1.5vw,18px)] font-semibold tracking-wider text-white uppercase">
                  — {{ currentReview.name }}
                </div>
              </div>

              <!-- Controls -->
              <div class="flex w-full gap-3.75">
                <button
                  @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                >
                  <img src="/arrow-max-left.svg" class="invert max-lg:size-5" />
                </button>
                <button
                  @click="handleShuffle"
                  class="flex w-full items-center justify-center rounded-full border border-white p-6.5 transition-all hover:bg-white/10 active:scale-95"
                >
                  <img src="/arrow-max-right.svg" class="invert max-lg:size-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .test {
    --dash-length: 32px;
    --dash-thickness: 2px;
    --dash-color: #3f3f3f30;
    background-image:
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to right, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%),
      linear-gradient(to bottom, var(--dash-color) 50%, transparent 50%);
    background-position: top, bottom, left, right;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size:
      var(--dash-length) var(--dash-thickness),
      var(--dash-length) var(--dash-thickness),
      var(--dash-thickness) var(--dash-length),
      var(--dash-thickness) var(--dash-length);
  }

  img {
    will-change: transform, opacity, z-index;
  }

  .image1,
  .image2 {
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.05));
  }
</style>
