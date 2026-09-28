# 01 – Tokenization

> Tokenization converts raw text into numeric tokens that a language model can read and process.

**Status:** ✅ Done  
**Last updated:** 2026-09-28

## What is it?

Tokenization is the process of converting raw text into smaller pieces called tokens, which a language model converts into numbers to read and process.

## Why it matters

Computers do not understand words or characters the way a human does. For computers, it is all binary numbers. To make them understand text or language, we have to convert the text into some format of numbers. We could, for example, assign numbers to characters like a-1, b-2, c-3, but then the sequences would get too long. Assigning a number to every whole word would also be too big to maintain. So we break words into pieces (on average about ¾ of a word per token in English) that are then converted to numbers.

## What I built

I used `js-tiktoken` to show how tokenization works. `js-tiktoken` is a JS port of OpenAI's tokenizer. `getEncoding(name)` loads a specific tokenizer scheme (a "codec" that maps text ↔ integer token IDs). I used two:

- `cl100k_base`: GPT-3.5 / GPT-4
- `o200k_base`: GPT-4o and newer models

The script does three things:

- **Token counts:** compares six samples (English, Hindi, code, emojis, numbers, a rare word) across the two encodings and prints the character and token counts in a table.
- **Token pieces:** takes a string, encodes it, and shows the IDs and the pieces, then decodes them back to check the original text is recovered.
- **Cost estimate:** turns a token count into a rough dollar figure. The price is a placeholder, so use your provider's real rate.

| File | Purpose |
|------|---------|
| `index.js` | Entry point |
| `package.json` | Dependencies and scripts |

## How to run

```bash
cd 01-tokenization
npm install
node index.js
```

**Requirements:** Node.js 20+. No API key needed.

## Example

```
=== Token counts ===
┌─────────┬─────────────┬───────┬───────────────┬──────────────┐
│ (index) │ label       │ chars │ cl100k_tokens │ o200k_tokens │
├─────────┼─────────────┼───────┼───────────────┼──────────────┤
│ 0       │ 'English'   │ 44    │ 10            │ 10           │
│ 1       │ 'Hindi'     │ 45    │ 49            │ 20           │
│ 2       │ 'Code'      │ 52    │ 22            │ 22           │
│ 3       │ 'Emojis'    │ 25    │ 14            │ 10           │
│ 4       │ 'Numbers'   │ 29    │ 16            │ 16           │
│ 5       │ 'Rare word' │ 34    │ 11            │ 10           │
└─────────┴─────────────┴───────┴───────────────┴──────────────┘

=== "Tokenization is fun!" (cl100k_base) ===
IDs:    [ 3404, 2065, 374, 2523, 0 ]
Pieces: [ 'Token', 'ization', ' is', ' fun', '!' ]
Round trip OK: true
```

## Key learnings

- Two popular encoding names: `cl100k_base` and `o200k_base`.
- **Hindi:** 45 characters cost 49 tokens on `cl100k_base` but only 20 on `o200k_base`. The newer tokenizer is much more efficient for non-English text, which affects cost and how much fits in the context window.
- **Rare words:** `Supercalifragilisticexpialidocious` is split into 11 pieces on `cl100k_base`, while `Tokenization` splits cleanly into `Token` + `ization`. Tokens are learned chunks, not words.
- **Broken characters:** the Hindi pieces print as `�`. A single token can be part of a multi-byte character, so decoding one token alone gives garbage. Decoding all of them together works, and the round trip check confirms it.

## What went wrong

- **Problem:** `decode` failed when I passed a single token as in `enc.decode(token)`
  **Cause:** `decode` expects an array of token IDs, not a single number.  
  **Fix:** wrap it in an array: `enc.decode([token])`.

## Open questions / next steps

- [ ] Why does `o200k_base` handle Hindi so much better? (A larger vocabulary?)
- [ ] How does BPE (byte pair encoding) actually build the vocabulary?
- [ ] How does Claude's tokenizer differ from these?
- [ ] How do tokens turn into vectors (embeddings)? This leads into the RAG topic.

## Resources

- [Token Visualizer](https://token-visualizer-tau.vercel.app/)
- [TensorFlow Embedding Projector](https://projector.tensorflow.org/)
- [js-tiktoken on npm](https://www.npmjs.com/package/js-tiktoken)