import type { APIRoute } from 'astro';
import { rawPaths, rawFile } from '../../lib/raw';

export const getStaticPaths = () => rawPaths('brands');
export const GET: APIRoute = ({ params }) => rawFile(`brands/${params.file}`);
