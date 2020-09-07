const DEFAULT_BASE_URL = 'https://overpass.osm.ch/api';

/**
 * Overpass API class
 *
 * @see https://overpass.osm.ch/
 * @see https://wiki.openstreetmap.org/wiki/Overpass_API
 */
export class OverpassApi {
  constructor(baseUrl = DEFAULT_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  getNodeByLatLng(lat, lng, radius, nodeType = 'restaurant') {
    const query = `
      [out:json];
      (
      node["amenity"="${nodeType}"](around:${radius},${lat},${lng});
      );
      out;
    `;

    const targetUrl = new URL(`${this.baseUrl}/interpreter`);
    targetUrl.searchParams.append('data', query);

    return fetch(targetUrl.href)
      .then(response => response.json())
      .then(jsonResponse => {
        const { elements } = jsonResponse;
        if (!elements) {
          return Promise.resolve([]);
        }

        return Promise.resolve(elements);
      });
  }
}
