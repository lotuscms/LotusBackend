/**
 * This is a utility script that creates barrel exports for the mongo and mysql model files
 *
 * A barrel is a way to rollup exports from several modules into a single convenient module.
 * The barrel itself is a module file that re-exports selected exports of other modules.
 */
const fs = require('fs');

const baseDir = `${process.cwd()}/src/model-resolvers/`;

const barrelFileMap = {
    mysqlmodel: 'mysqlModels',
    mysqlops: 'mysqlOps'
};

const barrels = {
    mysqlmodel: [],
    mysqlops: []
};

const stripExtension = f => f.replace('.ts', '');
const removeFiles = f => !f.includes('spec') && !f.includes('inputs') && !f.includes('resolver');

['mysql'].forEach(type => {
    fs.readdirSync(`${baseDir}/${type}`).forEach(dir => {
        fs.readdirSync(`${baseDir}/${type}/${dir}`)
            .map(stripExtension)
            .filter(removeFiles)
            .forEach(name => {
                barrels[type + name].push(`export * from './model-resolvers/${type}/${dir}/${name}';`);
            });
    });
});

Object.keys(barrels).forEach(barrel =>
    fs.writeFileSync(`${process.cwd()}/src/${barrelFileMap[barrel]}.ts`, barrels[barrel].join('\n'), 'utf8')
);
