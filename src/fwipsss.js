const fwipSources = [
    "hash",
    "URLSearchParams",
    "value",
    "document.URL",
]

const fwipSinks = [
    "eval",
    "innerHTML",
    "textContent",
    "appendChild",
    "document.write",
    "document.write"
]

const fwipSanitizers = [
    "escape",
]

exports.fwipSources = fwipSources;
exports.fwipSinks = fwipSinks;
exports.fwipSanitizers = fwipSanitizers;
