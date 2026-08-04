import { describe, expect, it } from "vitest";
import { BulletproofVerticalSlice } from "./vertical-slice";
describe("Bulletproof first vertical slice", () => { it("requires verified identity before search", () => { const service = new BulletproofVerticalSlice(); const account = service.createAccount("member@example.com"); expect(() => service.requestSearch(account, "Beneficiary")).toThrow("Verified identity"); }); });
