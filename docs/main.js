import * as base64url from './rfc4648/base64url.js'
import { assertEqual } from './assert.js'

// /////////////////////////////////
// RFC 4648

function testBase64url (examples) {
  const base64urlInput = examples.signing['sig']

  const uint8Array = base64url.parse(base64urlInput, { loose: true })
  const base64urlOutput = base64url.stringify(uint8Array)
  assertEqual(/[a-zA-Z0-9-_]+/g.exec(base64urlOutput)[0], base64urlInput, 'Base64 : Identity coding')
}

// /////////////////////////////////
// RFC 7520

// Private key example

const rsaPrivateKey =
{
  'kty': 'RSA',
  'kid': 'bilbo.baggins@hobbiton.example',
  'use': 'sig',
  'n': 'n4EPtAOCc9AlkeQHPzHStgAbgs7bTZLwUBZdR8_KuKPEHLd4rHVTeT-O-XV2jRojdNhxJWTDvNd7nqQ0VEiZQHz_AJmSCpMaJMRBSFKrKb2wqVwGU_NsYOYL-QtiWN2lbzcEe6XC0dApr5ydQLrHqkHHig3RBordaZ6Aj-oBHqFEHYpPe7Tpe-OfVfHd1E6cS6M1FZcD1NNLYD5lFHpPI9bTwJlsde3uhGqC0ZCuEHg8lhzwOHrtIQbS0FVbb9k3-tVTU4fg_3L_vniUFAKwuCLqKnS2BYwdq_mzSnbLY7h_qixoR7jig3__kRhuaxwUkRz5iaiQkqgc5gHdrNP5zw',
  'e': 'AQAB',
  'd': 'bWUC9B-EFRIo8kpGfh0ZuyGPvMNKvYWNtB_ikiH9k20eT-O1q_I78eiZkpXxXQ0UTEs2LsNRS-8uJbvQ-A1irkwMSMkK1J3XTGgdrhCku9gRldY7sNA_AKZGh-Q661_42rINLRCe8W-nZ34ui_qOfkLnK9QWDDqpaIsA-bMwWWSDFu2MUBYwkHTMEzLYGqOe04noqeq1hExBTHBOBdkMXiuFhUq1BU6l-DqEiWxqg82sXt2h-LMnT3046AOYJoRioz75tSUQfGCshWTBnP5uDjd18kKhyv07lhfSJdrPdM5Plyl21hsFf4L_mHCuoFau7gdsPfHPxxjVOcOpBrQzwQ',
  'p': '3Slxg_DwTXJcb6095RoXygQCAZ5RnAvZlno1yhHtnUex_fp7AZ_9nRaO7HX_-SFfGQeutao2TDjDAWU4Vupk8rw9JR0AzZ0N2fvuIAmr_WCsmGpeNqQnev1T7IyEsnh8UMt-n5CafhkikzhEsrmndH6LxOrvRJlsPp6Zv8bUq0k',
  'q': 'uKE2dh-cTf6ERF4k4e_jy78GfPYUIaUyoSSJuBzp3Cubk3OCqs6grT8bR_cu0Dm1MZwWmtdqDyI95HrUeq3MP15vMMON8lHTeZu2lmKvwqW7anV5UzhM1iZ7z4yMkuUwFWoBvyY898EXvRD-hdqRxHlSqAZ192zB3pVFJ0s7pFc',
  'dp': 'B8PVvXkvJrj2L-GYQ7v3y9r6Kw5g9SahXBwsWUzp19TVlgI-YV85q1NIb1rxQtD-IsXXR3-TanevuRPRt5OBOdiMGQp8pbt26gljYfKU_E9xn-RULHz0-ed9E9gXLKD4VGngpz-PfQ_q29pk5xWHoJp009Qf1HvChixRX59ehik',
  'dq': 'CLDmDGduhylc9o7r84rEUVn7pzQ6PF83Y-iBZx5NT-TpnOZKF1pErAMVeKzFEl41DlHHqqBLSM0W1sOFbwTxYWZDm6sI6og5iTbwQGIC3gnJKbi_7k_vJgGHwHxgPaX2PnvP-zyEkDERuf-ry4c_Z11Cq9AqC2yeL6kdKT1cYF8',
  'qi': '3PiqvXQN0zwMeE-sBvZgi289XP9XCQF3VWqPzMKnIgQp7_Tugo6-NZBKCQsMf3HaEGBjTVJs_jcK8-TRXvaKe-7ZMaQj8VfBdYkssbu0NKDDhjJ-GtiseaDVWt7dcH0cfwxgFUHpQh7FoCrjFJ6h6ZEpMF6xmujs4qMpPz8aaI4'
}

// Public key example
const rsaPublicKey =
{
  'kty': 'RSA',
  'kid': 'bilbo.baggins@hobbiton.example',
  'use': 'sig',
  'n': 'n4EPtAOCc9AlkeQHPzHStgAbgs7bTZLwUBZdR8_KuKPEHLd4rHVTeT-O-XV2jRojdNhxJWTDvNd7nqQ0VEiZQHz_AJmSCpMaJMRBSFKrKb2wqVwGU_NsYOYL-QtiWN2lbzcEe6XC0dApr5ydQLrHqkHHig3RBordaZ6Aj-oBHqFEHYpPe7Tpe-OfVfHd1E6cS6M1FZcD1NNLYD5lFHpPI9bTwJlsde3uhGqC0ZCuEHg8lhzwOHrtIQbS0FVbb9k3-tVTU4fg_3L_vniUFAKwuCLqKnS2BYwdq_mzSnbLY7h_qixoR7jig3__kRhuaxwUkRz5iaiQkqgc5gHdrNP5zw',
  'e': 'AQAB'
}

// /////////////////////////////////
// RFC 7515 Section 5.1.

async function testSigning (examples) {
  // BASE64URL(JWS Payload)
  const jwsPayload = base64url.stringify(new TextEncoder().encode(examples.input['payload']))
  assertEqual(/[a-zA-Z0-9-_]+/g.exec(jwsPayload)[0], examples.output.json['payload'], 'Signing : JWS Payload')

  // BASE64URL(UTF8(JWS Protected Header))
  const jwsProtectedHeader = base64url.stringify(new TextEncoder().encode((JSON.stringify(examples.signing['protected']))))
  assertEqual(jwsProtectedHeader, examples.signing['protected_b64u'], 'Signing : JWS Protected Header')

  // ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.' || BASE64URL(JWS Payload))
  const jwsSigningInput = [jwsProtectedHeader, jwsPayload].join('.')
  assertEqual(/[a-zA-Z0-9-_.]+/g.exec(jwsSigningInput)[0], examples.signing['sig-input'], 'Signing : JWS Signing Input')

  // BASE64URL(JWS Signature)
  const jwsSignature = await window.crypto.subtle
    .importKey('jwk', rsaPrivateKey, { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } }, false, ['sign'])
    .then(key => window.crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(examples.signing['sig-input'])))
    .then(signature => base64url.stringify(new Uint8Array(signature)))
    .catch(error => assert(error, undefined, `Signing : [${error}]`))
  assertEqual(/[a-zA-Z0-9-_]+/g.exec(jwsSignature)[0], examples.signing['sig'], 'Signing : JWS Signature')
}

// /////////////////////////////////
// RFC 7515 Section 5.2.

async function testVerifying (examples) {
  // BASE64URL(UTF8(JWS Protected Header)) || '.' || BASE64URL(JWS Payload) || '.' || BASE64URL(JWS Signature)
  const jwsObject = examples.output['compact']

  // ASCII(BASE64URL(UTF8(JWS Protected Header)) || '.' || BASE64URL(JWS Payload))
  const jwsSigningInput = jwsObject.split('.').slice(0, 2).join('.')
  assertEqual(jwsSigningInput, examples.signing['sig-input'], 'Verifying : JWS Signing Input')

  const jwsSignature = jwsObject.split('.')[2]
  assertEqual(jwsSignature, examples.signing['sig'], 'Verifying : JWS Signature')

  const isValid = await window.crypto.subtle
    .importKey('jwk', rsaPublicKey, { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } }, false, ['verify'])
    .then(key => window.crypto.subtle.verify('RSASSA-PKCS1-v1_5', key, base64url.parse(jwsSignature, { loose: true }), new TextEncoder().encode(jwsSigningInput)))
    .catch(error => assertEqual(error, undefined, `Verifying : [${error}]`))
  assertEqual(isValid, true, 'Verifying : JWS Validation')
}

// Run tests

fetch('./4_1.rsa_v15_signature.json').then(response => response.json(response)).then(examples => {
  testBase64url(examples)
  testSigning(examples)
  testVerifying(examples)
})
