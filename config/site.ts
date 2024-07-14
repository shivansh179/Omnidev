// site.ts
export const siteConfig = {
  name: "CIIE OmniDev Kit",
  description: "CIIE Provided Course Kit",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Class-Recordings",
      href: "/recording"
    },
    {
      label: "Add-Video",
      href: "/addvideos"
    },
   
    {
      label: "StartQuiz",
      href: "/startQuiz"
    },
    {
      label: "Score Board",
      href: "/userScore"
    },
    {
      label: "Notes",
      href: "/notes"
    },
    {
      label: "Add Notes",
      href: "/addNotes"
    },
    {
      label: " ",
      href: "/cloudvideo"
    },
    {
      label: " ",
      href: "/dsaNotes"
    },
    {
      label: " ",
      href: "/login"
    },
    {
      label: " ",
      href: "/restricted"
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Class-Recordings",
      href: "/recording"
    },
    {
      label: "Add-Video",
      href: "/addvideos"
    },
  
    {
      label: "StartQuiz",
      href: "/startQuiz"
    },
    {
      label: "Score Board",
      href: "/userScore"
    },
    {
      label: "Notes",
      href: "/notes"
    },
    {
      label: "Add Notes",
      href: "/addNotes"
    },
  ],
  links: {
    discord: "https://discord.com/invite/NnvmTMkn",
  },
};

export type SiteConfig = typeof siteConfig;
