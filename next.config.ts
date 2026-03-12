import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval'
    https://www.google.com
    https://www.gstatic.com
    https://www.google.com/recaptcha/
    https://www.gstatic.com/recaptcha/;
  frame-src 'self'
    https://www.google.com
    https://recaptcha.google.com
    https://maps.google.com;
  connect-src 'self'
    https://www.google.com
    https://www.gstatic.com
    https://maps.googleapis.com;
  img-src 'self' data: blob: https:;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
