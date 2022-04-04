/**
 * @class
 * @description Error controller handler.
 *
 * @typedef {object} ErrorServer
 * @property {number} code Error code.
 * @property {string} description Error message description.
 * @property {string} message Trace error. */
export default class ErrorController extends Error {
    /**
     * @private
     * @description dictionary of errors
     * @typedef {object} errors */
    #errors = {
        CLIENT: {
            code: 500,
            description: 'Internal Application Error',
        },
    }
    constructor(type = 'CLIENT', message = 'without trace') {
        super(message)
        this.code = this.#errors[type].code
        this.description = this.#errors[type].description
    }
}
