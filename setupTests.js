import '@testing-library/jest-dom';
import { TextDecoder, TextEncoder } from 'node:util';

globalThis.TextEncoder = TextEncoder;
globalThis.TextDecoder = TextDecoder;
