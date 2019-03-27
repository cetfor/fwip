const fwipSources = [
    "hash",
    "URLSearchParams",
    "value",
]

const fwipSinks = [
    "eval",
    "innerHTML",
    "textContent",
    "value",
    "write",
]

const fwipSanitizers = [
    "escape",
]

exports.fwipSources = fwipSources;
exports.fwipSinks = fwipSinks;
exports.fwipSanitizers = fwipSanitizers;
