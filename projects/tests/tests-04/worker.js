const fs = require('fs');

exports.runTest = async (testFile, options) => {
    console.log(`running test: ${testFile}`);
    const content = fs.readFileSync(testFile, 'utf8');
    console.log(`content: ${content}`);
    try {
        const expect = (actual) => {
            return {
                toBe: (expected) => {
                    if (actual !== expected) {
                        throw new Error(`expected ${expected} but got ${actual}`);
                    }
                }
            };
        }
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
