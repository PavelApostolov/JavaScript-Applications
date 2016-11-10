import { Handlebars } from '../node_modules/handlebars/dist/handlebars.js';

const templateLoader = (() => {
    const templatesCache = {};

    function get(templateName) {
        return new Promise((resolve, reject) => {
            if (templatesCache[templateName]) {
                resolve(Handlebars.compile(templatesCache[templateName]));
            }

            $.get(`./templates/${templateName}.handlebars`, template => {
                templatesCache[templateName] = template;
                resolve(Handlebars.compile(template));
            })
        })
    }

    return { get };
})();

export { templateLoader };

// const templateLoader = (() => {
//     function get(templateName) {
//         return new Promise((resolve, reject) => {
//             $.get(`./scripts/templates/${templateName}.handlebars`)
//             .done((data) => {
//                 let template = Handlebars.compile(data);
//                 resolve(template);
//             })
//             .fail(reject);
//             })
//     }

//     return { get };
// })();

// export { templateLoader };