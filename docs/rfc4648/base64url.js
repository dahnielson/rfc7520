/**
 * rfc4648.js
 * https://github.com/swansontec/rfc4648.js
 *
 * @version 1.1.0
 * @author William Swanson <swansontec@gmail.com>
 * @copyright William Swanson 2018
 * @license MIT
 */

import * as codec from './codec.js'

const encoding = {
  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bits: 6
}

/**
 * Takes a string and returns a Uint8Array of bytes.
 *
 * @export
 * @param {String} string A base64url string
 * @param {Object} opts options
 * @returns {Uint8Array} Binary data
 */
export function parse (string, opts) {
  return codec.parse(string, encoding, opts)
}

/**
 * Takes an array-like object of bytes and returns a string.
 *
 * @export
 * @param {*} data Binary data
 * @returns {String} A base64url string
 */
export function stringify (data) {
  return codec.stringify(data, encoding)
}
