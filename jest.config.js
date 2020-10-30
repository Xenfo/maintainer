module.exports = {
    roots: ['<rootDir>/src/', '<rootDir>/src/test/'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
