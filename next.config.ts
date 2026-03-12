import type { NextConfig } from "next";

const cspHeader = `
  default-src 'self';

  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.google.com
    https://www.gstatic.com
    https://www.google.com/recaptcha/
    https://www.gstatic.com/recaptcha/
    https://www.recaptcha.net;

  frame-src 'self'
    https://www.google.com
    https://www.google.com/recaptcha/
    https://recaptcha.google.com
    https://maps.google.com
    https://www.recaptcha.net;

  connect-src 'self'
    https://www.google.com
    https://www.gstatic.com
    https://maps.googleapis.com
    https://maps.gstatic.com
    https://www.google.com/recaptcha/
    https://www.recaptcha.net;

  img-src 'self' data: blob: https:;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data: https:;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
