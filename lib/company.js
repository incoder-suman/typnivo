// Webincoder is the company behind Typnivo. Every link to the company site
// goes through webincoderLink() so visits from Typnivo show up in
// Webincoder's analytics (Google Analytics > Acquisition > Campaigns).
export const WEBINCODER_URL = "https://www.webincoder.com/";

export const webincoderServices = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Fast, modern websites and web apps built to grow your business.",
  },
  {
    id: "seo",
    title: "SEO",
    description: "Rank higher on Google and turn search traffic into customers.",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Content, campaigns and growth for Instagram, Facebook and more.",
  },
  {
    id: "app-development",
    title: "App Development",
    description: "Android and iOS apps designed around your users.",
  },
  {
    id: "crm-development",
    title: "CRM Development",
    description: "Custom CRM systems to manage leads, customers and sales.",
  },
];

// `placement` says where on Typnivo the click came from, e.g. "about-hero".
export function webincoderLink(placement) {
  const params = new URLSearchParams({
    utm_source: "typnivo",
    utm_medium: "referral",
    utm_campaign: "typnivo_product",
    utm_content: placement,
  });
  return `${WEBINCODER_URL}?${params}`;
}

// Outbound links keep the referrer (no "noreferrer") so Webincoder's
// analytics can see the visit came from typnivo.com.
export const outboundRel = "noopener";
