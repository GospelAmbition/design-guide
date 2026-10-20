import type { APIRoute } from 'astro';
import { rawFile } from '../lib/raw';

export const GET: APIRoute = () => rawFile('llms.txt');
