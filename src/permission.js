const menuArray = [
  {
    lang: "首页",
    permissions: [],
    id: 100,
    menuId: "1",
    path: "/home",
  },
  {
    lang: "路由嵌套",
    permissions: [],
    id: 800,
    menuId: "9",
    childrens: [
      {
        lang: "菜单1",
        permissions: [],
        id: 810,
        menuId: "2",
        childrens: [
          {
            lang: "菜单1-1",
            id: 811,
            menuId: "3",
            path: "/menu/menu1/menu1_1",
          },
          {
            lang: "菜单1-2",
            id: 814,
            menuId: "4",
            childrens: [
              {
                lang: "菜单1-2-1",
                id: 8140,
                menuId: "5",
                path: "/menu/menu1//menu1-2/menu1_2_1",
              },
              {
                lang: "菜单1-2-2",
                id: 8140,
                menuId: "6",
                path: "/menu/menu1/menu1-2/menu1_2_2",
              },
            ],
          },
        ],
      },
      {
        lang: "菜单2",
        permissions: [],
        id: 810,
        menuId: "1000",
        childrens: [
          {
            lang: "菜单2-1",
            id: 811,
            menuId: "10",
            path: "/menu/menu2/menu2_1",
          },
        ],
      },
    ],
  },
  {
    lang: "外部链接",
    permissions: [],
    id: 900,
    menuId: "11",
    path: "https://github.com/CaoXueLiang",
  },
];

export default menuArray;
