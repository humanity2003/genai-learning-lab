import { getEncoding } from "js-tiktoken";

// Two popular openAI encodings. 
const encoders = {
    cl100k_base: getEncoding("cl100k_base"),
    o200k_base: getEncoding("o200k_base")
}

const samples = [
    { label: "English", text: "Hello world!"},
    { label: "Spanish", text: "¡Hola mundo!"},
    { label: "Hindi", text: "नमस्ते दुनिया!"},
    { label: "Emojis", text: "😀🎉❤"},
    { label: "Numbers", text: "1234567890"},
    { label: "Special Characters", text: "!@#$%^&*()_+-=[]{}|;':,.<>/?`~"}
]

// How many tokens each sample takes in each encoding
console.log("=== Token counts ===");
console.table(
    samples.map(({ label, text }) => ({
            label,
            chars: [...text].length,
            cl100k_base: encoders.cl100k_base.encode(text).length,
            o200k_base: encoders.o200k_base.encode(text).length
        })
    )
)

// Peek inside one sample to see the actual token pieces
function showTokens(text, encodingName = "cl100k_base") {
    const enc = encoders[encodingName];
    const tokens = enc.encode(text);
    const pieces = tokens.map(token => enc.decode([token]));
    console.log(`\n=== "${text}" (${encodingName}) ===`);
    console.log("IDs: ", tokens);
    console.log("Pieces: ", pieces);
    // Decode all tokens back into a single strings
    console.log("Decoded: ", enc.decode(tokens));
}

// Show tokens for each sample in the default encoding
samples.forEach(({ text }) => showTokens(text));

//Rough cost estimates
const pricePerMillionTokens = 3; // in uSD, placeholder value

function estimateCost(tokenCount) {
    return (tokenCount / 1_000_000) * pricePerMillionTokens;
}

samples.forEach(({ label, text }) => {
    const tokenCount = encoders.cl100k_base.encode(text).length;
    console.log(`Estimated cost for "${label}": $${estimateCost(tokenCount).toFixed(6)}`);
});

