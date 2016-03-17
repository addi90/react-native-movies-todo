export default {

    home: {
        initialRoute: true,

        title: 'Tasks list',
        component: require('./views/TaskList.js').default,

        // children: {
        //     example: {
        //         // title: 'Child Example', // optional
        //         component: require('./scenes/NestedExample').default
        //     }
        // }
    },

    archive: {
        title: 'Archive',
        component: require('./views/ArchiveTasks.js').default
    },

    themes: {
        title: 'Choose Themes',
        component: require('./views/Themes.js').default
    },
}
