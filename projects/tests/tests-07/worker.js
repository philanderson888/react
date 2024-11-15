const fs = require('fs');
const {expect} = require('expect');

exports.runTest = async (testFile, options) => {
    console.log(`running test: ${testFile}`);
    const content = fs.readFileSync(testFile, 'utf8');
    console.log(`content: ${content}`);
    try {
        eval(content);
    } catch (error) {
        console.error(`error: ${error}`);
        return {
            testFile,
            content,
            success: false,
            errorMessage: error.message
        };
    }
    return {
        testFile,
        content,
        success: true,
        errorMessage: null
    };
};
