import { NextResponse } from "next/server";

const sendResponse = (status, message, data) => {
  return NextResponse.json({ message, data }, { status });
};

export const response = {
  success: (message, data) => sendResponse(200, message, data),
  created: (message, data) => sendResponse(201, message, data),
  badRequest: (message) => sendResponse(400, message, null),
  unauthorized: (message) => sendResponse(401, message, null),
  forbidden: (message) => sendResponse(403, message, null),
  notFound: (message) => sendResponse(404, message, null),
  conflict: (message) => sendResponse(409, message, null),
  serverError: (message) => sendResponse(500, message, null),
};
