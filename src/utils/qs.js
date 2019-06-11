const enc = encodeURIComponent;

const qs = o =>
  `?${Object.keys(o)
    .map(key => {
      const val = o[key];

      if (!val) {
        return false;
      }

      return `${enc(key)}=${enc(val)}`;
    })
    .filter(Boolean)
    .join("&")}`;

export { qs };
