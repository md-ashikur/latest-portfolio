import gsap from "gsap";

// ─── Navbar mount: slide down + fade in ──────────────────────────────────────
export const animateNavbarMount = (navbar: HTMLElement | null): void => {
  if (!navbar) return;
  gsap.fromTo(
    navbar,
    { y: -80, opacity: 0, force3D: true },
    // force3D: true → GSAP always writes translate3d(), keeping the
    // compositor layer alive so backdrop-filter works in Chrome.
    { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.15, force3D: true }
  );
};

// ─── Logo word entrance: chars stagger in ────────────────────────────────────
export const animateLogoEntrance = (logo: HTMLElement | null): void => {
  if (!logo) return;
  const chars = logo.querySelectorAll(".logo-char");
  gsap.fromTo(
    chars,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power2.out", delay: 0.5 }
  );
};

// ─── Burger icon → X ─────────────────────────────────────────────────────────
export const animateBurgerToX = (
  line1: HTMLElement | null,
  line2: HTMLElement | null,
  line3: HTMLElement | null
): void => {
  if (!line1 || !line2 || !line3) return;
  const tl = gsap.timeline();
  tl.to(line2, { scaleX: 0, opacity: 0, duration: 0.2, ease: "power2.in" })
    .to(line1, { y: 9, duration: 0.25, ease: "power2.inOut" }, "<0.05")
    .to(line3, { y: -9, duration: 0.25, ease: "power2.inOut" }, "<")
    .to(line1, { rotation: 45, duration: 0.25, ease: "power2.out" })
    .to(line3, { rotation: -45, duration: 0.25, ease: "power2.out" }, "<");
};

// ─── X → Burger icon ─────────────────────────────────────────────────────────
export const animateBurgerToDefault = (
  line1: HTMLElement | null,
  line2: HTMLElement | null,
  line3: HTMLElement | null
): void => {
  if (!line1 || !line2 || !line3) return;
  const tl = gsap.timeline();
  tl.to(line1, { rotation: 0, duration: 0.25, ease: "power2.in" })
    .to(line3, { rotation: 0, duration: 0.25, ease: "power2.in" }, "<")
    .to(line1, { y: 0, duration: 0.25, ease: "power2.inOut" })
    .to(line3, { y: 0, duration: 0.25, ease: "power2.inOut" }, "<")
    .to(line2, { scaleX: 1, opacity: 1, duration: 0.2, ease: "power2.out" });
};

// ─── Side drawer: slide in from right ────────────────────────────────────────
export const animateDrawerOpen = (
  drawer: HTMLElement | null,
  overlay: HTMLElement | null,
  navLinks: HTMLElement | null
): void => {
  if (!drawer || !overlay) return;

  // Make visible before animating
  gsap.set(drawer, { x: "100%", visibility: "visible" });
  gsap.set(overlay, { display: "block" });

  const tl = gsap.timeline();
  tl.to(overlay, { opacity: 1, duration: 0.3, ease: "power2.out" })
    .to(drawer, { x: "0%", duration: 0.5, ease: "power4.out" }, "<0.05");

  // Stagger nav links + decorative elements after drawer arrives
  if (navLinks) {
    const items = navLinks.querySelectorAll(".nav-item");
    tl.fromTo(
      items,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.45, stagger: 0.1, ease: "power2.out" },
      "-=0.2"
    );
  }
};

// ─── Side drawer: slide out to right ─────────────────────────────────────────
export const animateDrawerClose = (
  drawer: HTMLElement | null,
  overlay: HTMLElement | null,
  onComplete?: () => void
): void => {
  if (!drawer || !overlay) return;

  const tl = gsap.timeline({ onComplete });
  tl.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" })
    .to(drawer, { x: "100%", duration: 0.45, ease: "power4.in" }, "<");
};

// ─── Navbar scroll shrink / expand ──────────────────────────────────────────
export const animateNavbarShrink = (navbar: HTMLElement | null): void => {
  if (!navbar) return;
  gsap.to(navbar, { paddingTop: "8px", paddingBottom: "8px", duration: 0.3, ease: "power2.out" });
};

export const animateNavbarExpand = (navbar: HTMLElement | null): void => {
  if (!navbar) return;
  gsap.to(navbar, { paddingTop: "8px", paddingBottom: "8px", duration: 0.3, ease: "power2.out" });
};
