module.exports = {
    title: 'Guía de Referencia - Starfood',
    description: 'Documentación de proyectos de Codevsys en Starfood',
    themeConfig: {
        logo: '/img/Logo Codevsys Sii.jpg',
        //displayAllHeaders: true, // Default: false
        nav: [
            { text: 'Inicio', link: '/' },
            { text: 'Guía', link: '/guide/' },
            { text: 'Codevsys', link: 'https://www.codevsys.cl' },
            { text: 'Starfood', link: 'https://starfood.cl' }
        ],
       
        sidebar: {
            '/guide/':
             [
                '', /* /config/ */
             ],
            '/validatenv/': [
                {
                text: 'Validación NV',
                children: ['/validatenv/readme.md', '/validatenv/listaprecio.md']
                // '',      /* /bar/ */
                // 'lprecio.md',
                }
              ],
            '/cnet2Flexline/': [
              '',     /* /foo/ */
              'config.md',  /* /foo/one.html */
              'proceso.md'   /* /foo/two.html */
            ],      
            '/objsql/': [
                '',      /* /bar/ */
              ],
      
          }
    },
    plugins: [
        'vuepress-plugin-mermaidjs',
        '@vuepress/last-updated',
        '@vuepress/search', {
            searchMaxSuggestions: 10
        }
    ]
}