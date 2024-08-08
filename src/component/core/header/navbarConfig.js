export const navItems = [
  {
    title: "Dashboard",
    submenu: [
      {
        title: "SRE Highlights",
        url: "/",
        menuRouteTitle: "/",
        parentTitle: "Dashboard",
      },
      {
        title: "Sea of Greens",
        url: "/",
        menuRouteTitle: "/",
        parentTitle: "Dashboard",
      },
    ],
  },

  {
    title: "SOG",
    submenu: [
      {
        title: "SOG",
        url: "/sog",
        menuRouteTitle: "/sog",
        parentTitle: "SOG",
      },
    ],
  },

  {
    title: "MARVEL",
    submenuType: "horizontal",
    submenu: [
      {
        title: "Self Healing",
        parentTitle: "MARVEL Products",
        submenu: [
          {
            title: "Data Source",
            url: "/configuration",
            menuRouteTitle: "DataSource",
            parentTitle: "Configuration",
          },
          {
            title: "Application",
            url: "/configuration",
            menuRouteTitle: "Application",
            parentTitle: "Configuration",
          },
        ],
      },
      {
        title: "SHIELD",
        parentTitle: "MARVEL Prodcuts",
        path: "/sogConfiguration",
        submenu: [
          {
            title: "Request Certificates",
            menuRouteTitle: "/req-certificates",
            parentTitle: "Request Certificates",
            submenu: [{}],
          },
          {
            title: "Onboard Certificates",
            menuRouteTitle: "/onboard-certificates",
            parentTitle: "Onboard Certificates",
            submenu: [
              {
                title: "",
                url: "/lb-monitor",
                menuRouteTitle: "/lb-monitor",
                parentTitle: "Onboard Certificates",
              },
            ],
          },
          {
            title: "Monitor Certificates",
            parentTitle: "Monitor Certificates",
            path: "/monitor-certificate",
            submenu: [
              {
                title: "LB",
                url: "/lb-monitor",
                menuRouteTitle: "/lb-monitor",
                parentTitle: "Monitor Certificate",
              },
              {
                title: "Server Side",
                url: "/server-side-monitor",
                menuRouteTitle: "/server-side-monitor",
                parentTitle: "Monitor Certificate",
              },
              {
                title: "TwoWay SSL",
                url: "/two-way-ssl-monitor",
                menuRouteTitle: "/two-way-ssl-monitor",
                parentTitle: "Monitor Certificate",
              },
            ],
          },
        ],
      },
      {
        title: "NEBULA",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "Nebula",
            url: "/nebula",
            menuRouteTitle: "/nebula",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "HYDRA",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "HYDRA",
            url: "/hydra",
            menuRouteTitle: "/hydra",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "SENTRY",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "SENTRY",
            url: "/sentry",
            menuRouteTitle: "/sentry",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "Unified Pipeline",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "Unified Pipeline",
            url: "/cicd",
            menuRouteTitle: "/cicd",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "HAWKEYE",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "HAWKEYE",
            url: "/hawkeye",
            menuRouteTitle: "/hawkeye",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "GURDIAN",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "GURDIAN",
            url: "/gurdian",
            menuRouteTitle: "/gurdian",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "CAPSULE",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "CAPSULE",
            url: "/capsule",
            menuRouteTitle: "/capsule",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "JARVIS",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "JARVIS",
            url: "/jarvis",
            menuRouteTitle: "/jarvis",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
      {
        title: "IAC",
        parentTitle: "MARVEL Prodcuts",
        submenu: [
          {
            title: "IAC",
            url: "/iac",
            menuRouteTitle: "/iac",
            parentTitle: "MARVEL Prodcuts",
          },
        ],
      },
    ],
  },
  {
    title: "Ops",
    submenu: [
      {
        title: "Ops",
        url: "/ops",
        menuRouteTitle: "/ops",
        parentTitle: "Ops",
      },
    ],
  },
  {
    title: "Arsenal",
    submenu: [
      {
        title: "CRUD Operation",
        url: "/",
        menuRouteTitle: "/",
        parentTitle: "Arsenal",
      },
    ],
  },
  {
    title: "Iconic",
    submenu: [
      {
        title: "Iconic",
        url: "/",
        menuRouteTitle: "/",
        parentTitle: "Iconic",
      },
    ],
  },
  {
    title: "Knowledge Base",
    submenu: [
      {
        title: "Knowledge Base",
        url: "/faq",
        menuRouteTitle: "/faq",
        parentTitle: "Knowledge Base",
      },
    ],
  },
];
