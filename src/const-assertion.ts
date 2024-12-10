const config = {
    server: "http://api.somedomain.com",
    port: 8080,
    version: 2,
} as const;

config.server = "https:";

// 주문 시스템의 상태 정보
export const statusCodeMap = {
    101: "ordered",
    102: "pending",
    103: "complete",
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
    const message = statusCodeMap[statusCode];

    // ui 업데이트 또는 로직처리
}
