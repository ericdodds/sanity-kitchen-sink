export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600f30be45d0272536637c5c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nnqc12sz',
                  apiId: 'f0cd05f8-8172-455d-86ca-865fce906343'
                },
                {
                  buildHookId: '600f30be8abb7a23721b5b2c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ktmgwoqm',
                  apiId: 'e2a0490d-9b8b-442c-8096-d255dc6b15ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ericdodds/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ktmgwoqm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
