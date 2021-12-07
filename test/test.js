import { assert } from "chai";
import { dateGreater } from "../dist/parsegraph-date";

describe("Package", function () {
  it("works", () => {
    assert.isFalse(dateGreater(new Date(2016, 0, 1), new Date(2017, 0, 1)));
    assert.isTrue(dateGreater(new Date(2018, 0, 1), new Date(2017, 0, 1)));
  });
});
