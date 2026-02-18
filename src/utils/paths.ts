const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = isProd ? '/Portofolio_Aditya-Bondan-Birawa' : '';

export const prefixPath = (path: string) => {
    if (path.startsWith('http') || path.startsWith('//')) return path;
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_PATH}${normalizedPath}`;
};
