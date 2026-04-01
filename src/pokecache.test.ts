import { Cache } from "./pokecache.js";
import { test, expect } from "vitest";

test.concurrent.each([
  {
    key: "https://pokeapi.co/api/v2/location-area/",
    val: {
      name: 'canalave-city-area',
      url: 'https://pokeapi.co/api/v2/location-area/1/'
    },
    interval: 500,
  },
  {
    key: "https://pokeapi.co/api/v2/location-area/",
    val: {
      name: 'eterna-city-area',
      url: 'https://pokeapi.co/api/v2/location-area/2/'
    },
    interval: 500,
  },
  {
    key: "https://pokeapi.co/api/v2/location-area/",
    val: {
      name: 'mt-coronet-6f',
      url: 'https://pokeapi.co/api/v2/location-area/19/'
    },
    interval: 500,
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000,
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toEqual(val);

  await new Promise((resolve) => setTimeout(resolve, interval * 2));
  const reaped = cache.get(key);
  expect(reaped).toEqual(undefined);

  cache.stopReapLoop();
});