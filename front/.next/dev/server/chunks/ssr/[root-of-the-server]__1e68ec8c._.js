module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406422d7b464a5a2704e04e0173523407e6d4719e8":"sendEmail"},"",""] */ __turbopack_context__.s([
    "sendEmail",
    ()=>sendEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/resend/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function sendEmail(formdata) {
    const email = formdata.get('email');
    const message = formdata.get('message');
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Resend"](process.env.RESEND_API_KEY);
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: process.env.CONTACT_EMAIL,
        subject: 'TubeNote お問い合わせ',
        html: `
      <p>送信者</p>
      <p>${email}</p>
      <p>内容</p>
      <p>${String(message).replace(/\n/, '<br>')}</p>
  `
    });
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    sendEmail
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(sendEmail, "406422d7b464a5a2704e04e0173523407e6d4719e8", null);
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sendEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "406422d7b464a5a2704e04e0173523407e6d4719e8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sendEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEmail"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$utils$2f$sendEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/page/actions.js { ACTIONS_MODULE0 => "[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sendEmail$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sendEmail.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1e68ec8c._.js.map