const initialState = {
    menuItems: [
        {
          title: 'HOME',
          url: '/',
        },
        {
          title: 'TUTORIAL',
          url: '/tutorial',
          submenu: [
            {
              title: 'web design',
              url: 'web-design',
            },
            {
              title: 'web development',
              url: 'web-dev',
              submenu: [
                {
                  title: 'Frontend',
                  url: 'frontend',
                },
                {
                  title: 'Backend',
                  submenu: [
                    {
                      title: 'NodeJS',
                      url: 'node',
                    },
                    {
                      title: 'PHP',
                      url: 'php',
                    },
                  ],
                },
              ],
            },
            {
              title: 'SEO',
              url: 'seo',
            },
          ],
        },
        {
          title: 'WALLPAPER',
          url: '/',
        },
        {
          title: 'TEAM WORK',
          url: '/',
          submenu: [
            {
              title: 'PROJECT 1',
              url: 'web-design',
            },
            {
              title: 'PROJECT 2',
              url: 'web-dev',
              submenu: [
                {
                  title: 'MODULE 2',
                  url: 'module2',
                },
                {
                  title: 'MODULE 3',
                  url: 'module3'
                },
                {
                  title: 'MODULE 4',
                  url: 'module4'
                },
                {
                  title: 'MODULE 5',
                  url: 'module5'
                },
              ],
            },
            {
              title: 'PROJECT 3',
              url: 'web-design',
            },
          ],
        },
        {
          title: 'FEEDBACK',
          url: '/',
        },
        {
          title: 'CONTACT US',
          url: '/',
        },
        {
          title: 'ABOUT US',
          url: '/',
        },
        {
          title: 'BLOG',
          url: '/',
        },
    ],
}

export default (state = initialState, action) => {
    console.log({state}, {action})
    console.log('action', action.payload);
    switch(action.type) {
        case 'GET_MENU_ITEMS':
            return {
                ...state,
                menuItems: action.payload.menuItems
            }
        default:
            return state;
    }
}