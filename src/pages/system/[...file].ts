import type { APIRoute } from 'astro';
import { rawPaths, rawFile } from '../../lib/raw';

export const getStaticPaths = () => rawPaths('system');
export const GET: APIRoute = ({ params }) => rawFile(`system/${params.file}`);
