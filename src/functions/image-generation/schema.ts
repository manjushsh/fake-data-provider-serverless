export default {
  type: "object",
  properties: {
    text: { type: "string" },
    width: { type: "number" },
    height: { type: "number" },
    fontSize: { type: "string" },
    backgroundColor: { type: "string" },
    textColor: { type: "string" },
  },
  required: ["text"],
} as const;
