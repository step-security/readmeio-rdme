import createGHA from '../createGHA/index.js';
const hook = async function createGHAHook(options) {
    const msg = options.result;
    const command = options.command;
    const parsedOpts = options.parsedOpts;
    return createGHA.call(this, msg, command, parsedOpts);
};
export default hook;
