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
      label: "Quiz",
      href: "/dsaQuiz"
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
  ],
  navMenuItems: [
    
    // {
    //   label: "Profile",
    //   href: "/profile",
    // },
    // {
    //   label: "Dashboard",
    //   href: "/dashboard",
    // },
    // {
    //   label: "Projects",
    //   href: "/projects",
    // },
    // {
    //   label: "Team",
    //   href: "/team",
    // },
    // {
    //   label: "Calendar",
    //   href: "/calendar",
    // },
    // {
    //   label: "Settings",
    //   href: "/settings",
    // },
    // {
    //   label: "Help & Feedback",
    //   href: "/help-feedback",
    // },
    // {
    //   label: "Logout",
    //   href: "/logout",
    // },
  ],
  links: {
    discord: "https://discord.com/invite/NnvmTMkn",
  },
};

export type SiteConfig = typeof siteConfig;
