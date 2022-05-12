import justify from "../src/justify"
import { expect } from "chai"
import lines from "../src/list"

describe("Valid input", () => {
  it("string and length same length", () => {
    const result = justify(lines[0], lines[0].length)
    expect(result).to.not.equal("")
  })
  it("Is string not empty?", () => {
    const result = justify(lines[0], 25)
    expect(result).to.not.equal("")
  })
  it("Is sting empty?", () => {
    const result = justify("", 12)
    expect(result).to.equal("")
  })
  it("Is number 0?", () => {
    const result = justify(lines[1], 0)
    expect(result).to.equal("")
  })
  it("Is string too long?", () => {
    const result = justify(lines[2], 20)
    expect(result).to.contains("...")
  })
})
