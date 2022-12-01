import "@testing-library/jest-dom";

import { server } from "./mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
