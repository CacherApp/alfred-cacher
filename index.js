const alfy = require('alfy');

alfy.fetch('jsonplaceholder.typicode.com/posts').then(data => {
    const items = alfy
        .inputMatches(data, 'title')
        .map(x => ({
            title: x.title,
            subtitle: x.body,
            arg: x.id
        }));

    alfy.output(items);
});
