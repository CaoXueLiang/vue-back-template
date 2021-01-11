const menuArray = [
  {
    lang: "控制台",
    permissions: [],
    id: 100,
    menuId: "2",
    path: "/contractorback/control-board",
  },
  {
    lang: "用户管理",
    permissions: [],
    id: 200,
    menuId: "3",
    children: [
      {
        lang: "人员管理",
        permissions: [],
        id: 210,
        menuId: "4",
        path: "/contractorback/personnelManage",
      },
      {
        lang: "角色管理",
        permissions: [],
        id: 220,
        menuId: "5",
        path: "/contractorback/roleManage",
      },
      {
        lang: "资源管理",
        permissions: [],
        id: 230,
        menuId: "6",
        path: "/contractorback/resource-main",
      },
    ],
    childrens: [
      {
        lang: "人员管理",
        permissions: [],
        id: 210,
        menuId: "4",
        path: "/contractorback/personnelManage",
      },
      {
        lang: "角色管理",
        permissions: [],
        id: 220,
        menuId: "5",
        path: "/contractorback/roleManage",
      },
      {
        lang: "资源管理",
        permissions: [],
        id: 230,
        menuId: "6",
        path: "/contractorback/resource-main",
      },
    ],
  },
  {
    lang: "应用管理",
    permissions: [],
    id: 800,
    menuId: "9",
    children: [
      {
        lang: "5G高清视频监控",
        permissions: [],
        id: 810,
        menuId: "10",
        children: [
          {
            lang: "视频监控授权页",
            id: 811,
            menuId: "11",
            path: "/contractorback/videoMonitorAuthor",
          },
          {
            lang: "人员信息管理",
            id: 816,
            menuId: "12",
            children: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 812,
            menuId: "15",
            children: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
            childrens: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 813,
            menuId: "17",
            path: "/contractorback/work-surface",
          },
          {
            lang: "视频监控配置",
            id: 814,
            menuId: "18",
            children: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
            childrens: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
          },
          { lang: "运维管理", id: 815, menuId: "20" },
        ],
        childrens: [
          {
            lang: "视频监控授权页",
            id: 811,
            menuId: "11",
            path: "/contractorback/videoMonitorAuthor",
          },
          {
            lang: "人员信息管理",
            id: 816,
            menuId: "12",
            children: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 812,
            menuId: "15",
            children: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
            childrens: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 813,
            menuId: "17",
            path: "/contractorback/work-surface",
          },
          {
            lang: "视频监控配置",
            id: 814,
            menuId: "18",
            children: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
            childrens: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
          },
        ],
      },
      {
        lang: "AI安全预警",
        permissions: [],
        id: 820,
        menuId: "21",
        children: [
          {
            lang: "AI告警系统授权页",
            id: 821,
            menuId: "22",
            path: "/contractorback/aiAlarmAuthor",
          },
          {
            lang: "人员信息管理",
            id: 825,
            menuId: "23",
            children: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 822,
            menuId: "26",
            children: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
            childrens: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
          },
          {
            lang: "AI能力池管理",
            id: 823,
            menuId: "28",
            path: "/contractorback/aiAbilityManage",
          },
          {
            lang: "综合管控配置",
            id: 824,
            menuId: "29",
            children: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
            childrens: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "AI告警系统授权页",
            id: 821,
            menuId: "22",
            path: "/contractorback/aiAlarmAuthor",
          },
          {
            lang: "人员信息管理",
            id: 825,
            menuId: "23",
            children: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 822,
            menuId: "26",
            children: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
            childrens: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
          },
          {
            lang: "AI能力池管理",
            id: 823,
            menuId: "28",
            path: "/contractorback/aiAbilityManage",
          },
          {
            lang: "综合管控配置",
            id: 824,
            menuId: "29",
            children: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
            childrens: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
          },
        ],
      },
      {
        lang: "塔机安全辅助",
        permissions: [],
        id: 870,
        menuId: "36",
        children: [
          {
            lang: "塔机授权页",
            id: 871,
            menuId: "37",
            path: "/contractorback/towerCraneAuthor",
          },
          {
            lang: "人员信息管理",
            id: 875,
            menuId: "38",
            children: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 872,
            menuId: "41",
            children: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
            childrens: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 873,
            menuId: "43",
            path: "/contractorback/worksurfaceManage",
          },
          {
            lang: "综合管控配置",
            id: 874,
            menuId: "44",
            children: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
            childrens: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "塔机授权页",
            id: 871,
            menuId: "37",
            path: "/contractorback/towerCraneAuthor",
          },
          {
            lang: "人员信息管理",
            id: 875,
            menuId: "38",
            children: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 872,
            menuId: "41",
            children: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
            childrens: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 873,
            menuId: "43",
            path: "/contractorback/worksurfaceManage",
          },
          {
            lang: "综合管控配置",
            id: 874,
            menuId: "44",
            children: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
            childrens: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
          },
        ],
      },
      {
        lang: "劳务人员现场实名制管理",
        permissions: [],
        id: 880,
        menuId: "46",
        children: [
          {
            lang: "劳务实名制系统授权页",
            id: 881,
            menuId: "47",
            path: "/contractorback/laborRealNameAuthor",
          },
          {
            lang: "人员管理",
            id: 883,
            menuId: "48",
            children: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
          },
          {
            lang: "应用配置",
            id: 882,
            menuId: "51",
            children: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
            childrens: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "劳务实名制系统授权页",
            id: 881,
            menuId: "47",
            path: "/contractorback/laborRealNameAuthor",
          },
          {
            lang: "人员管理",
            id: 883,
            menuId: "48",
            children: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
          },
          {
            lang: "应用配置",
            id: 882,
            menuId: "51",
            children: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
            childrens: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
          },
        ],
      },
      {
        lang: "移动协作巡检",
        permissions: [],
        id: 890,
        menuId: "56",
        children: [
          {
            lang: "移动协作巡检授权页",
            id: 891,
            menuId: "57",
            path: "/contractorback/movePollingAuthor",
          },
          {
            lang: "人员信息管理",
            id: 893,
            menuId: "58",
            children: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
          },
          {
            lang: "综合管控配置",
            id: 892,
            menuId: "61",
            children: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
            childrens: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "移动协作巡检授权页",
            id: 891,
            menuId: "57",
            path: "/contractorback/movePollingAuthor",
          },
          {
            lang: "人员信息管理",
            id: 893,
            menuId: "58",
            children: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
          },
          {
            lang: "综合管控配置",
            id: 892,
            menuId: "61",
            children: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
            childrens: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
          },
        ],
      },
      {
        lang: "混凝土八控",
        permissions: [],
        id: 830,
        menuId: "63",
        children: [
          {
            lang: "混凝土八控授权页",
            id: 831,
            menuId: "64",
            path: "/contractorback/concreteControlAuthor",
          },
          {
            lang: "人员信息管理",
            id: 832,
            menuId: "65",
            children: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
          },
          {
            lang: "流程管理",
            id: 833,
            menuId: "68",
            children: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
            childrens: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "混凝土八控授权页",
            id: 831,
            menuId: "64",
            path: "/contractorback/concreteControlAuthor",
          },
          {
            lang: "人员信息管理",
            id: 832,
            menuId: "65",
            children: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
          },
          {
            lang: "流程管理",
            id: 833,
            menuId: "68",
            children: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
            childrens: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
          },
        ],
      },
      {
        lang: "质量安全管理",
        permissions: [],
        id: 840,
        menuId: "71",
        children: [
          {
            lang: "质量安全管理授权页",
            id: 841,
            menuId: "72",
            path: "/contractorback/qualitySafetyAuthor",
          },
          {
            lang: "人员信息管理",
            id: 842,
            menuId: "73",
            children: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
          },
          {
            lang: "资源管理",
            id: 843,
            menuId: "76",
            children: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
            childrens: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "质量安全管理授权页",
            id: 841,
            menuId: "72",
            path: "/contractorback/qualitySafetyAuthor",
          },
          {
            lang: "人员信息管理",
            id: 842,
            menuId: "73",
            children: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
          },
          {
            lang: "资源管理",
            id: 843,
            menuId: "76",
            children: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
            childrens: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
          },
        ],
      },
    ],
    childrens: [
      {
        lang: "5G高清视频监控",
        permissions: [],
        id: 810,
        menuId: "10",
        children: [
          {
            lang: "视频监控授权页",
            id: 811,
            menuId: "11",
            path: "/contractorback/videoMonitorAuthor",
          },
          {
            lang: "人员信息管理",
            id: 816,
            menuId: "12",
            children: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 812,
            menuId: "15",
            children: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
            childrens: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 813,
            menuId: "17",
            path: "/contractorback/work-surface",
          },
          {
            lang: "视频监控配置",
            id: 814,
            menuId: "18",
            children: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
            childrens: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
          },
          { lang: "运维管理", id: 815, menuId: "20" },
        ],
        childrens: [
          {
            lang: "视频监控授权页",
            id: 811,
            menuId: "11",
            path: "/contractorback/videoMonitorAuthor",
          },
          {
            lang: "人员信息管理",
            id: 816,
            menuId: "12",
            children: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8160,
                menuId: "13",
                path: "/contractorback/videoroleManage",
              },
              {
                lang: "用户管理",
                id: 8162,
                menuId: "14",
                path: "/contractorback/videouserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 812,
            menuId: "15",
            children: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
            childrens: [
              {
                lang: "监控点",
                id: 8121,
                menuId: "16",
                path: "/contractorback/monitor",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 813,
            menuId: "17",
            path: "/contractorback/work-surface",
          },
          {
            lang: "视频监控配置",
            id: 814,
            menuId: "18",
            children: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
            childrens: [
              {
                lang: "应用授权",
                id: 8140,
                menuId: "19",
                path: "/contractorback/applicationAuthor",
              },
            ],
          },
        ],
      },
      {
        lang: "AI安全预警",
        permissions: [],
        id: 820,
        menuId: "21",
        children: [
          {
            lang: "AI告警系统授权页",
            id: 821,
            menuId: "22",
            path: "/contractorback/aiAlarmAuthor",
          },
          {
            lang: "人员信息管理",
            id: 825,
            menuId: "23",
            children: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 822,
            menuId: "26",
            children: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
            childrens: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
          },
          {
            lang: "AI能力池管理",
            id: 823,
            menuId: "28",
            path: "/contractorback/aiAbilityManage",
          },
          {
            lang: "综合管控配置",
            id: 824,
            menuId: "29",
            children: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
            childrens: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "AI告警系统授权页",
            id: 821,
            menuId: "22",
            path: "/contractorback/aiAlarmAuthor",
          },
          {
            lang: "人员信息管理",
            id: 825,
            menuId: "23",
            children: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8250,
                menuId: "24",
                path: "/contractorback/aiAlarmroleManage",
              },
              {
                lang: "用户管理",
                id: 8251,
                menuId: "25",
                path: "/contractorback/aiAlarmuserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 822,
            menuId: "26",
            children: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
            childrens: [
              {
                lang: "监控点管理",
                id: 8220,
                menuId: "27",
                path: "/contractorback/monitoryPointManage",
              },
            ],
          },
          {
            lang: "AI能力池管理",
            id: 823,
            menuId: "28",
            path: "/contractorback/aiAbilityManage",
          },
          {
            lang: "综合管控配置",
            id: 824,
            menuId: "29",
            children: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
            childrens: [
              {
                lang: "事件联动",
                id: 8240,
                menuId: "30",
                path: "/contractorback/eventlinkage",
              },
              {
                lang: "告警声音管理",
                id: 8241,
                menuId: "31",
                path: "/contractorback/alarmVoiceManage",
              },
              {
                lang: "时间段模版管理",
                id: 8242,
                menuId: "32",
                path: "/contractorback/timeThemeManage",
              },
              {
                lang: "工作流管理",
                permissions: [],
                id: 8243,
                menuId: "33",
                path: "/contractorback/process-design",
              },
              {
                lang: "检测区域管理",
                id: 8244,
                menuId: "34",
                path: "/contractorback/checkAreaManage",
              },
              {
                lang: "数据维护",
                id: 8245,
                menuId: "35",
                path: "/contractorback/dataMaintenance",
              },
            ],
          },
        ],
      },
      {
        lang: "塔机安全辅助",
        permissions: [],
        id: 870,
        menuId: "36",
        children: [
          {
            lang: "塔机授权页",
            id: 871,
            menuId: "37",
            path: "/contractorback/towerCraneAuthor",
          },
          {
            lang: "人员信息管理",
            id: 875,
            menuId: "38",
            children: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 872,
            menuId: "41",
            children: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
            childrens: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 873,
            menuId: "43",
            path: "/contractorback/worksurfaceManage",
          },
          {
            lang: "综合管控配置",
            id: 874,
            menuId: "44",
            children: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
            childrens: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "塔机授权页",
            id: 871,
            menuId: "37",
            path: "/contractorback/towerCraneAuthor",
          },
          {
            lang: "人员信息管理",
            id: 875,
            menuId: "38",
            children: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8750,
                menuId: "39",
                path: "/contractorback/towerRoleManage",
              },
              {
                lang: "用户管理",
                id: 8751,
                menuId: "40",
                path: "/contractorback/towerUserManage",
              },
            ],
          },
          {
            lang: "设备管理",
            id: 872,
            menuId: "41",
            children: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
            childrens: [
              {
                lang: "塔机管理",
                id: 8720,
                menuId: "42",
                path: "/contractorback/towerMonitotPoints",
              },
            ],
          },
          {
            lang: "作业面管理",
            id: 873,
            menuId: "43",
            path: "/contractorback/worksurfaceManage",
          },
          {
            lang: "综合管控配置",
            id: 874,
            menuId: "44",
            children: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
            childrens: [
              {
                lang: "告警配置",
                id: 8741,
                menuId: "45",
                path: "/contractorback/alarmConfig",
              },
            ],
          },
        ],
      },
      {
        lang: "劳务人员现场实名制管理",
        permissions: [],
        id: 880,
        menuId: "46",
        children: [
          {
            lang: "劳务实名制系统授权页",
            id: 881,
            menuId: "47",
            path: "/contractorback/laborRealNameAuthor",
          },
          {
            lang: "人员管理",
            id: 883,
            menuId: "48",
            children: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
          },
          {
            lang: "应用配置",
            id: 882,
            menuId: "51",
            children: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
            childrens: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "劳务实名制系统授权页",
            id: 881,
            menuId: "47",
            path: "/contractorback/laborRealNameAuthor",
          },
          {
            lang: "人员管理",
            id: 883,
            menuId: "48",
            children: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8830,
                menuId: "49",
                path: "/contractorback/laborRoleManage",
              },
              {
                lang: "用户管理",
                id: 8831,
                menuId: "50",
                path: "/contractorback/laborUserManage",
              },
            ],
          },
          {
            lang: "应用配置",
            id: 882,
            menuId: "51",
            children: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
            childrens: [
              {
                lang: "施工作业人员配置",
                id: 8820,
                menuId: "52",
                path: "/contractorback/constructionPersonnelConfig",
              },
              {
                lang: "施工管理人员配置",
                id: 8821,
                menuId: "53",
                path: "/contractorback/constructionManagerConfig",
              },
              {
                lang: "体检记录配置",
                id: 8822,
                menuId: "54",
                path: "/contractorback/physicalExamRecord",
              },
              {
                lang: "数据预警配置",
                id: 8823,
                menuId: "55",
                path: "/contractorback/dataWarning",
              },
            ],
          },
        ],
      },
      {
        lang: "移动协作巡检",
        permissions: [],
        id: 890,
        menuId: "56",
        children: [
          {
            lang: "移动协作巡检授权页",
            id: 891,
            menuId: "57",
            path: "/contractorback/movePollingAuthor",
          },
          {
            lang: "人员信息管理",
            id: 893,
            menuId: "58",
            children: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
          },
          {
            lang: "综合管控配置",
            id: 892,
            menuId: "61",
            children: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
            childrens: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "移动协作巡检授权页",
            id: 891,
            menuId: "57",
            path: "/contractorback/movePollingAuthor",
          },
          {
            lang: "人员信息管理",
            id: 893,
            menuId: "58",
            children: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8930,
                menuId: "59",
                path: "/contractorback/movePollingRoleManage",
              },
              {
                lang: "用户管理",
                id: 8931,
                menuId: "60",
                path: "/contractorback/movePollingUserManage",
              },
            ],
          },
          {
            lang: "综合管控配置",
            id: 892,
            menuId: "61",
            children: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
            childrens: [
              {
                lang: "人像数据库",
                id: 8922,
                menuId: "62",
                path: "/contractorback/dateBaseNameList",
              },
            ],
          },
        ],
      },
      {
        lang: "混凝土八控",
        permissions: [],
        id: 830,
        menuId: "63",
        children: [
          {
            lang: "混凝土八控授权页",
            id: 831,
            menuId: "64",
            path: "/contractorback/concreteControlAuthor",
          },
          {
            lang: "人员信息管理",
            id: 832,
            menuId: "65",
            children: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
          },
          {
            lang: "流程管理",
            id: 833,
            menuId: "68",
            children: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
            childrens: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "混凝土八控授权页",
            id: 831,
            menuId: "64",
            path: "/contractorback/concreteControlAuthor",
          },
          {
            lang: "人员信息管理",
            id: 832,
            menuId: "65",
            children: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8320,
                menuId: "66",
                path: "/contractorback/concreteRoleManage",
              },
              {
                lang: "用户管理",
                id: 8321,
                menuId: "67",
                path: "/contractorback/concreteUserManage",
              },
            ],
          },
          {
            lang: "流程管理",
            id: 833,
            menuId: "68",
            children: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
            childrens: [
              {
                lang: "流程单管理",
                id: 8330,
                menuId: "69",
                path: "/contractorback/processManager",
              },
              {
                lang: "表单管理",
                id: 8331,
                menuId: "70",
                path: "/contractorback/processFormManager",
              },
            ],
          },
        ],
      },
      {
        lang: "质量安全管理",
        permissions: [],
        id: 840,
        menuId: "71",
        children: [
          {
            lang: "质量安全管理授权页",
            id: 841,
            menuId: "72",
            path: "/contractorback/qualitySafetyAuthor",
          },
          {
            lang: "人员信息管理",
            id: 842,
            menuId: "73",
            children: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
          },
          {
            lang: "资源管理",
            id: 843,
            menuId: "76",
            children: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
            childrens: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
          },
        ],
        childrens: [
          {
            lang: "质量安全管理授权页",
            id: 841,
            menuId: "72",
            path: "/contractorback/qualitySafetyAuthor",
          },
          {
            lang: "人员信息管理",
            id: 842,
            menuId: "73",
            children: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
            childrens: [
              {
                lang: "角色管理",
                id: 8420,
                menuId: "74",
                path: "/contractorback/qualitySafetyRoleManage",
              },
              {
                lang: "用户管理",
                id: 8421,
                menuId: "75",
                path: "/contractorback/qualitySafetyUserManage",
              },
            ],
          },
          {
            lang: "资源管理",
            id: 843,
            menuId: "76",
            children: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
            childrens: [
              {
                lang: "质量分部分项",
                id: 8430,
                menuId: "77",
                path: "/contractorback/qualitySubitem",
              },
              {
                lang: "安全分项",
                id: 8431,
                menuId: "78",
                path: "/contractorback/safetySubitem",
              },
              {
                lang: "区域位置",
                id: 8432,
                menuId: "79",
                path: "/contractorback/areaLocation",
              },
              {
                lang: "轮播图管理",
                id: 8433,
                menuId: "80",
                path: "/contractorback/pictureManage",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    lang: "系统管理",
    permissions: [],
    id: 900,
    menuId: "81",
    children: [
      {
        lang: "项目设置",
        permissions: [],
        id: 910,
        menuId: "82",
        path: "/contractorback/project-setting",
      },
      {
        lang: "字典管理",
        permissions: [],
        id: 920,
        menuId: "83",
        path: "/contractorback/dictionary-management",
      },
      {
        lang: "参数设置",
        permissions: [],
        id: 950,
        menuId: "84",
        path: "/contractorback/locationParagramSetting",
      },
    ],
    childrens: [
      {
        lang: "项目设置",
        permissions: [],
        id: 910,
        menuId: "82",
        path: "/contractorback/project-setting",
      },
      {
        lang: "字典管理",
        permissions: [],
        id: 920,
        menuId: "83",
        path: "/contractorback/dictionary-management",
      },
      {
        lang: "参数设置",
        permissions: [],
        id: 950,
        menuId: "84",
        path: "/contractorback/locationParagramSetting",
      },
    ],
  },
];

export default menuArray;
